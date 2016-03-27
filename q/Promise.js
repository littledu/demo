var Q = require('q');

// Q.Promise
// 用于新建一个 Promise 对象
// 比如,我们新写一个模块,想让这个模块支持 Promise,则可以用 Q.Promise 方法实现

function promiseModule(status) {
    return Q.Promise(function (resolve, reject) {
        if (status) {
            resolve('success');
        } else {
            reject(new Error('error'));
        }
    });
}

promiseModule(true).then(function (value) {
    console.log(value);
}).catch(function (err) {
    console.log(err);
});

promiseModule(false).then(function (value) {
    console.log(value);
}).catch(function (err) {
    console.log(err);
});

