// CHAPTER 1

// 1. Write a script to greet your website visitor using JS alert box
alert('Welcome to this website');

//2. Write a script to display following message on your web page:
alert('Error! Please enter a valid password');

// 3. Write a script to display following message on your web page: (Hint : Use line break)
alert('Welcome to JS Land... \nHappy Coding!');

// 4. Write a script to display following messages in sequence
alert('Welcome to JS Land!');
alert('Happy Coding');

// 5. Generate the following message through browser’s developer console
alert("Hello1..I can run JS through my web browser's console.");






// CHAPTER 2

// 1. Declare a variable called username
var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Uzair Nasir";

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
var message = "Hello World";
alert(message);


// 4. Write a script to save student’s bio data in JS variables and 
// show the data in alert boxes
username = "Jhone Dose";
alert(username);
var myage = "15 years old";
alert(myage);
var course = "Cerified Mobile Development";
alert(course);


// 5. Write a script to display the following alert using one JS variable
var pizza = "PIZZA \n PIZZ \n PIZ \n PI \n P";
alert(pizza);


// 6. Declare a variable called email and assign to it a string that 
// represents your Email Address(e.g. example@example.com). 
// Show the blow mentioned message in an alert box.(Hint: use 
// string concatenation)
var email = "My email adress is uzairnasir1801240@gmail.com";
alert(email);


// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following message in an alert box
var book = '"A smarter way to learn Javascript"';
alert( "I am learning a book" + " " +book);


// 9. Store following string in a variable and show in alert and 
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

var drawing = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(drawing);







// CHAPTER 3


// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.
var age = 15;
alert("I am "+age+" years old");


// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var visitCount = 14;
alert("You have visited this page "+visitCount+" times");


// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser
var birthYear = 2003;
console.log("My birth year is "+birthYear);
console.log("Data type of my declared variable is Number.");


// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “JohnDoe ordered 5 T-shirt(s) on XYZ Clothing store”.
var visitorName = "John Doe";
var productTitle = "T-shirt(s)";
var storeName = "XYZ Clothing store";
console.log(visitorName+" ordered 5 "+productTitle+" on"+storeName+".");






// CHAPTER 4


// 1. Declare 3 variables in one statement.
var variable1,variable2,variable3;



// 2. Declare 5 legal & 5 illegal variable names.
// legal variable names
var  varname,varname1,varName1,var_name,$varname;

// illlegal variable names
// var 1varname,varname#,varname*,&varname,vriable-name;




// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or_____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS ________
console.log("Rules for naming JS variables");
console.log("Variables can only contain letters,dollar sign,underscore and numbers");
console.log("variables must begin with a $, lowercse or underscore_");
console.log("Variable names are case lower");
console.log("Variable names must not be JS keywords");






// CHAPTER 5


// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser
var num1 = 5;
var num2 = 3;

var sum = (num1+num2);
console.log("Sum of "+num1+" and "+num2+" is "+sum);


// 2. Repeat task1 for subtraction, multiplication, division & modulus.

var subtraction = (num1-num2);
console.log("difference of "+num1+" and "+num2+" is "+subtraction);


var multiplication = (num1*num2);
console.log("product of "+num1+" and "+num2+" is "+multiplication);


var division = (num1/num2);
console.log("division of "+num1+" and "+num2+" is "+division);


var modulos = (num1%num2);
console.log("modulus of "+num1+" and "+num2+" is "+modulos);



// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3. 
// l. Output : “The remainder is : 0”.
var a;
console.log("value after variable declaration is ??");
a = 5;
console.log("initial value: "+a);
console.log("Value after increment is: "+ ++a);
a+=7;
console.log("Value after addition is: "+ a);
console.log("Value after deccrement is: "+ --a);
console.log("The remainder is: "+ a%3);





// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

ticket = 600;
console.log("Toal cost to buy 5 tickets is "+ (ticket*5))


// 5. Write a script to display multiplication table of any number in your browser. 
var tableNumber = 4;
console.log("4 x 1 = "+tableNumber * 1);
console.log("4 x 2 = "+tableNumber * 2);
console.log("4 x 3 = "+tableNumber * 3);
console.log("4 x 4 = "+tableNumber * 4);
console.log("4 x 5 = "+tableNumber * 5);
console.log("4 x 6 = "+tableNumber * 6);
console.log("4 x 7 = "+tableNumber * 7);
console.log("4 x 8 = "+tableNumber * 8);
console.log("4 x 9 = "+tableNumber * 9);
console.log("4 x 10 = "+tableNumber * 10);




// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//  a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”

var tempcelcius = 27;
var fahrenhite = (tempcelcius * 9/5) + 32;
console.log(tempcelcius+"C in Fahrenhite is "+fahrenhite+"F");

var tempfahren = 70;
var celcius = (tempfahren - 32) * 5/9;
console.log(tempfahren+"F in Celcius is "+celcius+"C");



// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.

var snack = "fries";
var currentage = 20;
var maxage = 60;
var amount = 2;
var total = amount * (maxage * 365);


console.log("Favorite snack: "+snack);
console.log("Current age: "+currentage);
console.log("amount of snacks per day: "+snack);

console.log("Youu will need "+total+" "+snack+" to last you until the ripe old age of "+maxage);







// CHAPTER 6&9

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var x = 10;
console.log("The value of x is "+x);

console.log("The value of ++x is "+ ++x);
console.log("now value of x is "+x);

console.log("The value of x++ is "+ x++);
console.log("now value of x is "+x);

console.log("The value of --x is "+ --x);
console.log("now value of x is "+x);

console.log("The value of a-- is "+ x--);
console.log("now value of x is "+x);



// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
var a = 10;
var b = 13;
var result = --a - --b + ++b + b--;

console.log("result = --a - --b + ++b + b--");
console.log("--a = "+ --a);
console.log("--a - --b = "+ (--a - --b));
console.log("--a - --b + ++b = "+ (--a - --b + ++b));
console.log("--a - --b + ++b + b-- = "+ result);


// 3. Write a program that takes input a name from user & 
// greet the user
var greet = prompt(" ","your name here");
console.log("hi and welcome "+greet);


// 5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.
var userinput = +prompt("","enter a number");

if (userinput == null){
console.log("5 x 1 = "+5 * 1);
console.log("5 x 2 = "+5 * 2);
console.log("5 x 3 = "+5 * 3);
console.log("5 x 4 = "+5 * 4);
console.log("5 x 5 = "+5 * 5);
console.log("5 x 6 = "+5 * 6);
console.log("5 x 7 = "+5 * 7);
console.log("5 x 8 = "+5 * 8);
console.log("5 x 9 = "+5 * 9);
console.log("5 x 10 = "+5 * 10);

}

else{
    console.log(userinput+" x 1 = "+userinput * 1);
    console.log(userinput+" x 2 = "+userinput * 2);
    console.log(userinput+" x 3 = "+userinput * 3);
    console.log(userinput+" x 4 = "+userinput * 4);
    console.log(userinput+" x 5 = "+userinput * 5);
    console.log(userinput+" x 6 = "+userinput * 6);
    console.log(userinput+" x 7 = "+userinput * 7);
    console.log(userinput+" x 8 = "+userinput * 8);
    console.log(userinput+" x 9 = "+userinput * 9);
    console.log(userinput+" x 10 = "+userinput * 10);
    
}




























