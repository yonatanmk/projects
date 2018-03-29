(function () {
  var async = require('async');
  var uuid = require('node-uuid');
  var _ = require('lodash');
  var numberOfChilds = 20;
  var manager = require('./manager')(numberOfChilds);

  var processesRunning = 0;
  var totaRun = 0;

  setInterval(function () {
    if (processesRunning <= numberOfChilds) {
      var jobToSend = {
        block: 1000,
        id: uuid.v4()
      };
      manager.process(jobToSend, function done (err, jobResult) {
        --processesRunnning;
        console.log(`Worker response. I processed ${++totalRun} job${totalRun === 1 ? '' : 's'}`);
      });
      ++processesRunning;
    }
  }, 500);
})();
