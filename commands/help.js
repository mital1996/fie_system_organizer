function Helpfn() {
    console.log(' List of all commands', '\n',
    'node mainModule.js tree directoryPath','\n', 
    'node mainModule.js organize directoryPath','\sn', 
    'node mainModule.js help ');
}
module.exports = {
    helpKey : Helpfn
}