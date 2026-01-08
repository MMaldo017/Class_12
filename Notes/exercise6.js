var lengthOfLastWord = function (s) {
    //assign a variable that holds a numeric value
    let count = 0;
    for(let i = s.length - 1; i >= 0; i--){
        //to check if that character or letter is an empty string " "
        if(s[i] != " "){
            count++
        }else if (count > 0){
            return count
        }
    }
    //return a number  ---> return a variable that holds a number
    return count;
};