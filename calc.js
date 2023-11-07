let display = document.querySelector("input");
let str = "";
let opt;
let num1;
let num2;
let index;

function optcheck(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "+") {
      index = i;
      opt = str[i];
    } else if (str[i] == "-") {
      index = i;
      opt = str[i];
    } else if (str[i] == "*") {
      index = i;
      opt = str[i];
    } else if (str[i] == "/") {
      index = i;
      opt = str[i];
    }
  }
}

function check() {
  let buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      let val = buttons[i].innerHTML;

      if (val == "Clear") {
        display.value = "";
      } else if (val !== "=") {
        str += val;
        display.value = str;
      } else if (val === "=") {
        optcheck(str);
        console.log(opt);
        const myArray = str.split(opt);
        let res;
        switch (opt) {
          case "+":
            res = myArray[0] + myArray[1];
            break;
          case "-":
            res = myArray[0] - myArray[1];
            break;
          case "*":
            res = myArray[0] * myArray[1];
            break;
          case "/":
            res = myArray[0] / myArray[1];
            break;
        }
        display.value = res;
      }
    });
  }
}
check();
