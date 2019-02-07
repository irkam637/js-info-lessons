
window.onload = function() {
  /////Bloks IIFEs ES5 vs ES6


//ES6 Blocks scope
// {
// const a = 1;
// let b = 2;
// var c = 4;
// }

// // console.log(a + b); is not defained
// console.log(c);

// //ES5 function scope

// (function() {
//   var c = 2;
  
// })();

// console.log(c); is not defained


/////////////// Strings ES6 vs ES5
// let firstName, lastName, yearOfBirth;
//     firstName = 'John';
//     lastName = ' Smith';
//     yearOfBirth = 1988;

// function calcAge (year) {
//    return 2019 - year;
// }

// console.log(`This is ${firstName} ${lastName}. He is ${calcAge(yearOfBirth)} years old` );

// let name = `${firstName} `;
// console.log(name.includes('Joh'));
// console.log(name.startsWith('J'));
// console.log(name.endsWith('hn'));
// name = `${lastName} `.repeat(6);
// console.log(name);

///////////// Arrow function

//ES5
// const arr = [1997,2018,1988,1904];

// let ages = arr.map(function(cur) {
//   return 2019 - cur;
// }) 
// console.log(ages);

// //ES6

// let ages6 = arr.map(cur => 2019 -cur);
// console.log(ages6);


// let ages7 = arr.map((el, index) => {
//   const now = new Date().getFullYear();
//   const age = now - el;
//   return `Age of ${index +1} people ${age}`;
// });
  
// console.log(ages7);

/////////////ES6 Arrow functions this keyword

//ES5
 
    
// var box = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
//   var that = this;
//    document.querySelector('.green').addEventListener('click', function() {
//       alert(1);
//        console.log('it is '+ that.position + 'with color - ' + that.color );
//     });
//   }
// }
// box.clickMe();


//ES6

// let box = {
//   color: 'green',
//   position: 1,
//   clickMe: function() {
  
//    document.querySelector('.green').addEventListener('click', () => {
     
//        console.log(`it is box №${this.position} with color -  ${this.color}` );
//     });
//   }
// }
// box.clickMe();

// }

//ES5

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.getFriends = function(friends) {
//    var arra = friends.map(function(el) {
//     return el + " is "+this.name + " friend";
//   }.bind(this));
//   console.log(arra);
// }

//   var arr = ['Jim', 'Scot','Smith'];

//   new Person('Jake').getFriends(arr);

// //////ES6

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.getFriends6 = function(friends) {
//    var arra = friends.map(el => 
//    `${el} is ${this.name} friend` );
//    console.log(arra);
// }

//   var arr = ['Jim', 'Scot','Smith'];

//   new Person('Janny').getFriends6(arr);

// }


///////////////Destructuring

// ES5

// var n = ['Joh', 45];

// var name = n[0];
// var age = n[1];

// ES6

// const [name, year] = ['Janny', 65];
// console.log(name);
// console.log(year);

// }

// const obj = {
// 	firstName: 'Jane',
// 	lastName: 'Smith',
// 	age: 45,
// };

// const{firstName, lastName, age} = obj;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
 
// const {firstName:n, lastName:m} = obj;

// console.log(n === firstName);

/// Practice destructing

// function calcAgeRetire(year) {
// 	const age = new Date().getFullYear() - year;
// 	return [age, 65 -age];
// }
// const[age, retire] = calcAgeRetire(1988);
// console.log(`You are ${age}. You will retire from ${retire}`);

// }

//////////////////////ARRAYS ES6

//ES5

const boxes = document.querySelectorAll('.box');
console.log(boxes)

// var newBox = Array.prototype.slice.call(boxes);
// console.log(newBox);
// newBox.forEach(function(el){
// 	el.style.backgroundColor = 'red';
// });

//ES6

const boxes6 = Array.from(boxes);
console.log(boxes6);
boxes6.forEach(el => el.style.backgroundColor = 'blue');

//ES5
// for( var i = 0; i < newBox.length; i++) {
// 	if(newBox[i].classList === '.blue') {
// 		continue;
// 	} else {
// 		newBox[i].innerText = "I'm blue!";
// 	}
// }


//ES6

// for (let el of boxes6) {
// 	if(el.className.includes('blue')) {
// 		continue;
// 	}else {
// 			el.innerText = "blue";
// 	}
// }

// }

//ES5

const child = [15, 19, 18, 11, 21, 23];

const isChild = child.map(function(el) {
		return el >= 19;
});
console.log(isChild);
console.log(isChild.indexOf(true));
console.log(child[isChild.indexOf(true)]);


}


