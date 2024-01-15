// setInterval(function(){
//     console.log("shivam",Date.now())
// },1000)

// const sayDate= function(){
//     console.log("shivam",Date.now())
// }
// setInterval(sayDate,1000)

// const sayDate= function(str){
//     console.log("shivam",Date.now())
// }
// setInterval(sayDate,1000,"hii")

const printing = function(){
    console.log("shivam")
}
// let stops = setInterval(printing,2000)
document.querySelector('#start').addEventListener('click',function(){
    setInterval(printing,2000)
})
 
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(stops);
    console.log("STOP");
})

