function maxOcc(str){
    let count = {}
    let maxCount = 0
    let maxChar = ''
    for(let i = 0; i < str.length; i++){
        let char = str[i]
        if(count[char]){
            count[char]++
        }else{
            count[char] = 1
        }
        if(maxCount < count[char]){
            maxCount = count[char]
            maxChar = char
        }
    }
    console.log(`Character: ${maxChar}, Occurences: ${maxCount}`)
}

maxOcc("hello")
