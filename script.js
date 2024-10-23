let x =null;
let  y =null;
let op;
const nums =["0","1","2","3","4","5","6","7","8","9","."]
const operators =["+","-","x","/","=","%","+/-","AC"]

const buttons = document.querySelector(".buttons")
const topDisplay = document.querySelector("#top")
const botDisplay = document.querySelector("#bot")

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
    return (x/y);
}
function rest(x,y){
    return x%y;
}
function operate(x,y,op){
    x= Number(x);
    y=Number(y);
    switch(op){
        case "+":
            return add(x,y);
        case "-":
            return substract(x,y);
        case "x":
            return multiply(x,y);
        case "/":
            return divide(x,y);
        case "%":
            return rest(x,y);
    }
}
buttons.addEventListener("click",function(event){
    target = event.target
    if(target.className.includes("box")){
        value =  target.textContent
        if(nums.includes(value)){
            if(value=="."){
                if(x!=null && op==null){
                    x+="."
                    botDisplay.textContent=x;
                }
                else if(y!=null){
                    y+="."
                    botDisplay.textContent=y;
                }
            }
            else if(x==null){
                x=value
                botDisplay.textContent=x;
            }
            else if(x!=null && op==null){
                x+=value
                botDisplay.textContent=x;
            }
            else if(y==null){
                y=value
                botDisplay.textContent=y;
            }
            else{
                y+=value
                botDisplay.textContent=y;
            }
        }
        if(operators.includes(value)){
            if(value=="AC"){
                botDisplay.textContent="0";
                topDisplay.textContent=""
                x=null;
                y=null;
                op=null;
            }
            else if(value=="="){
                if(x!=null && y!=null && op!=null){
                    x = String(operate(x,y,op));
                    botDisplay.textContent=x;
                    topDisplay.textContent=""
                    y=null;
                    op=null;
                }

            }
            else{
                if(x!=null && y!=null && op!=null){
                    x = String(operate(x,y,op));
                    botDisplay.textContent=x;
                    topDisplay.textContent="";
                    y=null;
                    op=null;
                }
                else{
                    topDisplay.textContent=x;
                    botDisplay.textContent="";  
                }
                op=value
            }
        }
    }
})
