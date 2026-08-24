const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if(start < 0 || start > end) return "ERROR"
    let sum = 0;
    return (end*(end+1)/2) - ((start-1)*start/2);
};

// Do not edit below this line
module.exports = sumAll;
