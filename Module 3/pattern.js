function printPattern(n){
    let m=(2*n)-2;
    //outer loop for upper half
    for(let i=0; i<n/2; i++){
        //printing space
        let counter=0;
        for(let j=0; j<i; j++){
            process.stdout.write(" ");
            counter++;
        }

        //printing the #
        for(let j=0; j<=i; j++){
            process.stdout.write("#");
            counter++;
        }

        // printing the middle space
        for(let j=0;j<(m-(2*counter)); j++){
            process.stdout.write(" ");
        }


       //printing the #
       for(let j=0; j<=i; j++){
        process.stdout.write("#");
        } 

        //printing space
        for(let j=0; j<i; j++){
            process.stdout.write(" ");
        }
        console.log();
    }

        //outer loop for lower half
        for(let i=(n/2)-1; i>=0; i--){
            //printing space
            let counter=0;
            for(let j=0; j<i; j++){
                process.stdout.write(" ");
                counter++;
            }
    
            //printing the #
            for(let j=0; j<=i; j++){
                process.stdout.write("#");
                counter++;
            }
    
            // printing the middle space
            for(let j=0;j<(m-(2*counter)); j++){
                process.stdout.write(" ");
            }
    
    
           //printing the #
           for(let j=0; j<=i; j++){
            process.stdout.write("#");
            } 
    
            //printing space
            for(let j=0; j<i; j++){
                process.stdout.write(" ");
            }
            console.log();
        }
    
}


printPattern(8);
console.log()



function printPattern2(n) {
    let totalWidth=2*n-2;
    //Loop for the upper half
    for(let i=0; i<n/2; i++){
      let space=" ".repeat(i);
      let hash="#".repeat(i+1);
      let middleSpace=" ".repeat(totalWidth-2*i-2*(i+1));
      let printLine=space + hash + middleSpace + hash + space;
      console.log(printLine);
    }

    //Loop for the lower half
    for(let i=n/2-1; i>=0; i--){
      let space=" ".repeat(i);
      let hash="#".repeat(i+1);
      let middleSpace=" ".repeat(totalWidth-2*i-2*(i+1));
      let printLine=space + hash + middleSpace + hash + space;
      console.log(printLine);
    }
  }

  printPattern2(8);
