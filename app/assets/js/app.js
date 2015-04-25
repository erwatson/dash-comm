$(document).ready(function(){

  // find all of buttons (there should be 3), and call the produceSubsets function to populate the buttons 

  var letters = new Letters("abcdefghijklmnopqrstuvwxyz");

  // this function will take the letterContainers and populate the button's innner html
  var updateUI = function(input){
	  var letterContainers = document.getElementsByClassName('letterContainer');
	  var containerLetters = letters.producesubSets(input);
    for(var i = 0; i < letterContainers.length; i++){
    	if(i === 0){
    		var htmlLetters = containerLetters.firstThird;
    		console.log(htmlLetters);
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
  };

  updateUI(letters.initialLetters.split(''));
});



































