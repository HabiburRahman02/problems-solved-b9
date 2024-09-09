
function password(object) {
    const birthYearStr = object.birthYear.toString();

    if (typeof object !== 'object' ||
        object.name === undefined ||
        object.siteName === undefined ||
        birthYearStr.length !== 4
    ) {
        return 'Invalid'
    }

    const firstLetter = object.siteName[0].toUpperCase() + object.siteName.slice(1);

    const output = `${firstLetter}#${object.name}@${object.birthYear}`
    return output;
}

const object = {
    name: "kolimuddin",
    birthYear: 1299,
    siteName: "google"
}
const result = password(object);
console.log(result)
