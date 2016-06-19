"use strict";

var fs = require('fs');
var path = require('path');

function isEmptyDir (dirPath) {
    let files = fs.readdirSync(dirPath);
    let emptyStaus = true;

    if (files.length) {

        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let filepath = path.resolve(path.join(dirPath, file));
            let stats = fs.statSync(filepath);

            if (stats.isDirectory() || (stats.isFile() && file !== '.DS_Store')) {
                emptyStaus = false;
                break;
            }
        }

        return emptyStaus;

    } else {
        return true;
    }
};

var result = isEmptyDir(path.join(__dirname, '../../q'));

console.log(result)
