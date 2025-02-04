function f1(){
    let str="hy This is the DEP batch 09";

    let words=str.split(' ');
    let stringReverse=words.reverse();
    let wordsReverse=stringReverse.map(x=>x.split('').reverse().join(''));

    let reversedAnswer=wordsReverse.join(' ')

    console.log(str);
    console.log(reversedAnswer);

}

f1();

function f2() {
    let str = "hy This is the DEP batch 09";

    // Split the input string into words
    let words = str.split(' ');

    // Reverse the order of words
    words.reverse();

    // Reverse each individual word
    let reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });

    // Join the reversed words back into a single string
    let reversedSentence = reversedWords.join(' ');

    console.log(reversedSentence);
}

console.log('--------------------------------------');
f2();


