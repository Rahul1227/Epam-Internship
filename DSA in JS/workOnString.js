/*
Play with two String
Your task is to Combine two Strings. But consider the rule...

By the way you don't have to check errors or incorrect input values, everything is ok without bad tricks, only two input strings and as result one output string;-)...

And here's the rule:
Input Strings a and b: For every character in string a swap the casing of every occurrence of the same character in string b. Then do the same casing swap with the inputs reversed. Return a single string consisting of the changed version of a followed by the changed version of b. A char of a is in b regardless if it's in upper or lower case - see the testcases too.
I think that's all;-)...

Some easy examples:

Input: "abc" and "cde"      => Output: "abCCde" 
Input: "ab" and "aba"       => Output: "aBABA"
Input: "abab" and "bababa"  => Output: "ABABbababa"
*/



function workOnStrings(stra, strb) {
    let a = stra.split('');
    let b = strb.split('');
  
    const toggleCase = (char) => {
      let code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    }
  
    for (let i = 0; i < a.length; i++) {
      let count = b.filter(x => x.toLowerCase() === a[i].toLowerCase()).length;
      if (count % 2 === 1) {
        a[i] = toggleCase(a[i]);
      }
    }
  
    for (let j = 0; j < b.length; j++) {
      let count = a.filter(x => x.toLowerCase() === b[j].toLowerCase()).length;
      if (count % 2 === 1) {
        b[j] = toggleCase(b[j]);
      }
    }
  
    let str1 = a.join('');
    let str2 = b.join('');
    return str1 + str2;
  }