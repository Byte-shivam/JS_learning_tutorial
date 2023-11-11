// date

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toJSON()) 
// console.log(typeof(myDate)) 

// let myNewDate= new Date(2023,10,6)
// let myNewDate= new Date("01-14-2023")
// console.log(myNewDate.toString())

let myTimeStamp= Date.now()

// console.log(myTimeStamp);
// console.log(myNewDate.getTime())
 
let newDate= new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday:"long",
    // timeZone:""
})
console.log(newDate.toString())
