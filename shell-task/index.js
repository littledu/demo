var shellTask = require('shell-task');

new shellTask('ls -a')
    .then('sleep 1000')
    .then(function(next){
        console.log('doing somethine...');
        next();
    })
    .then('npm install node-lwip')
    .run(function(err, next){
        console.log('done');
        next();
    });
