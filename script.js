let x;
let  y;
let op;

function add(x,y){
    return x+y;

}
function substract(x,y){
    if(x*y>0)
        return x-y;
    else
        return x+y;
    
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}

function operate(x,y,op){
    switch(op){
        case "+":
            return add(x,y);
        case "-":
            return substract(x,y);
        case "*":
            return multiply(x,y);
        case "/":
            return divide(x,y);
    }
}