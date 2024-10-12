const sumAll = function(start, end) {
    let totalSum = 0;

    // handling edge cases
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }
    else if (start < 0 || end < 0) {
        return "ERROR";
    } else if (start > end) {
        let temp = end;
        end = start;
        start = temp;
    }

    // 
    for (let i = start; i <= end; i++) {
        totalSum += i;
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
