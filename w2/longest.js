//Write a function to return the longest argument
function returnLongest(word1, word2) {

    var word1Length = word1.length;
    var word2Length = word2.length;

    if (word2Length > word1Length) {
        return word2
    } else {
        return word1
    }

}

var result = returnLongest('Apples', 'BANANANANA');

console.log(result) 
