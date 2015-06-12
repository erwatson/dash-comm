$(document).ready(function(){

  console.log('hi there');

  var appStatus = {
    keywordsShowing: false,
    isTyping: false,
  }
  var letters = new Letters("abcdefghijklmnopqrstuvwxyz");

  var updateUI = function(input, reset){
    var reset = reset || false;
    console.log('typing status', appStatus.isTyping)
    if(reset){
      // reset the app settings;
      appStatus.keywordsShowing = false;
      appStatus.isTyping = false;
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
    } else if(appStatus.isTyping){
      // this will get called whenever a letterContainer gets pressed 
      $('#keywords').hide();
      $('#backHome').hide();
      $('#spaceDeleteBack').show();
      $('.letters-text').hide();
    } else {
      $('.instruction-start').show();
      $('#backHome').hide();
      $('#spaceDeleteBack').hide();
      $('#keywords').show();
      $('.letters-text').show();
      $('.space-delete-back-text').hide();
      $('.keywords-text').hide();  
    }
    if(input.length === 1){
      appendAndReset(input);
    } else {
      var letterContainers = document.getElementsByClassName('letterContainer');
      var containerLetters = letters.producesubSets(input);
      for(var i = 0; i < letterContainers.length; i++){
        if(i === 0){
          var htmlLetters = containerLetters.firstThird;
          letterContainers[i].innerHTML = htmlLetters.join(' - ').toUpperCase();
          letterContainers[i].onclick = function(){ 
            appStatus.isTyping = true;
            updateUI(this.innerHTML.split(' - '), false)
          };
        } else if(i === 1){
          var htmlLetters = containerLetters.middleThird;
          letterContainers[i].innerHTML = htmlLetters.join(' - ').toUpperCase();
          letterContainers[i].onclick = function(){ 
            appStatus.isTyping = true;
            updateUI(this.innerHTML.split(' - '), false)
          };
        } else {
          var htmlLetters = containerLetters.lastThird;
          letterContainers[i].innerHTML = htmlLetters.join(' - ').toUpperCase();
          letterContainers[i].onclick = function(){ 
            appStatus.isTyping = true;
            updateUI(this.innerHTML.split(' - '), false)
          };
        }
      }
    }
  };

  // Assign Button Functionality Here - delete, reset, back, space
  $('#delete').click(function(){
    deleteLastLetter();
    updateUI(letters.initialLetters.split(''));
  });

  $('.reset').click(function(){
    updateUI(letters.initialLetters.split(''), true);
  });

  $('#space').click(function(){
    addSpace();
  });

  $('#back').click(function(){
    console.log('do the back functionality');
  });

  $('#keywords').click(function(){
    showKeywords();
  });

  $('#backHome').click(function(){
    console.log('keywords showing - ', appStatus.keywordsShowing);
    showHome();
    updateUI(letters.initialLetters.split(''));
  });

  $('#spaceDeleteBack').click(function(){
    toggleSpaceDeleteBack();
  });
  

  //////////////////////////////////////////////////////
  //////// HELPER FUNCTIONS - MODIFY THE UI ////////////
  //////////////////////////////////////////////////////

  var showHome = function(){
    if(appStatus.keywordsShowing){
      $('#keywords').show();
      $('#backHome').hide();
      $('.keywords-text').hide();
      $('.letters-text').show();
      appStatus.keywordsShowing = false;    
    } else {
      toggleSpaceDeleteBack()
    }
    // toggleSpaceDeleteBack();
  }

  var appendAndReset = function(input){
    $('.sentence').append(input);
    var newletters = letters.initialLetters.split('');
    updateUI(newletters);
  }

  var addSpace = function(){
    $('.sentence').append(' '); 
    toggleSpaceDeleteBack();
  }

  // var addKeywordFunctionality = function(){
  //   var showingKeywords = false;
  //   $('.topBtn').on('click', function(){
  //     if(!showingKeywords){
  //       showingKeywords = true;
  //       showKeywords();
  //     } else {
  //       showingKeywords = false;
  //       updateUI(letters.initialLetters.split(''), true);
  //       $('.keywords-text').toggle();
  //       $('.letters-text').toggle();
  //     }
  //   });
  // }

  function toggleSpaceDeleteBack(){
    // $('.first').toggle();
    // $('.second').toggle();
    // $('.third').toggle();
    $('#spaceDeleteBack').toggle();
    $('.letterContainer').toggle();
    $('#backHome').toggle();
    
    // these are the operations to show
    $('#delete').toggle();
    $('#space').toggle();
    $('#back').toggle();
  }

  function showKeywords(){
    appStatus.keywordsShowing = true;
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
    toggleSpaceDeleteBack();
  } 

  updateUI(letters.initialLetters.split(''), true);
});



































