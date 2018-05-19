// console.log(process.argv)

// var exec = require('child_process').exec;

// exec('cat index.js', (err, stdout, stderr) => {
//   // cat is only on mac, type is on windows
//   console.log('we got our catted file', stdout);
// })

var spawn = require('child_process').spawn;

if (process.argv[2] === 'child') {
  console.log('Im inside the child')
} else {
  // var child = spawn(process.execPath, [__filename, 'child'])
  // child.stdout.on('data', function(data) {
  //   console.log('from child', data.toString())
  // })
  var child = spawn(process.execPath, [__filename, 'child'], {
    stdio: [null, null, null],
  })
  // child.stdout.pipe(process.stdout)
}
