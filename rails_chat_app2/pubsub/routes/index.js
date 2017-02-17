var express = require('express');
var router = express.Router();

/* /chat/messages */
router.get('/chat/messages', function(req, res, next){
  var id = (new Date()).toUTCString();

  // req.socket.setTimeout(Infinity);
  // This makes more sense
  req.on('socket', function(socket){
    socket.setTimeout(Infinity);
    socket.on('timeout', function(){
      console.log('Timeout: Aborting.');
      req.abort();
    });
  });

  rabbit.then(function(conn){
    return conn.createChannel().then(function(ch){

      //  receive messages from all the queues that are available
      var queueName = 'new_message';
      var q = ch.assertExchange('chat', 'fanout', {durable: false});
      q = q.then(function(){
         return ch.assertQueue(queueName, {
          exclusive: true,
          autoDelete: true,
          durable: true,
          closeChannelOnUnsubscribe: true
        });
      });

      // bind the queue
      q = q.then(function(qok) {
        return ch.bindQueue(qok.queue, 'chat', '').then(function() {
          return qok.queue;
        });
      });

      // After the channel and the exchange were declared
      q = q.then(function(qok){

        console.log('Waiting to consume');
        return ch.consume(queueName, function(msg){
          console.log('New Message: ');
          console.log(msg.content.toString());

          // server sent evnt
          res.write('id: '+id+'\n');
          res.write('event: newMessage\n');
          res.write('data: '+msg.content.toString()+'\n\n\n\n');

        }, {noAck: false});
      });
    });
  });

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  // close the connection
  req.on('close', function(){
    // do something when user leaves
    console.log('User closed the browser.');
  });

  process.once('SIGINT', function() {
    console.log('Closing the connection');
    conn.close();
  });
});

module.exports = router;
