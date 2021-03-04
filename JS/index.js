function testSize(num){
    if (num < 5) {
    return "Tiny"

} else if ( num <10 ){
    return "Small"

} else if ( num <15 ){
    return "medium"

} else if ( num < 20 ){
    return "Large"
} else {
    return "Huge"

}
}
 console.log (testSize (20));

 function firstNumber (num){
     if (num < 7){
         return "Short"
     } else if (num> 7){
         return "Long"
     }

 }

 console.log (firstNumber(10));

 var names = ["Mercy" , "Alice" , "John"]

 function names () {
     return names [1];
 }
     
 console.log (names [1]);

/*var studentName= "Jonah";

 function studentName(){
    if (studentName.length < 6){
        return "Short"
    } if (studentName.length > 7){
        return "Long"
    }
}

console.log (studentName.length); */

/*var add = function(number1, number2){
    return (number1 + number2);
};
alert (add(3,4));
*/

/*var add = function(number1, number2){
    return (number1 + number2);
};
var number1 =prompt ("Enter your Number");//the prompt function enters its values as strings
var number2 =prompt ("Enter your Number"); // the prompt function (an inbuilt JS function) enters its values as strings
alert (add (number1 + number2));*/

//to ensure that the numbers are read as numbers rather that strings, we use the parseInt function//

var subtract = function(number1, number2){
    return number1 - number2;
};

var number1 =parseInt(prompt("Enter your Number:"));
var number2 =parseInt(prompt("Enter another Number:"));

alert(subtract(number1, number2)); 
