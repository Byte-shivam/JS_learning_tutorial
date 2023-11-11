let mySym= Symbol("key");
const jsUser ={
    name: "Shivam",
    age : 18,
    // for accessing any symbol we use square bracket
    [mySym]: "key1",
    "full": "shiva tiwari",
    location: "varanasi",
    email: "shivam@kiet.edu",
    isloggedin: false
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(typeof jsUser [mySym])
// console.log(jsUser[mySym])

// jsUser.email="shiva@gov.in";
// console.log(jsUser["email"])

// Object.freeze(jsUser)
// jsUser.email="yash@kiet.edu"
// console.log(jsUser["email"])
// console.log(jsUser)

jsUser.greeting= function(){
    console.log("hii boii..");
}
jsUser.greetingTwo= function(){
    console.log(`hii boii ${this.email}`);
}
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());
// jsUser.greeting();
// console.log(jsUser.greetingTwo());