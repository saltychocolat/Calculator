var clickSound = new Audio("click.mp3")

let x =null;
let  y =null;
let op;
const nums =["0","1","2","3","4","5","6","7","8","9","."]
const operators =["+","-","x","/","=","%","+/-","AC","DEL"]

const buttons = document.querySelector(".buttons")
const topDisplay = document.querySelector("#top")
const botDisplay = document.querySelector("#bot")
const midDisplay = document.querySelector("#mid")

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

function inputValue(value){
    if(nums.includes(value)){
        clickSound.play()
        if(value=="."){
            if(x!=null && op==null){
                if(!(botDisplay.textContent.includes("."))){
                    x+="."
                    botDisplay.textContent=x;
                }
            }
            else if(y!=null){
                if(!(botDisplay.textContent.includes("."))){
                y+="."
                botDisplay.textContent=y;
                }
            }
        }
        else if(x==null){
            x=value
            botDisplay.textContent=x;
        }
        else if(x!=null && op==null){
            if(x!="0")
                x+=value
            else
                x=value
            botDisplay.textContent=x;
        }
        else if(y==null){
            y=value
            botDisplay.textContent=y;
        }
        else{
            if(y!="0")
                y+=value
            else
                y=value
            botDisplay.textContent=y;
        }
    }
    if(operators.includes(value)){
        clickSound.play()
        if(value=="AC"){
            botDisplay.textContent="";
            topDisplay.textContent=""
            x=null;
            y=null;
            op=null;
        }
        else if(value=="+/-"){
            if(x!=null && y==null){
                x=-x;
                botDisplay.textContent=x;
            }
            else{
                y=-y;
                botDisplay.textContent=y;
            }
        }
        else if(value=="DEL"){
            if(x!=null && y==null){
                x = x.slice(0,-1);
                botDisplay.textContent =x;
            }
            else if(x!=null && y!=null){
                y=y.slice(0,-1)
                topDisplay.textContent = y;
            }
        }
        else if(value=="="){
            if(x!=null && y!=null && op!=null){
                x = String(operate(x,y,op));
                botDisplay.textContent=x;
                topDisplay.textContent="";
                midDisplay.textContent="";
                y=null;
                op=null;
            }

        }
        else{
            if(x!=null && y!=null && op!=null){
                x = String(operate(x,y,op));
                botDisplay.textContent="";
                topDisplay.textContent=x;
                midDisplay.textContent=op;
                y=null;
                op=null;
            }
            else if(x!=null){
                topDisplay.textContent=x;
                botDisplay.textContent="";  
            }
            op=value;
            if(!(x==null && y==null))
                midDisplay.textContent=op;

        }
    }

}
buttons.addEventListener("click",function(event){
    target = event.target
    if(target.className.includes("box")){
        value =  target.textContent
        inputValue(value);
    }
})


document.addEventListener("keyup",function(event){
    key = event.key
    switch(key){
        case "Enter":
            inputValue("=")
            return
        case "Backspace":
            inputValue("DEL")
            return 
        default:
            inputValue(key)  
        
    }      
})