 // Alert will show on your browser
alert('Hello AbuBakar');

// Temporary variable for stroing some data
var a ; 


//Prompt command is same as Alert but it will allow you to enter some data
a = prompt('What is your name'); 

//console.log is used to print
console.log(a);


//As here the + sign is used as it be printed with the printing senctence
console.log("My name is "+ "  " + a + ".");
alert("My name is "+ "  " + a + ".");


// Swap function

function swap(){
    
    var a = 3; //First variable
    var b = 9;  // second variable
    var c ; // Temporary variable for swapping

    c=a;
    a=b;
    b=c;

    alert("The value of A is now after swapping is: " + a);
    alert("The value of B is now after swapping is: " + b);
    
    console.log("The value of a is now after swapping is: " + a );
    console.log("The value of b is now after swapping is: " + b );
}
swap();
