const fs = require('fs');
var path = require('path');
function Treefn(dirPath) {
    if(dirPath == undefined){
        treeHelper(process.cwd() , "");
        return;
    } else{
        var doesExits = fs.existsSync(dirPath);
        if(doesExits){
            treeHelper(dirPath , "");
        } else{
            console.log("Kindly Enter Right Path");
            return;
        }
    }
}

function treeHelper(dirPath , indent){
    var isFile = fs.lstatSync(dirPath).isFile();
    if(isFile == true){
        var filename = path.basename(dirPath);
        console.log(indent + "|----" + filename);
    } else{
        var dirname = path.basename(dirPath);
        console.log(indent + "----->" + dirname);
        var childrens = fs.readdirSync(dirPath);
        for(let i = 0; i < childrens.length; i++){
           var childpath = path.join(dirPath , childrens[i]);
           treeHelper(childpath , indent+"\t"); 
        }
    }
}
module.exports = {
    treeKey : Treefn
}