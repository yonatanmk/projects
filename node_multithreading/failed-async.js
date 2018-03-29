
(function () {
    var async = require('async')
    async.parallel([
      function first(cb) {
        setTimeout(function () {
          console.log('Returning from the first function')
          cb();
        }, 1000);
      },
      function second(cb) {
        setTimeout(function () {
          console.log('Returning from the second function')
          cb();
        }, 1000);
      }
    ], function (err) {});

    iBlockTheThread(4000);

    function iBlockTheThread (timeToBlock) {
      var timeStart = (new Date()).getTime();
      setTimeout(function () {
        var timeCurrent = (new Date()).getTime();
        while ((timeCurrent - timeStart) < timeToBlock) {
          console.log('I am blocking: ' + (new Date()))
          timeCurrent = (new Date()).getTime();
        }
      }, 0);
    }
})();
