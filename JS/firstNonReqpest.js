//Write a program in JavaScript that finds the first non-repeating character in a string and returns it. For example, given the string "hello", the program should return "h". If there are no non-repeating characters, the program should return null.


function nonRepeat(str){
    for(let i = 0; i<str.length; i++){
        let char = str[i];
        if(str.indexOf(char, i+1) === -1 && str.indexOf(char) === i){
            return char
        }
    }
    return null
}

const string = "hello"
console.log(nonRepeat(string))