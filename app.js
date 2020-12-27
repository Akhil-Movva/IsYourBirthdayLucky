var date=document.querySelector("#date");
var number=document.querySelector("#number");
var btn=document.querySelector("#btn");



function clickHandler(){
   var dob=date.value;
   dob=Number(dob.slice(8,dob.length));
   var num=number.value;
   var rem,sum=0

  console.log(dob);
  console.log(num);  
while(dob>0)
 {
   rem=dob%10;
   sum=sum+rem;
   dob=Math.floor(dob/10);
 }

 if(sum%num==0)
   console.log("\nYour birthday is lucky!");
 else
   console.log("\nYour birthday is not lucky:(");
   
btn.removeEventListener("click",clickHandler);   
   
}


btn.addEventListener("click",clickHandler);

