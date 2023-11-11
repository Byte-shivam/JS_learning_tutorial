 
//  singleton object
// const fb= new Object(); 
// console.log(fb)

// non singkleton object
const fb= {}
// console.log(fb)

// both are object
fb.id="shiv@123";
fb.name="Shivam";
fb.isloggedIn= false;
 
// console.log(fb)

// const insta={
//     email:"shiva@kiet.edu",
//     fullName:{
//         userName:{
//            firstName: "Shivam",
//            lastName: "Tiwari", 
//         }
//     }

// }
// console.log(insta.fullName)
// console.log(insta.fullName.userName)
// console.log(insta.fullName.userName.firstName)

const obj1={ 1:"a",2:"b"}
// it can be written as below!..
const obj2={
    3:"c",
    4:"v"
}

const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

// user[1]
console.log(fb);

// it returns as array for below code
console.log(Object.keys(fb));
console.log(Object.values(fb));
console.log(Object.entries(fb))

console.log(fb.hasOwnProperty('isloggedIn'));
// it returns a true value
console.log(fb.hasOwnProperty('islogged'))

// it returns a false value