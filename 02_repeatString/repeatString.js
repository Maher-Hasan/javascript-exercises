const repeatString = function (str, numTimes) {
    let repeatedString = ''; // initialize variable of the result to have an empty string
    if (numTimes < 0) {
        return "ERROR"
    } else {
        for (let i = 0; i < numTimes; i++) { // loop for numTimes
            repeatedString += str; //add the given string each loop for the result variable
        }
        return repeatedString; // return result
    }
};

// Do not edit below this line
module.exports = repeatString;
