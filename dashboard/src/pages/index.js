// import * as pages from './*.js';
var fs = require('fs');

let pages;
function getPage(){
    console.log(__dirname);
    
    fs.readdir(__dirname, function(error, filelist){
        console.log(filelist);
    })
    
}


export default getPage;