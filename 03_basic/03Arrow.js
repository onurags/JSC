const user = {
    username: "kevin",
    jersey_number: 23,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`)
        // console.log(this)
    }
}
// user.welcomeMes Message();

// console.log(this)


// function chai(){
//     console.log(this)
// }
// chai()


//arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) => (num1 + num2) //implicit return

console.log(addTwo(4, 5));
