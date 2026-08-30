const palindromes = function (str) {
    str.replace(" ", "");
    str = str.toLowerCase();
    let i = 0,  j = str.length-1;
    while(i < j){
        if(!((str[i] >= "a" && str[i] <= "z") || (str[i] >= '0' && str[i] <= '9'))){
            i++;
            continue;
        }
        if(!((str[j] >= "a" && str[j] <= "z") || (str[i] >= '0' && str[i] <= '9'))){
            j--;
            continue;
        }
        if(str[i] != str[j])
            return false;
        i++;j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
