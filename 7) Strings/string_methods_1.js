let string="Javascript is a great language";

console.log("String is: "+ string)

// String Length
console.log("Length : "+string.length);

// Case changing
console.log("To Upper Case: "+string.toLowerCase())
console.log("To Upper Case: "+string.toUpperCase())

// includes() - check whether present or not
console.log("Search 'great' : "+string.includes("great"));
console.log("Search 'goat' : "+string.includes("goat"));

// search - find position of elemets in string
console.log("Position of 'is': "+string.search("is"));
console.log("Position of 'bad': "+string.search("bad"));

// indexof() and lastIndexof()
var string2="Javascript is a great is language";
console.log("Index of 'is' :"+ string2.indexOf("is"));
console.log("Last Index of 'is' :"+ string2.lastIndexOf("is"));

// replace()
console.log("Replace 'Javascript' with 'Python' : "+string.replace("Javascript","Python"));
console.log("String is: "+ string)


// trim() - remove start and end white scapes 
string2="   Javascript is a great language    ";
console.log("String is: "+ string2)
console.log("Trim : "+ string.trim())