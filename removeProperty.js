function removeProperty(obj, prop) {

    if (obj && obj.hasOwnProperty(prop)) {
        obj[prop] = null;
        delete obj[prop];
        return true
    }

    return false;
}

const mockObj = {
    a: 1,
    b: 0,
    c: null,
    d: '',
    e: undefined
};

console.log('not an object', removeProperty(null, 1));
for (const [key, value] of Object.entries(mockObj)) {
    console.log(`${key}: ${value}`, removeProperty(mockObj, key));
}

console.log(`key = 1 not exist`, removeProperty(mockObj, 1));
  