var a = 'zoha'; // ES5 way to create a variable 
let b = 'car'; // ES6 way to create a variable
const c = 'bike'; // ES6 way to create a variable

let myDiv=document.getElementById('div');
//document.write("hello " + b);

function calc(x,y){ // A fucntion fo x and y addition
	return x+y;
}
//console.log(calc(3,5));


const cal = (x,y) => {

//Arrow function
return x*y;

}

//console.log(cal(55,44));


//Data types= 6 data types

let string= 'sdasdsad'; //string
let num1 = 55; //number
let bool = true; //boolean true/false
let array1 = ['name', 10, true, 'iknow']; // Arrays 
let object = {
	myname:"mohannad",
	age: 24


}

//console.log(string);
//console.log(num1);
//console.log(bool);
//console.log(array);
//console.log(object);
//console.log(array[1]);
//console.log(object.myname);



//Loops


/*for (let i=0; i < array.length; i++){
console.log(array[0]);


}//basic for loop
 */
 //forEach

array1.forEach(f =>{
console.log(f);


})

let truck=0;
console.log("loop started:");

while(truck < 11){
	console.log('loopin' + truck);
	truck++;




}
console.log("Loop stopped");