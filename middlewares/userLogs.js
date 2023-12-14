const fs = require('fs');
const path = require('path');


module.exports = function(req, res, next) {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    let msg = "El usuario ingresó en " + req.url + " a las " + hours + ":" + minutes + "\n";
    let pathLogs = path.join(__dirname, '../logs/userLogs.txt');
    

    fs.appendFileSync(pathLogs, msg);

    next();
}