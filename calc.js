
let str = "";
function myFunction() {
  let buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      let val = buttons[i].innerHTML;
      if (buttons[i].innerHTML === "Clear") {
        document.querySelector("input").value = "";
      }
      else if (val !== "=") {
        str += val;
        document.querySelector("input").value = str;
      }
      else if (val === "=") {
        document.querySelector("input").value = eval(str);
      }
    });
  }
}
myFunction();