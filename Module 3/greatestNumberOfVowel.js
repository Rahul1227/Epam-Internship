function greatestNumberofVowel(){
    let str='abcde abceee bcd';

    // handling the null string
    if(!str || str.trim()===''){
        return null;
    }

    let words=str.split(' ');
    let maxVowelNum=-1;
    let ans='';

    // iterating on each word
    words.forEach(word=>{
        let wordLength=word.length;
        let vowelNum=0;
        for (let i = 0; i < wordLength; i++) {
            let char = word[i].toLowerCase(); // Consider case insensitive matching
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                vowelNum++;
            }
        }
        if(vowelNum>maxVowelNum){
            maxVowelNum=vowelNum;
            ans=word;
        }
    })

    return ans;
}

let word=greatestNumberofVowel();
console.log('Word with maximum vowel is',word);