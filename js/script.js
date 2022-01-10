//Buisness Logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if(number2===0 )
  {
    return "invalid division";
  }
  return number1 / number2;
}
function exponetial(number1, number2) {
  return number1 ** number2;
}


//User Interface
$(document).ready(function () {

 
  let sign = "";
  $("#Add").click(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result1 = add(number1, number2);
    $("#result").text(result1)
    sign = "+";
    $(".sign").text(number1+ " + " +number2);
  });

  $("#Subtract").click(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result2 = subtract(number1, number2)

    $("#result").text(result2)
    sign = "-";
    $(".sign").text(number1+ " - " +number2 );
  });

  $("#Multiply").click(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result3 = multiply(number1, number2)

    $("#result").text(result3)

    sign = "X";
    $(".sign").text(number1+ " x " +number2);
  });

  $("#Divide").click(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());

    const result4 = divide(number1, number2)
    $("#result").text(result4)
    sign = "/";
    $(".sign").text(number1+ " ÷ " +number2);
  });

  $("#Exponetial").click(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result5 = exponetial(number1, number2)

    $("#result").text(result5)
    sign = "^";
    $(".sign").text(number1+ " ^ " +number2);
  });




});