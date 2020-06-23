var fs = require('fs');
var path=require('path');
var logs = {

    logfile:function(details){  fs.readFile('./info.json',function(err,data){
        var logFilePath;
        logFilePath=path.join(JSON.parse(data.toString()).Drive,JSON.parse(data.toString()).FolderName);
        fs.mkdir(logFilePath, { recursive: true }, (err) => {
            if(err)
                console.log(err);
            else
            {
                var fileName=path.join(logFilePath,'\\LogFile.txt');
                fs.open(fileName,'a+',function(err,f){
                    if(err){
                        return console.log(err);
                    }
                    else{                                              
                        fs.writeFile(fileName, details, {flag: 'a+'}, (err) => {
                            if (err) {
                                console.log('Error while writing file : '+err);
                            }
                            console.log(details);
                        });
                        console.log('Student.txt File Opened');
                    }
                });
            }
        });
    })
}}
module.exports=logs;