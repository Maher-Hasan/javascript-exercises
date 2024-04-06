const removeFromArray = function (array, ...elementsToRemove) {
    for (let element of elementsToRemove) {
        let index;
        while ((index = array.indexOf(element)) !== -1) {
            array.splice(index, 1);
        }
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;

