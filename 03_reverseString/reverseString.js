const reverseString = function(string) {
    /**
     * get the length of the string
     * loop through the string and store its letters in an array
     * access the array from the last index and concatenate dem letters to a string
     */
    let maxIndex = string.length - 1;
    let reversedString = '';
    let letters = string.split("");

    for(let i = maxIndex; i >= 0; i--) {
        reversedString += letters[i];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
