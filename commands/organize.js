function organizefn(dirPath) {
    var destPath;
    if(dirPath == undefined){
        destPath = process.cwd();
        return;
    } else{
        var doesExits = fs.existsSync(dirPath);
        if(doesExits){
            destPath = path.join(dirPath , "organized_files");
            if(fs.existsSync(destPath) == false){
                fs.mkdirSync(destPath);
            }
            
        } else{
            console.log("Kindly Enter Right Path");
            return;
        }
    }
   organizeHelper(dirPath , destPath);
}

function organizeHelper(src , dest)
{
    var childNames = fs.readdirSync(src);
    for(let i = 0; i < childNames.length; i++){
        var childAdress = path.join(src , childNames[i]);
        var isFile = fs.lstatSync(childAdress).isFile();
        if(isFile){
            var categary = getCategary(childNames[i]);
            //console.log(childNames[i], "belongs to" , categary);
            sendFiles(childAdress , dest , categary);
        }
    }
}

function sendFiles(srcfilePath , dest , categary){
     var categaryPath = path.join(dest , categary);
     if(fs.existsSync(categaryPath) == false){
         fs.mkdirSync(categaryPath);
     }
     var fileName = path.basename(srcfilePath);
     var desfilePath = path.join(categaryPath ,fileName);
     fs.copyFileSync(srcfilePath , desfilePath);
     fs.unlinkSync(srcfilePath);
     console.log(fileName , "Moved to ---> ", categary); 
}

function getCategary(name){
    var exe = path.extname(name);
    exe = exe.slice(1);
    for(var type in types){
        var typesArray = types[type];
        for(let i = 0; i < typesArray.length; i++){
            if(exe == typesArray[i]){
                return type;
            }
        } 
    }
    return "Ohther Types";
}

module.exports = {
    organizeKey : organizefn
}