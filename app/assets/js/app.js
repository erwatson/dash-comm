$(document).ready(function(){

  var appStatus = {
    keywordsShowing: false,
    isTyping: false,
  }
  var letters = new Letters("abcdefghijklmnopqrstuvwxyz");

  var updateUI = function(input, reset){
    reset = reset || false;
    if(reset){
      // reset the app settings;
      appStatus.keywordsShowing = false;
      appStatus.isTyping = false;
      // this will get called on any reset of the entire UI
      // handle the css here
      $('.letterContainer').show();
      $('.sentence').html('');
      $('.instruction-start').show();
      $('#backHome').hide();
      $('#spaceDeleteBack').hide();
      $('#keywords').show();
      $('.letters-text').show();
      $('.space-delete-back-text').hide();
      $('.keywords-text').hide();
      $('#space').hide();
      $('#back').hide();
      $('#delete').hide();
    } else if(appStatus.isTyping){
      // this will get called whenever a letterContainer gets pressed --> appStatus.isTyping === true
      $('.letterContainer').show();
      $('#keywords').hide();
      $('#backHome').hide();
      $('.keywords-text').hide();
      $('#spaceDeleteBack').show();
      $('.letters-text').hide();
    } else {
      // this gets called if a user presses keywords right off the bat, then click goBackHome
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
            updateUI(this.innerHTML.split(' - '), false);
          };
        } else if(i === 1){
          var htmlLetters = containerLetters.middleThird;
          letterContainers[i].innerHTML = htmlLetters.join(' - ').toUpperCase();
          letterContainers[i].onclick = function(){ 
            appStatus.isTyping = true;
            updateUI(this.innerHTML.split(' - '), false);
          };
        } else {
          if(containerLetters.lastThird.length > 0){
            var htmlLetters = containerLetters.lastThird;
            letterContainers[i].innerHTML = htmlLetters.join(' - ').toUpperCase();
            letterContainers[i].onclick = function(){ 
              appStatus.isTyping = true;
              updateUI(this.innerHTML.split(' - '), false);
            };
          } else {
            $('.third').hide();
          }
        }
      }
    }
  };

  // Assign Button Functionality Here - delete, reset, back, space, keywords, backToHome, SpaceDeleteReset
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
    goBack();
  });

  $('#keywords').click(function(){
    showKeywords();
  });

  $('#backHome').click(function(){
    showHome();
  });

  $('#spaceDeleteBack').click(function(){
    toggleSpaceDeleteBack();
  });
  

  //////////////////////////////////////////////////////
  //////// HELPER FUNCTIONS - MODIFY THE UI ////////////
  //////////////////////////////////////////////////////

  function showHome(){
    if(appStatus.keywordsShowing){
      $('#keywords').show();
      $('#backHome').hide();
      $('.keywords-text').hide();
      $('.letters-text').show();
      appStatus.keywordsShowing = false;
      updateUI(letters.initialLetters.split(''));   
    } else {
      toggleSpaceDeleteBack();
    }
  };

  function appendAndReset(input){
    $('.sentence').append(input);
    var newletters = letters.initialLetters.split('');
    appStatus.keywordsShowing = false;
    updateUI(newletters);
  };

  function addSpace(){
    $('.sentence').append(' '); 
    toggleSpaceDeleteBack();
  };

  function toggleSpaceDeleteBack(){
    // these are the operations to hide
    $('#spaceDeleteBack').toggle();
    $('.letterContainer').toggle();
    
    // these are the operations to show
    $('#backHome').toggle();
    $('.space-delete-back-text').toggle();
    $('#delete').toggle();
    $('#space').toggle();
    $('#back').toggle();
  };

  function showKeywords(){
    appStatus.keywordsShowing = true;
    $('.first').text('Pain');
    $('.second').text('Family');
    $('.third').text('Nurse');
    $('#backHome').toggle();
    $('#keywords').toggle();
    $('.keywords-text').toggle();
    $('.letters-text').toggle();
  };

  function deleteLastLetter(){
    var currentStr = $('.sentence').html();
    if(currentStr.length){  
      var strArray = currentStr.split('');
      strArray.pop();
      $('.sentence').html(strArray.join(''));
    }
    toggleSpaceDeleteBack();
  };

  function goBack(){
    showHome();
    updateUI(letters.initialLetters.split(''));
  }

  updateUI(letters.initialLetters.split(''), true);
});







// FUTURE CONSIDERATIONS 
// 1. Refactor PAIN | NURSE | FAMILY to its own set of buttons similar to space | delete | back and toggle those buttons instead of modifying innerHTML
// 2. Refactor the updateUI function 
     // a. first thing to do is take out the reset functionality.  
     // b. refactor the container onclicks to take up less code 

// 3. the ".third" patch




















