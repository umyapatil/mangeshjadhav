function cals(){
    console.log("lol");
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var num4 = document.getElementById('num4');
    var num3 = document.getElementById('num3');
    var num7 = document.getElementById('num7');

    var num6 = document.getElementById('num6').value;

    var num3value = document.getElementById('num3').value;
    var num5value = document.getElementById('num5').value;
    
    // var task = document.getElementById('task').value;
    // var res = document.getElementById('result')
let correctedBricks = 0;
let purity = 0;
num1 = parseFloat(num1);
num2 = parseFloat(num2);
if(num3value < 28){
    correctedBricks =  num1 - num2;
    num4.value = correctedBricks;
}else{
    correctedBricks = num1 + num2;
    num4.value = correctedBricks;
}

purity = (  num6 / correctedBricks) * 100;
console.log(num6 / correctedBricks);
num7.value = purity;

}