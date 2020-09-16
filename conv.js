function Conv(){
    let f = document.getElementById('fan').value;
    let btn = document.getElementById('btn');
    let result = (f * 1.8) + 32;
    document.getElementById('r').innerHTML='Le resultat est de ' + result + ' °F';
}