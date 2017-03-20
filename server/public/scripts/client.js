var xInput = "";
var yInput = "";
var firstNumber = true;
var thingsToSend = {};

$(document).ready(function(){
  console.log('js sourced');
  addEventListeners();


});

function addEventListeners(){


  $('.display').val("0");

  $('#xInput').on('focus', function(){
    console.log('x target');
  });//end xInput target

  $('#yInput').hide().on('focus', function(){
    console.log('y target');
  });//end yInput target

  $('#calcButtons').on('click', '.calcButton', function(){
    if (firstNumber&&(!(isNaN($(this).text())))){
    xInput += $(this).text();
    console.log(xInput);
    $('.display').val(xInput);
    } else if (isNaN($(this).text())){
      $('.display').val('0');
      switch($(this).text()){
        case "+":
          thingsToSend.type = "add";
          thingsToSend.x = xInput;
          firstNumber=false;
          console.log(thingsToSend);
          break;
        case "-":
          thingsToSend.type = "subtract";
          thingsToSend.x = xInput;
          firstNumber=false;
          console.log(thingsToSend);
          break;
        case "*":
          thingsToSend.type = "multiply";
          thingsToSend.x = xInput;
          firstNumber=false;
          console.log(thingsToSend);
          break;
        case "/":
          thingsToSend.type = "divide";
          thingsToSend.x = xInput;
          firstNumber=false;
          console.log(thingsToSend);
          break;
        case "=":
          thingsToSend.y = yInput;
          console.log(thingsToSend);
          submitData(thingsToSend);



      }
    } else {
    yInput += $(this).text();
    $('.display').val(yInput);

    console.log(yInput);

  }
  });

  // $('#addButton').on('click', function(){
  //   firstNumber = false;
  //   $('.display').val("0");
  //   console.log(xInput);
  // });

  // $('#addButton').on('click', function(){
  //   console.log('add button click');
  //   thingsToSend.x = Number($('#xInput').val());
  //   thingsToSend.y = Number($('#yInput').val());
  //   thingsToSend.type = 'add';
  //   console.log(thingsToSend);
  //   submitData(thingsToSend);
  // });//end addButton

  // $('#subtractButton').on('click', function(){
  //   console.log('subtract button click');
  //   thingsToSend.x = Number($('#xInput').val());
  //   thingsToSend.y = Number($('#yInput').val());
  //   thingsToSend.type = 'subtract';
  //   console.log(thingsToSend);
  //   submitData(thingsToSend);
  // });//end subtractButton
  //
  // $('#multiplyButton').on('click', function(){
  //    console.log('multiply button click');
  //    thingsToSend.x = Number($('#xInput').val());
  //    thingsToSend.y = Number($('#yInput').val());
  //    thingsToSend.type = 'multiply';
  //    console.log(thingsToSend);
  //    submitData(thingsToSend);
  // });//end multiplyButton
  //
  // $('#divideButton').on('click', function(){
  //   console.log('divide button click');
  //   thingsToSend.x = Number($('#xInput').val());
  //   thingsToSend.y = Number($('#yInput').val());
  //   thingsToSend.type = 'divide';
  //   console.log(thingsToSend);
  //   submitData(thingsToSend);
  // });//end divideButton

}

function submitData(object){

  $.ajax({
    type: 'GET',
    url: '/calc/' + object.x + '/' + object.y + '/' + object.type,
    success: function(response){
      console.log(response);
      // $('.dislay').val(response);
      appendOutput(response);
      // clearInputs();

    }


  });
}

// function clearInputs(){
//   $('#xInput').val('');
//   $('#yInput').val('');
// }


function appendOutput(response){
  console.log(response);
  $('#output').empty();
  $('.display').val(response);
  yInput = "";
  xInput = "";
  thingsToSend.func = "";
  firstNumber = true;
}
