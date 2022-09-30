console.log("For -in Loop");

// for in with objects
let obj={
    name:"Pranav",
    college:"IIIT Kota",
    year:2
};
for(key in obj){
    console.log(key,obj[key]);  // we will not use obj.key here becoz their is no key property in obj
}
// for in with array

let ar=["Pranav","Sam","Adi"];
for(key in ar){
    console.log(key,ar[key]);
}

