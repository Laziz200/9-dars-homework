function specialReverse(str, char) {
    let words = str.split(" ");
    
    let result = {};
    
    for (let word of words) {
        if (word.startsWith(char)) {
            let reversedWord = word.split("").reverse().join("");
            result[word] = reversedWord;
        }
    }
    
    return result;
}

console.log(specialReverse("word searches are super fun", "s"));
