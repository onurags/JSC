let a = 300

if (true) {
let a = 10
const b = 20
// console.log("Inner: ", a)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one (){
    const username = "EonMorgan"

    function two (){
        const sport = "cricket"
        console.log(username);
    }
    // console.log(sport);

    two()
}

// one()

if(true) {
    const username = "AronFinch"
    if(username === "AronFinch") {
        const sport = " Golf"
        // console.log(username + sport)
    }
    // console.log(sport);
    
}
// console.log(username);


// -----------------Interesting--------------

console.log(addOne(5));
function addOne(num) {
    return num + 1;
}


// addTwo(5);   //Not work as it before initialization
const addTwo = function(num) {
    return num + 2;
}

