// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    // Named IFFE
    console.log(`DB CONNECTED`);
})();



(() => {
    console.log(`DB CONNECTED TWO`)
}) ();


( (name) => {
    console.log(`DB CONNECTED THREE BY ${name}`)
}) ("labra");