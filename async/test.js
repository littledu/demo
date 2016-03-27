var async = require('async');

var t = require('./t');
var log = t.log;

async.series([
    function(cb) {
        setTimeout(function(){
            console.log('a');
            return cb(null, 1);
        }, 1000);

    },
    function(cb) {
        console.log('b');
        return cb(null, 2);
    },
    function(cb) {
        console.log('c');
        return cb(null, 3);
    }
], function(err, results) {
    log('1.1 err: ', err);
    log('1.1 results: ', results);
});