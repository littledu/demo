var Q = require('q');

// Q.all
// 接收一个数组,数组的元素都为 Promise 实例
// 只有数组里所有 Promise 对象都为 resolve 状态, 才算成功,返回新的 Promise 实例

function promiseModule(i){
    return Q.Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(i);
            resolve();
        }, 1000);
    })
}

var arr = [];

for(var i = 0; i < 3; i++){
    arr.push(promiseModule(i));
};

Q.all(arr).then(function(){
    console.log('done');
});

