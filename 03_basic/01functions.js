function junction() {
    console.log("T");
    console.log("O");
    console.log("R");
    console.log("T");
    console.log("O");
    console.log("I");
    console.log("S");
    console.log("E");
}

// junction()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }        
// addTwoNumbers(5, 4);


function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    
    return num1 + num2;
    console.log("PrInTeD");
} 

const res = addTwoNumbers(4, 8)
// console.log("Result: ", res)

// ------------------------------------

function loginUserMessage(username){
    if (username === undefined) {
        console.log("Please enter username");
        return;
    }
    return `${username} Just logged in`
}
console.log(loginUserMessage());
