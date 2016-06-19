var fs = require('fs');
var path = require('path');

fs.mkdir(path.join(__dirname, './test'), function(err){
    if(err) console.log(err);
})
