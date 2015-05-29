$(document).ready(function(){

  console.log('hi there');

  var letters = new Letters("abcdefghijklmnopqrstuvwxyz");

  var updateUI = function(input, reset){
    var reset = reset || false;
    if(reset){
      $('.topBtn').text('Keywords'); 
      $('.topBtn').unbind('click');
      addKeywordFunctionality();
    } else {
      $('.topBtn').text('Space | Delete');
      $('.instruction-start').hide();
      $('.topBtn').unbind('click');
      $('.topBtn').on('click', function(){
        toggleSpaceDelete();
      });
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
    $('.first').text('Pain');
    $('.second').text('Family');
    $('.third').text('Nurse');
    $('.topBtn').text('Back To Home');
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

  $('.delete').on('click', function(){
  	deleteLastLetter();
    updateUI(letters.initialLetters.split(''));
  });

  $('.reset').on('click', function(){
  	$('.sentence').html('');
  	updateUI(letters.initialLetters.split(''), true)
    $('.instruction-start').show();
    $('.keywords-text').css('display', 'none');

  });

  $('.space').on('click', function(){
  	space();
  })

  var appendAndReset = function(input){
  	$('.sentence').append(input);
  	var newletters = letters.initialLetters.split('');
		updateUI(newletters);
  };

  var space = function(){
  	$('.sentence').append(' ');	
    toggleSpaceDelete();
  };

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
      }
    });
  };

  function toggleSpaceDelete(){
    $('.second').toggle();
    $('.delete').toggle();
    $('.first').toggle();
    $('.space').toggle();
    $('.third').toggle();
  }

  updateUI(letters.initialLetters.split(''), true);
});



































