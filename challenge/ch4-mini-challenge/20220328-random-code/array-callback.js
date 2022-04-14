const strArray = ['JavaScript', 'Java', 'C'];
function forEach(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i])
        newArray.push(callback(array[i]));
    }
    return newArray;
}

const lenArray = forEach(strArray, (item) => {
    console.log(item)
    return item.length;
});
console.log(lenArray);
// Output: [ 10, 4, 1 ]
