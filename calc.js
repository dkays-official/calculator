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
      if (val == "Del") {
         str = str.slice(0, -1);
         display.value = str;
      }
      else if (val == "Clear") {
        str = "";
        display.value = str;
      }

      else if (val !== "=") {
        str += val;
        display.value = str;
      } else if (val === "=") {
        optcheck(str);
        const myArray = str.split(opt);
        let res;
        switch (opt) {
          case "+":
            res = parseFloat(myArray[0]) + parseFloat(myArray[1]);
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
function Del(string) {
  return string = string.sclice(0, -1);
}