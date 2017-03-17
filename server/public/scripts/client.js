$(document).ready(function(){
  console.log('js sourced');
  addEventListeners();


});

function addEventListeners(){
  var thingsToSend = {};

  $('#xInput').on('focus', function(){
    console.log('x target');
  });//end xInput target

  $('#yInput').on('focus', function(){
    console.log('y target');
  });//end yInput target

  $('#addButton').on('click', function(){
    console.log('add button click');
    thingsToSend.x = Number($('#xInput').val());
    thingsToSend.y = Number($('#yInput').val());
    thingsToSend.type = 'add';
    console.log(thingsToSend);
    submitData(thingsToSend);
  });//end addButton

  $('#subtractButton').on('click', function(){
    console.log('subtract button click');
    thingsToSend.x = Number($('#xInput').val());
    thingsToSend.y = Number($('#yInput').val());
    thingsToSend.type = 'subtract';
    console.log(thingsToSend);
    submitData(thingsToSend);
  });//end subtractButton

  $('#multiplyButton').on('click', function(){
     console.log('multiply button click');
     thingsToSend.x = Number($('#xInput').val());
     thingsToSend.y = Number($('#yInput').val());
     thingsToSend.type = 'multiply';
     console.log(thingsToSend);
     submitData(thingsToSend);
  });//end multiplyButton

  $('#divideButton').on('click', function(){
    console.log('divide button click');
    thingsToSend.x = Number($('#xInput').val());
    thingsToSend.y = Number($('#yInput').val());
    thingsToSend.type = 'divide';
    console.log(thingsToSend);
    submitData(thingsToSend);
  });//end divideButton

}

function submitData(object){

  $.ajax({
    type: 'GET',
    url: '/calc/' + object.x + '/' + object.y + '/' + object.type,
    success: function(response){
      appendOutput(response);
      clearInputs();

    }


  });
}

function clearInputs(){
  $('#xInput').val('');
  $('#yInput').val('');
}


function appendOutput(response){
  $('#output').empty();
  $('#output').append(response);
}
