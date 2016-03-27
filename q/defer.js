var Q = require('q');

// Q.defer
// 跟 Q.Promise 功能类似,用于新建一个 Promise 实例

var deferred = Q.defer();

function promiseModule(status) {
    setTimeout(function(){
        if(status){
            deferred.resolve('success');
        }else{
            deferred.reject('error');
        }
    }, 2000);

    return deferred.promise;
}


promiseModule(true).then(function(value){
    console.log(value);
}).catch(function(err){
    console.log(err);
});
