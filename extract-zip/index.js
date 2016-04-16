"use strict";

var extract = require('extract-zip');

extract('./project.zip', {dir: './'}, function (err) {
    if(err){
        throw new Error(err);
    }

    console.log('done');
});
