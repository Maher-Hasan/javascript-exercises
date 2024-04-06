const removeFromArray = function (array, ...elementsToRemove) { //the ...elementsToRemove is used to receive an array of inputs/values.
    for (let element of elementsToRemove) {// cycle through each element alone.
        let index; // declare index to save indexes of the element fetched,found in the array.
        while ((index = array.indexOf(element)) !== -1) {// loop through 'array' and saving each index of the 'element' in the index.
            array.splice(index, 1); //remove from array 1 element where index = index.
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

