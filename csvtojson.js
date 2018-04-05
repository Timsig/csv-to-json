const tojson = function(data) {
    const byLine = data.split(/\r\n?/);
    const inArrays = []
    for (let i = 0; i < byLine.length; i+= 1) {
        inArrays.push(byLine[i].split(','));
    }
    
    let dataArray = [];
    for (let i = 1; i < inArrays.length; i += 1) {
        let newObj = {};
        for (let j = 0; j < inArrays[0].length; j += 1){
            newObj[inArrays[0][j]] = inArrays[i][j];
        }
        dataArray.push(newObj);
    }
    return JSON.stringify(dataArray);
}


module.exports = tojson;