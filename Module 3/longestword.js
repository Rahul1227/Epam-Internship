function findLongestWord(){

    let line='abcd abcdefg abcdef';
    let length=line.length;
    if(length<=0){
        return null;
    }

    let words=line.split(' ');
    let maxlength=-1;
    let answer='';
    words.forEach(word=>{
        let wordLength=word.length;
        if(wordLength>maxlength){
            maxlength=wordLength;
            answer=word;
        }
    })

    return answer;

}


let ans=findLongestWord();
console.log("the longest word is",ans);