
function roundUp(x) {
    return Math.ceil(x);
}

function CalculateMagic(a, b) {
    // add your code here
    let number = (a + 2*b + 90) / 10;
    if (number % 5 === 0){
        number -= 8;
        
    }
    else
    {
        number += 9;
        
    }
    return roundUp((number ** 2 )/ 3); 
    
    
    // remember to call roundUp() with your result before returning
    // return roundUp(g);
}