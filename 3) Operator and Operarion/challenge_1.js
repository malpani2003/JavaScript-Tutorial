/////////////////// Task-1

let myvariable1=10;
let myvariable2="5";

myvariable1=parseInt(myvariable1);
myvariable2=parseInt(myvariable2);

if(myvariable1 > myvariable2){
    console.log("True");
}
else{
    console.log("False");
}

/////////////////////// Task-2

// AND OR operator are short-circuit operator
console.log(3 || true && null || false);
// Step-1. true && null = null
// Step-2. 3 || null = 3
// Step-3.  