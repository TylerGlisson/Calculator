$(document).ready(function($) {
  //stores all current inputs for building numbers
  var inputs = [""];
  //current total number
  var lastTotal = [""];
  //new total
  var newTotal = "";
  var history = ""
  //numbers and operators for validation
  var validNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var validOperators1 = ["+", "-", "/", "*"];
  var validOperators2 = ["."];

  function getValue(input) {
    //validates for double "."
    if (
      validOperators2.includes(inputs[inputs.length - 1]) === true &&
      input === "."
      ) {
      console.log("Duplicate '.' ");
    }
    //validates first input is a number not symbol
    else if (
      inputs.length === 1 &&
      validOperators1.includes(input) === true
    ) {
      console.log("Can't begin with math operator");
    } 
    //rejects multiple math operators in a row but accepts multiple numbers
    else if (validOperators1.includes(inputs[inputs.length - 1]) === false) {
      inputs.push(input);
      lastTotal.push(input);
    } else if (validNumbers.includes(Number(input))) {
      inputs.push(input);
      lastTotal.push(input);
    }
    update();
  }

  function update() {
    history = inputs.join("");
    $("#history").html(history);
  }

  function getTotal() {
    newTotal = lastTotal.join("");
    $("#calcOut").html(eval(newTotal));
    lastTotal = [""];
    lastTotal.push(eval(newTotal));
    console.log(lastTotal);
    console.log("inputs", inputs);
  }

  $("button").on("click", function() {
    var btnVal = $(this).val();
    switch (btnVal) {
      case "acBtn":
        inputs = [""];
        lastTotal = [""];
        newTotal = "";
        $("#calcOut").html("0");
        update();
        break;
      case "ceBtn":
        inputs.pop();
        lastTotal.pop();
        update();
        break;
      case "total":
        getTotal();
        break;
      default:
        try {
          /*/do if last input was number
          if (inputs[inputs.length - 1].indexOf("+", "-", "/", "*") === -1) {
            getValue(btnVal);
          } 
          //do if last input was math operator
          else {
            getTotal();
          }
          */
          getValue(btnVal);
        } catch (e) {
          alert("This SHOULD NEVER HAPPEN! RECIEVED BUTTON VALUE:" + btn.val);
        }
        break;
    }
  });
});

/*
   var btnVal = $(this).val();
    //alert (btnVal);
    if(btnVal === "acBtn") {
      inputs = [""];
      $("#calcOut").html("0");
      update();
    }
    else if(btnVal ==="ceBtn") {
      inputs.pop();
      update();
    }
    else if(btnVal === "total") {
      getTotal();
    }
    else {
      if(inputs[inputs.length-1].indexOf("+", "-", "/", "*")=== -1){
          getValue(btnVal);
         }
      else {
          getValue(btnVal);
         }
    }    
*/