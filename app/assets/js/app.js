$(document).ready(function(){

  // find all of buttons (there should be 3), and call the produceSubsets function to populate the buttons 
  var letterContainers = document.getElementsByClassName('letterContainer');

  var letters = new Letters("abcdefghijklmnopqrstuvwxyz");
  console.log('letters', letterContainers);

  // this function will take the letterContainers and populate the button's innner html
  var updateUI = function(input){
  	console.log('length of letterContainers', letterContainers.length)
	  var containerLetters = letters.producesubSets(input);
    for(var i = 0; i < letterContainers.length; i++){
    	if(i === 0){
	    	letterContainers[i].innerHTML = containerLetters.firstThird.join(' - ').toUpperCase();
    	} else if(i === 1){
    		letterContainers[i].innerHTML = containerLetters.middleThird.join(' - ').toUpperCase();
    	} else {
    		letterContainers[i].innerHTML = containerLetters.lastThird.join(' - ').toUpperCase();
    	}
    }
  };

  updateUI(letters.initialLetters.split(''));
});



































