let a=Math.random()*100;
a= Number.parseInt(a)
let input;
let count=0;

while(input!=a){
  count++;
  
  input=prompt("Enter the Number: ");
  if(input==a){
  console.log("Congratulation !!..");
    console.log(`your have cleared it in ${count} chances`);
}
  else if(input>a && input<100){
    console.log("This is the greater than actual no : ");
  }
  else if(input<a && input>0){
        console.log("This is the lesser than actual no : ");
  }
  else{
    console.log("The given no does not belongs in the range of 1 to 100 : ");
  }
}