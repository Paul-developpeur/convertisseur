// Variable
let btnC = document.getElementById('btnC').addEventListener('click', Celcius);
let cel = document.getElementById('celcius');
let a = document.getElementById('a');
let result;

function Celcius(){
    result = (cel.value + 5) + 32;
    a.innerHTML= result;
}
