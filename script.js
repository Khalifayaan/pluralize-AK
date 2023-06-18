




function pluralize(words) {
    var wordCount = {};
    var pluralWords = [];
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
  
      if (wordCount[word]) {
        var pluralForm = word + 's';
        if (!wordCount[pluralForm]) {
          var singularIndex = pluralWords.indexOf(word);
          pluralWords[singularIndex] = pluralForm; 
          wordCount[pluralForm] = true;
        }
      } else {
        wordCount[word] = true;
        pluralWords.push(word); 
      }
    }
  
    return pluralWords;
  }

  var words = ['Cup', 'plate', 'bowl', 'Cup', 'spoon', 'spoon'];
var pluralWords = pluralize(words);

console.log(pluralWords);