const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result')

    if(height === ' ' || height < 0 || isNAN(height)){
        result.innerHTML = `Please give valid height ${height}`;
    } else if(weight === ' ' || weight < 0 || isNAN(weight)){
        result.innerHTML = `Please give valid height ${weight}`;
    } else{
        const bmi =  (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
    }

})