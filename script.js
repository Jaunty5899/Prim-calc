var stack = [];
var i = 0;

var input = document.getElementById("u-input"); //like this huh?
var screen = document.getElementById("print");
let butons = document.querySelectorAll(".button");

console.log(butons);

for (let i = 0; i < butons.length; i++) {
  butons[i].addEventListener("click", solve);
}

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    storage();
  }
});

function storage() {
  stack[i] = input.value * 1; //parseInt(input.value)
  input.value = "";
  console.log(stack[i]);
  i++;
}

function solve(event) {
  var sum = stack[0];
  let id = event.target.id;

  screen.innerHTML = "";
  console.log(stack);

  for (let i = 0; i < stack.length; i++) {
    if (id === "add-btn") {
      sum = sum + stack[i];
    } else if (id === "sub-btn") {
      sum = sum - stack[i];
    } else if (id === "mul-btn") {
      sum = sum * stack[i];
    } else if (id === "div-btn") {
      sum = sum / stack[i];
    } else {
      reset();
      break;
    }
  }
  screen.innerHTML = sum;
}

function reset() {
  sum = 0;
  stack = []; //this will do thats convenient
  i = 0;
  input.value = "";
  screen.innerHTML = ""; // store this in a var if we are gonna use it again
}
