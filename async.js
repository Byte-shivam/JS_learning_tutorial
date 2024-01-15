// setTimeout (function(){
//     console.log("shivam");
// },2000)


// const sayShivam = function(){
//     console.log("shivam");
// }
// setTimeout(sayShivam,2000)

// document.querySelector('h1').innerHTML="best js series"
const changeText= function(){
    document.querySelector('h1').innerHTML="best js series"
    console.log("hii")
}
const stops = setTimeout(changeText,2000)


document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(stops)
    console.log("STOP");
})