const repeatString = function(string, num) {
    /**
     * create an empty string
     * run a loop num times
     * concatenate 'string' to the empty string variable on each loop
     */

    let repeatedString = '';

    if (num < 0) {
        return 'ERROR';
    } else {
        for(let i = 0; i < num; i++) {
            repeatedString += string;
        }
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
