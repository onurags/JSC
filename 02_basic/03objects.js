//singleton

//object literals

const JsUser = {
    name: "Anurag",
    age : 18,
    location : "Lucknow",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.lastLoginDays)
// console.log(JsUser.name)
// console.log(JsUser["name"])

// JsUser.name = "Anurag Ganvir"

// console.log(JsUser["name"])
 
JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingOne = function(){
    console.log(`Hello JS Users ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingOne());