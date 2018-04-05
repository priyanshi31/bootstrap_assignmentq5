var fs = require('fs');
fs.readFile('ipll.json', 'utf8',function(err,data){
if(err){
throw err;
}
  var obj = JSON.parse(data);
var re=obj.filter(word => word.date);

for(i=0;i<re.length;i++)
{
    var x=re[i].date;

    var result = x.replace ("-" ,"/");
     var ty = result.replace ("-" ,"/");

   console.log(ty);
}





});
