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
 
 
 // Concetination concept
 var a=2;
 var b="+";
 var c=2
 var x = a+c;
 console.log(a + b + c + "=" + x );
 
 // Character counter 
 
 var text;
 text = prompt ("Enter your Tweet");
 var leng = 100;
 var counter = leng -text.length ;
 
 /* counting words here
  console.log(counter);*/
 
  console.log ("You have written  " +text.length+ " chanracters and you have  " + counter + " characters left" );
 
  // Will prompt on the web browser
  alert("You have written  " +text.length+ " chanracters and you have  " + counter + " characters left" );
 
 
  //Slicing Concept 
 
 var text;
 text = prompt ("Enter your Tweet");
 var leng = 10;
 var counter = leng - text.length ;
 
 alert("Slicing your text if it is more than 10 characters");
 
 // HERE ONLY THE 10 CHARCTERS WILL BE DISPLAYED IF THE CHARACTER COUNT IS MORE THAN 10 SO IT WILL BE CUT DOWN
 console.log(text.slice(0,leng));
 alert("You have written  " +text.length+ " chanracters and you have  " + counter + " characters left" );
 
 // UPPER CASE AND LOWER CASE 
 
 var name ="Hello AbuBakar"
 name = name.toUpperCase();
 
 
 // First character Capitalizing
 
 var name;
 var cap_Name;
 var last_Name;
 name= prompt("Enter your Name");
 cap_Name = name.slice(0,1);
 cap_Name =cap_Name.toUpperCase();
 last_Name= name.slice(1,name.length);
 alert("Hello" + cap_Name+last_Name );
 
 // Arithmetic operations
 
 var a=2;
 var b=2;
 // Addition 
 console.log (a+b);
 //Subtraction
 console.log(a-b);
 //Multiplication
 console.log(a*b);
 //Divison
 console.log(a/b);
 
 
 //Dog age to human age convertor
 var dog_Age;
 dog_Age=prompt("Enter the age of the dog ");
 var human_Age;
 human_Age=((dog_Age-2) * 4) +21;
 console.log("Your dog human age is  "+ human_Age);
 
 
 // Increment Operation
 var x=2;
 x=x++;
 console.log(x);
 
 // Decrement Operation
 x=x--;
 console.log(x);
 
 x-=x;
 console.log(x);
 
 //Functions
 function getWater(){
     var data;
     alert("You are in the store ");
     data = prompt("How many Bottles you want");
     alert("You are buying "+data+" Bottles");
 }
 getWater();
 
//Parameterized Function with Math.floor concept

function calculatePerHead(bill,noOfPersons){

    var price= Math.floor(bill/noOfPersons);
    alert("Each person have to  give a " + price + " $ of his share in the bill");
}
calculatePerHead(25,3);

//left life teller

function lifeInWeeks(age){
var life=90;
var ageLeft=90-age;
var ageInDays= age*365;
var ageInWeeks= Math.floor(age*52);
var ageInMonths=age*12;

alert("Your age in Days is "+ageInDays+ "Age in Weeks is "+ageInWeeks+ " & Age in Months is " + ageInMonths);
}

lifeInWeeks(22);

//Return Type functions

function bill(cash){
var bottlePrice=1.5;
var bottle = Math.floor(cash/1.5);
var change= Math.floor(cash % 1.5);   
var totalBill = bottlePrice*bottle;

return alert("You will get " + bottle+ "and your bill is "+ totalBill + "Your change is "+ change);
}
bill(4);


//BMI calculator

function BMI(weight,height){
var bmi = weight/(height*height);
return bmi;
}
var results;
results=BMI(65,1.8);
console.log("Your BMI is " + results);