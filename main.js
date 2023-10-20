
//var a=parseInt(prompt("enter the numbers"));
let num=(s)=>{
temp=s;
var b
var c=0;
while(s>0){
    b=s%10;
    s=parseInt(s/10);
    c=c*10+b;
}
    if (temp==c){
        document.write("the given number is a palindrom");
    }
    else{
        document.write("the given number is not a palindrom");
    }
}
(num(121));
