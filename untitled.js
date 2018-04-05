var fs = require('fs');
fs.readFile('./ipll.json', 'utf8',function(err,data)
{
 if(err)
 {
throw err;
}
  var obj = JSON.parse(data);
  var re=obj.filter(word => word.date);
  re.forEach(function(elem)
  	 
  
     console.log(elem.winner);


}); 
});
