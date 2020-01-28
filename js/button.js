var screen = "10010+100";

function operatorFunx() {
  if (screen.indexOf("+") != -1) {
    var numbers = screen.split("+");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    console.log(x);
    console.log(y);
    var sum = x + y;
    var ans = sum.toString(2);
  } else if (screen.indexOf("-") != -1) {
    var numbers = screen.split("-");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    console.log(x);
    console.log(y);
    var sub = x - y;
    var ans = sub.toString(2);
  } else if (screen.indexOf("*") != -1) {
    var numbers = screen.split("*");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    console.log(x);
    console.log(y);
    var mul = x * y;
    var ans = mul.toString(2);
  } else if (screen.indexOf("/") != -1) {
    var numbers = screen.split("/");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    console.log(x);
    console.log(y);
    var div = x / y;
    var ans = div.toString(2);
  }
  screen = ans;
  document.querySelector(".resultClass").innerHTML = screen;
}

function key(c) {
  //console.log(screen);

  screen += c;
  document.querySelector(".resultClass").innerHTML = screen;
}

function cl() {
  screen = "";
  document.querySelector("resultClass").innerHTML = screen;
}

operatorFunx();