const findTheOldest = function(people) {
    let oldestPerson = null;
    let maxAge = -1;

    people.forEach(person => {
        const currentAge = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
        if (currentAge > maxAge) {
            maxAge = currentAge;
            oldestPerson = person;
        }
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
