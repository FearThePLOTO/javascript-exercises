const repeatString = function(str, times) {
    if(times < 0) return null;
    
    let temp = "";
    for(let i = 0; i < times; i++){
        temp += str;
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;
