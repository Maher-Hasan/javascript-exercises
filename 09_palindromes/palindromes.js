const palindromes = function (str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the original and reversed strings are the same
    return cleanedStr === reversedStr;
}

// Do not edit below this line
module.exports = palindromes;
