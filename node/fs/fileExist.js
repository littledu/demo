var fs = require('fs');
var path = require('path');

function fileExist(filePath) {
    try {
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
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

var result = fileExist(path.join(__dirname, '../../q/all.js'));

console.log(result)
