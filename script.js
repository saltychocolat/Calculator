let x =null;
let  y =null;
let op;
const nums =[0,1,2,3,4,5,6,7,8,9]
const operators =["+","-","x","/","="]

const buttons = document.querySelector(".buttons")

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

buttons.addEventListener("click",function(event){
    target = event.target
    if(target.className =="box"){
        value =  target.textContent
        if(nums.includes(Number(value))){
            value = Number(value)
            console.log(value)
            if(x==null)
                x=value;
            else
                y=value
        }
        if(operators.includes(value)){
            console.log(value)
            if(value=="="){
                if(x!=null && y!=null && op!=null){
                    x = operate(x,y,op)
                    y,op=null
                    console.log(x)
                }

            }
            else{
                if(x!=null && y!=null && op!=null){
                    x = operate(x,y,op)
                    console.log(x)
                    y,op=null
                }
                op=value
            }
        }
    }
})
