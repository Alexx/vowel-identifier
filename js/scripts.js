$(document).ready(function(){
  function vowelIdentifier(sentence) {
    vowels = ["a", "e", "i", "o", "u"];
    var vowelsIdentified = 0;
    sentence = sentence.toLowerCase();
    var newSentence = sentence.split("");
    for(var character = 0; character < newSentence.length; character++) {
      for(var vowel = 0; vowel < vowels.length; vowel++) {
        if(newSentence[character] === vowels[vowel]) {
          console.log(newSentence[character] + " is a vowel " + vowels[vowel]);
          vowelsIdentified++;
        }
      }
    }
    console.log(newSentence);
    console.log(vowelsIdentified);
  };

  vowelIdentifier("CaTS CATEReD ThE EveNT");
});
// 
//
// The program recognizes a single vowel.
// Input Example: "a"
// Output Example: 1
//
// The program ignores non-alphabetical characters, since they cannot be vowels.
// Input Example: "4%"
// Output Example: 0
//
// The program recognizes a single vowel, regardless of case.
// Input Example: "A"
// Output Example: 1
//
// The program recognizes a single vowel in a multiple-character word.
// Input Example: "cat"
// Output Example: 1
//
// The program recognizes multiple vowels in a single word.
// Input Example: "cater"
// Output Example: 2
//
// The program recognizes vowels in a multiple-word sentence.
// Input Example: "cats catered the event"
// Output Example: 7
//
// The program recognizes vowels in a multiple-word sentence, regardless of capitalization.
// Input Example: "CATS CATERED THE EVENT"
// Output Example: 7
//
// The program recognizes all vowels in a multiple-word sentence, regardless of inconsistent capitalization.
// Input Example: "CaTS CATEReD ThE EveNT"
// Output Example: 7
//
