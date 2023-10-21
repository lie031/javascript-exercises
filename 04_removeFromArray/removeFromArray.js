const removeFromArray = function(Arr, ...args) {
    return Arr.filter(item => !args.includes(item));
}
// Do not edit below this line
module.exports = removeFromArray;
