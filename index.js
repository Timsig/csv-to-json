const fs = require('fs');
const path = require('path');
const tojson = require('./csvtojson');

fs.readFile(path.join(__dirname, '/customer-data.csv'), { encoding: 'utf-8' }, function (error, data) {
    if (error) return console.error(error)
    fs.writeFile('customer-data.json', tojson(data), function(error){
        if(error) return console.log(error);
        console.log("File written");
    })
})