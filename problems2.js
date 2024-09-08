
function checkName(name) {
    if (typeof name !== 'string') {
        return 'please provide a string'
    }
    const lastLetter = name.slice(-1).toLowerCase();
    const array = ['a', 'e', 'i', 'o', 'u', 'y', 'w',];

    if (array.includes(lastLetter)) {
        return 'Good Name'
    }
    else {
        return "Bad Name"
    }
}


const result = checkName(['salmans']);
console.log(result)