var rl = require("readline");
var i = rl.createInterface(process.stdin, process.stdout, null);
i.question('', function(input) {
var str = input;
var str1 = str.split("where")[1];
if(str1!=undefined)
{
var arr = str1.split("and");
arr.forEach(function(elem) {
    console.log(elem);
});
}
 i.close();
 process.stdin.destroy();
});