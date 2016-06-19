var path = require('path');
var vfs = require('vinyl-fs');

var source = path.join(__dirname, './test/1.js');
var target = path.join(__dirname, './test/in');

// vfs.src('./test/1.js')
//     .pipe(vfs.dest('./test/in'))

vfs.src(source)
    .pipe(vfs.dest(target))
