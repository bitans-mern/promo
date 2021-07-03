function ensure(value) {
    if (value === undefined) {
        throw new Error('called without arguments or the argument is undefined');
    }
    return value;
}

[null, 0, '', undefined].forEach(val => console.log(`calling ensure with val = ${val}`, ensure(val)))