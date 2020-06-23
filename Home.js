var http =  require('http');
var fs=require('fs');
var path=require('path');
var util=require('util');
var calc=require('./CalculateMarks');

var filePath;
//http.createServer(function(req,res){

fs.readFile('./info.json',function(err,data)
{
    filePath=path.join(JSON.parse(data.toString()).Drive,JSON.parse(data.toString()).FolderName);
    console.log("File Path is : "+filePath);
    
    fs.mkdir(filePath, { recursive: true }, (err) => {
      if(err)
        console.log(err);
      else
      {
        console.log("Folder Created.");
        var fileName=path.join(filePath,'\\Calculator.txt');

        fs.open(fileName,'a+',function(err,f){
            if(err){
                return console.log(err);
            }
            else{
                calc.add(200,100);                
                calc.sub(200,100);
                calc.multiply(200,100);
                calc.divide(200,100);
                console.log('Calculator.txt File Updated');               
            }
        });
      }
    });
});

// fs.readFile('D:\\node_demos\\files\\LogFile.txt', 'utf-8', (err, data) => {
//     if(err) {
//         throw err;
//     }
//     res.write('<html><head><title>Node Practice</title></head><body>'+data+'</body></html>');
//     res.end();    
// });

// }).listen(4000);