var fs = require('fs');
fs.readFile('./ipll.json', 'utf8',function(err,data)
{
 if(err)
 {
throw err;
}
  var obj = JSON.parse(data);
  var re=obj.filter(word => word.win_by_runs>100);
  re.forEach(function(elem){
  
  var current =null ;
  var count =0;
  for (var i = 0; i < re.length; i++){
  	 if (re[i] != current) {
            if (count > 0) {
                document.write(current + ' comes --> ' + count+ ' times<br>');
            }
  }
   current = re[i];
            count = 1;
        } 
        else {
            count++;
        }
    
    if (count > 0) {
        document.write(current + ' comes --> ' + count + ' times');
    }
    console.log(elem.winner);


}); 
});
