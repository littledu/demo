var Q = require('q');

// Q. when
// when 其实跟 then 差不多,接收一个 promise 实例返回的值,根据这个值来决定调用 resolve callback 还是 reject callback

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

Q.when(promiseModule(true), function(value){
    console.log(value);
}, function(error){
    console.log(error);
});
