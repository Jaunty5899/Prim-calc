var stack = [];
var index = 0;

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
  stack[index] = input.value * 1; //parseInt(input.value)
  input.value = "";
  console.log(stack[index]);
  index++;
}

function reset() {
  sum = 0;
  stack = [];
  index = 0;
  input.value = "";
}

function solve(event) {
  let id = event.target.id;
  var sum = stack[0];
  console.log({ stack, sum, index });

  const custom_reducer = id => {sa
    switch (id) {
      case "add-btn":
        return (acc, cur) => acc + cur;
      case "min-btn":
        return (acc, cur) => acc - cur;
      case "mul-btn":
        return (acc, cur) => acc * cur;
      case "div-btn":
        return (acc, cur) => acc / cur;
    }

    stack = [sum];
    index = 1;
    console.log(`stack = ${stack}`);
  };

  id == "reset" ? reset() : (sum = stack.reduce(custom_reducer(id)));
  // for (let i = 1; i < stack.length; i++) {
  //   if (id === "add-btn") {
  //     sum = sum + stack[i];
  //   } else if (id === "min-btn") {
  //     sum = sum - stack[i];
  //   } else if (id === "mul-btn") {
  //     sum = sum * stack[i];
  //   } else if (id === "div-btn") {
  //     sum = sum / stack[i];
  //   } else {
  //     sum = 0;
  //     stack = [];
  //     index = 0;
  //     input.value = "";
  //     screen.innerHTML = "";
  //     break;
  //   }
  // }
  stack = [sum];
  console.log({ stack, sum, index });
  id != "reset" ? (screen.innerHTML = sum) : (screen.innerHTML = 0); //change 1
}
