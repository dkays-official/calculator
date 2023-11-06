
let num2;
let opt = "";
let num1;
let str = "";
let buttons = document.querySelectorAll("button");
let display = document.querySelector("input");





function calc() {
   
    for (let i = 0; i < buttons.length; i++) {    
      buttons[i].addEventListener("click", function () {
        let val = buttons[i].innerHTML;
    
        if (buttons[i].innerHTML != "="){
            str += val;       
            display.value = str;
        }      
        else if (buttons[i].innerHTML == "="){      
            display.value = str;
            uStr(str);
            console.log(num1);
            console.log(num2);
            calculator();   
        } 
        
      });
    }
  }

  calc();

  function calculator(){
     if (opt == "+") {
        sum = sum(num1, num2);
        display.value = sum;
      } else if (opt == "-") {
        sub = sub(num1, num2);
        display.value = sub;
      } else if (opt == "*") {
        mul = mul(num1, num2);
        display.value = mul;
      } else if (opt == "/") {
        div = div(num1, num2);
        display.value = div;
      }
  }



function uStr(string) {
  let len = string.length;
  for (let i = 0; i < len; i++) {
    if (string[i] == "+" || "-" || "*" || "/") {
      opt = string[i];
      pos = i;
      num1 = Number(string.slice(0, pos));
     
      num2 = Number(string.slice(pos + 1, len));
      
    } else {
      continue;
    }
  }
}

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

// switch(opt){
//     case "+" : return str1 + str2;
//     break;
//     case "-" : return str1 - str2;
//     break;
//     case "*" : return str1 * str2;
//     break;
//     case "/" : return str1 / str2;
//     break;
// }


function slicer(str) {
  for (let j = 0; j < opt.length; j++) {
    if (str[str.length - 1] == "+" || "-" || "*" || "/" && str[str.length - 2] == "+" || "-" ||  "/" || "*") 
    {
      str.slice(0, -1);
      display.value = str;
    } else {
      continue;
    }
  }
  return str;
}



