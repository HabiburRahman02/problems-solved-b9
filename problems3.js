
function deleteInvalids(array) {

    if (Array.isArray(array) === false) {
        return 'Please provide a array';
    }

    let valid = [];
    for (const arr of array) {
        if (typeof arr === "number" && isNaN(arr) === false) {
            valid.push(arr)
        }
    }
    return valid
}

const array = [NaN, 1, 12, 0, -1, undefined];
const numberArray = deleteInvalids(array);
console.log('Result: ', numberArray);
