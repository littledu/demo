var fs = require('fs');
var path = require('path');

function dirExist(dirPath) {
    try {
        var stat = fs.statSync(dirPath);
        if (stat.isDirectory()) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            return false;
        } else {
            throw new Error(err);
        }
    }


}

var result = dirExist(path.join(__dirname, '../../q/'));

console.log(result)
