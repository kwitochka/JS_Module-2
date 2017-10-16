
//1.1. Find the age
var age_button = document.getElementById('age_button');
age_button.addEventListener('click', function (){
    var yearOfBirth = +document.getElementById('year').value;
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var age;
    console.log(currentYear);
    if(yearOfBirth<17){
      age = 17-yearOfBirth;
    }
    else if(yearOfBirth >17 && yearOfBirth>1900) {
      age = currentYear - yearOfBirth;
    }
    else{
      alert('Please specify your year of birth correctly');
    }
    alert('You are ' + age + ' years old');
  }
);

//1.2. Find the largest number out of two numbers
function compareTwoNumbs(){
  var x = +document.getElementById('compare1').value;
  var y = +document.getElementById('compare2').value;

  if (x>y) {
    alert(x + ' ' + 'is larger!');
  }

  else if(y==x) {
    alert('The numbers are equal!');
  }

  else if(y>x) {
    alert(y + ' ' + 'is larger!');
  }
  else{
    alert('Be sure you entered numbers!');
  }
}
var compareButton = document.getElementById('compareButton');
compareButton.addEventListener('click', compareTwoNumbs);


//1.3 Find the right block of the building based on the appartment number
function findBlock(){
  var flatNumber = document.getElementById('aptmt').value;
  if(flatNumber<21){
    alert(flatNumber + ' ' + 'is in the Block 1!');
  }

  else if(flatNumber<64){
    alert(flatNumber + ' ' + 'is in the Block 2!');
  }

  else if(flatNumber<81){
    alert('Go to the Block 3!');
  }

  else {
    alert('There is no such appartment');
  }
}

var blockButton = document.getElementById('findBlock');
blockButton.addEventListener('click', findBlock);

//1.4. Compare login and password


function authorise(){
  var loginName = document.getElementById('check_login').value;
  var password = +document.getElementById('check_password').value;
  if( loginName == 'ivan' && password ==333 ){
    alert("Welcome!");
  } else if( loginName == 'ssss' && password ==666 ){
    alert("Welcome!"); 
  } else if( loginName == 'gibs' && password == 0000 ){
    alert("Welcome!");
  } else{
    alert("Please register!");
  }
}

//
//TODO: Разобраться, как сделать это через объекты
// var users = {
//   'ivan': 333,
//   'ssss': 666,
//   'gibs': 0000,
// },
//     prop = users[];

// function authorise(){
//   var loginName = document.getElementById('check_login').value;
//   var password = +document.getElementById('check_password').value;
//     if( loginName == prop && password == users[prop]){
//       alert("Welcome!");
//    } else{
//     alert("Please register!");
//   }
// }

var compareButton = document.getElementById('check_user');
compareButton.addEventListener('click', authorise);

//1.5. Find the largest number out of three numbers
function compareABC(){
var a = +document.getElementById('a').value;
var b = +document.getElementById('b').value;
var c = +document.getElementById('c').value;
var result = Math.max(a, b, c);

alert(result);
}

var compareABC_button = document.getElementById('compare_abc');
compareABC_button.addEventListener('click', compareABC); 


//Задвчи на цикл FOR

//2.1. Numbers from 1 to 100 

function countUp(){
   for (var i = 1; i < 102; i++) {
     console.log(i);
     }
   }
//test 2.1.    
countUp();



//2.2. Console.log numbers from 200 to 0

function countDown(){
  for (var i=200; i>-1; i--){
    console.log(i);
  }
}

//test 2.2

countDown();


//2.3 Finds total sum of all numbers from 1 to b
//Version 1 

function totalSum(end) {
  var result = end*(end+1)/2;
  console.log(result);
}

//test 2.3.
totalSum(100);

//2.3. Version 2
// var i = 0;
// for (var j = 0; j<101; j++){
//   i+=j;
// }
// console.log(i);


//2.4 Pow function (Setting a number to Power)
// Version 1
function numbToPower(){
  var a = +document.getElementById('numb').value;
  var b = +document.getElementById('power').value;
  var c = 1;
  for(var i=0; i<b; i++){
   c*=a;
  }
    document.getElementById('result').innerHTML = c;
  }

var button = document.getElementById('power_button');
button.addEventListener('click', numbToPower); 


//2.5. Multiply by 7 

  for(var j = 1; j < 10; j++){
    console.log( j + '*' + '7' + '=' + j*7);
  }

  //2.6 Multiply up to 50
  
  var y = 1;
  for(var x=1; x<51; x++){
    y*=x;
  }
  console.log(y);

//2.7. Console.log(&#number)
for (var i=1000; i<2001; i++){
  console.log('&#' + i);
}