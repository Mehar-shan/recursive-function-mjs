// recursive functions
// this function that rpeat itself again and again  
function getRecursion (nr){
    console.log("starting function iteration",nr)
    // if condition for stop the procedure 
    if(nr > 0){
        getRecursion(--nr);
    }
    else{
        console.log("recursion completed");
    }
    console.log("fucnction ended",nr);

}
getRecursion(5);
  
// now we will creat the factroial program 

function factorial(nr){
    console.log(nr);
    if(nr === 0){
        return 1;
    }
    else{
        return nr * factorial(--nr);
    }
}
console.log(factorial(7));