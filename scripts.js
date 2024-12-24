const input = document.getElementById("inputbox");
const toC = document.getElementById("toC");
const toF = document.getElementById("toF");
const result = document.getElementById("output");
let degrees;





function Convert() {
    degrees = input.value;
    if(toC.checked){
        const celcius = ((degrees-32) * 5/9).toFixed(2);
        result.textContent = celcius + "C";
    }
    else if(toF.checked){
        const fahrenheit = ((degrees * 9/5) + 32).toFixed(2);
        result.textContent = fahrenheit + "F";
    }
    else{
        result.textContent = "please choose an option";
    }
}



