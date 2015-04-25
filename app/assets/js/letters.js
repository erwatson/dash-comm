var Letters = function(letters){
  this.initialLetters = letters;
}

Letters.prototype.producesubSets = function(stringArray){
  var result = {
    firstThird: [],
    middleThird: [],
    lastThird: []
  };
  var lettersLength = stringArray.length-1; 
  stringArray.forEach(function(letter, idx){
    if(idx < Math.ceil(lettersLength/3)){
      result.firstThird.push(letter);
    } else if (idx >= Math.ceil(lettersLength/3) && idx < Math.ceil(lettersLength/3)*2){
      result.middleThird.push(letter);
    } else {
      result.lastThird.push(letter);
    }
  });
  return result;  
}

// when the document is loaded load the subsets into their respective 'buttons'
  // when that button is clicked, call the producesubSet function with that button's inner html 