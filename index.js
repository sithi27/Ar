function sumArray(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Please provide a valid array of numbers.");
        return null;
    }

    return numbers.reduce((accumulator, current) => {
        if (typeof current !== 'number') {
            console.log("Array should only contain numbers.");
            return accumulator; // Skip non-number values
        }
        return accumulator + current;
    }, 0);
}
