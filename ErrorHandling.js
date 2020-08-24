try {
    const numbers = [1, 2, 3, 4, 1];
    const count = countOccurrences(null, 1);
    console.log(count);
}
catch (e) {
    console.log(e.message);
}

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.')

    // let count = 0;
    // for (let element of array)
    //     if (element === searchElement)
    //         count++;
    // return;

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0);
}