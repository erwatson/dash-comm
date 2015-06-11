var deleteLastLetter = function(){
	var currentStr = $('.sentence').html();
	if(currentStr.length){  
		var strArray = currentStr.split('');
		strArray.pop();
		$('.sentence').html(strArray.join(''));
	}
	toggleSpaceDelete();
}
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
      $('.letters-text').toggle();
    }
  });
};