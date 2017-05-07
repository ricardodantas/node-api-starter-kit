import fs from 'fs'
import winston from 'winston'

if(!fs.existsSync("logs")){
    fs.mkdirSync("logs")
}

module.exports = new winston.Logger({
    transports:[
        new winston.transports.File({
            level:"info",
            filename:"logs/app.log",
            maxSize:1048578,
            maxFiles:10,
            colorize:false
        })
    ]
})