let display = document.querySelector("input");
let str = "";
let opt = document.querySelectorAll(".opt");

function calc() {
  let buttons = document.querySelectorAll("button"); 
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {      
     let val = buttons[i].innerHTML;         

      if (buttons[i].innerHTML === "Clear") {
        display.value = "";
        str = "";
      } else if (val !== "=") {       
        str += val;
        optCheck(str);
        display.value = str;
      } else if (val === "=") {
        optCheck(str);
        console.log(str);
        str = eval(str);
        display.value = str;
      }      
    });
  }
}
calc();

function slicer(str) {
  
    for (let j = 0; j < opt.length; j++) {
      if (str[str.length - 1] == "+" || "-" || "*" || "/" && str[str.length - 2] == "-" || str[str.length - 2] == "/" || str[str.length - 2] == "*") {
        str.slice(0,-1);
        display.value = str;
      } else {
        continue;
      }      
    }
    return str;
}

