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
    if (!username) {
        console.log("Please enter username");
        
    } else {
    return `${username} Just logged in`
    }
}
// console.log(loginUserMessage("josephroot"));


// -----------------------------------------

function calculateCartPrice(val1, val2, ...num1){
    return  num1;
}

// console.log(calculateCartPrice(200, 300, 400, 900));

// ----------------------------------
// Handle object in the function

const user = {
    username: "kevinpeterson",
    number: 56,
}

function handleObject(object){
    console.log(`Username is ${object.username} and it's number is ${object.number} \n`)
}

// handleObject(user);
// handleObject({
    username:"jackkallis",
    number: 555,
})

 //handle array

 const myArray = [200, 500, 633, 423, 530];

 function returnSecondnFifthValue(arr){
    return [arr[2], arr[4]];
 }

//  console.log(returnSecondnFifthValue(myArray));

// ---------------------------
