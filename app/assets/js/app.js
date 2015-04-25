$(document).ready(function(){

  // find all of buttons (there should be 3), and call the produceSubsets function to populate the buttons 

  var letters = new Letters("abcdefghijklmnopqrstuvwxyz");

  // this function will take the letterContainers and populate the button's innner html
  var updateUI = function(input){
  	if(input.length === 1){
  		appendAndReset(input);
  	} else {		
		  var letterContainers = document.getElementsByClassName('letterContainer');
		  console.log('input', input)
		  var containerLetters = letters.producesubSets(input);
		  // console.log('containerLetters', containerLetters);
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

  var appendAndReset = function(input){
  	$('.sentence').append(input);
  	var newletters = letters.initialLetters.split('');
		updateUI(newletters);
  }

  updateUI(letters.initialLetters.split(''));
});



































