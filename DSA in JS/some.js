//code to check if the array contains any mutiple of 5. 


// let arr=[1,2,3,46,7,8];

// const checkMultiple=function(arr){
//     return arr.some(items=>items%5==0);
// }

// let ans=checkMultiple(arr);
// console.log("The answer got is",ans)


function outerFunc () {
    this.a = 'somevalue';
    console.log(this.a);

    // const innerFunction = () => {

    //     console.log(this.a);
    // }
    // innerFunction();

    function innerFunction(){
        console.log(this.a);
    }
    innerFunction();


}

outerFunc();