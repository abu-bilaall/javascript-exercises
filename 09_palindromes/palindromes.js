const palindromes = function (string) {
   /**
    * convert the string into an array
    * create a copy of the array and reverse it
    * compare the reversed array w/ the original array
    */
   const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

   const cleanedString = string
   .toLowerCase()
   .split('')
   .filter((character) => alphanumerical.includes(character))
   .join('');

   const reversedString = cleanedString.split('').reverse().join('');

   return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
