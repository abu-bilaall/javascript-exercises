const removeFromArray = function(array, ...args) {
    // let formattedArray = [];

    // // Loop through each element in the original array
    // for(let i = 0; i < array.length; i++) {
    //     // If the element is not in 'args', add it to the new array
    //     if (!args.includes(array[i])) {
    //         formattedArray.push(array[i]);
    //     }
    // }

    // return formattedArray;

    return array.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
