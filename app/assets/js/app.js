$(document).ready(function(){

  console.log('hi there');

  var letters = new Letters("abcdefghijklmnopqrstuvwxyz");

  var updateUI = function(input, reset){
    var reset = reset || false;
    if(reset){
      // this will get called on any reset of the entire UI
      // handle the css here
      $('.sentence').html('');
      $('.instruction-start').show();
      $('#backHome').hide();
      $('#spaceDeleteBack').hide();
      $('#keywords').show();
      $('.letters-text').show();
      $('.space-delete-back-text').hide();
      $('.keywords-text').hide();
      // assign functionality here
    } else {
      // this will get called whenever a letterContainer gets pressed 
      $('#keywords').hide();
      $('#backHome').hide();
      $('#spaceDeleteBack').show();
      $('.letters-text').hide();
      $('.spaceDeleteBack').click(function(){
        toggleSpaceDeleteBack();
      });
    }
    if(input.length === 1){
      console.log('appening item')
      appendAndReset(input);
    } else {
      var letterContainers = document.getElementsByClassName('letterContainer');
      var containerLetters = letters.producesubSets(input);
      for(var i = 0; i < letterContainers.length; i++){
        if(i === 0){
          var htmlLetters = containerLetters.firstThird;
          letterContainers[i].innerHTML = htmlLetters.join(' - ').toUpperCase();
          letterContainers[i].onclick = function(){ updateUI(this.innerHTML.split(' - '), false)};
        } else if(i === 1){
          var htmlLetters = containerLetters.middleThird;
          letterContainers[i].innerHTML = htmlLetters.join(' - ').toUpperCase();
          letterContainers[i].onclick = function(){ updateUI(this.innerHTML.split(' - '), false)};
        } else {
          var htmlLetters = containerLetters.lastThird;
          letterContainers[i].innerHTML = htmlLetters.join(' - ').toUpperCase();
          letterContainers[i].onclick = function(){ updateUI(this.innerHTML.split(' - '), false)};
        }
      }
    }
  };


  function showKeywords(){
    console.log('showing keywords')
    $('.first').text('Pain');
    $('.second').text('Family');
    $('.third').text('Nurse');
    $('#backHome').toggle();
    $('#keywords').toggle();
    $('.keywords-text').toggle();
    $('.letters-text').toggle();
  }

  var deleteLastLetter = function(){
    var currentStr = $('.sentence').html();
    if(currentStr.length){  
      var strArray = currentStr.split('');
      strArray.pop();
      $('.sentence').html(strArray.join(''));
    }
    toggleSpaceDelete();
  }

  // Assign Button Functionality Here - delete, reset, back, space
  $('#delete').click(function(){
    deleteLastLetter();
    updateUI(letters.initialLetters.split(''));
  });

  $('.reset').click(function(){
    updateUI(letters.initialLetters.split(''), true);
  });

  $('#space').click(function(){
    space();
  });

  $('#back').click(function(){
    console.log('do the back functionality');
  });

  $('#keywords').click(function(){
    showKeywords();
  });

  $('#backHome').click(function(){
    console.log('this will happen on backHome');
  });
  $('#spaceDeleteBack').click(function(){
    toggleSpaceDeleteBack();
  });
  
  // move to helpers.js
  var appendAndReset = function(input){
    $('.sentence').append(input);
    var newletters = letters.initialLetters.split('');
    updateUI(newletters);
  };

  // move to helpers.js
  var space = function(){
    $('.sentence').append(' '); 
    toggleSpaceDelete();
  };

  // move to helpers.js
  var addKeywordFunctionality = function(){
    var showingKeywords = false;
    $('.topBtn').on('click', function(){
      if(!showingKeywords){
        showingKeywords = true;
        showKeywords();
      } else {
        showingKeywords = false;
        updateUI(letters.initialLetters.split(''), true);
        $('.keywords-text').toggle();
        $('.letters-text').toggle();
      }
    });
  };

  function toggleSpaceDeleteBack(){
    // $('.first').toggle();
    // $('.second').toggle();
    // $('.third').toggle();
    console.log('sdb working');
    $('#spaceDeleteBack').hide();
    $('.letterContainer').hide();
    $('#backHome').show();
    
    // these are the operations to show
    $('#delete').show();
    $('#space').show();
    $('#back').show();
  }

  updateUI(letters.initialLetters.split(''), true);
});



































