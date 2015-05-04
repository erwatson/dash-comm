$(document).ready(function(){

  // find all of buttons (there should be 3), and call the produceSubsets function to populate the buttons 
  console.log('hi there');

  var letters = new Letters("abcdefghijklmnopqrstuvwxyz");

  // this function will take the letterContainers and populate the button's innner html
  var updateUI = function(input){
    $('.topBtn').text('keywords');
    if(input.length === 1){
      appendAndReset(input);
      $('.instruction-start').hide();
  	} else {		
		  var letterContainers = document.getElementsByClassName('letterContainer');
		  var containerLetters = letters.producesubSets(input);
	    for(var i = 0; i < letterContainers.length; i++){
	    	if(i === 0){
	    		var htmlLetters = containerLetters.firstThird;
		    	letterContainers[i].innerHTML = htmlLetters.join(' - ').toUpperCase();
		    	letterContainers[i].onclick = function(){ updateUI(this.innerHTML.split(' - '))};
	    	} else if(i === 1){
	    		var htmlLetters = containerLetters.middleThird;
	    		letterContainers[i].innerHTML = htmlLetters.join(' - ').toUpperCase();
	    		letterContainers[i].onclick = function(){ updateUI(this.innerHTML.split(' - '))};
	    	} else {
	    		var htmlLetters = containerLetters.lastThird;
	    		letterContainers[i].innerHTML = htmlLetters.join(' - ').toUpperCase();
	    		letterContainers[i].onclick = function(){ updateUI(this.innerHTML.split(' - '))};
	    	}
	    }
  	}
  };

  function showKeywords(){
    console.log('showing keywords');
    $('.first').text('Pain');
    $('.second').text('Family');
    $('.third').text('Nurse');
    $('.topBtn').text('Back To Home');
  }

  var deleteLastLetter = function(){
  	var currentStr = $('.sentence').html();
  	if(currentStr.length){	
	  	var strArray = currentStr.split('');
	  	strArray.pop();
	  	$('.sentence').html(strArray.join(''));
  	}
  }

  $('.delete').on('click', function(){
  	deleteLastLetter();
  });

  $('.reset').on('click', function(){
  	$('.sentence').html('');
  	updateUI(letters.initialLetters.split(''))
    $('.instruction-start').show();
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
  	$('.sentence').append('  ');	
  };

  var addKeywordFunctionality = (function(){
    var showingKeywords = false;
    $('.topBtn').on('click', function(){
      if(!showingKeywords){
        showingKeywords = true;
        showKeywords();
      } else {
        showingKeywords = false;
        updateUI(letters.initialLetters.split(''));
      }
    });
  })();

  updateUI(letters.initialLetters.split(''));
});



































