#!/usr/bin/env node

const { mainModule } = require('process');
const process = require('process');
const fs = require('fs');
var path = require('path');
var helpObj =require("./commands/help");
var treeObj = require("./commands/tree");
var organizeObj = require("./commands/organize");


var input = process.argv.slice(2);
var types = {
    media : ["mp4" , "mkv" , "jpg"],
    archives:["zip" , "rar","7z","tar","gz","ar","iso","xz"],
    documents:["docx","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","msi","tex"],
    app:["exe","pkg","dmg","deb"]
}

var command = input[0];
switch (command) {
    case "tree":
        treeObj.treeKey(input[1]);
         break;
    
    case "organize":
        organizeObj.organizeKey(input[1]);
        break;
    
     case "help":
        helpObj.helpKey();
        break;        

    default:
        console.log("Please 🙏 input right command")
        break;
}

