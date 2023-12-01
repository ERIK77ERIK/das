//// //2
// // հակոբի տված գործը
// let text = "ԲԱԺԻՆ1 ԳԼՈՒԽ1 ՔՐԵԱԿԱՆ ՕՐԵՆՍԴՐՈՒԹՅԱՆ ԽՆԴԻՐՆԵՐԸ ԵՎ ՍԿԶԲՈՒՆՔՆԵՐԸ Հոդված1 Հայաստանի Հանրապետության քրեական օրենսդրությունը1. Հայաստանի Հանրապետության քրեական օրենսդրությունը բաղկացած է սույն օրենսգրքից: Քրեական պատասխանատվություն նախատեսող նոր օրենքներն ընդգրկվում են Հայաստանի Հանրապետության քրեական օրենսգրքում:2. Հայաստանի Հանրապետության քրեական օրենսգիրքը հիմնվում է Հայաստանի Հանրապետության Սահմանադրության և միջազգային իրավունքի սկզբունքների ու նորմերի վրա: Հոդված2 Հայաստանի Հանրապետության քրեական օրենսգրքի խնդիրները1. Հայաստանի Հանրապետության քրեական օրենսգրքի խնդիրներն են՝ հանցավոր ոտնձգություններից պաշտպանել մարդու և քաղաքացու իրավունքներն ու ազատությունները, իրավաբանական անձանց իրավունքները, սեփականությունը, շրջակա միջավայրը, հասարակական կարգը և անվտանգությունը, սահմանադրական կարգը, խաղաղությունը և մարդկության անվտանգությունը, ինչպես նաև կանխել հանցագործությունները:2. Այդ խնդիրների իրականացման համար Հայաստանի Հանրապետության քրեական օրենսգիրքն ամրագրում է քրեական պատասխանատվության հիմքն ու քրեական օրենսդրության սկզբունքները, որոշում, թե հանրության համար վտանգավոր որ արարքներն են համարվում հանցագործություններ, և սահմանում է պատժի տեսակներ ու քրեաիրավական ներգործության այլ միջոցներ՝ դրանք կատարելու համար: ԳԼՈՒԽ2 ՔՐԵԱԿԱՆ ՕՐԵՆՔԻ ԳՈՐԾՈՂՈՒԹՅՈՒՆԸ ԺԱՄԱՆԱԿԻ ԸՆԹԱՑՔՈՒՄ ԵՎ ՏԱՐԱԾՈՒԹՅԱՆ ՄԵՋ Հոդված1 .Քրեական օրենքի գործողությունը ժամանակի ընթացքում1. Արարքի հանցավորությունը և պատժելիությունը որոշվում են դա կատարելու ժամանակ գործող քրեական օրենքով:2. Հանցանքը կատարելու ժամանակ է համարվում հանրության համար վտանգավոր գործողությունը (անգործությունը) իրականացնելու ժամանակը՝ անկախ հետևանքները վրա հասնելու պահից: Հոդված2 .Քրեական օրենքի հետադարձ ուժը1. Արարքի հանցավորությունը վերացնող, պատիժը մեղմացնող կամ հանցանք կատարած անձի վիճակն այլ կերպ բարելավող օրենքը հետադարձ ուժ ունի, այսինքն՝ տարածվում է մինչև այդ օրենքն ուժի մեջ մտնելը համապատասխան արարք կատարած անձանց, այդ թվում՝ այն անձանց վրա, ովքեր կրում են պատիժը կամ կրել են դա, սակայն ունեն դատվածություն:2. Արարքի հանցավորությունը սահմանող, պատիժը խստացնող կամ հանցանք կատարած անձի վիճակն այլ կերպ վատթարացնող օրենքը հետադարձ ուժ չունի:3. Պատասխանատվությունը մասնակիորեն մեղմացնող և միաժամանակ պատասխանատվությունը մասնակիորեն խստացնող օրենքը հետադարձ ուժ ունի միայն այն մասով, որը մեղմացնում է պատասխանատվությունը:"

// let splittext = text.split(" ");   // ["", "", "", "", "", ""]

// const b1 = "ԲԱԺԻՆ1";
// const g1 = "ԳԼՈՒԽ1";
// const h1 = "Հոդված1";
// const h2 = "Հոդված2";
// const g2 = "ԳԼՈՒԽ2";

// function fun(a, b) {
//   return a.findIndex(function(val) {
//     return val === b
//   });
// }

// function removeAtIndex(arr, index) {
//     return arr.filter(function(val, i) {
//          return i !== index;
//     });
// };                   


// let splittexth1 =  removeAtIndex(splittext, fun(splittext, h1)) // veradardsnuma arajin h1-y hanacs zangvacs
// let splittexth2 =  removeAtIndex(splittext, fun(splittext, h2)) // veradardsnuma arajin h2-y hanacs zangvacs

// const strb1 = removeAtIndex(splittext, fun(splittext, b1)).join(" "); // b1-i texty 

// function re(arr, index, ind) {
//   return arr.filter(function(val, i) {
//        return  (ind > i) && (i > index) ;
//   });
// };    

// const strg1 = re(splittext, fun(splittext, g1), fun(splittext, g2)).join(" ");  // g1-i texty
// const strg1h1 = re(splittext, fun(splittext, h1), fun(splittext, h2)).join(" "); // g1-i  h1-i texty
// const strg1h2 = re(splittext, fun(splittext, h2), fun(splittext, g2)).join(" "); // g1-i h2-i texty
// const strg2 = re(splittext, fun(splittext, g2), splittext.length).join(" "); // g2-i texty
// const strg2h1 = re(splittext, fun(splittexth1, h1)+1, fun(splittexth2, h2)+1).join(" "); // g2-i h1-i texty
// const strg2h2 = re(splittext, fun(splittexth2, h2)+1, splittext.length).join(" "); // g2-i h2-i texty


// let arr3 = ["Հոդված1", "Հոդված2"]
// let arr4 = [ strg1h1, strg1h2]

// let arr5 = ["Հոդված1", "Հոդված2"]
// let arr6 = [ strg2h1, strg2h2]

// const obj2 = arr3.reduce(function(aggr, val) {
//   arr4.forEach(function(value) {
//      aggr[val] = value
//   })
//   return aggr
// }, {})

// const obj3 = arr5.reduce(function(aggr, val) {
//   arr6.forEach(function(value) {
//      aggr[val] = value
//   })
//   return aggr
// }, {});


// const object = {"ԲԱԺԻՆ1":{"ԳԼՈՒԽ1":obj2, "ԳԼՈՒԽ2":obj3,}}

// alert(JSON.stringify(object), undefined, 4);

// // // {
// // //     bajin1:{
// // //         glux1:{
// // //             hodvacs1:{
// // //             },
// // //             hodvacs2: {
// // //             }
// // //         },
// // //         glux2:{
// // //             hodvacs1: {
// // //             },
// // //             hodvacs2: {
// // //             }
// // //         }
// // //     }
// // // }












// /// xary esimincher

// // function sumPairExists(a, b, v) {
// //     debugger
// //     const obj = b.reduce(function(aggr, value) {
// //         aggr[value] = true
// //         return aggr
// //     }, {})

// //     for(let i = 0; i < a.length; i++) {
// //         const target = v-a[i]
// //         if(obj[target] === true) {
// //             return true
// //         }
// //     }
// //     return false
// // }

// // alert(sumPairExists([4, 2, 6, 1], [12, 10, 13, 9], 18))




// function sumPairExists(a, b, v) {
//     for(let i1 = 0; i1 < b.length; i1++) {
//         for(let i = 0; i < a.length; i++) {
//             if(v-a[i] === b[i1]) {
//                 return true
//             }
//         }
//     }
//     return false
// }

// alert(sumPairExists([4, 2, 6, 1], [12, 10, 13, 9], 8))




// const person1 = {
//     name: "Joe",
//     lastName: "Jaspers",
//     age: 55,
//     friends: [],
//     getFullName: function() {                      // getFullName() {
//         return this.name + " " + this.lastName     //       return this.name + " " + this.lastName
//     }                                              //  }
// };

// person1.getFullName()

// const person2 = {
//     name: "Mike",
//     lastName: "Jackson",
//     age: 66,
//     friends: [person1],
//     getFullName: function() {                       // getFullName() {
//         return this.name + " " + this.lastName      //             return this.name + " " + this.lastName
//     }                                               //  }
// }

// function getFullName(name, lastName) {
//     return name + " " + lastName
// }




// // /// OOP


// // /// members ,  mefid


// // /// function constructor

// // function F(){
// //     // this = {}

// //     this.name = "Joe"

// //     // return this
// // }

// // alert(JSON.stringify(new F()))




// const canvas = document.querySelector("canvas");
// const btn = document.querySelector("button");
// const context = canvas.getContext("2d");



// let data = {
//     balls: []
// };

// function update() {
//     data.balls.forEach(function(ball) {
//         ball.update();
//     })
// }

// function draw() {
//     context.clearRect(0, 0, canvas.width, canvas.height)
//     data.balls.forEach(function(ball) {
//         ball.draw();
//     })
// }

// function loop() {
//     requestAnimationFrame(loop);
//     update();
//     draw();
// }

// loop();

// function Ball() {
//     this.r = random(5, 40);
//     this.x = random(this.r, canvas.width-this.r);
//     this.y = random(this.r, canvas.height-this.r);

//     this.xDelta = random(-5, 5);
//     this.yDelta = random(-5, 5);

//     this.color = "rgb(" + random(0, 255) + ", " + random(0, 255) + ", " + random(0, 255) +")";

//     this.update = function() {
//         if((this.x + this.r) > canvas.width ||
//         this.x - this.r < 0) {
//             this.xDelta *= -1;
//         }

//         if((this.y + this.r) > canvas.height ||
//         this.y - this.r < 0) {
//             this.yDelta *= -1;
//         }

//         this.x += this.xDelta;
//         this.y += this.yDelta;
//     }


//     this.draw = function() {
//         context.fillStyle = this.color;

//         context.beginPath();
//         context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
//         context.fill();
//     }
// }

// btn.addEventListener("click", function() {
//     const ball = new Ball();
//     data.balls.push(ball);
// })


// function random(min, max) {
//     return Math.floor(Math.random() * (max-min)) + min;
// }



// function approximatePi(n) {
//   let ins = 0;

//   for (let i = 0; i < n; i++) {
//     const x = Math.random();
//     const y = Math.random();
//     const distance = Math.sqrt(x * x + y * y);

//     if (distance <= 1) {
//       ins++;
//     }
//   }

//   return (ins / n) * 4;
// }

// // You can adjust the number of samples for better accuracy
// const approximatedPi = approximatePi(1000000);

// console.log(`Approximated π: ${approximatedPi}`);





// // arajin ckrknvox tary

// function firstNonRepeatingCharacter(str) {
//     let splitStr = str.split("")

//     const aaa = splitStr.reduce(function(aggr, val) {
//       if(aggr[val] === undefined) {
//         aggr[val] = 1
//       } else {
//         aggr[val]++
//       }
//       return aggr
//     }, {})


//     // Object.keys(aaa).forEach(function(key) {
//     //     if(aaa[key] === 1) {
//     //         alert(key)
//     //     }
//     // })
    
//  /*    function shift (arr) {
//         let a = w[0]
//         w = arr.filter(function(val, i) {
//         return i !== 0
//         })
//         return a
//         } */

//       let w = Object.keys(aaa).filter(function(key) {
//               if(aaa[key] === 1) {
//                   return true
//               }
//               return false
//           })

//     return w[0]  // shift(w)
    
// }

// alert(firstNonRepeatingCharacter("asdfadfgtthh"));




// // ելի ղառը եսիմինչեր
// const a = {
//     name: "Joe"
// }

// const b = {
//     lastName: "Jackson"
// }

// const c = {
//     age: 19,
//     showAge() {
//         alert(this.age)
//     }
// }

// a.__proto__ = b
// b.__proto__ = c



// alert(a.lastName)
// alert(a.showAge())

// // OOP, Object Oriented Programing

// const a = {
//     name: "Joe"
// }

// const b = {
//     lastName: "Jackson"
// }

// const c = {
//     age: 19,
//     showAge() {
//         alert(this.age);
//     }
// }

// // 1
// a.__proto__ = b;
// b.__proto__ = c;

// a.age = 99;
// a.showAge();


// // 2
// delete a.age;
// a.showAge();


// // 3
// alert(Object.keys(a));  // name



// // 4.1
// const a = Object.create(b);
// a.name = "Joe";
// alert(a.lastName)



// // 4.2
// function A() {
//     // this = {}
//     // this.__proto__ = A.prototype;
//     this.name = "joe"
//     // return this;
// }
// A.prototype = b;

// const a = new A();


// // 5
// const a = new Object();



// // 6
// const a = {}

// const b = Object.prototype
// debugger;


// // 7
// const a = {};

// alert(a.toString());

// alert(a + "/ this is fun");


// // 8
// const a = {}

// Object.prototype.toString = function() {
//     return "yay";
// };

// alert(a.__proto__ === Object.prototype);

// alert(a)



// function f1(num) {
//     if(num === 0) {
//         return
//     }

//     alert("hi")

//     return f1(num-1);
// }

// f1(10)




// function f1(i) {
//     if(i <= 0) {
//         return;
//     }

//     alert("hi");

//     f1(i - 1)
// }

// f1(5)





// function factorial(num) {
//     if(num <= 1) {
//         return 1;
//     }
//     return num * factorial(num - 1);
// }

// alert(factorial(5))




// let arr = [1, 2, 3, 4];

// function sum(arr) {
//     let result = 0;


//     function loop(i) {
//         if(i >= arr.length) {
//             return;
//         }
//         result = result + arr[i]
//         loop(i + 1)
//     }
//     loop(0)


//     return result
// }

// alert(sum(arr))



// let filter = function(arr, fun) {
//     let filteredArr = [];
//     let i = 0;
//     let i1 = 0;

//     while(i < arr.length) {
//         if(fun(arr[i])) {
//             filteredArr[i1] = arr[i]
//             i1++
//         }
//         i++
//     }

//     return filteredArr
// }

// alert(filter([1, 2, 3, 4], function(val) {
//     return val % 2 !== 0
// }))

// let h = [165, 2, 7, 4, 5, 6];
// alert([1, 2, 3, 4, 5, 43].filter(function(val, i) {
//     return i === 0
// }))



// //  ??
// Վարժություն(json stringify, recursion)

// Ստեղծել stringifyJSON անունով ֆունկցիա, որն ընդունում է օբյեկտ, որը կարող է ունենալ կամայական խորությամբ ենթաօբյեկտներ և զանգվածներ, և վերադարձնում է JSON տեքստ։
// Ձեր ֆունկցիան պետք է վերադարձնի այն, ինչ վերադարձնում է JSON.stringify ֆունկցիան, բայց բնականաբար JSON.stirngify-ը ձեր ֆունկցիայի ներսում օգտագործելու իրավունք չունեք :)

// Հուշում՝ օգտագործել ռեկուրսիա և յուրաքանչյուր արժեքի համար ստուգել դրա տիպը՝ Համապատասխան որոշում կայացնելու համար:

// ---

// Implement a function called stringifyJSON which takes an object that can have an arbitrarily deep nesting of objects and arrays and converts it into a valid JSON string. The output of calling your stringifyJSON should be the same as calling JSON.stringify with the same input. Do not use JSON.stringify, write the logic yourself.

// Hint: Use recursion and check the types of each value to serialize it correctly

// ---

// Օրինակ Ձեր ֆունկցիան ստուգելու համար՝
// Sample data you can use to test your code:

// const data = {
// "destination_addresses": [
// "Washington, DC, USA",
// "Philadelphia, PA, USA",
// "Santa Barbara, CA, USA",
// "Miami, FL, USA",
// "Austin, TX, USA",
// "Napa County, CA, USA"
// ],
// "origin_addresses": [
// "New York, NY, USA"
// ],
// "rows": [{
// "elements": [{
// "distance": {
// "text": "227 mi",
// "value": 365468,
// "isFar": true
// },
// "duration": {
// "text": "3 hours 54 mins",
// "value": 14064
// },
// "status": "OK"
// },
// {
// "distance": {
// "text": "94.6 mi",
// "value": 152193
// },
// "duration": {
// "text": "1 hours 44 mins",
// "value": 6227
// },
// "status": "OK"
// },
// {
// "distance": {
// "text": "2.878 mi",
// "value": 4632197
// },
// "duration": {
// "text": "1 day 18 hours",
// "value": 151772
// },
// "status": "OK"
// },
// {
// "distance": {
// "text": "1,286 mi",
// "value": 2069031
// },
// "duration": {
// "text": "18 hours 43 mins",
// "value": 67405
// },
// "status": "OK"
// },
// {
// "distance": {
// "text": "1,742 mi",
// "value": 2802972
// },
// "duration": {
// "text": "1 day 2 hours",
// "value": 93070
// },
// "status": "OK"
// }
// ]
// }],
// "status": "OK"
// }


// // 1.
// // եկեք տեսնենք իրանց վիճակը երբ որ մենք կանչում ենք JSON.stringify() ոնց է վերադարձնում որ սովորենք և էս նույն օրենքները մենք դնենք մեր ֆունկցիայի մեջ
// const a = JSON.stringify(undefined) // undefined
// const s = JSON.stringify(null) // "null"
// const d = JSON.stringify(NaN) // "null"
// const f = JSON.stringify(124) // "124"
// const g = JSON.stringify(true) // "true"
// const h = JSON.stringify("fdfs") // "\"fdfs\""
// const j = JSON.stringify([1, 2, 3]) // "[1, 2, 3]"
// const k = alert(JSON.stringify({ // "{\"name\":\"Joe\", \"age\": 12}"
// name: "Joe",
// age: 12,
// }) )
// const l = alert(JSON.stringify(function() {})) // undefined
// debugger;

// // let f = function() {alert("barev")};

// alert(JSON.stringify({"ds": 1, "se": undefined, "fs": NaN, "kl": null, "nd": f,"sd": 23, "aa":[1, undefined, NaN, null, f, 2]}))
// // JSON.stringify() ֆունկցիան զանգվածի մեջի undefiend, NaN, null, function արժեքները դարձնումա null
// // իսկ object-ի մեջի undefiend, function արժեքներին ցույց չի տալիս համարումա չկա իսկ NaN և null արժեքները դարձնումա null


// alert("\"" + 2323 + \")




//կիսատ?????????
//  JAVASCRIPT - Փակումներ(closures)


// let x = 5;

// if(x === 5) {

//     let y = 7;
//     let x = 2;
//     alert(x + y);
// }

// alert(x);


// let h = {"we6" : 323, "dsd" : "dsds"}
// let f = function() {
//     let y = 7;
//     alert(y + x);
// };

// ֆունկցիան և էտ հղումները դրսի փոփոխականներին ամբողջը միասին կոչվում են փակումներ(closures)
// debugger

// let y = 9;

// let f = function() {
//     let x = 8;
//     let x2 = 99;
//     return function() {
//         let z = 2;
//         alert(x + y + z);
//     };
// };

// let f2 = f(); // function() { alert("hi"); };

// y = 20;
// f2();
// debugger

// Փակումը դա ինչ է դա ֆունկցիա է որը նաև իր հետ փաթեթաորված ունի հղումներ դեպի բոլոր են դրսի փոփոխականները որը ինքը իր ներքին իր մեջ օգտագործում է այդ ամենը միասին կոչվում է closures





// JAVASCRIPT - ՎԱՐԺՈՒԹՅՈՒՆ(Closures);

// վարժություն 1

// let x = 7;

// function a(y) {
//     return x + y; // 7 + y // 7 + 4 // 11
// }

// function b(z) {
//     let x = 99;
//     return z(4); // 11
// }

// alert(b(a));  // Ի՞նչ կցուցադրի
// // կտպի 11

// վարժություն 2

// function a(x) {
//     return (y) => x + y;
// }

// alert(a(2)(4));  // ի՞նչ կցուցադրի
// // կտպի 6



// վարժություն 3

// function a(x) {
//     return function(y) {
//         return function(z) {
//             return x + y + z
//         };
//     };
// }

// alert(a);           // ին՞չ կցուցադրի   // function a(x) { function(y) { return function(z) { return x + y + z }; }; }
// alert(a(2));        // ի՞նչ կցուցադրի   // function(y) { return function(z) { return x + y + z }; }
// alert(a(2)(4));     // ի՞նչ կցուցադրի   // function(z) { return x + y + z }
// alert(a(2)(4)(9));  // ի՞նչ կցուցադրի   // 15


// վարժություն 4


// function Cat() {
//     // this ={}
//     let numLives = 7;
//     let name = "Jack";

//     this.age = 5;
//     this.getName = () => {
//         return name;
//     };
//     this.getName = () => {
//         return name;
//     };
//     this.getAge = () => {
//         return this.age;
//     };
//     this.catDies = () => {
//         numLives--;
//     };
//     this.isDead = () => {
//         return numLives <= 0;
//     }
//     // return this
// };

// function Person() {
//     // this = {};
//     this.name = name,
//     this.lastName = lastName,
//     this.age = age,
//     this.friends =  [],
//     this.getFullName = () => {
//         return this.name + " " + this.lastName
//     }
//     // return this;
// }

// const person1 = new Person("Joe", "Jaspers", 55);

// alert(JSON.stringify(person1, undefined, 20))
















/// krknoxutyun   das 51-i vrayey are

// das 1 //
// JAVASCRIPT - ՆԵՐԱԾՈՒԹՅՈՒՆ


// alert('բարև' + 77);
// // կտպի բարև77
// alert("բարև " + 77);
// // կտպի բարև 77
// alert("բարև" + ' ձեզ');
// // կտպի բարև ձեզ

// alert("բարև" + "" + "ձեզ");
// // կտպի բարևձեզ
// alert("բարև" + " " + "ձեզ");
// // կտպի բարև ձեզ

// alert(7 + 5 + "բարև" + 7 + 5);
// // կտպի 12բարև75





// das 2 //
// JAVASCRIPT - Փոփոխականներ(let)

// 1.Փոփոխականը անուն է որի մեջ մենք կարող ենք վերագրել արժեք
// 2.Փոփոխականները ստեղծում ենք let տեքստով,գրում ենք let և մեր արժեքի անունը(փոփոխականը), կարող ենք վերագրել ինչ-որ արժեք անմիջապես կամ ստեղծել վերագրել ապագայում
// 3.( = ) -ը ծրագրաորման մեջ նշանակում է վերագրել, այսինքն աջ կողմը վարագրվում է ձախ կողմի մեջ

// let x=7,y=5;
// alert( x + y + "բարև" + x + y);

// կտպի (12բարև75)

// 4.javascript-ը թույլ չի տալիս երկու փոփոխական ստեղծել նույն անունով բայց կարող ենք նույն փոփոխականին տված արժեքը փոխել
// եթե նույն փոփոխականին տված արժեքը փոխում ենք ապա alert ֆունկցիան ընդունում է անմիջապես վերևի տված արժեքը
// նաև կարող ենք տարբեր փոփոխականի նույն արժեքը տալ

// let a=4,b=5;
// a=7;
// a=1;
// alert(a);
// alert(a+b);
// a=6;
// alert(a+b);

// կտպի (1) հետո (6) հետո (11)


// JAVASCRIPT - ՍԽԱԼՆԵՐԻ ՀԱՅՏՆԱԲԵՐՈՒՄ


// 1.debugger; հրամանը թույլ է տալիս մեր գրած կոդը քայլառքայլ աշխատացնել և ուսումնասիրել փոփոխականի արժեքները



// das3 //
// JAVASCRIPT - prompt ֆունկցիա

// 1.prompt ֆունկցիան մեզ վերադարձնում է արդյունք
// 2.prompt ֆունկցիաի վերադարձրած արդյունքը դա այն տեքստն է որը մենք գրում ենք իր բացած պատուհանի մեջ
// 3.prompt ֆունկցիաի վերադարձրած արդյունքը մենք կարող ենք որպես արժեք վերագրել փոփոխականի

// let name = prompt("what is your name?");
// let lastname = prompt("what is your last name?")
// alert("nice to meet you " + name + " " + lastname);



// das4 //
// JAVASCRIPT - Բուլյան արժեքներ - Boolean արժեքներ (true(ճիշտ), false(սխալ))

// 1.եթե փոփոխականին վերագրած արժեքների համեմատությունը ճիշտ է alert ֆունկցիան կտպի true
// 2.եթե փոփոխականին վերագրած արժեքների համեմատությունը սխալ է alert ֆունկցիան կտպի false
// 3. ===(հավասար է)
// !==(հավասար չէ)
// >(մեծ է)
// <(փոքր է)
// >=(մեծ է կամ հավասար է)
// <=(փոքր է կամ հավասար է)

// 4.
// let x=6;
// let y="աշխարհ";
// let r = x < y;
// alert(r);
// let a=true;
// let b=false;
// alert(a + b);
// alert(a + " " + b);

// կտպի (false) հետո (1) հետո (true false)     /// false/0  true/1

// 5.
// prompt ֆունկցիայի բացած պատուհանի մեջ եթե մենք թիվ գրենք նա մեզ կվերադարձնի այդ թիվը որպես տեքստ
// օրինակ․

// let z=prompt("գրիր 7");
// alert(z===7);
// կտպի false(սխալ է) , քանի որ 7-ը տեքստային 7 -ին հավասար չէ

// իսկ եթե տեքստային 7-ը համեմատենք կտպի true(ճիշտ է)
// alert(z==="7");

// եթե ուզում ենք տեքստային թիվը դարձնենք թիվ երկու ստորակետներից առաջ դնում ենք +
// օրինակ․
// let n = +z;
// alert(n===7);
// կտպի true(ճիշտ է)

// եթե ուզում ենք թիվը դարձնենք տեքստային թիվ երկու ստորակետները մեջը դատարկ թողած գումարում ենք թվին
// let m = "" + n;
// alert(m==="7")

// կտպի true(ճիշտ է)


// das5 //
// JAVASCRIPT - Պայմանի օպերատորներ (if(եթե), else(հակառակ դեպքում))


// 1.կոդի մեջ մենք շատ հաճախ ուզում ենք արտահայտել եթե կոնցեպտը օրինակ երբ որ դուք փորձում եք ինչ որ կայք մուտք գործել և գրում եք լոգինն ու գախտնաբառը, կայքի հետևում գրված լոգիկան համեմատում է ձեր գրած լոգինն ու գախտնաբառը և ԵԹԵ համընկնում է նա ներս է թողնում, այսինքն եթե մենք ուզում ենք լոգիկա ստեղծել ասելով եթե համընկավ աշխատացրու մեր բլոկի մեջի կոդը , որը ինչ-որ գործողություն է կատարում(օրինակ այս օրինակում մուտք է թողնում կայք) դա անում ենք if(եթե անգլերեն նշանակում է if) օպերատորով
// 2.if(){}, else if(){}, else{}
// 3.եթե if(եթե) պայմանի համեմատությունը ճիշտ է(true է) ապա իր բլոկի մեջի կոդը կաշխատի իսկ եթե սխալ է(false է) ապա կանցնի հաջորդ կոդին
// 4.երկու if(եթե) պայման տալուց, առաջի if պայմանը եթե ճիշտ է ապա երկրորդ if պայմանի տակից գրված else(հակառակ դեպքում) պայմանը նույնպես կաշխատի, քանի որ քանի հատ if պայման տանք այդքան պատուհան է բացվելու

// let x=prompt("Ինչ է ձեր անունը");
// let z = x==="Օֆելյա";
// if (z) {
// alert("Դուք շատ գեղեցիկ անուն ունեք " + x );
// }
// if (x==="Վահե") {
// alert("Ձեր մուտքն արգելված է" + x);
// }
// else{
// alert("Բարի գալուստ ծրագրաորման աշխարհ "+x);
// }


// եթե մեր նպատակը մեկ պատուհան բացելն է ապա պետք է մեկ հատ if պայման ստեղծենք և if պայմանի մյուս տարբերակները միացնենք else if(){} (հակառակ դեպքում եթե) պայմանով

// let name = prompt("what is your name?");
// let lastname= prompt("what is your lastname?");

// if(name === "hakob") {
//     if(lastname=== "hakobyan") {
//         alert("vay inch hetaqrqira hakob hakobyan")
//     } else{
//         alert("shat vat azganun uneq hakob " + lastname)
//     }
// }
// else if(name === "anush   ") {
//     alert("voxjuyn anush");
// } else if(name === "Vazgen") {
//     alert("barev vazgen")
// }
// else{
//     alert("hajoxutyun")
// }




// das 6 //
// JAVASCRIPT - Պարզ խաղ

// let points = 0;

// let resp0 = prompt("what is the capital of Armenia?");

// if(resp0 === "yerevan") {
//     points = points + 1
// }
// let resp1 = prompt("what is the capital of Russia?");
// if(resp1 === "moscow") {
//     points = points + 1
// }
// let resp2 = prompt("what is the capital of France?");
// if(resp2 === "paris") {
//     points = points + 1;
// }
// alert("you received " + points + " out of 3");



// das 7 //
// JAVASCRIPT - Բուլյան օպերատորներ - Boolean operators( &&(և (and)), ||(կամ(or)), !(ոչ(not)) )

// 1. Բուլյան օպերատորները երբ տեսնում են երկու կողմից բուլյան արժեք կա(true(ճիշտ) կամ false(սխալ)) նրանք ինչ-որ գործողություն են անում, որոշում են կայացնում և նորից վերադարձնում են բուլյան արժեք

// 2. &&(և) օպերատորը կվերադարձնի true միայն այն դեպքում երբ որ և ձախ կողմի համեմատության արժեքը լինի true(ճիշտ) և աջ կողմի համեմատության արժեքը լինի true(ճիշտ) մնացած դեպքերում կվերադարձնի false(սխալ);

// let userResponse = +prompt("How old are you?");
// if(userResponse > 18 && userResponse < 40){
// alert("ձեր տարիքը համապատասխանում է");
// }
// user-ի տարիքը և պետք է 18-ից մեծ լինի և պետք է 40-ից փոքր լինի որպեսզի աշխատի alert ֆունկցիան

// 3.||(կամ) օպերատորը եթե գոնե մի կողմի համեմատության արժեքը true(ճիշտ) է կվերադարձնի true այսինքն կամ ձախ կողմի համեմատության արժեքը պետք է true(ճիշտ) լինի կամ աջ կողմի համեմատության արժեքը պետք է true(ճիշտ) լինի կամ երկուսնել որպեսզի վերադարձնի true արժեքը

// let userResponse = +prompt("How old are you?");
// if(userResponse > 18 || userResponse < 12){
// alert("ձեր տարիքը համապատասխանում է");
// }
// user-ի տարիքը կամ պետք է 18-ից մեծ լինի կամ պետք է 12-ից փոքր լինի որպեսզի աշխատի alert ֆունկցիան

// 4.!(ոչ) օպերատորը կարող է ցանկացած բուլյան արժեք շուռ տալ եթե true(ճիշտ) է դարձնել false(սխալ) եթե false(սխալ) է դարձնել true(ճիշտ)
// !(ոչ) օպերատորը օգտագործելիս համեմատության հետ որպեսզի նա աշխատի պետք է համեմատությունը վերցնենք փակագծերի մեջ
// !(... > ...)

// let userResponse = +prompt("How old are you?")
// if(! (userResponse > 18)) {
//     alert("ձեր տարիքը համապատասխանում է")
// }



// das 8 //
// JAVASCRIPT - while(քանի դեռ) ցիկլ

// 1.while(քանի դեռ) պայմանը աշխատում է հետևյալ կերպ եթե իր արժեքը true է նրա մեջի կոդը կաշխատի և բլոկը ավարտելուց հետո անմիջապես նորից կստուգի while պայմանի արժեքը և եթե նորից true է նորից կաշխատի և ՔԱՆԻ ԴԵՌ իր արժեքը true է նա կաշխատի այնքան միչև արժեքը դառնա false, իսկ եթե արժեքը բլոկի աշխատելուց հետո չփոխվի միշտ մնա նույնը բլոկը անվերջ կաշխատի այդպես մենք կստանաք անվերջական ցիկլ
// let i = 0;
// while(i < 3){
// alert(i);
// }
// և նա անվերջ կաշխատի

// 2.while(քանի դեռ) պայմանը որպեսզի անվերջ չաշխատի այսինքն ավարտի իր գործողությունը, ցիկլային բլոկից դուրս գա և անցնի հաջորդ կոդին մեզ պետք է մի կոդ որը ցիկլի ինչ-որ քանակից հետո կփոխի while-ի արժեքը true-ն դարձնելով false
// let i = 0;
// while(i < 3){
// alert(i);
// i = i + 1;
// }
// կտպի 0 հետո 1 հետո 2 և կավարտվի

// let i = 0;
// while(i < 3){
// i = i + 1;
// alert(i);
// }
// կտպի 1 հետո 2 հետո 3 և կավարտվի

// 3.while(քանի դեռ) պայմանը որպեսզի անվերջ չաշխատի այսինքն ավարտի իր գործողությունը, ցիկլային բլոկից դուրս գա և անցնի հաջորդ կոդին մեզ պետք է տանք break(անջատել) հրամանը
// break-ը հրաման չի այն առումով որ ինքը ֆունկցիա չի այլ ցիկլի ինֆորմացիա է որով ասում ենք ցիկլին երբ որ տեսնում ես break-ին դուրս արի ցիկլից

// while(true) {
//     let userResponse = prompt("Hi");
//     if(userResponse === "hajox"){
//         let userRespons = prompt("Hiiii");
//         if(userRespons === "barev") {
//             break;
//         }
//     }
//     alert("ok, we will continue");
// }


// 4.while(քանի դեռ) պայմանը երբ որ տեսնում է continue(շարունակել) հրամանը իր բլոկի աշխատանքը սկսում է նորից, բլոկի աշխատանքը համարելով ավարտված (այսինքն continue-ից հետո գրված կոդերը չի աշխատում) բարձրանում է վերև և նորից ստուգում է արժեքը և եթե true է նորից աշխատում է
// continue-ն հրաման չի այն առումով որ ինքը ֆունկցիա չի այլ ցիկլի ինֆորմացիա է որով ասում ենք ցիկլին երբ որ տեսնում ես continue-ին ընդհանուր բլոկը համարի ավարտված և աշխատանքտ սկսիր նորից

// while(true) {
//     let userResponse = prompt("aaaHi")
//     if(userResponse === "hajox") {
//         let userRespons = prompt("Hiiii");
//         if(userRespons === "barev") {
//             continue
//         }
//     }
//     alert("ok, we will continue");
//     break
// }


// Վարժություններ

// let i = 1;
// while(i <= 10) {
//     alert(i)
//     i++
// }

// let i = 10
// while(i > 0) {
//     alert(i)
//     i--
// }

// let i = 1
// while(i < 10) {
//     alert(i)
//     i += 2
// }

// let i = 0
// let sum = 0
// while(i < 10) {
//     alert(i)
//     sum += i
//     i += 1
// }
// alert(sum)

// let a = 10
// let b = 1
// while(a <= 15) {
//     b = b*a;
//     alert(a)
//     a = a + 1
// }
// alert(b)



// das 9 //
// JAVASCRIPT - Զանգվածներ(Arrays) - Ցուցակ

// x = ["poxos", "petros", "martiros"];
// let i = 0;
// while(i < x.length) {
//     alert(x[i])
// }


// das 10 //
// JAVASCRIPT - Բազմաչափ զանգվածներ(Multidiensional Array)

// let a = [24, 22, [7, [84, 99]],[3, 1, 6], [0, 8, [4, 5]]];
// alert(a[3][1] + a[4][2][1] * a[3][0] + a[2].length);


// das 11 //
// JAVASCRIPT - Հիմնական խաղ - Tic Tac Toe

//  "\n"
// [ , , ,].join(" ")

// let x = [5, 2, 6];
// let y = x.join(" ");
// let r = "barev"
// let g = "hajox"
// alert(y)


// let stringifyBoard = function(board) {
//     return board[0].join("  ") + 
//     "\n" + 
//     board[1].join("  ") + 
//     "\n" + 
//     board[2].join("  ") 
// }

// let board = [
//     ["_", "_", "_"],
//     ["_", "_", "_"],
//     ["_", "_", "_"]
// ]

// let player = "x";

// let didWeWin = function(board, player) {
//     let i = 0;
//     while(i < 3) {
//         if(
//             (board[i][0] === player && board[i][1] === player && board[i][2] === player) ||
//             (board[0][i] === player && board[1][i] === player && board[2][i] === player) ||

//             (board[0][0] === player && board[1][1] === player && board[2][2]) ||
//             (board[0][2] === player && board[1][1] === player && board[2][0])
//             ) {
//             if(player === "x") {
//                 let i1 = 0;
//                 while(i1 < board.length) {
//                     let i2 = 0;
//                     while(i2 < board.length) {
//                         if(board[i1][i2] === "x") {
//                             board[i1][i2] = "X"
//                         } else {
//                             board[i1][i2] = "_"
//                         }
//                         player = "X"
//                         i2 ++
//                     }
//                     i1 ++
//                 }
//             } else {
//                 let i1 = 0;
//                 while(i1 < 3) {
//                     let i2 = 0;
//                     while(i2 < 3) {
//                         if(board[i1][i2] === "o") {
//                             board[i1][i2] = "O"
//                         } else {
//                             board[i1][i2] = "_"
//                         }
//                         player = "O"
//                         i2 ++
//                     }
//                     i1 ++
//                 }
//             }
//             return true;
//         }
//         i ++
//     }
//     return false
// }


// let isFull = function (board) {
//     let i = 0;
//     while (i < board.length) {
//         let i2 = 0;
//         let row = board[i];
//         while (i2 < row.length) {
//             if (board[i][i2] === "_") {
//                 return false;
//             }
//             i2 = i2 + 1;
//         }
//         i = i + 1;
//     }
//     return true;
// };




//     while(true) {
//         let boardStr = stringifyBoard(board);

//         let row = +prompt("dear user, please provider the value for the row \n\n" + boardStr);
//         let column = +prompt("dear user, please provider the value for the column \n\n" + boardStr);

//         if(board[row][column] !== "_") {
//             alert("not a legal move, you lose!");
//             continue;
//         }

//         board[row][column] = player;

//         let won = didWeWin(board, player);

//         if(won) {
//             alert("Player " + player + " won the game! \n\n" + stringifyBoard(board))
//             break;
//         }

//         if(isFull(board)) {
//             alert("The board is full, nobody won");
//             break;
//         }


//         if (player === "x") {                                    // switch players
//             player = "o";                                        // 4
//         } else {
//             player = "x"; 
//         }
//     };


// das 12 //
// JAVASCRIPT - undefined(չսահմանված) արժեք

// 1.Javascript-ում դատարկությունը դա էլ է արժեք, անունը այդ դատարկության undefined է(չսահմանված, չստեղծված)
// այսինքն եթե փոփոխականին չենք վերագրում արժեք իր արժեքը դառնում է undefined
// իսկ եթե զանգված(array)-ի մեջ մենք դատարկ ենք թողնում իր մեջի անդամները ընդունում են undefined արժեքը

// այսինքն այդ կոնցդեպտը որ փոփոխականը կամ array-ը իր մեջ կարող են ունենալ undefined արժեքը դա կարևոր է հասկանալ որովհետև դա օգտագործվում է նաև ուրիշ լեզուների մեջ


// let x;
// if(x === undefined) {
//     alert("ok")
// }
// x = 7;
// if(x === 7) {
//     alert("yay");
// }
// կտպի ok հետո yay



// let y = [];
// y[2] = 5;
// alert(y[1]);
// alert(y);
// alert(y.length);
// կտպի undefined հետո ,,5 հետո 3



// let y = [];
// alert(y[2]);
// alert(y);
// alert(y.length);
// կտպի undefined հետո (դատրակություն այսինքն y-ին վերագրած զանգվածի մեջի պատկերը) հետո 0



// քանի որ undefined-ը արժեք է մենք կարող ենք նաև undefined-ը վերագրել փոփոխականի
// let x = 34;
// x = undefined;
// այսինքն x-ի մեջ մենք վերագրում ենք դատրակություն, որը նշանակում է այդ երկու տողից հետո x-ի արժեքը undefined է



// das 13 //

// JAVASCRIPT - % օպերատոր

// 1.%(տոկոս) օպերատորը բաժանում է երկու թիվ և վերադարձնում է մնացորդը
// 2.մենք կարող ենք % օպերատորը օգտագործել որպեսզի հասկանանք որևէ թիվ կենտ է թե զույգ այսինքն եթե մենք որևէ թիվ անենք % 2 և արդյունքը լինի 0 կիմանանք որ զույգ է իսկ հակառակ դեպքում կիմանանք որ կենտ Է

// alert(5 % 2);
// կտպի 1

// let x = [5, 56, 4, 2, 7, 579, 6];
// let y = [];

// let i = 0;
// let i2 = 0;
// while(i < x.length) {
//     if(x[i] % 2 !== 0) {
//         y[i2] = x[i]
//         i2 = i2 + 1
//     }
//     i = i + 1
// }
// alert(y)

// կտպի զանգվածի մեջի կենտ թվերը

// i = 0;
// i2 = 0;
// while(i < x.length) {
//     if(x[i] % 2 === 0) {
//         y[i2] = x[i]
//         i2 = i2 + 1
//     }
//     i = i + 1
// }
// alert(y)

// կտպի զանգվածի մեջի զույգ թվերը


// Վարժություն
// let a = 55;
// let b = 7;
// let z = 12, d = a + b;
// let o = [a*2];
// o[b] = 3;

// alert((!!!(z === 4 +3*2 + (5%2)) && !(o[0] === 112)) || (a*b < 100 && o.length >= 8))

// կտպի true



// das 14 //

// JAVASCRIPT - Հասանելիության(տեսանելիության) տիրույթ(scope(տեսադաշտ))

// 1.փոփոխականին մենք կարող ենք օգտագործել միայն են պահից հետո ինչ իրեն ստեղծել ենք
// 2.երբ որ մենք ստեղծում ենք փոփոխականին ինքը ապրում է սահմանի մեջ
// 3.փոփոխականը հասանելի է իրեն ստեղծելու պահից միչև են սահմանի ավարտը որի մեջ ինքը ստեղծվել է,այդ սահմանից դուրս ինքը հասանելի չէ
// 4.երբ որ մենք ինչ որ փոփոխականի դիմում ենք(հղում ենք անում) և ինքը հայտարարված չի իր սահմանում ինքը վերցնում է այն սահմանի մեջի իրեն վերագրած արժեքը,որը իրեն ամենամոտն է
// 5.եթե մենք նոր սահման ենք ստեղծում մենք կարող ենք այդ սահմանում ստեղծել փոփոխականներ որոնք որ ունեն նույն անունը ինչպես այդ սահմանից դուրս
// 6.այն կոնցեպտը թե փոփոխականը որտեղից որտեղ է հասանելի կոչվում է scope(տեսադաշտ),scope-ը փոփոխականի սահմանն է
// 7.let-ը օգտագործում է blok scope, այսինքն ամեն անգամ երբ որ մենք կոդային blok ենք ստեղծում ինքը սահմանված է լինում այդ blok-ի մեջ և հիշեք որ ինքը հասանելի է միայն են պահից հետո ինչ ինքը ստեղծվում է

// let x = 5;
// if(x > 2){
// let z = 99;
// if(z > 2){
// let z = 11;
// alert(z);
// }
// alert(z);
// }
// կտպի 11 հետո 99




// Վարժություն


// 1.ՈՒսումնասիրեք այս կոդը առանց աշխատացնելու և ասեք քանի alert պատուհան կերևա և ինչ արժեքներով

// let a = 9;
// if(a > 0) {
// let b = 2;
// if( b > 0) {
// let a = 3;
// alert(a + b);
// }
// b = 4;
// alert(b + a);
// let i = 0;
// while(i < 2) {
// alert(i + b + a);
// i = i + 2;
// }
// alert(i);
// }
// alert(a);

// կտպի 5 հետո 13 հետո 13 հետո 2 հետո 9


// das 15 //

// JAVASCRIPT - Ֆունկցիաներ(functions)

// 1.function-ը մենք ստեղծում ենք հետևյալ կերպ function() {};

// 2.function-ը(ֆունկցիան) արժեք է, և քանի որ նա արժեք է նույն ձև ոնց որ մենք կարող ենք արժեք(թիվ, տեքստ, բույլան արժեք, զանգված կամ undefined) վերագրել փոփոխականի մեջ նույն ձև մենք կարող ենք function-ը(ֆունկցիան) վերագրել փոփոխականի մեջ

// 3.ինչպես հիշում եք ֆունկցիան դա հրաման է, որը կարող ենք կանչել(աշխատացնել) գրելով անունը և անունի կողքը դնելով փակագիծներ
// function-ը(ֆունկցիան) մենք կարող ենք կանչել(աշխատացնել) գրելով անունը(անունը այս դեպքում կլինի այն փոփոխականի անունը որի մեջ վերագրած է function-ը(ֆունկցիան) և կողքից դնելով փակագիծներ)

// let x = function() {
// alert(1);
// };
// x();
// կտպի 1
// այսինքն ինչ ստացվեց
// ..1.. մենք ստեղծեցինք մեկ հատ function(ֆունկցիա)
// ..2.. վերագրեցինք այդ function-ը(ֆունկցիան) x փոփոխականի մեջ որպես արժեք
// ..3.. և հետո x օգտագործելով(քանի որ այս դեպքում x-ը այդ ֆունկցիան է (քանի որ x-ը այդ ֆունկցիան է,ուրեմն այդ ֆունկցիաի անունը x է) ),x-ի(այսինքն անվան) կողքը դնելով փակագիծներ իրեն կանչեցինք(աշխատացրեցինք) և նա աշխատեց

// իսկ ինչ է նշանակում աշխատեց նշանակում է այն կոդը որը function(ֆունկցիա)-ի բլոկի մեջ է կաշխատի

// 4.ինչպես հիշում եք ֆունկցիան նաև կարող է ընդունի արժեք(ֆունկցիան ընդունում է այն արժեքը որը գրված է այն փակագիծների մեջ որով կանչում(աշխատացնում) էինք այդ ֆունկցիան),

// քանի որ մենք ֆունկցիաին արժեք կարող ենք տալ այն փակագիծների մեջ որով կանչում(աշխատացնում) էինք այդ ֆունկցիան
// և քանի որ function-ի դեպքում մենք function-ը աշխատացնում ենք իրեն վերագրած փոփոխականի անունը գրելով, կողքը փակագիծներ դնելով, function-ը պետք է կարողանա ստանալ այն արժեք որը տալիս ենք իրեն
// այդ արժեքը function-ը ստանում է իր կողքի փակագիծներից, այդ արժեքը ստանալու համար մենք պետք է ստեղծենք փոփոխականի անուն որպեսզի այն արժեքը որ մենք տալիս ենք մտնի այդ փոփոխականի մեջ և մենք կարողանանք նրան օգտագործել

// let x = function(y) {
// alert(y + 1);
// };
// x(6);
// կտպի 7

// let x = function(y, z) {
// alert(y +z);
// };
// x(5, 10);
// կտպի 15

// 5.function-ը բացի ինչ որ բան անելուց, նա կարող է ինչ-որ գործողություն անի և մեզ վերադարձնի արդյունքը
// function-ի վերադարձրած արդյունքը որպես արժեք մենք կարող ենք վերագրել փոփոխականի մեջ

// let x = function() {
// return 11
// };
// let u = x();
// alert(u);
// կտպի 11

// let x = function(y, z) {
// return y + z;
// };
// let u = x(5, 10);
// alert(u);
// կտպի 15

// return հայերեն նշանակում է վերադարձ

// 6.նույն function-ը(ֆունկցիան) մենք կարող ենք կանչել(աշխատացնել) լրիվ ուրիշ պարամետրերով ինչքան ուզում ենք
// function(ֆունկցիա)-ի ամբողջ նպատակը նա որ մենք կարողանանք ցանկացած արժեք տանք ու անենք իր մեջի գործողությունը

// let x = function(y, z) {
// return y + z;
// };
// let u = x(5, 10);
// alert(u);
// alert(x(7,9));
// alert(x(11,3));
// կտպի 15 հետո 16 հետո 14




// Վարժություններ

// 1.
// let iseven = function(x) {
// return x % 2 === 0;
// };
// alert(iseven(12));

// 2.Ստեղծեք մի ֆունկցիա որը վերցնում է մի հատ զանգված(որի մեջ կան թվեր) և այդ զանգվածի թվերը ամբողջովին գումարում է և վերադարձնում իրենց ընդհանուր գումարումը

// let add = function(n){
// let i = 0;
// let sum = 0;
// while(i < n.length){
// sum = sum + n[i];
// i = i + 1;
// }
// return sum;
// }
// alert(add([1, 2, 3, 4, 5, 6]));

// կտպի 21

// 3.
// let y = 10;
// let div = function(t, s) {
// return t / s
// };
// let dip = function(y,zoo) {
// return zoo(y) * zoo(y)
// };
// let yup = function(c) {
// return div(y,2);
// };
// let d = dip(4, yup);

// alert(d);

// կտպի 25



// das 16 //


// JAVASCRIPT - ՔՆՆՈՒԹՅՈՒՆ


// 1. Ի՞նչ է Javascript-ը։

// 2. Ի՞նչ է փոփոխականը։ Գրեք փոփոխական ստեղծելու օրինակ։

// 3. Ի՞նչ արժեքներ ենք մենք սովորել։

// 4. Ի՞նչ է փոփոխականի արժեքը մինչ նրան ինչ-որ արժեք վերագրելը։

// 5. Համեմատման ի՞նչ օպերատորներ ենք անցել։

// 6. Ի՞նչ է ֆունկցիան։ Գրեք ֆունկցիա օգտագործելու օրինակ։

// 7. Մաթեմատիկական ի՞նչ օպերատորներ մենք գիտենք։

// 8. Ինչպե՞ս կարող ենք միացնել տեքստերը (strings):

// 9. Ինչպե՞ս կարող ենք վերածել տեքստը թվի և թիվը տեքստի։ (string to number and number to string)

// 10. Ի՞նչ բուլյան օպերատորներ մենք գիտենք։

// 11. Ինչպե՞ս են աշխատում if/if else/else: Գրեք օրինակ։

// 12. Ինչպե՞ս կարող ենք ցիկլ ստեղծել մեր կոդում։ Գրեք օրինակ։

// 13. Ինչպե՞ս ենք մենք ստեղծում, կարդում, փոփոխում զանգվածի երկարությունը։ Գրեք օրինակ։

// 14. Ի՞նչ է բազմաչափ զանգվածը։ Գրեք օրինակ։

// 15. Գրեք ծրագիր, որը կհարցնի user-ից նրա տարիքը։ Եթե տարիքը փոքր է 10-ից, ցույց տվեք “hi” տեքստով պատուհան(alert): Եթե տարիքը մեծ է կամ հավասար 10, բայց փոքր է 18-ից, ցույց տվեք “hello” տեքստով պատուհան։ Մնացած բոլոր դեպքերում ցույց տվեք “greetings” տեքստով պատուհան

// 16. Գրեք ծրագիր, որը user-ից կշարունակի խնդրել թիվ մուտքագրել։ Երբ user-ը մուտքագրի “exit”, ցույց տվեք պատուհան (alert), որը կտպի մինչև այդ գրված բոլոր թվերի գումարը և կավարտի ծրագիրը։

// 17. Գրեք computeTriangleArea անունով ֆունկցիա, որը կվերցնի եռանկյան հիմքը և բարձրությունը և կվերադարձնի եռանկյան մակերեսը։ Օրինակ computeTriangleArea(2, 9). պետք է վերադարձի 9 որպես արդյունք։

// 18. Գրեք reverse անունով ֆունկցիա, որը կվերցնի զանգված և կվերադարձնի մի նոր զանգված, որի արժեքները նույնն են ինչ առաջին զանգվածինը, բայց համակարգված են հակառակ դասավորությամբ։ Օրինակ reverse([1, 2, 3, 4]). պետք է վերադարձնի նոր զանգված նման արժեքներով՝ [4, 3, 2, 1]

// 19. Գրեք average անունով ֆունկցիա, որը կվերցնի թվերի զանգված, և կվերադարձնի այդ թվերի հանրահաշվական միջինը։ Օրինակ average([4, 3, 6, 10, 2]). պետք է վերադարձի 5:

// 20. Գրեք factorial անունով ֆունկցիա, որը կվերցնի թիվ և կվերադարձնի այդ թվի ֆակտորիալը։ Հիշեք, որ թվի ֆակտորիալը, տրված թվից մինչև 1 բոլոր բնական թվերի արտադրյալն է։ Օրինակ factorial(5). պետք է վերադարձի 120:



// Exam ---------


// 1. What is Javascript?

// 2. What is a variable? Provide an example of how to create it?

// 3. What values have we learned?
// 4. What is the value of a variable before it has been assigned a value?

// 5. What comparison operators have we learned?

// 6. What are functions? Provide examples of how to use them.

// 7. What math operators do we know?

// 8. How can we concatenate strings?

// 9. How can we convert from string to number and number to string?

// 10. What boolean operators do we know?

// 11. How does if/if else/else work? Please provide an example.

// 12. How can we create a loop in our code? Please provide an example.

// 13. How do we create, read, edit and know the length of an array? Please provide an example.

// 14. What is a multidimensional array? Please provide an example.

// 15. Write a program that prompts a user for their age. If the submitted age is less than 10, show an alert “hi”. If the age is greater than or equal to 10 but less than 18, alert “hello”. In all other cases, alert “greetings”.

// 16. Write a program that keeps asking the user for a number. When the user writes exit, show an alert that has the sum of all previously typed numbers in it and end the program.

// 17. Write a function called computeTriangleArea that takes the base and height of a triangle and returns the computed area of the triangle. Example: computeTriangleArea(2, 9); should return 9 as the result.

// 18. Write a function called reverse that takes an array and returns a new array that has the same values as the original array but sorted in the reverse order. Example: reverse([1, 2, 3, 4]); should return an array like this: [4, 3, 2, 1]

// 19. Write a function called average which, given an array of numbers, returns the average (or mean) of these numbers. Example: average([4, 3, 6, 10, 2]); should return 5

// 20. Write a function called factorial that takes a number and returns the factorial of that number. Remember, factorial says to multiply all whole numbers from our chosen number down to 1. Example: factorial(5) should return 120




// das 17 //

// JAVASCRIPT - Օբյեկտներ


// 1.Օբյեկտ(object)ը մենք ստեղծում ենք հետևյալ կերպ {}

// 2.Օբյեկտը արժեք է և նույն ձև ոնց որ կարող ենք արժեք(թիվ, տեքստ, բուլյան արժեք,զանգված կամ undifined) վերագրել փոփոխականի մեջ նույն ձև մենք կարող ենք օբյեկտը վերագրել փոփոխականի մեջ

// 3.Ի տարբերություն array(զանգված)-ի օբյեկտի բանալին ոչ թե index-ն է այսինքն թիվ է այլ տեքստ է
// array(զանգված)-ը հիմնականում օգտագործվում է հերթականություն պահպանելու համար այդ պատճառով իր բանալին index-ն է, որը սկսվում է 0-ից և գնում է առաջ 0,1,2 և այլն

// let x = [];
// x[0] = 7;
// x[5] = "hi";
// alert(x[0]);

// կտպի 7

// օբյեկտի բանալին տեքստ է ու հերթականություն չկա այսինքն եթե զանգված(array)-ի մեջից մենք արժեք վերցնում էինք թե այդ արժեքը որերրորդն է զանգվածում(նույն գրելաձևով մենք կարող էինք ասել x-րդ անդամի արժեքը թող լինի էս արժեքը վերագրելով ետ արժեքը էտ կոնցեպտի մեջ ) օբյեկտի դեպքում մենք ստեղծում ենք տեքստային անուն և իրեն ընդամենը ասում ենք էս անունը թող լինի էս արժեքի անունը և հետո ապագայում եթե ուզում ենք օգտագործել այդ արժեքը, այդ արժեքը վերցնում ենք իր անունով

// let y = {};
// y["age"] = 10;
// y["name"] = "hakob";
// y["phone"] = "098 234363";
// alert(y["age"]);
// alert(y);
// կտպի 10 հետո [object Object]

// մենք ստեղծեցինք օբյեկտ վերագրեցինք y անունով փոփոխականի մեջ(object-ի անունը դարձավ y) և հետո y անունով օբյեկտի մեջ ստեղծեցինք age անուն որի մեջ վերագրեցինք արժեք 10(10 արժեքի անունը եղավ age), name անուն որի մեջ վերագրեցինք արժեք "hakob"("hakob" արժեքի անունը եղավ name), phone անուն որի մեջ վերագրեցինք արժեք "098 234363"("098 234363" արժեքի անունը եղավ phone)


// 4.Օբյեկտ(object)-ի մեջ արժեք ավելացնում ենք միանգամից այդ արժեքին համապատասխան անուն ստեղծելով

// let x = {"age":10, "name":"hakob"};
// alert(x["age"]);
// alert(x.name);
// կտպի 10 հետո hakob

// մենք կարող ենք նաև արժեքին անուն հայտարարել առանց երկու ստորակետների եթե մեր ստեղծած անունը համապատասխանում է բոլոր օրենքներին որը մենք ունենք փոփոխական ստեղծելուց

// let x = {age:10, name:"hakob"};
// alert(x["age"]);
// alert(x.name);
// կտպի 10 հետո hakob


// 5.Մենք գիտենք որ օբյեկտը(object)-ը արժեք է և իր մեջ մենք կարող ենք ստեղծել արժեքներ(միանգամից համապատասխան անուն ստեղծելով)
// դա նշանակում է որ օբյեկտ(object)-ի մեջ որպես արժեք մենք կարող ենք ստեղծել օբյեկտ(object)(միանգամից համապատասխան անուն ստեղծելով) քանի որ նա նույնպես արժեք է ինչպես որ մնացած արժեքները

// let y = {age:10, name:"hakob"};
// y["phone"] = "098 234363";
// y["address"] = {};

// 6.Մենք օբյեկտը(object)-ի մեջից արժեք վերցնում էինք օբյեկտը(object)-ը վերագրած փոփոխականի կողքը դնելով ուղիղ փակագծեր և մեջը նշելով այն արժեքի անունը որը ուզում էինք վերցնել
// եթե մենք ուզում ենք օբյեկտը(object)-ի մեջ եղած օբյեկտը(object)-ի մեջից որևե արժեք վերցնել նշում ենք մեջի օբյեկտը(object)-ի հասցեն և կողքից դնելով ուղիղ փակագծեր մեջը նշում ենք այն արժեքի անունը որը ուզում ենք վերցնել օբյեկտը(object)-ի մեջի օբյեկտը(object)-ի մեջից

// let y = { age:10, name:"hakob", address:{city:"yerevan", street:"baghramyan"} };
// alert(y["age"]);
// alert(y["address"]["city"]);
// alert(y["address"]["street"]);

// կտպի erevan հետո baghramyan

// 7.օբյեկտը(object)-ը օգտակար է հիմնականում որպեսզի ինֆորմացիանները որը իրար հետ կապ ունեն փաթեթաորվեն մի տեղ որպեսզի մենք չունենանք մի հատ մեծ ցուցակ փոփոխականների այլ փորձենք խմբաորել իրենց ինչ-որ խմբակների մեջ

// let person = {
// name: "Jon",
// age: 46,
// address: {
// city: "Yerevan",
// street: "Arshakunyac",
// aprtNum: 52
// },
// friends: [
// {
// name: "Mike",
// age: 23
// },
// {
// name: "Jane",
// age: 34
// }
// ]
// };

// մենք ունենք մի օբյեկտ(object), որը նկարագրում է ինֆորմացիա մի մարդու մասին, ասում է էս մարդը ունի էս անունը, էս տարիքը, էս հասցեն, ունի ընկերներ, ընկերները իրենց առանձին օբյեկտ(object)-ներն են որոնց մեջ ունեն իրանց մասին ինֆորմացիա

// սա այն կոնցեպտն է թե ինֆորմացիան ինչպես ենք արտհայտում կոդի մեջ, սրա մեջ այն ամենն է ինչի մաասին մենք անցելենք, և այս ամենը կպցնելով իրար ստանում ենք մի շատ հետաքրքիր մեխանիզմ որով կարող ենք նկարագրել ցանկացած ինֆորմացիա ցանկացած բանի մասին

// և ցանկացած ծրագիր որ մենք կգրենք մենք պետք է ունենանք ինֆորմացիա և հետո այդ ինֆորմացիայի վրա ստանանք են մնացածը որ մենք ուզում ենք




// Վարժություն


// let f = function(num) {
// return num * 2;
// };

// let x = [
// {
// y: [f(1), f(10)]
// },
// {
// z: {
// a: {
// b: [f(7), f(9)]
// },
// c: {
// z: [f(20), f(12), f(21)]
// }
// }
// },
// 20,
// [
// [7, 5, 2]
// ],
// f
// ];

// alert(x[0].y[1] + x[3][0][2] + x[2] + x[4](5));



// das 18 //


// JAVASCRIPT - Զանգվածի forEach մեթոդը(Array forEach)


// 1.forEach ֆունկցիայի փակագիծների մեջ տալիսենք զանգված ու ֆունկցիա ու նա աշխատացնում է այդ ֆունկցիան այդ զանգվածի ամեն անդամի համար

// 2.forEach ֆունկցիան որ կանչում ենք և տալիս ենք զանգված ու ֆունկցիա նա
// 1.forEach ֆունկցիան կատարում է իրեն տված ֆունկցիաի գործողությունը այնքան անգամ ինչքան որ իրեն տված զանգվածի մեջի անդամների քանակն է քանի որ forEach-ին տված ֆունկցիան forEach-ի մեջ մենք կանչում ենք մի ցիկլի մեջ որը սկսվում և ավարտվում է երբ որ առաջի անդամի index-ը մեկով ավելանալով ամեն պտույտին հասնում է զանգվածի երկարությանը
// 2.forEach ֆունկցիան կատարելով իրեն տված ֆունկցիայի գործողությունը առաջի անգամ ստանում է forEach ֆունկցիաին տված զանգվածի առաջին անդամը և ամեն անգամ կատարելուց այդ գործողությունը հաջորդ անդամը քանի որ forEach ֆունկցիաին տված ֆունկցիան forEach-ի մեջ կանչելուց տալիս էինք զանգվածի i-րդ անդամը որը սկսվում է 0-ից և ամեն անգամ մեկով ավելանալով ավարտվում է երբ որ այդ թիվը հասնում է վերջի անդամի index-ին

// let forEach = function(arr, fun) {
// let i = 0;
// while(i < arr.length) {
// fun(arr[i]);
// i = i + 1;
// };
// };

// forEach([5, 3, 1], function(val){alert("what is great number " + val);});

// 3.forEach ֆունկցիան արդեն կա զանգվածին կպած և պետք չի իրա լոգիկան գրենք այլ կարող ենք ուղղակի կանչել և նա կանի իրեն տված ֆունկցիայի գործողությունը էն զանգվածի ամեն մի անդամի համար որին ինքը կպածա

// [5, 20, 44].forEach(function(val, i) { alert("what a great number " + val + " which is at index " + i ); });

// կտպի what a great number 5 which is at index 0
// հետո what a great number 20 which is at index 1
// հետո what a great number 44 which is at index 2


// (forEach ֆունկցիաին տված ֆունկցիան տված երկրոդ փոփոխականը ամեն անգամ գործողությունը անելուց վերցնում է վերցրած ամդամի index-ը )




// Վարժություն


// let a = [3, 7, 2, 4];

// let f = function(a) {
// return a + 2;
// };

// let z = 0;
// a.forEach(function(val) {
// z = z + f(val) + 2;
// });

// let f2 = function(d) {
// return f(d) + f(d);
// };

// let f3 = function(d) {
// return f2(d) + 1;
// };

// alert(f(f3(f2(z))));



// das 19 //

// JAVASCRIPT - Զանգվածի map մեթոդը(Array map)

// 1.map ֆունկցիայի (նույն ձև ոնց forEach ֆունկցիային) տալիս ենք զանգված ու ֆունկցիա և մեր տված ֆունկցիան
// աշխատելով այնքան անգամ որքան մեր տված զանգվածի մեջ եղած անդամների քանակն է և ամեն անգամ ստանալով մեր տված զանգվածի անդամները հերթականությամբ
// ամեն անգամ ինչ արժեք որ վերադարձնում է, map ֆունկցիայի մեջ վերագրվում է նոր զանգվածի նույն index-ի մեջ, հին զանգվածը չի փոխվում, և map ֆունկցիան վերադարձնում է մեզ այդ նոր զանգվածը

// let zoo = [5, 2, 3];
// let map = function(arr, fun) {
// let r = [];
// let i = 0;
// while(i < arr.length) {
// r[i]=fun(arr[i]);
// i +=1;
// };
// return r
// };

// alert(zoo.map(function(val) {
// return val * 3;
// }));
// alert(zoo);
// կտպի 15,6,9 հետո 5,2,3



// das 20 //

// JAVASCRIPT - Զանգվածի filter մեթոդը(Array filter)


// 1.filter ֆունկցիային տալիս ենք զանգված ու ֆունկցիա և մեր տված ֆուկցիան
// աշխատելով այնքան անգամ որքան մեր տված զանգվածի մեջ եղած անդամների քանակն է և ամեն անգամ ստանալով մեր տված զանգվածի անդամները հերթականությամբ
// այն արժեքները որի ժամանակ աշխատացնելուց վերադարձնում է true արժեք, այդ արժեքները filter ֆունկցիայի մեջ վերագրվում է նոր զանգվածի մեջ հերթականությամբ(քանի որ այդ արժեքները վերագրվում է նոր զանգվածի i index-ի մեջ որը սկսվում է 0-ից և ավելանում է մեկով միայն այն դեպքում երբ որ filter ֆունկցիային տված ֆունկցիան վերադարձնում է true արժեք) և filter ֆունկցիան մեզ վերադարձնում է այդ նոր զանգվածը

// let a = [7, 99, 22, 34, 22, 93, 101];

// let filter = function(arr, fun) {
// let filteredArr = [];
// let i = 0;
// arr.forEach(function(val){
// if(fun(val)) {
// filteredArr[i] = val;
// i += 1;
// };
// });

// return filteredArr
// };

// alert(filter(a, function(val){
// return val % 2 === 0;
// }));




// Վարժություն


// 1.Տպեք են մարդկանց անունները որոնց տարիքը 18-ից բարձր են

// let people = [
// {
// name: "Joe",
// age: 34
// },
// {
// name: "Mike",
// age: 22
// },
// {
// name: "Jane",
// age: 12
// }
// ];

// let result = people.filter(function(person){return person.age > 18}).map(function(person){return person.name});

// alert(result);



// das 21 //
// JAVASCRIPT - Object, JSON, localStorage

// 1.Object.keys();
// keys ֆունկցիան կցած է մի հատ object-ի որի անունը Object է, որը վերցնում է մի object և վերադարձնում է մի զանգված որի մեջ կա մեր տված object-ի բոլոր բանալիները

// let a = {
// name: "joe",
// age: 39,
// phone: "82348234"
// };

// alert(Object.keys(a));
// կտպի name,age,phone


// 2.Object.values();
// values ֆունկցիան կցած է մի հատ object-ի որի անունը Object է, որը վերցնում է մի object և վերադարձնում է մի զանգված որի մեջ կա մեր տված object-ի բոլոր արժեքները

// let a = {
// name: "joe",
// age: 39,
// phone: "82348234"
// };

// alert(Object.keys(a));
// կտպի joe,39,82348234

// 3.JSON.stringify();
// stringify ֆունկցիան կցած է մի հատ object-ի որի անունը JSON է, որը վերցնում է մի object և վերադարձնում է մեր տված object-ի տեքստային տարբերակը

// let a = {
// name: "joe",
// age: 39,
// phone: "82348234"
// };

// alert(JSON.stringify(a));
// կտպի {"name":"Joe","age":39,"phone":"82348234"}


// 4.JSON.parse();
// parse ֆունկցիան կցած է մի հատ object-ի որի անունը JSON է, որը վերցնում է object-ի տեքստային տարբերակը և վերադարձնում է իրենից ստեղծած object

// let a = {
// name: "joe",
// age: 39,
// phone: "82348234"
// };

// let str = JSON.stringify(a);

// let b = JSON.parse(str);

// alert(b);
// կտպի [object, Object]

// // ???? JSON.stringify արած object-ը JSON.parse արածը հավասար չի գրած տեքստային object-ը JSON.parse արածի հետ


// 5.localStorage.setItem(.., ..);
// setItem ֆունկցիան կցած է մի հատ object-ի որի անունը localStorage է, որը վերցնում է ինչ որ մի բանալի և ինչ որ մի արժեք և բրաուզերի մեջ ասում է մեր տված բանալին թող լինի մեր տված արժեքի բանալին

// let a = {
// name: "joe",
// age: 39,
// phone: "82348234"
// };

// let str = JSON.stringify(a);

// localStorage.setItem("test1", str);

// 6.localStorage.getItem(..);
// getItem ֆունկցիան կցած է մի հատ object-ի որի անունը localStorage է, որը վերցնում է ինչ որ մի բանալի և վերադարձնում է այն արժեքը որը համապատասխանում է մեր տված բանալուն

// let a = {
// name: "joe",
// age: 39,
// phone: "82348234"
// };

// let str = JSON.stringify(a);

// localStorage.setItem("test1", str);

// let d = localStorage.getItem("test1");

// let obj = JSON.parse(d);

// alert(obj.name);

// կտպի joe




// das 22 //

// JAVASCRIPT - JSON 2


// 1.JSON.stringify ֆունկցիան բացի object-ից վերցնումա եվս երկու հատ պարամետր(արժեք)
// երկրորդ տրվող պարամետրը պետք է լինի ֆունկցիա, որը հնարաորությունա տալիս փոխել այդ տեքստի վիճակը, դրա մասին պետք չի խոսել այսօր,(այդ պատճառով undifined կտանք երկրորդ արժեքը)
// երրորդ պարամետրը որոշումա թե մեջի տարածքը ինչքանովա ներս գալի

// let a = {
// name: "Joe",
// phone: 838383,
// friend: [
// "Mike", "Jine", "Carol"
// ]
// };

// alert(JSON.stringify(a, undefined, 20));

// 2.JSON.stringify-ը միայն տեքստավորումա ինֆորմացիա, function-ի մեջ քանի որ լոգիկայա, իրան չի տեքստավորում
// let a = {
// name: "Joe",
// phone: 838383,
// friend: [
// "Mike", "Jine", "Carol"
// ],
// sayHi: function() {
// alert("hi");
// }
// };

// alert(JSON.stringify(a, undefined, 20));

// կտպի let a = {
// "name": "Joe",
// "phone": 838383,
// "friend": [
// "Mike", "Jine", "Carol"
// ]
// };

// 3.պահեք ձեր ինֆորմացիան առանձին object-ներում պահեք ձեր լոգիկան(function-ները) առանձին object-ներում և JSON.stringify անելուց միայն ինֆորմացիան տեքստաորեք որպեսզի հետո կարողանաք հետ կարդալ JSON.parse-ով
// let n = {
// f: function() {

// },
// c: function() {

// }
// };



// das 23 //

// JAVASCRIPT - Ֆունկցիաների հայտարարման ձևերը


// 1.let a = function() {
// alert("hi");
// };

// a();


// b();

// function b() {
// alert("hi");
// };

// ֆունկցիաները ստեղծելու այս երկու մոտեցումն էլ ճիշտ են և երկու տարբերակնել օգտագործում են ուղղակի էն ֆունկցիաները որոնք որ կոնկրետ ստեղծված են էս ձևով որտեղ որ գրված է function հետո իրա անունը և մնացածը ցանկացած տեղ թե իրա վերևը թե իրա ներքևը կարող եք օգտագործել ի տաբերություն էն ֆունկցիաների որոնք որ վերագրված են ինչ որ փոփոխականի որոնց որ կարելիյա օգտագործել իրանց հայտարարությունից ներքև



// das 24 //

// JAVASCRIPT - Փոփոխականների հայտարարման տարբերությունները(var, let, const)


// 1.let-ով ստեղծված փոփոխականին կարողեք օգտագործել միայն իրան ստեղծելու պահից հետո և միայն իրան կարողեք օգտագործել նույն block scope-ի մեջ այսինքն իրա սահմանում

// 2.let-ը և const-ը ամենինչով նույն են,
// const-ով ստեղծված փոփոխականին կարողեք օգտագործել միայն իրան ստեղծելու պահից հետո և միայն իրան կարողեք օգտագործել նույն block scope-ի մեջ այսինքն իրա սահմանում,
// բացի նրանից որ let-ի արժեքը կարելի է փոխել իսկ const-ի արժեքը ոչ

// 3.var-ով ստեղծված փոփոխականին կարողեք օգտագործել ամեն տեղ իրա սահմանում ,սահմանը var-ով ստեղծված փոփոխականների դա ֆունկցիան է որի մեջ նա ստեղծվել է,
// var-ի ժամանակ երբ որ մենք աշխատացնում ենք կոդը,տակից այն կոդի մասը որը աշխատացնում է մեր կոդը վերցնումա և քցումա վերև բայց որտեղ վերև, վերև միչև ամենամոտ ֆունկցիան որ նա ստեղծվել է

// const f = function() {
// alert(b)
// let a = 5;
// if(a > 0) {
// var b = 7;
// alert(a + b);
// }
// alert(b)
// };

// f()

// կտպի undifined հետո 12 հետո 7



// das 25 //

// JAVASCRIPT - ԶԱՆԳՎԱԾԻ reduce մեթոդը(Array reduce(նվազեցնել))


// 1.reduce ֆունկցիային տալիս ենք զանգված, ֆունկցիա ու նախնական արժեք և մեր տված ֆուկցիան
// աշխատելով այնքան անգամ որքան մեր տված զանգվածի մեջ եղած անդամների քանակն է, և ամեն անգամ ստանալով մի փոփոխական (որի արժեքը առաջի անգամ ֆունկցիան կանչելուց կլինի մեր մեր տված նախնական արժեքը և ամեն անգամ ինչ արժեք որ կվերդարձնի քանի որ ամեն անգամ ինչ արժեք որ վերադարձնում է, reduce ֆունկցիայի մեջ վերագրվում է այդ փոփոխականի մեջ), և մեր տված զանգվածի անդամները հերթականությամբ
// ամեն անգամ ինչ արժեք որ վերադարձնում է, reduce ֆունկցիայի մեջ վերագրվում է իրեն տված առաջի փոփոխականի մեջ
// մեջ և reduce ֆունկցիան վերադարձնում է մեզ այդ փոփոխականը

// 2.Եթե երրորդ արժեք չենք փոխանցում, իր նախնական արժեքը զանգվածի առաջին արժեքն է լինում և ֆուկցիան անմիջապես կանչվում է երկրորդ արժեքից սկսած քանի որ reduce ֆունկցիայի մեջ մենք ասում ենք եթե երրորդ արժեքը լինի undifined ապա զանգվածի առաջի արժեքը վերագրում ենք նախնական արժեքի մեջ

// function reduce(arr, fun, aggr) {
// arr.forEach(function(val, i) {
// if(i === 0 && aggr === undefined) {
// aggr = val;
// } else{
// aggr = fun(aggr, val, i);
// }
// })
// return aggr
// }

// alert(reduce([5, 9, 10], function(aggr, val, i) {
// return aggr + val
// }));



// 3.շատ կարևոր է երբ որ դուք կոդ եք գրում որ դուք ճիշտ հասկանաք խնդիրը որ դուք ուզում եք լուծեք
// 1.եթե ձեր խնդիրը եղած զանգվածը վերածել ինչ որ նոր զանգվածի ապա այդ ժամանակ դուք պետք է օգտագործեք map-ը
// 2.եթե դուք ունեք զանգված որը պետքա filter-ացնել այսինքն զանգվածից ինչ որ կոնկրետ արժեքներ վերցնել օգտագործեք filter ֆունկցիան
// 3.եթե դուք ունեք զանգված որի մեջ կան տարբեր արժեքներ բայց դուք ուզում եք ստանաք մի արժեք(թե դա object է թե դա ուրիշ զանգված է ...),եթե շատից ուզում եք քիչ ստանաք ապա այդ ժամանակ օգտագործում եք reduce
// 4.և մնացած բոլոր ուղղակի ցիկլով անցնելու խնդիրները կարող ենք լուծենք forEach-ով
// ճիշտ գործիքը պետքա օգտագործել ճիշտ իրավիճակի մեջ



// das 26 //

// JAVASCRIPT - Ցիկլեր(loops)


// 1.while

// let i = 0;
// while(i < 10) {
// i += 1;
// };


// 2.for

// լոգիկան while-ի և for-ի լրիվ նույնա, ուղղակի for-ը while loop-ի երեք մասը (այսինքն փոփոխական ստեղծելը, բուլյան արժեքի ստուգումը, և էտ փոփոխականը ամեն ցիկլից հետո փոխելը ձևաորում է մի տեղ) որպեսզի ավելի հեշտ կարդացվի

// for(let x = 0; x < 10; x +=1) {
// }


// 3. do while(արա քանի դեռ)

// do while loop-ը սկզբից իրա բլոկը աշխատացնումա հետո նոր ստուգումա while-ի բուլյան արժեքը որպեսզի հասկանա նորից աշխատացնի բլոկը թե ոչ այսինքն նույնիսկ եթե while-ը ուղղակի false լինի ինքը միևնույնա գոնե մի անգամ կաշխատի
// do while-ի ու while-ի տարբերությունը զուտ են է որ էս բլոկը անպայման գոնե առաջին անգամ կաշխատի իսկ while-ի դեպքում եթե while-ի բուլյան արժեքը false լինի ընդհանրապես բլոկը չի աշխատի

// do {
// alert("hi")
// } while(false)


// let i = 0;
// do {
// alert("Hi")
// i += 1
// } while (i < 5);



// JAVASCRIPT - Ավելացնել և նվազեցնել(++ և --)


// 1.
// let i = 0;

// // i++ // i += 1; // i = i + 1

// i++ -ը դա նույն է ինչպես որ i += 1 որը նույն է ինչպես որ անենք i = i + 1


// 2.
// տարբերությունը ++i -ի և i++ -ի նա է որ

// let i = 0;
// let x = i++;
// alert(x);

// կտպի 0

// i++ -ը սկզբից պահպանում է իր արժեքը հետո նոր է ստանում էտ +1 -ը
// այսինքն եթե մենք վերագրենք i++ -ը x-ին մենք վերագրում ենք i-ի արժեքը որովհետև ինքը սկզբից i-ն է ընդունում հետո նոր է ++ արվում հետևաբար x-ի արժեքը կլինի 0

// իսկ եթե մենք ստեղ անենք ++i

// let i = 0;
// let x = ++i;
// alert(x);

// կտպի 1

// սա նշանակում է ինքը նախ և առաջ i-ը դարձնում է 1 հետո նոր իրա արժեքը օգտագործվում է օրինակ էս պարագայում մտնում է x-ի մեջ և այսպես աշխատացնում ենք ստանում ենք 1

// 3.իրականում այսպիսի գործողություն գրեթե երբեք չի արվում, հետևաբար սկզբից ++ անելը լրիվ անիմաստա
// ++i կամ --i -ը շատ մարդկանց ուղղակի երբ որ կարդում են ձեր կոդը խճճում է ուզում են հասկանան ինչու արեց ++i ոչ թե i++ կարողա ինչ որ յուրահատուկ ինչ որ բան է անում կոդի մեջ որ էտ նուանսը էտ փոքր տարբերությունը պետք է գալիս
// այդ պատճառով մի օգտագործեք ++i կամ --i պետք չի, օգտագործեք i++ կամ i--



// das 27 //

// JAVASCRIPT - Զանգվածի մեթոդները(Array methods)


// JS 26

// 1.unshift ֆունկցիաին տալիս ենք զանգված ու ինչ որ արժեք և նա աշխատելով այնքան անգամ որքան մեր տված զանգվածի մեջ եղած անդամների քանակն է քանի որ unshift ֆունկցիայի մեջ մենք մեր գործողությունը անում ենք մի ցիկլի մեջ որը սկսվում և ավարտվում է երբ որ վերջի անդամի index-ը մեկով պակասելով ամեն պտույտին հասնում է զանգվածի առաջի անդամի index-ին
// ամեն անգամ աշխատելուց զանգվածի (վերջի արժեքից սկսած) բոլոր արժեքները տեղափոխումա դեպի աջ քանի որ ամեն անգամ վերջի արժեքից սկսած ամեն արժեք վերագրվումա այդ զանգվածի իրենից մեկով ավել index-ում և ավելացնումա մեր տված արժեքը ամենասկզբից այսինքն 0 index-ում
// և նաև վերադարձնումա մեր տված զանգվածի մեջի անդամների քանակը(ավելի ճիշտ արդեն փոխած զանգվածի վերջի անդամի index-ը + 1)

// let x = [7, 10, 22];

// let unshift = function(arr, val) {
// let i = arr.length - 1;
// while(i >= 0) {
// arr[i + 1] = arr[i];
// i--; // i -= 1; // i = i - 1;
// }
// arr[0] = val;
// return arr.length
// };

// alert(unshift(x, 99));
// alert(x);

// կտպի 4 հետո 99,7,10,22


// 2. shift ֆունկցիաին տալիս ենք զանգված և նա ամենաառաջին արժեքը հանումա և մնացած բոլոր արժեքները բրդումա դեպի հետ, բրդումա դեպի ձախ
// և նաև ինքը բացի նրանից որ հանում է առաջին արժեքը ինքը նաև վերադարձնում է այդ արժեքը

// let x = [7, 10, 22];

// function shift (arr) {
// let a = x[0]
// x = arr.filter(function(val, i) {
// return i !== 0
// })
// return a
// }

// alert(shift(x));
// alert(x);

// կտպի 7 հետո 10, 22


// 3.push ֆունկցիաին տալիս ենք զանգված ու ինչ որ արժեք և նա ավելացնում է այդ արժեքը զանգվածի ամենավերջից

// let x = [7, 10, 22];

// function push (arr, value) {
// arr[arr.length] = value
// };

// push(x, 999);
// alert(x);

// կտպի 7, 10, 22, 999

// 4.pop ֆունկցիաին տալիս ենք զանգված և նա ամենավերջին արժեքը հանումա
// և նաև ինքը բացի նրանից որ հանում է վերջին արժեքը ինքը նաև վերադարձնում է այդ արժեքը

// let x = [7, 10, 22];

// function pop(arr) {
// let a = x[arr.length-1]
// x = arr.filter(function(val, i) {
// return i !== arr.length-1
// })
// return a
// }

// alert(pop(x));
// alert(x);

// կտպի 22 հետո 7, 10


// ուրեմն մենք ունենք չորս հատ ֆունկցիա
// 1. unshift որը ավելացնումա
// 2. shift որը հանում է ձախ կողմից
// 3. push որը ավելացնում է
// 4. pop որը որ հանում է աջ կողմից
// և էտ ամենը ուրեմն կա արդեն կցած զանգվածի վրա և մենք կարող ենք նրանց օգտագործենք

// let x = [7, 10, 22];
// alert(x.unshift(99));
// alert(x);
// կտպի 4 հետո 99,7,10,22

// let x = [7, 10, 22];
// alert(x.shift());
// alert(x);
// կտպի 7 հետո 10, 22

// let x = [7, 10, 22];
// x.push(999);
// alert(x);
// կտպի 7, 10, 22, 999

// let x = [7, 10, 22];
// alert(x.pop());
// alert(x);

// կտպի 22 հետո 7, 10


// 5.concat ֆունկցիաին տալիս ենք երկու զանգված և նա նոր զանգվածի մեջ ավելացնումա բոլոր արժեքները առաջի զանգվածի և բոլոր արժեքները երկրորդ զանգվածի և վերադարձնումա այդ նոր զանգվածը

// let x = [7, 10, 22];
// let y = [88, 23, 19];

// let concat = function(a, b) {
// let result = [];
// a.forEach(function(val) {
// result.push(val)
// });
// b.forEach(function(val) {
// result.push(val)
// })
// return result
// };

// alert(x.concat(y))

// կտպի 7, 10, 22, 88, 23, 19

// 6. findIndex ֆունկցիաին տալիս ենք զանգված ու ֆունկցիա և մեր տված ֆունկցիան
// աշխատելով այնքան անգամ որքան մեր տված զանգվածի մեջ եղած անդամների քանակն է և ամեն անգամ ստանալով մեր տված զանգվածի անդամները հերթականությամբ
// այն արժեքը որի ժամանակ աշխատացնելուց findIndex ֆունկցիային տված ֆունկցիան վերադարձնի true, findIndex ֆունկցիան մեզ կվերադարձնի այդ արժեքի index-ը


// let x = [7, 10, 22, 55, 100, 3, 10];

// let findIndex = function(arr, fun) {
// let i = 0;
// while(i < arr.length) {
// if(fun(arr[i])) {
// return i;
// }
// i++;
// }
// return -1
// };

// alert(findIndex(x, function(val) {
// return val === 10
// }))
// կտպի 1

// 7.find ֆունկցիաին տալիս ենք զանգված ու ֆունկցիա և մեր տված ֆունկցիան
// աշխատելով այնքան անգամ որքան մեր տված զանգվածի մեջ եղած անդամների քանակն է և ամեն անգամ ստանալով մեր տված զանգվածի անդամները հերթականությամբ
// այն արժեքը որի ժամանակ աշխատացնելուց findIndex ֆունկցիային տված ֆունկցիան կվերադարձնի true , find ֆունկցիան մեզ կվերադարձնի այդ արժեքը

// x = [7, 10, 22, 55, 100, 3, 10];

// let find = function(arr, fun) {
// let i = arr.findIndex(fun);
// if(i !== -1) {
// return arr[i]
// }
// return undefined
// };

// alert(find(x, function(val) {
// return val > 50;
// }));

// կտպի 55




// das 28 //

// JAVASCRIPT - Տեքստի մեթոդները(String methods)


// 1. toUpperCase ֆունկցիային տալիս ենք տեքստ և նա վերադարձնում է նոր տեքստ որը մեր տված տեքստն է ամբողջովին մեծատառ (մեր տված տեքստը չի փոխում)

// let a = "Hello World";
// let b = a.toUpperCase();
// alert(a);
// alert(b);

// կտպի Hello World հետո HELLO WORLD

// 2.toLowerCase ֆունկցիային տալիս ենք տեքստ և նա վերադարձնում է նոր տեքստ որը մեր տված տեքստն է ամբողջովին փոքրատառ (մեր տված տեքստը չի փոխում)

// let a = "Hello World";
// let b = a.toLowerCase();
// alert(a);
// alert(b);

// կտպի Hello World հետո hello world

// 3.substring ֆուկցիային տալիս ենք երկու index և նա վերադարձնում է այդ երկու index-ի մեջտեղի տեքստը (մեր տված տեքստը չի փոխում)
// substring ֆուկցիան իրեն տված առաջի index-ը կարդումա բայց իրեն տված երկրորրդ index-ի արժեքը նա չի կարդում ինքը կարդումա մինչև այդ index-ը

// let a = "Hello World";
// let b = a.substring(2, 5);
// alert(a);
// alert(b);

// կտպի Hello World հետո llo


// 4.split ֆուկցիային տալիս ենք տեքստ(string) և մի արժեք որով ուզում ենք բաժանենք այդ տեքստը ըստ իրեն տված այդ արժեքի և նա վերադարձնումա զանգված որի մեջ կան այդ դետալները(մեր տված տեքստը չի փոխում)
// a = "Hello World";
// let b = a.split(" ");
// alert(a);
// alert(b);

// կտպի Hello World հետո Hello,World

// 5. join ֆունկցիային տալիս ենք զանգված և մի արժեք և նա վերադարձնում է մի տեքստ որի մեջ այդ զանգվածի բոլոր անդամներն են (այսինքն նա կպցնում է բոլոր արժեքները իրար որպես տեքստ այսինքն տեքստաորում է բոլոր անդամները և կպցնում է իրար (երկրորդ արժեքը որոշում է երբ որ կպցնում է իրար իրանց մեջտեղները ինչ պետքա լինի) ), (մեր տված տեքստը չի փոխում)

// let a = ["Joe", "Shmoe", "Roubeni"];
// alert(a);
// alert(a.join(" "));

// կտպի Joe,Shmoe,Roubeni հետո Joe Shmoe Roubeni

// 6. replaceAll ֆունկցիային տալիս ենք տեքստ երկու արժեք և նա այդ տեքստի մեջի երկրորդ արժեքը փոխարինումա երրորդ արժեքով և վերադարձնումա այդ տեքստը (մեր տված տեքստը չի փոխում)

// let a ="Who is the bomb";
// let b = a.replaceAll("bomb", "best person ever");
// alert(b);

// կտպի Who is the best person ever

// 7.search ֆունկցիային տալիս ենք տեքստ և մի արժեք և նա վերադարձնում է index որի մեջ կա այդ արժեքը եթե չգտնի կվերդարձնի -1(-1 որովհետև -1 index չկա)

// let a = "This person went to the store and purchased a car";

// let b = a.search("store");
// alert(b);

// կտպի 24


// ըտենց ֆունկցիա գոյություն չունի որը string-ին փոխի բոլոր ֆունկցիաները տալիսա ձեզ նոր տեքստ ինքը եղած տեքստը երբեք չի փոխում



// das 29 //

// JAVASCRIPT - Մաթեմաթիկական ֆունկցիաներ(Math functions)


// Math object-ին կցած են որոշ ֆունկցիաներ որոնք որ հնարաորություն են տալիս որոշ մաթեմաթիկական գործողություններ անել


// 1. round ֆունկցիային տալիս ենք թիվ և նա այդ թիվը կլորացնում

// alert(Math.round(3.5));

// կտպի 4


// 2. floor(հատակ) ֆունկցիան թիվը կլորացնում է դեպի ներքև

// alert(Math.floor(3.9));

// կտպի 3


// 3. ceil(առաստաղ) ֆունկցիան թիվը կլորացնում է դեպի վերև

// alert(Math.ceil(3.1))

// կտպի 4


// 4. min ֆունկցիաին տալիս ենք թվեր և նա վերադարձնում է ամենափոքր թիվը

// alert(Math.min(5, 47, 18, 3));

// կտպի 3


// 5. max ֆունկցիաին տալիս ենք թվեր և նա վերադարձնում է ամենամեծ թիվը

// alert(Math.max(3, 10, 20, 5));

// կտպի 20


// 6. pow ֆունկցիային տալիսենք երկու թիվ և նա վերադարձնում է առաջի թվին բարձրացրած երկրորդ թվի աստիճանը

// alert(Math.pow(2, 3));

// կտպի 8


// 7.random(պատահական) ֆունկցիան վերադարձնում է որևէ թիվ 0-ից մինչև 1-ը ընկած սահմանում

// alert(Math.random());

// կտպի 0 կամ 0,..



// das 30 //

// JAVASCRIPT - Վարժություններ


// 1.Գրել ֆունկցիա transform անունով, որը կստանա օբյեկտներից կազմված զանգված այլ տեսքի

// [
// {fn: "Joe", In: "Mikayelyan", ph: "039 323 233", gender: "male"},
// {fn: "Mike", In: "Hovsepyan", ph: "039 323 233", gender: "male"},
// {fn: "Jane", In: "Karapetyan", ph: "039 323 233", gender: "female"},
// {fn: "Jill", In: "Isahaknyan", ph: "039 323 233", gender: "female"}
// ]
// ֆունկցիան պետք է զանգվածից ստանա միայն այն արժեքները, որոնց gender-ի արժեքը "female" է,
// և վերադարձնի այդ օբյեկտներից կազմված զանգված հետևյալ տեսքի
// [
// {firstName: "Jane", lastName: "Karapetyan", phone: "039 323 233", gender: "female" },
// {firstName: "Jill", lastName: "Ishakyan", phone: "039 323 233", gender: "female" }
// ]
// // Օրինակ'
// Transform([
// {fn: "Joe", In: "Mikayelyan", ph: "039 323 233", gender: "male"},
// {fn: "Mike", In: "Hovsepyan", ph: "039 323 233", gender: "male"},
// {fn: "Jane", In: "Karapetyan", ph: "039 323 233", gender: "female"},
// {fn: "Jill", In: "Isahaknyan", ph: "039 323 233", gender: "female"}
// ])
// վերադարձնում է'
// [
// {firstName: "kate", lastName: "Karapetyan", phone: "039 323 233", gender: "female" },
// {firstName: "Jill", lastName: "Isahakyan", phone: "039 323 233", gender: "female" }
// ]

// 2.Ստեղծել ֆունկցիա, getAvgAgeByColor անունով, որը որպես արգումենտ ստանում է զանգված, որի ամեն անդամը օբյեկտ է որտեղ գրված է մարդու մասին ինֆորմացիա (անուն, տարիք, մազերի գույն) և ստանում է երկրորդ արգումենտ մազերի գույն։ Ֆունկցիան պետք է վերադարձնի միջին տարիքը այն մարդկանց ում մազերի գույնը համապատասխանում է երկրորդ արգումենտով փոխանցված գույնին։

// օրինակ։
// getAvgAgeByColor([
// {name: "Joe", age: 13, hairColor: "red"},
// {name: "Mike", age 10, hairColor: "brown"},
// {name: "Jane", age: 4, hairColor: "red"},
// {name: "Susan", age: 30, hairColor: "brown"}
// ], "brown");
// պետք է վերադարձնի 20, միջին տարիքը այն մարդկանց ում մազերի գույնը շականակագույն է։


// 3.Ստեղծել ֆունկցիա getPersonWithMostFriendsByName անունով, որը որպես արգումենտ ստանում է զանգված, որի ամեն անդամը օբյեկտը է որտեղ գրված է մարդու մասին ինֆորմացիա (անուն, ընկերների ցուցակ) և ստանում է երկրորդ արգումենտ անուն։ Ֆունկցիան պետք է վերադարձնի այն մարդու անունը ով ունի ամենաշատ քանակությամբ ընկերներ տրված անունով (երկրորդ արգումենտով փոխանցած անունը):

// getPersonWithMostFriendsByName([
// {
// name: "Joe",
// friends: [
// {name: "Susan", age: 12},
// {name: "Jane", age: 43},
// {name: "Susan", age: 33}
// ]
// },
// {
// name: "Liz",
// friends: [
// {name: "Mila", age: 12},
// {name: "Susan", age: 43},
// {name: "Jane", age: 33}
// ]
// },
// {
// name: "Mike",
// friends: [
// {name: "Susan", age: 12},
// {name: "Susan", age: 43},
// {name: "Susan", age: 33}
// ]
// }
// ], "Susan");
// պետք է վերադարձնի "Mike", քանի որ նա ունի ամենաշատ քանակությամբ ընկերներ Susan անունով։


// 4.Գրել ֆունկցիա removeAtIndex անունով, որը կստանա զանգված ու թիվ և կվերադարձնի նոր զանգված։ Նոր զանգվածը կպարունակի առաջինի բոլոր արժեքները, բացի մեր տված ինդեքսի արժեքը։

// Օրինակ

// removeAtIndex([5, 10, 15, 20], 2);
// վերադարձնում է [5, 10, 20]


// 5.Գրեք ֆունկցիա toNumber անունով, որն ընդունում է բինարյան string, այսինքն բինարյան թվանշաները որպես տեքստային արժեք, որն համարժեք է հաշվարկման երկուական համակարգի թվերին:
// Կարդացեք բինարյան թվերն աջից դեպի ձախ, բինարյան թվերի մասին կարող եք կարդալ գուգլից:

// Օրինակ

// toNumber("101") պետք է վերադարձնի 5
// toNumber("111") պետք է վերադարձնի 7



// 6.Հավելյալ ինֆորմացիա։
// Տրված նախադասության վրա կարող ենք օգտագործել search ֆունկցիան գտնելու մեզ հետաքրքրող տեքստի ինդեքսը: Օրինակ․
// "Hello world".search("world"); // կվերադարձնի 6
// եթե փնտրվող տեքստը առկա չէ նախադասության մեջ կվերադարձնի -1. Օրինակ:
// "Hello world".search("pizza"); // կվերադարձնի -1

// Օգտագործեք search ֆունկցիան ստեղծելու համար find ֆունկցիա, որը որպես արգումենտ ստանում է զանգված բաղկացած օբյեկտներից, և փնտրվող տեքստը որպես երկրորդ արգումենտ: Ֆունկցիան պետք է վերադարձնի զանգված, որը կպարունակի բոլոր այն օնյոկտները որոնց մեջ առկա է փնտրվող տեքստը որպես արժեք: Ենթադրեք որ արգումենտում ստացած զանգվածի օբյեկտները չունեն ներկառուցված(nested) օբյեկտներ կամ զանգվածներ:

// Հուշում: Օգտագործեք Object.keys, օբյեկտի բանալիները զանգվածի մեջ ունենալու համար, որոնց վրայով կարող եք ցիկլ պտտվել և գտնել համապատասխանողները

// Օրինակ:

// find([
// {name: "Apple", color: "red"},
// {name: "Banana", color: "yellow"},
// {name: "Orange", color: "orange"},
// {name: "Apple", color: "yellow"},
// ], "yellow");
// this should return [{ name: "Banana", color: "yellow"}, {name: "Apple", color: "yellow"}]

// find([
// {title: "White Fang", author: "Jack London"},
// {title: "The Adventures of Tom Sawyer", author: "Mark Twain"},
// ], "Twain");
// this should return [{title: "The Adventures of Tom Sawyer", author: "Mark Twain"}]


// 7.Ստեղծել ֆունկցիա magic անունով, որն ընդունում է օբյեկտ որը վերադարձնում նոր օբյեկտ, որտեղ բանալիները(keys) կդառնան արժեքներ(values) իսկ արժեքները(values) բանալիներ(keys):

// Օրինակ:

// magic({
// firstName: "Michael",
// lastName: "Jackson"
// });

// պիտի վերադարձնի:

// {
// Michael: "firstName",
// Jackson: "lastName"
// }


// 8.Ստեղծեք ֆունկցիա անվանեք diamond, որը կստեղծի տեքստ որը նման կլինի ադամանդի, որտեղ ադամանդի բարձրությունը ֆունկցիային տրված կենտ թիվն է:
// Տրված թիվը միշտ պետք է լինի դրական, կենտ և ամբողջ թիվ:

// Հուշում: Երբ նախադասության մեջ առկա է "\n" ապա այն տեղափոխելու է նոր տող

// Օրինակ:
// alert(diamond(5));
// Կվերադարձնի հետևյալը

// . . *
// . ***
// *****
// . ***
// . . *


// 9.Գրել ֆունկցիա pow անունով, որը կստանա երկու թիվ, և առաջին թիվը կբազմապատկի ինքն իրենով այնքան անգամ, որքան երկրորդ թիվն է: Չօգտագործել Math.pow() ֆունկցիան այլ գրել այն ինքնուրույն:

// Օրինակ:

// pow(5, 3); // վերադարձնում է 125 (5 * 5 * 5)
// pow(3, 2); // վերադարձնում է 9 (3 * 3)


// 10. Գրել ֆունկցիա reverse անունով, որը կստանա թիվ և կվերադարձնի նոր թիվ այդ թվի թվանշանները հակառակ շրջած:

// Օրինակ:

// reverse(123); // վերադարձնում է 321
// reverse(5829); // վերադարձնում է 9285

// 11. Վարժություն - նիշերի հաճախականություն

// Գտեք տրված սթրինգում տառերի/նիշերի ընդհանուր քանակը: Ալերթ պատուհանի դիալոգի մեջ տպեք, թե տպեք թե ինձ հաճախականությամբ է հանդիպում տվյալ տառը/նիշը:

// function alertFreq(str) {
// ... code ...
// }

// alert("h : 1");
// alert("e : 1");
// alert("l : 3");
// alert("o : 2");
// alert("- : 1");
// alert("w : 1");
// alert("d : 1");

// alertFreq("hello-world");



// das 31 //


// JAVASCRIPT - 'spread' օպերատոր (...)

// 1.spread օպերատորը զանգվածի անդամները հանում է դուրս առանձին որպես ուղղակի արժեքներ, (ոչ թե զանգվածի մեջ ընդգրկված արժեքներ այլ հենց բուն արժեքները առանձին այսինքն ինչ է ստացվում որ մենք իրա արժեքները վերցնում ենք և առանձնացնում ենք հանում ենք դուրս այսինքն սա նույն է ինչ որ մենք կանչէինք max-ը առանձին արժեքներով այսպես

// function max(x, y, ...val) {
// alert(val)
// }

// let a = [40, 50, 7, 8, 20]
// max(...a); // max(40, 50, 7, 8, 20)

// կտպի 7, 8, 20

// 2.Եթե մենք ֆունկցիաին տանք ուղղակի արժեքներ և երբ որ (ֆունկցիան այդ արժեքները ընդունելուց) այդ արժեքները հանդիպեն spread օպերատորի իրանք կվերածվեն և կվերագրվեն val(կամ ինչ որ փոփոխականի անուն) փոփոխականին

// այսինքն ինչ է ստացվում որ եթե մենք այստեղ alert անենք val մենք կտեսնենք որ val-ը իրականում զանգված է որի մեջ կա 7, 8, 20

// function max(...val) {
// alert(val)
// }

// max(7, 8, 20);

// կտպի 7, 8, 20

// 3.Մենք նույնը կարողենք անենք object-ներով
// Հիշեք որ spread անել նշանակումա զանգվածի կամ օբյեկտի ներքին արժեքները հանել դուրս

// Այսինքն այս դեպքում կտեսնենք

// let a = {
// name: "joe",
// phone: "994244"
// }

// let b = {
// lastname: "jackson",
// ...a
// }

// alert(JSON.stringify(b, undefined, 2));

// կտպի
// lastname: "jackson",
// name: "joe",
// phone: "994244"

// 4. a-ի մեջ կա name և phone մենք b-i մեջ ևս կարողենք ունենալ name
// հիշեք որ object-ի մեջ եթե հերթականությամբ ենք նայում վերջինը միշտ հաղթում է

// այսինքն այս դեպքում կտպի

// let a = {
// name: "joe",
// phone: "994244"
// }

// let b = {
// lastname: "jackson",
// ...a,
// name: "jack",
// }

// alert(JSON.stringify(b, undefined, 2));

// կտպի
// lastname: "jackson",
// name: "Jack",
// phone: "994244"


// այս դեպքում կտպի

// let a = {
// name: "Joe",
// phone: "994244"
// }

// let b = {
// name: "jack",
// lastname: "jackson",
// ...a
// }

// alert(JSON.stringify(b, undefined, 2));

// կտպի
// name: "Joe",
// lastname: "jackson",
// phone: "994244"




// Վարժություն


// Ստեղծել max անունով ֆունկցիա, որը կվերադարձնի տրված զանգվածի ամենամեծ թիվը

// Օրինակ:

// max([5, 28, 99, 23, 100, 32]); // վերադարձնում է 100


// 1.
// function max(arr) {
// let maxVal = arr[0];
// for(let i = 1; i < arr.length; i++) { const val=arr[i]; if(val> maxVal) {
// maxVal = val;
// }
// }
// return maxVal;
// };

// alert(max([5, 28, 99, 23, 100, 32]));

// կտպի 100


// 2.
// function max(arr) {
// return arr.reduce(function(aggr, val) {
// if(val > aggr) {
// return val;
// }
// return aggr;
// }, arr[0]);
// }

// alert(max([5, 28, 99, 23, 100, 32]));

// կտպի 100


// 3.
// function max(arr) {
// return arr.reduce(function(aggr, val) {
// return Math.max(aggr, val);
// }, arr[0]);
// }

// alert(max([5, 28, 99, 23, 100, 32]));

// կտպի 100


// 4.
// function max(arr) {
// return Math.max(...arr); // 5, 28, 99
// };

// alert(max([5, 28, 99, 23, 100, 32]));

// կտպի 100



// das 32 //

// JAVASCRIPT - console

// 1. Հիմնականում երբ որ մենք ուզում ենք ինչ որ ինֆորմացիա կարդալ կամ նայել մենք մինչև այսօր օգտագործում եինք alert ֆունկցիան, այսինքն անում եինք alert փոխանցում եինք ինչ որ մի արժեք հետո run էինք անում և տեսնում ենք մի հատ պատուհան

// 2. Եթե մենք որպես ծրագրավորող ուզում ենք ուղղակի մեզ համար ինչ որ ինֆորմացիա տպենք որպեսզի հետևենք և հասկանանք ինչ է կատարվում կարող ենք գրենք մի հատ ուրիշ տեղ ինչպես հիշում եք դեֆթուզի մեջ կար console որ եթե մեր կոդը չէր աշխատում ստեղ կարմիր գույնով ինչ որ սխալներ էին գրվում error-ներ էին գրվում
// պարզվումա մենք էլ կարող ենք այդտեղ գրենք նայեք ինչպես
// ուրեմն գոյություն ունի console օբյեկտ(object) դա օբյեկտ(object) է որին կցած են տարբեր ֆունկցիաներ որից մեկը log անունով ֆունկցիա է
// եթե մենք log-ը կանչենք և փոխանցենք մի արժեք հետո run անենք, console-ում կտպվի էտ մեր գրվածը
// console.log("hi"); // hi
// սա նրա համարա որ մենք մեր կոդը ուսումնասիրելուց եթե ուզում ենք ինչ որ մի ինֆորմացիա ուղղակի նկարենք մեզ համար որպեզ ծրագրաորողներ կարող ենք անմիջապես console-ում գրենք

// 3.մի քանի ձև կա console-ում գրելու
// 1. կա log որը ուղակի պարզ ինֆորմացիա Է
// console.log("hi"); // hi
// 2.եթե մենք ուզում ենք արտահայտենք որ ինչ որ խնդիրա եղել էլի մեզ համար, ծրագրաորողների համար, կարող ենք գրել error
// console.error("hi"); // կարմիր կգրվի hi
// 3. նաև կարող ենք անենք warn եթե ուզում ենք զգուշացնենք
// console.warn("hi") // դեղին կգրվի hi

// 4. էս ինֆորմացիան դա ծրագրաորողների համարա դա սովորական մեր ծրագիրը օգտագործողների համար չի, քանի որ իրանք չեն տեսնի, իրանք չգիտեն console-ը ինչա որտեղա և այլն իրանց չի էլ հետաքրքրում
// բայց եթե մենք ուզում մեր կոդի մեջ ինչ որ մի բան ստուգենք պարզա մի տարբերակը debugger-ով մտնելը և ուսումնասիրելը, բայց մեկ-մեկ ինչ որ շատ արագ ինչ որ ինֆորմացիայա գալիս գնում և այլն ու մենք ուզում ենք դա ուղղակի տպենք որպեսզի հետո ուսումնասիրենք թե ինչ ինֆորմացիայա եկել գնացել ոնցա փոխվել և այլն, դա մենք կարող ենք գրենք console-ում console.log-ով կամ կարող ենք օրինակ եթե ինչ որ խնդիրա առաջացել console.error գրենք որպեսզի ապագայում եթե մարդիկ ասեն մի րոպե իմ սիստեմը չի աշխատում կամ իմ ծրագիրը չի աշխատում բացենք console-ը և իր մեջ ուսումնասիրենք error-ները որ մեր ծրագիրը տպելա, որպեսզի հասկանանք ինչ եղավ ինչի չի աշխատում ինչ սխալներ ենք մենք թույլ տվել մեր լոգիկայի մեջ և այլն
// սա հարմար գործիք է սա ուղակի ևս մի գործիք է որ կարող եք ավելացնել ձեր գիտելիքներին որը հարմար է և իրան կարելի է հանգիստ օգտագործել

// այսինքն նայեք եթե մենք ուզում ենք օրինակ ստուգենք ասենք պատկերացրեք գրում ենք for loop

// for(let i = 0; i < 100; i++) {
// alert(i);
// };

// եթե մենք alert անենք i հարյուր անգամ մենք անընդհատ սենց մի հատ պատուհան կտա որը կսառացնի մնացած ապլիքեյշնը, բրաուզերը անընդհատ մենք պետք է օկեյ անենք ու հարյուր անգամ պետքա օկեյ անենք միչև ամենինչը տեսնենք իսկ եթե անենք ուղակի console.log(i) և run անենք
// for(let i = 0; i < 100; i++) {
// console.log(i);
// };

// միանգամից ինքը կտպի բոլոր թվերը հիմա հանգիստ կարելիա նստել եվ ուսումնասիրել առանց հարյուր անգամ օկեյ սխմելու


// նենց որ ինքը շատ հարմար բանա առաջարկումեմ որ օգտագործեք, սա օգտագործողների համար չի սա հենց ծրագրաորողների համարա նենց որ սա ընդունեք ևս մեկ գործիք



// das 33 //

// JAVASCRIPT - NaN(not a number(թիվ չէ))

// 1. javascript-ում կա ևս մի արժեք որը կոչվում է NaN(not a number(թիվ չէ)) սա նշանակումա թիվ չէ

// երբ է լինում էս տիպի արժեք ուրեմն պատկերացրեք մենք ունենք a որի մեջ դնում ենք 5 * undefined

// let a = 5 * undefined;

// բայց սա անտրամաբանական է այսինքն սրա արդյունքը թիվ չէ
// եկեք alert անենք a-ը, run անենք

// alert(a);
// // կտպի NaN

// NaN խնդրեմ not a number

// այսիքն եթե դուք ինչ որ մաթեմաթիկական սխալ եք անում որը ամբողջովին անտրամաբանական է նա կստեղծի NaN(թիվ չէ)
// օրինակ հիմա նայեք NaN-ը ոնցա աշխատում երբ որ NaN-ը շփվում է որևէ օպերատորի հետ ինքը անմիջապես արդյունքը դրա դարձնում է NaN
// այսինքն ինչ է ստացվում որ եթե մենք անենք օրինակ 5 * NaN պատասխանը կլինի NaN, եթե 5-ը բազմապատկում ենք մի բանի որը թիվ չէ ապա արդյունքը թիվ չի կարող լինի, կլինի NaN

// let a = 5 * NaN;
// // alert(a);
// // կտպի NaN

// 2.ինչի է սա կարևոր, պատկերացրեք ունենք էս տիպի իրավիճակ

// let z = 6;
// let b = 99;
// let d = undefined;
// let a = z * b + z * (b / d);
// alert(a);
// // կտպի NaN
// որի արդյունքը կլինի NaN

// այսինքն ինչ է ստացվում ինչպես կարող ենք debugg անենք սա


// 1. կարելիա debugger-ով մտնել ստեղ ու տեսնել ուրեմն ամեն փոփոխականի արժեքը և այդպես ուսումնասիրել և հասկանալ որ d-ն թիվ չէ undefined է օրինակ էս պահին հետևաբար եթե մենք բաժանենք undefined-ով պարզա կստանանք NaN

// 2. դա մի տարբերակն է երկրորդ տարբերակը կարողենք քիչ քիչ աշխատացնենք այսինքն

// let a = z;
// alert(a);
// // կտպի 6

// մի հատ սենց աշխատացնենք տեսնենք որ z-ն չի խնդիրը

// let a = z * (b / d);
// alert(a);
// // կտպի NaN

// կտեսնենք NaN է ուրեմն ուրիշ խնդիր կա

// let a = b / d;
// alert(a);
// // կտպի NaN

// z-ն էլ հանենք տեսնենք դա էլա NaN

// տեսնենք b-ն ինչա

// let a = b;
// alert(a);
// // կտպի 99

// կտեսնենք b-ն թիվա իսկ d ինչա

// let a = d;
// alert(a);
// // կտպի undefined

// աշխատացնենք undefined է գտանք մեր խնդիրը

// այսինքն ինչ է ստացվում որ երբ որ ինչ որ սխալ բան կա կոդի մեջ մենք կարող ենք կոդը սկսենք ջնջել ջնջել ջնջել մինչև փորձել մոտենալ են պահին որտեղ որ ինքը սխալ է դա մի մոտեցումն է թե ինչպես կարելի է գտնել սխալը մեր կոդի մեջ
// իհարկե ավելի ճիշտ ու ավելի պարզ տարբերակը դա debuger-ով ուղղակի մտնելը տեսնել փոփոխականների արժեքները ևտրամաբանական որոշում ստեղծել


// 3. NaN-ը ունի մի հատ շատ կարևոր հատկություն ինքը միակ արժեքնա javascript-ի մեջ որը ոչ մի բանին հավասար չի նույնիսկ ինքն իրեն

// եթե alert անենք (1 === 1); պարզ է որ կտպի true
// alert(1 === 1);
// // կտպի true

// կամ
// alert(true === true);
// // կտպի true

// կամ
// alert(undefined === undefined);
// // կտպի true

// էտ ամենինչը տրամաբանականա

// բայց նայեք ստեղ

// alert(NaN === NaN);
// // կտպի false


// 4. հետևաբար եթե մենք ունենք ինչ որ մի փոփոխական

// let z = 8 * "asdfgh"

// սա պարզա որ չի կարող թիվ լինի սա ինչ որ անհասկանալի բանա սա թիվ չի, NaN է

// ինչպես կարելիա ստուգել z-ն NaN է թե չէ, դե եթե NaN-ը հավասար չի NaN եթե ստեղ z դնենք ու ինքը NaN լինի ինքը true չի տա

// let z = 8 * "asdfgh"
// alert(z);
// կտպի NaN
// alert(z === NaN);
// կտպի false
// որովհետև NaN-ը հավասար չի NaN-ին

// բա ինչպես ստուգենք ինչ որ փոփոխականի մեջ NaN կա թե չէ
// գիտակցելով որ NaN-ը միակ բաննա որ ինքն իրեն հավասար չի մենք կարողենք ստեղծենք մի հատ ֆունկցիա isNaN (NaN-ա թե չէ) որը կվերցնի ինչ որ արժեք և կվերադարձնի true եթե մեր տված արժեքը հավասար չի ինքն իրեն, եթե ինքն իրեն հավասար չլինի ինքը պիտի լինի NaN, քանի որ միակ արժեքնա javascript-ում որ ինքն իրեն հավասար չի հետևաբար եթե սա վերադարձնի true գիտենք որ NaN է հակառակ բոլոր դեպքերում գիտենք որ NaN չի

// let z = 8 * "asdfgh"
// alert(z);

// function isNaN(a) {
// return a !== a
// };

// alert(isNaN(z));

// և կարողենք իրան օգտագործենք այսինքն կարողենք անենք alert(isNaN(z)); և հիմա isNaN-ը կվերադարձնի true

// հիմա իրականում պարզվումա isNaN արդեն կա javascript-ում նենց որ մենք պետք չի մենք մերը ստեղծենք մենք կարողենք ուղղակի կանչենք isNaN և ահա խնդրեմ ինքը կվերադարձնի true
// let z = 8 * "asdfgh"
// alert(isNaN(z));
// // կտպի true



// NaN-ը նշանակումա թիվ չէ not a number
// ինքը ստեղծվում է էն ժամանակ երբ որ մենք անում ենք ինչ որ մաթեմաթիկական օպերացիա որտեղ որ արդյունքը չի կարող թիվ լինի այսինքն ինչ որ սխալ բան ենք անում օրինակ 8-ը բազմապակում ենք տեքստով և բնականաբար դա չենք կարող տենց բան անենք և ստանում ենք NaN
// որպեսզի ստուգենք ինչ որ արժեքը NaN է թե չէ պետք է կանչենք isNaN ֆունկցիան


// 5. կա մի հատ ֆունկցիա որը կոչվում է typeof այսպես իրեն եթե մենք փոխանցենք ինչ որ մի օրինակ փոփոխական կամ արժեք ինքը կասի ինչ տիպի արժեքա թիվա, տեքստա, ֆունկցիայա և այլն (կվերադարձնի արժեքի տիպը)
// ինչա ստացվում երբ որ մենք իրան փոխանցում ենք NaN եկեք alert անենք սա

// let z = 8 * "asdfgh";
// alert(typeof(z));
// //կտպի number

// այսինքն մի արժեք որը կոչվում է not a number թիվ չէ իրա type-ը number է
// այսինքն ինքը թիվ է որը կոչվում է թիվ չէ դա ելա մի քիչ անտրամաբանական բայց ուղակի պետք է գիտաքցեք որ NaN-ը թիվ է որը հավասար չէ ինքն իրեն և ինքը նշանակումա թիվ չէ


// NaN-ը նշանակում է թիվ չէ ինքը հավասար չէ ինքն իրեն պետք է ստուգել եթե ինչ որ արժեքը NaN է թե չէ isNaN ֆունկցիա-ով և գիտակցեք որ NaN-ի type-ը number է այսինքն թիվ



// das 34 //

// JAVASCRIPT - null, ինչպես պարզել արժեքի տիպը

// 1. null(դատարկ)-ը արժեք է որը նշանակում է ոչմիբան

// 2. null-ը իրականում անպետք է,կառաջարկեմ որ null-ը ընդահնրապես չօգտագործեք
// բայց պետք է գիտակցել որ այսպիսի արժեք կա որովհետև կարող է հանդիպեք օրինակ մի հատ ֆունկցիայի որը ինչ որ ուրիշ ծրագրաորող է գրել որը ասենք թե որ այսինչ այսինչ պայմաններում վերադարձնում է null և ձեզ կարող է պետք լինի համեմատել մի րոպե էս արժեքը null է եթե այո էս սա արա հակառակ դեպքում նա արա

// 3. typeof() ֆունկցիան վերադարձնում է տեքստ որի մեջ կա են արժեքի տիպը որը դուք փոխանցելեք

// let a = 3.4;
// alert(typeoff(a));
// կտպի number

// let b = "abc";
// alert(typeoff(b));
// կտպի string

// let c = true;
// alert(typeof(c));
// կտպի boolean

// let d = undefined;
// alert(typeof(d));
// կտպի undefined

// let e = NaN;
// alert(typeof(e))
// կտպի number

// եթե մենք ուզում ենք ստուգենք եթե ինչ որ արժեքը NaN է թե չէ մեզ պետք է կանչել isNaN() ֆունկցիան և սա կվերադարձնի true եթե NaN է false եթե ոչ

// let f = null;
// alert(typeof(f));
// կտպի object

// (null-ի) դատարկ արժեքի type-ը object է(դա սխալներից մեկն է), առաջարկումեմ null չօգտագործեք
// եթե մենք ուզում ենք ստուգենք եթե ինչ որ արժեքը null է թե չէ, մեզ պետք է համեմատել null-ի հետ(alert(f === null)) և սա կվերադարձնի true եթե null է false եթե ոչ

// let g = function() {
// };
// alert(typeof(g));
// կտպի function

// let h = [5, 43, 2];
// alert(typeof(h));
// կտպի object

// զանգվածը object է ուղղակի ինքը շատ կոնկրետ շատ սպեցիֆիկ object է, ինքնել ունի իր մեջ բանալի և արժեք ուղղակի են բանալիները որ ինքը օգտագործում է թվեր են 0-ից մինչև ինչ որ մի բան, ինքը ունի length, ինքը ունի տարբեր ֆունկցիաներ օրինակ forEach և այլն, բայց ինքը object է որին կցած են էտ բոլոր ֆունկցիաները որի մեջ կան էլի ինչպես որ ցանկացած object բանալի արժեք կոմբինացիաներ զույգեր ուղղակի ինքը մի քիչ ավելի specifik տիպի object է որը ունի որոշ հատկություններ
// եթե մենք ուզում ենք ստուգենք եթե ինչ որ արժեքը իրոք հենց զանգված է թե չէ մեզ պետք է կանչել Array.isArray(), Array-ը դա object է որին կցած է isArray ֆունկցիան, որը վերցնում է ինչ որ արժեք ու ասում է զանգված է թե ոչ, սա կվերադարձնի true եթե զանգված է false եթե ոչ

// let i = {
// name: "Joe",
// nationality: "Armenian"
// }
// alert(typeof(i));
// կտպի object


// 4.իրականում function-ը ինքը object է բայց երբ որ անում ենք typeof() վերադարձնում է function բայց իրականում ինքն էլ տակից object է, բայց դե մենք չենք տեսնում տենց չենք պատկերացնում իրեն տենց օգտագործում ենք իրեն որպես ուղղակի function որը նորմալա եթե էտ փաստը պարզ չի մի մտածեք կարող եք մոռանաք դրա մասին ուղղակի գիտակցեք որ իրականում function-ը, զանգվածը և object-ը երեքնել object են տակից

// էս են բոլոր տիպի արժեքները որոնք որ գոյություն ունեն javascript-ի մեջ




// das 35 //

// JAVASCRIPT - Հասարակ տիպեր / հղումով տիպեր(primitive/reference types)

// 1. Primitive types(հասարակ տիպեր)
// number
// string
// boolean
// undefined
// null
// NaN

// let a = "hi";
// let b = a;
// a = "joe";
// alert(a);
// alert(b);
// կտպի joe հետո hi


// Variable Value
// -----------------
// a "joe"
// b "hi"

// Address Value
// -----------------

// բոլոր primitivy typy-երով արժեքները աշխատում են այսպես միշտ երբ որ մենք մի արժեքը վերագրում ենք ինչ որ մի փոփոխականի այդ փոփոխականը ունենումա local copy-ին էտ արժեքի նենց որ եթե էտ արժեքը ինչ որ մի ուրիշ տեղ փոխվումա դա իրան չի փոխում ինքը շարունակումա ունենալ էտ արժեքը


// 2.Reference types(հղումով տիպեր)
// function
// array
// object

// let a = [5, 4, 2];
// let b = a;
// a.push(10);
// alert(a);
// alert(b);
// կտպի 5, 4, 2, 10 հետո 5, 4, 2, 10

// Variable Value
// -----------------
// a <0x01>
// b <0x01>

// Address Value
// -----------------
// <0x01> [5, 4, 2, 10]


// ի տարբերություն primitivy արժեքներին որտեղ որ ամեն փոփոխականը ունենումա իր local copy-ին
// երբ որ մենք աշխատում ենք հղված արժեքների(reference type-երի) հետ այսինքն ֆունկցիաների, զանգվածների և object-ների էտ ժամանակ երբ որ մենք իրենց փոխում ենք մենք իրականում փոխում ենք մի ընդհանուր արժեք ինչու որովհետև փոփոխակաները ունենում են ոչ թե հենց արժեքը այլ հղում դեպի արժեք



// function bar(b) {
// b++
// }
// let a = 1;
// bar(a);
// alert(a);
// կտպի 1


// Variable Value
// -----------------
// a 1
// b 2

// Address Value
// -----------------




// das 36 //

// JAVASCRIPT - Ռեկուրսիա(recursion)

// 1.
// function f1(i) {
// if(i <= 0) {
// return;
// }
// alert("hi");
// return f1(i-1);
// };
// f1(5)

// այսինքն ինչ է ստացվում որ մենք ֆունկցիաով ստեղծում ենք ցիկլ
// այսինքն էս բլոկը աշխատում է էս բլոկի մեջ մենք ունենք ինչ որ մի if որը որոշում է երբ է ավարտվում մեր ցիկլը և ունենք են մասը կոդի որը կանչվում է նորեն էտ կոդը այսինքն հաջորդ անգամ որպեսզի էտ բլոկը աշխատի
// ուշադրություն դարձնենք որ ստեղ կա երկու կարևոր դետալ կա մի մասը ֆունկցիայի որը որոշումա երբ պետքա կանգնացնել և մի մասը ֆունկցիայի որը որոշում է թե ինչպես պետքա շարունակել ինչպես պետքա հաջորդ ցիկլը անել հաջորդ բլոկը աշխատացնել

// էս մոտեցումը loop-երի(ցիկլների) կոչվումա recursion ուղակի պետք է հասկանալ որ սա էդքան բարդ բան չի, ընդամենը կանչում ենք մի հատ ֆունկցիա որը հետո ինքն իրեն կանչումա նորից և նորից մինչև ինչ որ մի իրավիճակ է ստեղծվում որ ինքը այլևս չի կանչում և դա ավարտում է մեր ցիկլը
// recur(կրկնվել)


// 2.
// հիմա եկեք օգտագործենք այս մոտեցումը որպեսզի լուծենք մի հատ խնդիր
// եկեք գրենք factorial ֆունկցիա, factorial ֆունկցիայի նպատակը նա է որ ինքը կվերցնի մի հատ թիվ և կվերադարձնի բոլոր բազմապատկումները էտ թվի մինչև մեկ
// այսինքն եթե տանք 5 ինքը կանի կվերադարձնի 5*4*3*2*1

// function factorial(num) {
// if(num <= 1) {
// return 1;
// }
// return num * factorial(num-1);
// }
// alert(factorial(5));

// ահա factorial ֆունկցիան օգտագործելով recursion մոտեցումը որը շատ կարևոր է որ ունենա երկու կարևոր դետալ առաջինը ինչ որ մի մաս որը կորոշի երբ պետք է այս loop-ը ավարտվի թե չէ մենք կունենանք անվերջական ցիկլ և մեր երկրորդ մասը որը կորոշի recursion-ը ինչ ֆունկցիա է կանչում որպեսզի էտ loop-ը արվի
// այսինքն մենք ունենք մեր termination case-ը(դադարեցման գործ) և մեր recursive case-ը(ռեկուրսիվ գործ), termination case-ը դա են մասն է որ stop է տալիս recursive case-ը են մասն է որը շարունակում է հաջորդ քայլին հաջորդ բլոկային քայլին


// 3.
// recursion մոտեցումով ֆունկցիա որը վերցնում է զանգված և աշխատում է այնքան անգամ որքան զանգվածի մեջի անդամների քանակն է և կարող ենք ամեն պտույտի ժամանակ վերցնել ամեն անդամի index-ը

// այս դեպքում ֆունկցիան վերադարձնում է զանգվածի բոլոր անդամների գումարը

// let arr = [1, 2, 3, 4]

// function sum(arr) {
// let result = 0;
// function loop (i) {
// if(i >= arr.length){
// return;
// }
// result = result + arr[i]
// loop(i + 1)
// }
// loop(0)
// return result
// }

// alert(sum(arr));




// das 37 //

// JAVASCRIPT - Վարժություններ (ռեկուրսիա(recursion))


// 1. Վարժություն(recursive forEach)

// Ստեղծել forEach անունով ֆունկցիա, որը կգործի ճիշտ այնպես, ինչպես Aray.forEach. խնդրում ենք օգտագործել ռեկուրսիա!!!
// Օրինակ
// forEach([5, 4, 3], function(val, index) {
// alert(val);
// });


// function forEach(arr, fun) {
// function loop(i) {
// if (i >= arr.length) {
// return;
// }
// fun(arr[i], i);
// loop(i + 1);
// }
// loop(0);
// }
// forEach([5, 4, 3], function (val, i) {
// alert(val + " at index " + i);
// });



// 2. Վարժություն(recursive pow)

// Ստեղծել pow անունով ֆունկցիա, որը կգործի ճիշտ այնպես, ինչպես Math.pow. խնդրում ենք օգտագործել ռեկուրսիա!!!
// Օրինակ
// pow(5, 3); // 125


// function pow(x, y) {
// if(y === 0) {
// return 1;
// }
// return x * pow(x, y-1);
// };
// alert(pow(5, 3));

// pow(5, 3)
// __5 * pow(5, 2)
// _____ 5 * pow(5, 1)
// _________ 5



// 3. Վարժություն(recursive array sum)

// Ստեղծել sum անունով ֆունկցիա, որը գումարում է զանգվածի բոլոր արժեքները:
// Նշենք, որ զանգվածը որպես արժեք կարող է ունենալ զանգված:
// Մի օգտագործեք Array.flat
// Օրինակ
// sum([4, 3, [8, 2], [3, 6, [9, 12, 33], 6], 7, 8, 9]) // 110


// function sum(arr) {
// return arr.reduce(function(aggr, val) {
// if(Array.isArray(val)) {
// return aggr + sum(val)
// }
// return aggr + val
// }, 0)
// }
// alert(sum([1, 2, 3, 4]))



// 4. Վարժություն(json stringify, recursion)

// Ստեղծել stringifyJSON անունով ֆունկցիա, որն ընդունում է օբյեկտ, որը կարող է ունենալ կամայական խորությամբ ենթաօբյեկտներ և զանգվածներ, և վերադարձնում է JSON տեքստ։
// Ձեր ֆունկցիան պետք է վերադարձնի այն, ինչ վերադարձնում է JSON.stringify ֆունկցիան, բայց բնականաբար JSON.stirngify-ը ձեր ֆունկցիայի ներսում օգտագործելու իրավունք չունեք :)

// Հուշում՝ օգտագործել ռեկուրսիա և յուրաքանչյուր արժեքի համար ստուգել դրա տիպը՝ Համապատասխան որոշում կայացնելու համար:

// ---

// Implement a function called stringifyJSON which takes an object that can have an arbitrarily deep nesting of objects and arrays and converts it into a valid JSON string. The output of calling your stringifyJSON should be the same as calling JSON.stringify with the same input. Do not use JSON.stringify, write the logic yourself.

// Hint: Use recursion and check the types of each value to serialize it correctly

// ---

// Օրինակ Ձեր ֆունկցիան ստուգելու համար՝
// Sample data you can use to test your code:

// const data = {
// "destination_addresses": [
// "Washington, DC, USA",
// "Philadelphia, PA, USA",
// "Santa Barbara, CA, USA",
// "Miami, FL, USA",
// "Austin, TX, USA",
// "Napa County, CA, USA"
// ],
// "origin_addresses": [
// "New York, NY, USA"
// ],
// "rows": [{
// "elements": [{
// "distance": {
// "text": "227 mi",
// "value": 365468,
// "isFar": true
// },
// "duration": {
// "text": "3 hours 54 mins",
// "value": 14064
// },
// "status": "OK"
// },
// {
// "distance": {
// "text": "94.6 mi",
// "value": 152193
// },
// "duration": {
// "text": "1 hours 44 mins",
// "value": 6227
// },
// "status": "OK"
// },
// {
// "distance": {
// "text": "2.878 mi",
// "value": 4632197
// },
// "duration": {
// "text": "1 day 18 hours",
// "value": 151772
// },
// "status": "OK"
// },
// {
// "distance": {
// "text": "1,286 mi",
// "value": 2069031
// },
// "duration": {
// "text": "18 hours 43 mins",
// "value": 67405
// },
// "status": "OK"
// },
// {
// "distance": {
// "text": "1,742 mi",
// "value": 2802972
// },
// "duration": {
// "text": "1 day 2 hours",
// "value": 93070
// },
// "status": "OK"
// }
// ]
// }],
// "status": "OK"
// }


// 1.
// եկեք տեսնենք իրանց վիճակը երբ որ մենք կանչում ենք JSON.stringify() ոնց է վերադարձնում որ սովորենք և էս նույն օրենքները մենք դնենք մեր ֆունկցիայի մեջ
// const a = JSON.stringify(undefined) // undefined
// const s = JSON.stringify(null) // "null"
// const d = JSON.stringify(NaN) // "null"
// const f = JSON.stringify(124) // "124"
// const g = JSON.stringify(true) // "true"
// const h = JSON.stringify("fdfs") // "\"fdfs\""
// const j = JSON.stringify([1, 2, 3]) // "[1, 2, 3]"
// const k = alert(JSON.stringify({ // "{\"name\":\"Joe\", \"age\": 12}"
// name: "Joe",
// age: 12,
// }) )
// const l = alert(JSON.stringify(function() {})) // undefined
// debugger;

// let f = function() {alert("barev")};
// alert(JSON.stringify({"ds": 1, "se": undefined, "fs": NaN, "kl": null, "nd": f,"sd": 23, "aa":[1, undefined, NaN, null, f, 2]}))
// JSON.stringify() ֆունկցիան զանգվածի մեջի undefiend, NaN, null, function արժեքները դարձնումա null
// իսկ object-ի մեջի undefiend, function արժեքներին ցույց չի տալիս համարումա չկա իսկ NaN և null արժեքները դարձնումա null


// 2.
// եթե մենք ուզում ենք ներսի տեքստի մեջ հենց որպես արժեք ունենանք չակերտ մենք պետքա է անենք այսպես ասած accept(ըսքեփտ) \ որը նշանակումա հաջորդ չակերտը կամ հաջորդ են ինչ որ մենք անում ենք դա հատուկ է ինքը ոնցոր կոդային չակերտ չի ինքը չի փակում մյուս չակերտը այլ ինքը տենց ուղղակի ընդունի որպես արժեք "\"" այսա նույն է ինչպես որ տեքստային սա " այսինքն տեքստի մեջ կա մի հատ չակերտ
// alert("\"")
// կտպի "
// այսինքն չակերտը նույն էտ ներքին ինֆորմացիաննա

// օրինակ եթե abc անեմ ստեղ
// alert("abc")
// կտպի abc
// հիմա եթե ես ուզենամ էտ abc-ն չակերտներով փակեմ ես կանեմ սենց
// alert("\"abc\"")
// կտպի "abc"
// այսինքն էս ամեն ինչը ներքին այսքանը \"abc\" ներքին արժեքնա տեքստի դրսի չակերտները ընդամենը ասումա որ էն ինֆորմացիան որը իր մեջա տեքստա


// 3.
// function stringifyJSON(input) {
// // undefined
// if (input === undefined) {
// return input; // undefined
// }

// // null
// if (input === null) {
// return "" + input // "" + null // "null"
// }

// // NaN
// // number
// if (typeof (input) === "number") {
// if (isNaN(input)) {
// return "" + null; // "null"
// }
// return "" + input; // "input"
// }

// // boolean
// if (typeof (input) === "boolean") {
// return "" + input; // "input"
// }

// // string
// if (typeof (input) === "string") {
// return "\"" + input + "\"" // "\"input\"" // ասենք input-ը abc-ա մեզ պետք է վերադարձնել " \"abc\" " այսինքն "abc" որպես ինֆորմացիա որպես տեքստի ներքին ինֆորմացիա
// }

// // function
// if (typeof (input) === "function") {
// return undefined
// }

// // array
// if (Array.isArray(input)) {
// return "[" + input.map(function (val) {
// if (val === undefined) {
// return null
// }
// return val
// }).map(function (val) {
// if (typeof (val) === "function") {
// return null
// }
// return val
// }).map(stringifyJSON).join(",") + "]"; //? առանց join-ի էլա լինում // // սա input.map(stringifyJSON) նույն է ինչպես որ սա input.map(function(val) return stringifyJSON(val))
// }

// // object
// return "{" + Object.keys(input).filter(function (key) {
// return typeof (input[key]) !== "function" && input[key] !== undefined
// }).map(function (key) {
// const value = input[key]
// return "\"" + key + "\":" + stringifyJSON(value); // եթե անենք "\"" + key + "\":" + input[key] ամեն անգամ նույն արժեքը կգումարի այսինքն եթե input[key] լինի NaN ինքը հենց NaN էլ կգումարի իսկ stringifyJSON(input[key])-ի դեպքում կգումարի "null"
// }) + "}";
// }

// alert(JSON.stringify(data))
// alert(stringifyJSON(data))

// alert(JSON.stringify(data) === stringifyJSON(data))
// կտպի true


// 5. Վարժություն(json stringify, recursion) 2 (4-ի շարունակությունը)

// let f = function () { alert("barev") };
// let dataa = { "ds": 1, "se": undefined, "fs": NaN, "kl": null, "nd": f, "sd": 23, "aa": [1, undefined, NaN, null, f, 2] }

// alert(JSON.stringify(dataa))
// alert(stringifyJSON(dataa))

// alert(JSON.stringify(dataa) === stringifyJSON(dataa))


// էս object-ը որով մենք տեստաորում էինք ինքը բոլոր արժեքները չէր տեստաորում ինքը տեստաորում էր դե տեքստային արժեքներ, զանգված, թիվ կար, բուլյան արժեք կար չէ բայց իրականում մենք գիտենք որ կան լիքը ուրիշ արժեքներ օրինակ undefined null և NaN որի տեստաորումը էստեղ չկար հետևաբար քանի որ այդ օրինակները բացակայում էին մեր տեստաորման կոդի մեջ մեր data-ի մեջ մենք բաց թողեցինք մի օրինակը և հետևաբար ստեղծեցինք կոդ որը հարյուր տոկոս ճիշտ չէր աշխատում

// պետք է սա ընդունել որպես դաս և ապագայում մի շատ խորը և ուշադիր մտածել թե հերիք չի որ մենք ոնց ենք գրելու կոդը որպեսզի աշխատի նաև պետք է հասկանալ ինչպես պետքա տեստաորել այդ կոդը որպեսզի հստակ իմանանք որ մեր կոդը աշխատում է ճիշտ և առանց թերությունների





// das 38 //

// JAVASCRIPT - DOM

// 1. document-ը փոփոխական է որի մեջ կա object, document object-ը ունի ամեն ինչ ինչ որ մեզ պետքա որպեսզի մենք խոսանք html-ի հետ ինքը իր մեջ պահում է ամբողջ ստրուկտուրան object-ներով արտահայտված , զանգվածներով և այլն , իր մեջ ունի ամեն ինչ որը նկարագրում է ինչ է կատարվում html-ում

// և մենք ուրեմն էտ ստրուկտուրայի էտ object-ների հետ կարող ենք շփվենք կարող ենք իրենցից կարդանք և նույնիսկ կարող ենք իրենց փոխենք

// 2. եկեք տեսնենք մի օրինակ
// ստեղ մենք կարող ենք անենք document ու ինքը բացի նրանից որ ունի ամբողջ ստրուկտուրա իր մեջ ինքը նաև ունի ֆունկցիաներ որպեսզի մենք հատ հատ չքայլենք էտ ստրուկտուրայով ու գտնենք էտ էլեմենտը մենք կարող ենք մի հատ ֆունկցիա կանչենք որը կոչվում է querySelector որին մենք փոխանցում ենք մի հատ տեքստ որը css-ի selector-ների պեսա այսինքն օրենք ենք մի հատ տալիս իրեն և ինքը գտնումա էն էլեմենտը որը բռնումա էտ օրենքին այսինքն ստեղ եթե մենք այս օրենքը փոխանցենք իրեն #label էս օրենքը ինչա նշանակում նշանակումա են էլեմենտը ում id-ին label-ա չէ, ինքը գնումա գտնումա իր մեջ էտ ստրուկտուրայի մեջ էտ object-ների մեջ էն object-ը ում id-ին label է և վերադարձնում է

// document.querySelector("#label");
// եկեք դա ուրեմն վերագրենք ինչ որ փոփոխականի մեջ label ինչու չէ
// const label = document.querySelector("#label");
// alert(label);
// կտպի [object HTMLDivElement]
// այսինքն մի հատ object կա որը նկարագրում է այս div-ին

// 3. հիմա եկեք div-ի այս էլեմենտի ներքին html-ը այս ներքին մասը փոխենք ինչպես դա կարող ենք անենք label.innerHTML կարող ենք վերագրենք ինչ որ ուրիշ բանի օրինակ "hi"
// const label = document.querySelector("#label");
// label.innerHTML = "hi"
// ինչ է կատարվում ստեղ ուրեմն ամենասկզբից բրաուզերը կարդում է html-ը և նկարում է hello world էկրանի վրա որը կարմիր է էս օրենքի պատճառով բայց հետո javascript-ը երբ որ աշխատացնում է javascript-ում մենք գնում ենք գտնում ենք են object-ը document-ի տակ որը նկարագրում է label-ին և իր innerHTML-ը փոխում ենք հետևաբար բրաուզերը ռակցիայա տալիս մեր փոփոխությունին և ջնջումա hello world-ը և իրա տեղը գրում է hi

// hi

// 4. DOM(document object model)
// էտ object-ները էս ամբողջ ստրուկտուրան էս document-ի և object-ների որ նկարագրում են html դրան մենք կոչում ենք dom(document object model(Փաստաթղթի օբյեկտի մոդել)) այսինքն ինքը object-ներ են որոնք որ նկարագրում են html-ը ում հետ կարելիա շփվել որպեսզի html-ը օրինակ փոխենք օրինակ innerHTML-ով կարող ենք փոխենք
// DOM-ում բոլոր HTML տարրերը սահմանվում են որպես օբյեկտներ:

// HTML DOM-ի միջոցով JavaScript-ը կարող է մուտք գործել և փոխել HTML փաստաթղթի բոլոր տարրերը:
// HTML DOM-ը ստանդարտ օբյեկտի մոդել է և ծրագրավորման ինտերֆեյս HTML-ի համար: Այն սահմանում է.
// HTML տարրերը որպես օբյեկտներ
// Բոլոր HTML տարրերի հատկությունները
// HTML-ի բոլոր տարրերին մուտք գործելու մեթոդներ
// Իրադարձություններ բոլոր HTML տարրերի համար
// Այլ կերպ ասած՝ HTML DOM-ը ստանդարտ է՝ ինչպես ստանալ, փոխել, ավելացնել կամ ջնջել HTML տարրեր:

// 5. բացի նրանից որ մենք կարող ենք փոխենք html-ը մենք նաև կարող ենք ուշադրություն դարձնենք թե ինչ է կատարվում մեր էջի հետ ասենք user-ը օգտագործողը ինչ է անում մուկն է շարժում ինչ որ տեքստ է փոխում որպես օրինակ եկեք ստեղծենք մի հատ էլեմենտ (<)input type="text"> որպեսզի ստանանք տեքստ user-ից
// բայց մենք ինչպես նախ պետքա կարդանք էտ ինֆորմացիան էտ user-ը ինչ է գրել ստեղ 1 երկրորդը մենք պետքա իմանանք երբ էտ ինֆորմացիան փոխվումա էս ընթացքում երբ որ ես տպում եմ ես ուզում եմ իմանամ դրա մասին ինչպես կարող եմ դա անեմ

// 1.
// նախ և առաջ եկեք select անենք են object-ը որը նկարագրում է էս input-ը
// document.querySelector("#text")
// դե եկեք դա դնենք ինչ որ մի փոփոխականի մեջ
// const text = document.querySelector("#text")

// 2.
// հիմա նայեք ինչ կարող ենք անենք
// text.addEventListener()
// addEventListener-ը ինչ է դա ֆունկցիա է որը կցած է էտ object-ին, էտ dom-ի էլեմենտի object-ին որը հնարաորություն է տալիս որ մենք լսենք ինչ որ փոփոխություների, ինչ փոփոխություների պետք է ասենք առաջին պարամետրը հենց դա թե մենք ինչին ենք լսում ինչա մեզ հետաքրքրում էս պարագայում մեզ հետաքրքրումա են ժամանակ երբ որ user-ը տպումա ինչ որ բան չէ իսկ տպելը ինչա նշանակում նշանակումա կոճակը սխմում ենք թողում ենք սխմում ենք թողում ենք չէ դայա տպելը

// 2. 1.
// այսինքն կոճակը որը key է մենք ուզում ենք իմանանք երբ նա սխմվում է keydown երբ որ էտ կոճակը բրդում ենք ներքև keydown էտ ժամանակ ես փոխանցումեմ մի հատ ֆունկցիա որը կկանչվի էտ ժամանակ
// եկեք նայեք ստեղ եկեք ստեղ alert անենք hi


// const text = document.querySelector("#text")
// text.addEventListener("keydown", function() {
// alert("hi")
// });

// հիմա ինչ է ստացվում որ ամեն անգամ մենք սխմենք ինչ որ կոճակ ստեղ մենք կտեսնենք alert որը կասի hi նայեք սխմեցի տեսանք hi
// հիմա եթե նկատում եք ես հիմա key եմ սխմելու սխմեցի տեսեք դեռ ստեղ չի նկարվել էս alert-ը գնումա նորա նկարվում ինչու որովհետև keydown-ը սկզբից կանչում է մեր ֆունկցիային հետո նոր բրաուզերը նկարումա


// 2. 2.
// հետո մի հատել event կա որը կոչվումա keyup երբ որ կոճակը նորից բարձրանումա վերև եկեք keydown-ի տեղը ուշադրություն դարձնենք keyup-ին այսինքն են ժամանակ երբ որ մենք կոճակը թողենք


// const text = document.querySelector("#text")
// text.addEventListener("keyup", function() {
// alert("hi")
// })

// keydown-ը աշխատումա են ժամանակ երբ որ մենք կոճակը սխմում ենք և սկզբից կանչումա մեր ֆունկցիաին հետո նոր բրաուզերը նկարումա
// keyup-ը աշխատումա են ժամանակ երբ որ մենք կոճակը թողում ենք և սկզբից բրաուզերը նկարումա հետո նոր կանչումա մեր ֆունկցիան


// 6.
// հիմա եկեք ոչ թե alert անենք hi այլ հենց էտ էլեմենտի արժեքը որովհետև դայա վերջում հետքրքիր չէ թե ինչ են գրել էտ տուփի մեջ ինչպես դա կարելիյա ստանալ դե text-ը էտ object-նա էտ input-ի object-նա իրա արժեքնա մեզ պետք արժեք value text.value


// const text = document.querySelector("#text")
// text.addEventListener("keydown", function() {
// alert(text.value)
// })

// keydown-ը աշխատումա են ժամանակ երբ որ մենք կոճակը սխմում ենք և սկզբից կանչումա մեր ֆունկցիաին հետո նոր բրաուզերը նկարումա
// keyup-ը աշխատումա են ժամանակ երբ որ մենք կոճակը թողում ենք և սկզբից բրաուզերը նկարումա հետո նոր կանչումա մեր ֆունկցիան

// 7.
// նենցա ստացվում որ էս addEventListener-ի function-ը երբ որ կանչվումա փոխանցվումա մի հատ object որը կկոչենք evt(event) էտ evt-ը ունի իրա վրա կպած մի հատ ատրիբուտ որը կոչվում է target, target-ը հղվածա դեպի են object-ը dom-ի, object-ը որը մեզ կանչելա այսնինք էս պարագայում դա նույն է ինչպես որ text այսինք սա evt.target իրականում նույն է ինչպես որ text որը նշանակում է մենք ստեղ կարող ենք անենք alert(evt.target.value)


// const text = document.querySelector("#text")
// text.addEventListener("keydown", function(evt) {
// alert(evt.target.value)
// })

// այսինքն evt.target === text էս պարագայում

// հիմա եթե ստեղ սխմեմ 8 կտեսնեմ ութ եթե սխմեմ ինը կտեսնեմ ութսունինը և այլն և այլն, որպես տեքստ սա որպես թիվ չի այլ որպես տեքստ նույն ձևի ոնցոր prompt որ անում եինք ստանում էինք տեքստ նույն ձևի ստեղ

// 8.
// հիմա եկեք label-ի innerHTML-ը վերագրենք դեպի էտ արժեքը հիմա ինչ է ստացվում, ստացվում է որ ստեղ եթե մենք սկսենք տպել ինչպես տեսնում եք մի տեղից ոնցոր արժեքը մենք կարդում ենք, ամեն անգամ կոճակը թողվումա մենք կարդում ենք ինֆորմացիան և copy ենք անում դա էս տակի div-ի innerHTMl-ի մեջ հետևաբար սենց մի հատ սենց իրավիճակա ստեղծվում որ մի տեղից կարդում ենք երբ որ փոխվումա և երբ որ փոխվումա գրում ենք դեպի div-ի innerHTML-ը


// Hello World

// const labell = doncument.querySelector("#labell")
// const texT = document.querySelector("#texT")
// texT.addEventListener("keyup", function(evt) {
// labell.innerHTML = evt.target.value;
// })

// 9.
// բացի կոճակի event-ներից այսինքն երբ որ կոճակը սխմվումա կամ երբ որ թողում ենք էտ կոճակը և այլն, մենք նաև կարող ենք ուշադրություն դարձնենք ուրիշ event-ների օրինակ մուկի շարժումի
// օրինակ

// 1.
// և եկեք լսենք են ժամանակ երբ որ մուկը մտնի իրա մեջ այսինքն մտնի իր սահմանի ներս դա ինչպես ենք անում mouseenter երբ որ մուկը մտնի էտ ժամանակ կկանչվի մեր ֆունկցիան
// և ինչ որ ռակցիա կարող ենք տանք,
// ինչ ռակցիա տանք եկեք գույնը փոխենք կարմիրա եկեք դարձնենք կանաչ ինչու չէ նենց որ եկեք անենք box.style դա իր css-ի style-նա ու ստեղ ․backgroundColor թող լինի green

// const box = document.querySelector("#box");
// box.addEventListener("mouseenter", function() {
// box.style.backgroundColor = "green"
// })

// 2.
// հիմա մենք նույնպես կարող ենք մի հատ էլ event ավելացնել երբ որ մուկը դուրս գա mouseleave երբ որ մուկը դուրս գա և եկեք հետ դարձնենք կարմիր
// box.addEventListener("mouseleave", function(evt) {
// box.style.backgroundColor = "red"
// })




// das 39 //

// JAVASCRIPT - Canvas(կտավ)

// 1.
// canvas-ը դա մի html էլեմենտ է որը հնարաորություննա մեզ տալիս նկարել էկրանի վրա
// canvas նշանակումա կտավ և կարելիա պատկերացնել իրան ինչպես հենց կտավ որի վրա մենք կարող ենք նկարենք

// ինչպես կարելի է նրան ստեղծել ինչպես որ ցանկացած ուրիշ html-ի էլեմենտ

// (<)canvas width="500" height="300"> (<)canvas>



// 2.
// const canvas = document.querySelector("#a2");
// alert(canvas.width)
// կտպի 500
// canvas.width = 200



// 3.
// հիմա մենք ուզում ենք նկարենք այս կտավի վրա դրա համար մեզ պետք են գործիքներ
// ինչպես կարելիա ստանալ
// դե մենք նկարում ենք երկու ծավալային մակերեսի վրա այսինքն մեզ պետք են 2d այսպես ասած գործիքներ
// ինչպես կարելիա նրանց ստանալ

// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d")

// էս context-ը մի object է որին կցած են ֆունկցիաներ որոնք որ մեզ հնարաորություն կտան նկարել canvas-ի վրա


// 4.
// // 1 //
// եկեք նկարենք ուղղանկյուն
// նկարելու համար պետք է x, y որպեսզի իմանանք որտեղ և լայնություն, բարձրություն (x, y, width, heigth)

// const canvas = document.querySelector("#a3");
// const context = canvas.getContext("2d")
// context.fillRect(10, 10, 50, 50)



// x-ը աշխատում է ընենց ոնց որ դուք սովորեք այսինքն եթե սա 0-ն է մենք 10 գնացիք աջ և ահա ստեղծվեց այս մեր տուփը շեղված դեպի աջ
// y-ը աճում է դեպի ներքև
// այսինքն աջ գնաց 10 և ներքև եկավ 10

// ինչա նշանակում fillRect
// rect-ը կարճ է rectangle նշանակում է ուղղանկյուն
// fill նշանակումա լցնել
// fillRect լցրու ուղղանկյուն

// // 2 //
// լցրեց բայց մենք չասեցինք ինչ գույնի հետևաբար ինքը default գույն ընտրեց սև ու սև ներկեց
// մենք կարող ենք էտ գույնը փոխենք, բայց պետք է փոխենք մինչև նկարելը դա շատ կարեոր է հերթականությունը կարեվոր է

// const canvas = document.querySelector("#a4");
// const context = canvas.getContext("2d")

// context.fillStyle = "red"
// context.fillRect(10, 10, 50, 50)




// 5.
// // 1 //
// մենք նաև կարողենք նկարենք ուղղանկյունը բայց միայն սահմանը(եզրագիծը) սահմանը կոչվում է stroke(նրբագիծ)

// const canvas = document.querySelector("#a5");
// const context = canvas.getContext("2d")

// context.fillStyle = "red"
// context.fillRect(10, 10, 50, 50)

// context.strokeRect(100, 50, 50, 50)



// արգումենտները նույնն են x, y, լայնություն, բարձրություն

// // 2 //
// այդ սահմանի գույնը մենք կարող ենք փոխենք
// const canvas = document.querySelector("#a6");
// const context = canvas.getContext("2d")

// context.fillStyle = "red"
// context.fillRect(10, 50, 50, 50)

// context.strokeStyle = "blue"
// context.strokeRect(100, 50, 50, 50)




// 6.
// եզրագծերի լայնությունը մենք նաև կարող ենք փոխենք

// const canvas = document.querySelector("#a7");
// const context = canvas.getContext("2d")

// context.fillStyle = "red"
// context.fillRect(10, 50, 50, 50)

// context.lineWidth = 10
// context.strokeStyle = "blue"
// context.strokeRect(100, 50, 50, 50)




// 7.
// // 1 //
// հիմնականում երբ որ մենք ծրագրաորում ենք ու ինչ որ բան ենք ուզում նկարենք էկրանի վրա մենք ունենում ենք ինչ որ դիտա ինֆորմացիա և ունենք են կոդը որը փորձումա էտ ինֆորմացիան նկարի էկրանի վրա
// այսինքն ինչպես կարող ենք դա անենք

// let data = {
// x: 10,
// y: 10,
// width: 50,
// heigth: 50
// };

// const canvas = document.querySelector("#a8");
// const context = canvas.getContext("2d")

// function draw() {
// context.fillRect(data.x, data.y, data.width, data.heigth);
// }
// draw()



// // 2 //
// նաև կարող ենք գույն ավելացնենք հիմա գույնը կարող էինք ստեղ ավելացնենք բսյց եկեք դա ավելացնենք որպես dita ինֆորմացիա նենց որ եկեք անենք

// let data = {
// x: 10,
// y: 10,
// width: 50,
// heigth: 50,
// fillStyle: "orange"
// };

// const canvas = document.querySelector("#a9");
// const context = canvas.getContext("2d")

// function draw() {
// context.fillStyle = data.fillStyle
// context.fillRect(data.x, data.y, data.width, data.heigth);
// }

// draw()



// այսինքն միտքը ինչումա որ մենք ունենք ինֆորմացիա dita որը նկարագրում է իրավիճակը խաղի և մենք ունենք ինչ որ կոդ էս պարագայում draw կոդը որը ուղակի էտ ինֆորմացիան կարդալով նկարումա էկրանի վրա երբ որ մենք ուզում ենք փոխենք ինչ որ բան խաղի հետ կապված մենք փոխում ենք ինֆորմացիան dita-ն և հետո նորից կանչելով draw ինքը էկրանը ոնցոր փոխումա, նոր էտ դետալները նկարումա էկրանի վրա և հետևաբար այսպես մենք ստանում ենք ապագայում անիմեյշններ խաղեր և այլն որի մասին մենք կխոսանք հետո





// das 40 //

// JAVASCRIPT - Canvas 2

// 1. requestAnimationFrame()

// requestAnimationFrame(function() {

// })
// նշանակումա որ ասում ենք բրաուզեր ջան մինչև նկարելը էկրանի վրա մի հատ կանչիր այս function-ին մենք մի քիչ գործ ունենք անելու, էտ գործը կանենք երբ որ ավարտվի էտ ֆունկցիան նոր ոնց որ կգնաս ու կնկարես էկրանի վրա
// ????????????????????


// 2. clearRect(x, y, width, height)
// կա մի հատ ֆունկցիա որը կոչվումա clearRect ոչ թե fillRect այլ clearReact clear(պարզ) նշանակումա ոնցոր մաքրի clear react
// ինքը էլի ուղանկյունա նկարում բայց պատկերացրեք ռետինով ինքը ուղակի ջնջումա ամեն ինչ ինչ որ էտ x, y-ի լայնության և բարձրությունի մեջ է


// 3. բրաուզերը ինչպես է աշխատում սա կարևոր դետալ է, բրաուզերը մոտաորապես ամեն վարկյանի մեջ վաթսուն անգամ ուշադրություննա դարձնում dom-ին այսինքն էտ object-ներին որը նկարագրում է html-ին ուշադրություն է դարձնում css-ին են ինչ որ նկարագրում է էտ dom-ը վերջում ոնց պետքա հայտնվի էկրանի վրա և էտ ամեն ինչը համեմատում է էկրանի իրական նկարի հետ


// 4.մենք նաև խոսացինք որ հիմնականում երբ որ մենք նկարում ենք էկրանի վրա միշտ արժի ինֆորմացիան որը նկարագրում է իրավիճակը, ինչ ենք ուզում նկարենք էկրանի վրա և այլն պահել առանձին, իսկ են կոդը որը էտ ինֆորմացիան գցումա էկրանի վրա նկարումա էկրանի վրա պահել առանձին
// հիմնականում ամբողջ միտքը թե ինչի ենք առաջարկում որ էս ինֆորմացիան(ինֆորմացիան որը նկարագրում է իրավիճակը) պահենք առանձին էս ինֆորմացիան(են կոդը որը էտ ինֆորմացիան գցումա էկրանի վրա նկարումա էկրանի վրա) պահենք առանձին որովհետև եթե էս ինֆորմացիան փոխվի մենք կարող ենք ընդամենը էս կոդը նորից աշխատացնենք և ոնցոր թարմացնենք են ինչ որ գտնվում է էկրանի վրա


// 5.
// const canvas = document.querySelector("canvas")
// const context = canvas.getContext("2d")

// let data = {
// x: 10,
// y: 10,
// width: 50,
// height: 50,
// fillStyle: "red"
// }

// function draw() {
// context.clearRect(0, 0, canvas.width, canvas.height)
// context.fillStyle = "red"
// context.fillRect(data.x, data.y, data.width, data.height)
// }

// let xDelta = 5
// let yDelta = 2

// function update() {
// if(data.x + data.width > canvas.width || data.x < 0) {
// xDelta *= -1
// }
// if(data.y + data.height > canvas.height || data.y < 0) {
// yDelta *= -1
// }

// data.x += xDelta
// data.y += yDelta
// }

// function loop() {
// requestAnimationFrame(loop)

// update()
// draw()
// }

// loop()

// այսինքն ինչ է ստացվում հիմա ամեն ցիկլի ժամանակ մինչև նկարելը էկրանի վրա բրաուզերը կանչում է էս loop-ը, էս loop-ում մենք ստեղծում ենք հաջորդ խնդրանքը բրաուզերի բայց հաջորդ անգամ որ նկարես էլի ինձ մի հատ կանչի դա անում ենք այստեղ հետո կանչում ենք update թարմացնել այսպես ասած որպեսզի ինֆորմացիան թարմացնենք հիմիկվա իրավիճակից ելնելով և draw ենք կանչում որպեսզի canvas-ի վրա նկարենք մեր կտավի վրա նկարենք և երբ որ մենք ավարտում ենք բրաուզերը այդ կտավը կարդալով էտ ինֆորմացիան վերածումա պիքսելների և գցումա էկրանի վրա




///?????????????das40-n nayenq, canvasi arajinna

// das 41 //
// das 42 //
// das 43 //




// das 44 //

// JAVASCRIPT - this

// 1.
// this նշանակումա այս
// this-ը հղում է դեպի էն object-ին որի մեջ ֆունկցիան աշխատում է

// let person = {
// name: "Joe",
// age: 33,
// printName: function() {
// alert(this.name)
// }
// }

// let p = person
// person = 8

// p.printName()

// կտպի Joe

// 2.
// // 1 //

// let person = {
// name: "Joe",
// age: 33,
// printName: function() {
// alert(this.name)
// }
// }

// person.printName()

// կտպի Joe

// dott(կետ) նշանակում է այս ֆունկցիան կցած է person-ին
// հետևաբար եթե մենք այսպես կանչում ենք printName այսինքն անում ենք այս object-ը person կետ printName() սա նշանակում է որ ես ուզում եմ աշխատացնեմ այս անունը էս object-ի մեջ
// հետևաբար այս ֆունկցիայի ներքին this-ը կլինի հենց սա հենց էս object-ը


// // 2 //
// օրինակ․

// let person = {
// name: "Joe",
// age: 33,
// printName: function() {
// alert(this.name)
// }
// }

// let p = person

// p.printName()
// կտպի Joe

// հիմա printName ֆունկցիան կունենա որպես իր this արժեքը p-ին
// այսինքն նույնիսկ եթե մենք person-ը հիմա փոխենք դարձնենք 9-ը սա կշարունակի աշխատել


// let person = {
// name: "Joe",
// age: 33,
// printName: function() {
// alert(this.name)
// }
// }

// let p = person
// person = 9

// p.printName()
// կտպի Joe

// տվեց մեզ Joe ինչու որովհետև ստեղ p-ին հղված է դեպի այս object-ին հետևաբար երբ որ մենք անում ենք p կետ printName(), printName-ի this-ը դառնում է այն object-ը որը հղված է p-ով այսինքն person object-ը


// 3.
// էն պահին երբ որ ֆունկցիան աշխատում է էտ ժամանակ է որոշվում իրա this-ը ինչ է


// function zoo() {
// alert(this.name)
// }

// let person = {
// name: "Joe",
// age: 33
// };

// person.foo = zoo
// person.foo()

// հիմա this-ը ինչ կլինի zoo ֆունկցիայի
// նույն օրենքով

// էն պահին երբ որ ֆունկցիան աշխատում է էտ ժամանակ է որոշվում իրա this-ը ինչ է

// իսկ այս կոդում person.foo() ինչ object-ի մեջ է, այս ֆունկցիան աշխատում է person object-ի հետևաբար foo-ի this-ը կլինի person object-ը
// մենք ստեղծեցինք ֆունկցիան լրիվ առանձին բայց մենք նաև էտ ֆունկցիան դրեցինք person-ի մեջ այսպես որպես foo բանալիով հետո մենք կանչեցինք այդ foo-ն հետևաբար իրա this-ը էտ պահին որոշվեց որ պետքա լինի այ էս person object-ը


// այսինքն առաջին օրենքը ինչ է թե ինչպես պետքա որոշել this-ը ինչ է լինելու երբ որ մենք կանչում ենք ինչ որ մի ֆունկցիա կետով այսինքն ինչ որ object կետ ֆունկցիա էտ ֆունկցիան հիմա կունենա որպես this էտ object-ը
// այսինքն foo ֆունկցիան կունենա որպես this person object-ը


// 4.
// Օրինակ
// function zoo() {
// alert(this.name)
// }

// let person = {
// name: "Joe",
// age: 33
// }
// person.foo = zoo

// let person2 = {
// name: "Mike",
// age: 39
// }
// person2.foo = zoo

// person.foo()
// կտպի Joe

// person2.foo()
// կտպի Mike


// 5.
// // 1 //
// function zoo() {
// alert(this.name)
// }

// եթե մենք այս function-ը առանց կպցնելու որևէ object-ի և աշխատացնելու այսպիսի կետ սինտակտիկայով ինչ կլինի իրա this.name-ը եթե մենք ուղղակի կանչենք zoo-ին այսպես

// function zoo() {
// alert(this.name) // window-ի name բանալիյի մեջ վերագրածա դատարկ տեքստ "" // եթե այս դեպքում alert անենք ուղակի this կտպի [object Window] // մնացած դեպքերում օրինակ եթե alert անենք this.age կտպի undefined
// }

// zoo()

// երբ որ մենք ստեղծում ենք ֆունկցիան և աշխատացնում ենք իրան առանց ոչ մի հատուկ ինչ որ object-ին կցած իրա this-ը դառնումա գլոբալ արժեքը գլոբալ object-ը որը բրաուզերի մեջ կլինի window object-ը հետևաբար բայց window object-ը անուն չունի նենց որ մենք կստանանք դատարկ պատուհան


// // 2 //
// բայց մենք էտ ունունը կարող ենք փոխենք
// function zoo() {
// alert(this.name)
// }
// window.name = "Hopar"
// zoo()
// կտպի Hopar


// // 3 //
// եթե window object-ի name բանալու մեջ վերագրում ենք արժեք աշխատացնում ենք կոդը և հետո ջնջում ենք այդ կոդի մասը որտեղ վերագրել ենք միևնույն է window-ի name բանալու արժեքը մնում է այդ արժեքը որը վերագրել էինք

// function zoo() {
// alert(this.name)
// alert(this.age)
// }
// window.name = "Joe"
// window.age = "30"
// zoo()
// կտպի Joe հետո 30

// // երբ որ ջնջենք

// function zoo() {
// alert(this.name)
// alert(this.age)
// }
// zoo()
// կտպի Joe հետո undefined


// 6.
// այսինքն էս պահին մենք սովորել ենք երկու օրենք թե ինչպես կարելիյա որոշել function-ի this-ը ինչ է

// // 1 //
// եթե ֆունկցիաին մենք կանչում ենք որպես ֆունկցիան կցած ուրիշ object-ի այսինքն ինչ որ object կետ էտ ֆունկցիան էտ ֆունկցիայի this-ը կլինի էտ object-ը
// այսինքն ստեղ եթե մենք անում ենք

// function zoo() {
// alert(this.name)
// }

// let person = {
// name: "Joe",
// age: 33
// }
// person.foo = zoo

// let person2 = {
// name: "Mike",
// age: 39
// }
// person2.foo = zoo

// person2.foo()
// կտպի Mike

// այսինքն this-ը foo ֆունկցիայի կլինի person2 object-ը այսինքն կետի ձախ կողմից


// // 2 //
// եթե մենք ստեղծում ենք մի հատ ֆունկցիա որը ուղղակի առանձին իրեն կանչում ենք իրա this-ը կլինի գլոբալ object-ը որը բրաուզերի մեջ դա window object-ն է

// կարևոր է ասել որ լիքը մարդ սխալներ են թույլ տվել այ էս պատճառով որովհետև ստեղծել են մի հատ առանձին ֆունկցիա և հետո կանչել են ենթադրելով որ this-ը կլինի ինչ որ հատուկ բան բայց ստացվելա որ this-ը գլոբալ փոփոխականն է և լիքը լոգիկայի սխալներ են թույլ տվել

// դրա համար ստեղծվել է այսպես ասած strict mode(խիստ ռեժիմ), որը գրվում է "use strict"(օգտագործել խիստ)


// 7.
// // 1 //
// եթե մենք այս տեքստը "use strict" ամենա վերևում գրենք մեր javascript-ի, մեր javascript-ը կաշխատի մի քիչ ուրիշ, մի քիչ ուրիշ ասելով էս this-ը եթե մենք փորձենք աշխատացնել սովորական ֆունկցիայի մեջ որը կցած չի կամ չի աշխատում որևէ կոնկրետ object-ի մեջ իրա this-ը կլինի undefined այսինքն հիմա եթե մենք սենց անենք ու print անենք this-ը, this-ը undefined է էլ գլոբալ փոփոխականը չի էլ գլոբալ object-ը չի ավելի շուտ, window-ն չի այլ undefined է

// "use strict" // օգտագործել խիստ"

// function zoo() {
// alert(this)
// }
// zoo()

// կտպի undefined


// // 2 //
// javascript-ը այսօրվա օրով հիմանականում գրում են strict mode-ում

// նենց որ պետքա հասկանալ որ եթե դուք strict mode-ում ուղղակի առանձին ֆունկցիա ստեղծեք և իրան կանչեք իրա this-ը կլինի undefined
// բայց էտ նույն ֆունկցիան եթե մենք կպցնենք ինչ որ մի object-ին և հետո ըստ էտ object-ի կանչենք իրեն այսինքն կանչենք նենց որպեսզի ինքը աշխատի էտ object-ի մեջ էտ ժամանակ իրա this-ը կլինի էտ object-ը որին մենք կարող ենք անենք this.name օրինակ էս պարագայում դա կլինի Mike այսինքն եթե ֆունկցիան կցածա մի հատ object-ին ու մենք էտ object-ի միջոցով կանչում ենք էտ ֆունկցիաին էտ ֆունկցիայի this-ը դարնումա էտ object-ը

// "use strict"

// function zoo() {
// alert(this)
// }
// zoo()
// կտպի undefined

// let person = {
// name: "Joe",
// age: 33,
// printName: function() {
// alert(this.name)
// }
// }
// person.foo = zoo

// let person2 = {
// name: "Mike",
// age: 39
// }
// person2.foo = zoo

// person2.foo()
// կտպի "Mike"


// 8.
// // 1 //
// մենք բացի նրանից որ կարող ենք կպցնենք zoo-ն person-ին և ըստ էտ person-ի միջոցով կետով աշխատացնենք էտ ֆունկցիաին և հետևաբար իրա this-ը կդառնա էտ person object-ը
// բացի դրանից կարող ենք անենք սենց

// function zoo() {
// alert(this.name)
// }
// let person = {
// name: "Joe",
// age: 33,
// }
// zoo.call()

// հիշեք որ ֆունկցիաները javascript-ում object-ներ են հետևաբար ֆունկցիաները կարող են ունենալ իրանց մեջ ուրիշ ֆունկցիաներ օրինակ call
// այսինքն ինչ է ստացվում որ մենք վերցնում ենք էս ֆունկցիան կանչում ենք call ֆունկցիան որը իրան կցած է
// call նշանակում է կանչիր
// call-ին մենք փոխանցում ենք որպես առաջին արժեք object context object-ը դա իրա this-ն է այսինքն մենք որպես առաջին պարամետր ստեղ կարող ենք որոշենք իրա this-ը ինչա լինելու

// եկեք իրա this-ը թող լինի person

// function zoo() {
// alert(this.name)
// }
// let person = {
// name: "Joe",
// age: 33,
// }
// zoo.call(person)
// կտպի joe

// այսինքն ինչ է ստացվում որ մենք կարող ենք ինչ որ մի ֆունկցիան կանչելուց հենց էտ պահին կանչելու ժամանակ ասենք ես ուզում եմ որ քո this-ը լինի այս object-ը իսկ դա ինչպես կարող ենք անենք call-ով


// // 2 //
// դրանից հետո եթե մեր zoo-ն վերցնումա ինչ որ մի պարամետր ասենք թե txt որը ասենք գումարում ենք ստեղ ինչ որ սենց բան ենք անում դա call-ում կլինի մնացած պարամետրները այսինքն եթե մենք ստեղ տանք "my name is" ինչ որ սենց մի բան ինչ կստացվի որ
// առաջին պարամետրը call-ի դա են object-ն է որը կլինի իրա this-ը իսկ մնացած պարամետրները են պարամետրներն են որոնք որ կգնան կմտնեն իրա մեջ

// function zoo(txt) {
// alert(txt + " " + this.name)
// }
// let person = {
// name: "Joe",
// age: 33,
// }
// zoo.call(person, "my name is")
// կտպի my name is Joe


// այսինքն եթե ստեղ նաև դնեմ 2 դա կանցնի որպես երկրորդը x ասենք թե

// function zoo(txt, x) {
// alert(txt + " " + this.name + x)
// }
// let person = {
// name: "Joe",
// age: 33,
// }
// zoo.call(person, "my name is", 2)
// կտպի my name is Joe2

// այսինքն երկրորդ մեխանիզմը թե ինչպես կարելիյա որոշել ֆունկցիայի this-ը ինչ է դա նենց է որ էտ ֆունկցիաին կարող ենք call ֆունկցիայով կանչենք և կոնկրետ որպես առաջին պարամետր ասենք էս object-ը թող լինի քո this-ը և իրա մնացած պարամետրները


// 9.
// երկրորդ ֆունկցիա կա որը աշխատում է գրեթե նույն ձևի ինչպես որ call-ը որը կոչվում է apply(դիմել) էլի առաջին պարամետրը կլինի իրա this արժեքը բայց իրա մնացած պարամետրները մենք փոխանցում ենք զանգվածով ոչ թե առանձին այսինքն քան թե սենց "my name is", 2 փոխանցենք փոխանցում ենք այսպես ["my name is", 2]
// վերջում նույն բանն է ստացվում էս "my name is"-ը գնումա մտնումա txt-ի մեջ,այս 2-ը գնումա մտնումա x-ի մեջ
// երկուսն էլ աշխատում են գրեթե նույն ձևի ուղղակի էլի եմ ասում մեկը առանձին եք ստորակետներով եք առանձին պաս տալի պարամետրները իսկ apply-ի դեպքում մի հատ զանգված որի արժեքները գնում են մտնում են որպես արժեքները այս ֆունկցիայի այս պարամետրների(txt, x)

// function zoo(txt, x) {
// alert(txt + " " + this.name)
// }

// let person = {
// name: "Joe",
// age:33
// }

// zoo.call(person, "my name is", 2);
// zoo.apply(person, ["my name is", 2])


// 10.
// բացի call և apple անելուց մենք կարող ենք անենք հետևյալը կարող ենք zoo-ին անենք dat bind և տանք իրան ինչ որ content ինչ որ this object օրինակ person
// այս bind-ը վերադարձնումա մի հատ նոր ֆունկցիա որը ես գցում եմ էս փոփոխականի մեջ հիմա էս ֆունկցիան ինչ է էս ֆունկցիան պատկերացրեք նույն է իչպես որ էս ֆունկցիան(zoo-ն) բայց իրա this-ը արդեն նշանակված է իրա this-ը արդեն person է
// function zoo(txt, x) {
// alert(txt + " " + this.name)
// }

// let person = {
// name: "Joe",
// age: 33
// }

// let f = zoo.bind(person);


// հիմա ապագայում եթե ես ընդամենը կանչեմ f-ը ինչ որ մի տեքստով և ինչ որ մի թվով , այս տեքստը կգնա կմտնի txt-ի մեջ, այս թիվը կգնա կմտնի x-ի մեջ իսկ իրա this-ը կլինի այսա (person)-ը
// function zoo(txt, x) {
// alert(txt + " " + this.name + x)
// }

// let person = {
// name: "Joe",
// age: 33
// }

// let f = zoo.bind(person);
// f("hello world", 5)
// կտպի hello world Joe5

// որը նույն է
// zoo.bind(person)("hello world", 5)
// կամ
// zoo.bind(person, "hello world", 5)()

// Ի տարբերություն call() և apply() մեթոդների, bind() մեթոդը անմիջապես չի կատարում ֆունկցիան: Այն պարզապես վերադարձնում է ֆունկցիայի նոր տարբերակը, որի վրա սահմանվում է this արժեքը:


// /*
// այս ֆունկցիաները(bind, call, apply) ինչ որ մի ֆունկցիայի վրա կանչելուց հենց էտ պահին կանչելու ժամանակ ենք ասում ուզում ենք որ քո this-ը լինի այս object-ը

// function zoo(txt, x) {
// alert(txt + " " + this.name + x)
// }
// let person = {
// name: "Joe",
// age: 33
// }

// zoo.bind(person)("barev", 6)
// zoo("barev", 5)

// zoo.call(person, "barev", 4);
// zoo("barev", 3)

// zoo.apply(person, ["barev", 2])
// zoo("barev", 1)

// կտպի barev Joe6
// հետո barev 5

// հետո barev Joe4
// հետո barev 3

// հետո barev Joe2
// հետո barev 1
// */


// 11.
// 1. եկեք փորձենք bind-ը մենք ինքնուրույն գրենք որ ավելի լավ հասկանանք bind-ը ինչպես է աշխատում

// // 1 //
// ստուգենք թե իրական bind-ը ինչպեսա աշխատում որպեսզի սխալներ թույլ չտանք մեր կոդի մեջ
// zoo.bind(person,"barev sjdh", 10)()
// zoo.bind(person)("barev sjdh", 10)
// zoo.bind(person, "hello world", 9)("barev sjdh", 10)
// zoo.bind(person)()


// // 2 //
// սխալով

// function zoo(txt, x) {
// alert(txt + " " + this.name + x)
// }

// let person = {
// name: "Joe",
// age: 33
// }

// function bin(func, context, ...args ) {
// return function(...arg) {
// function rr() {
// if(args !== undefined) {
// return args
// } else {
// return arg
// }
// }
// return func.apply(context, rr())
// }
// }

// // վերագրելով
// const f = bind(zoo, person);
// f("hello world", 9);
// կտպի hello world Joe9

// // առանց վերագրել
// bin(zoo, person, "hello world", 9)("barev sjdh", 11)
// կտպի hello world Joe9


// սխալով քանի որ
// zoo.bind(person, "hello world")(9, "barev sjdh", 11)
// կտպի hello world Joe9

// bin(zoo, person, "hello world")(9, "barev sjdh", 11)
// կտպի hello world Joeundefined


// ճիշտը
// function zoo(txt, x) {
// alert(txt + " " + this.name + x)
// }

// let person = {
// name: "Joe",
// age: 33
// }

// այս կոդը աշխատումա այնպես ինչպես որ աշխատում է bind ֆունկցիան
// function bin(func, context, ...args ) {
// return function(...arg) {
// return func.apply(context, args.concat(arg))
// }
// }

// zoo.bind(person, "hello world")(9, "barev sjdh", 11)
// կտպի hello world Joe9

// bin(zoo, person, "hello world")(9, "barev sjdh", 11)
// կտպի hello world Joe9


// // // // ինչը պարզ չի եղել // // //
// // 1 //
// ինչա վերադրձնում և փակագիծները ինչա նշանակում

// bin ֆունկցիան վերադարձնումա որ կանչում ենք վերդարձնումա ոչ թե func.apply(context, args) այլ
// վերադարձնումա function(...args) {
// return func.apply(context, args)
// }

// առաջի փակագիծները նշանակումա մենք կանչում ենք bin ֆունկցիան, իսկ երկրորդ փակագիծները նշանակումա մենք կանչում ենք այն ֆունկցիան որը վերադարձնումա bin ֆունկցիան հետևաբար առաջի փակագիծների մեջի արժեքները որ տալիսենք ստանում ենք bin ֆունկցիայից իսկ երկրորդ փակագիծների մեջի տված արժեքները մենք ստանում ենք bin ֆունկցիայի վերադարձրած ֆունկցիայից քանի որ երկրորդ փակագիծները նշանակումա որ մենք կանչում ենք bin ֆունկցիային տված ֆունկցիան

// // 2 //
// եթե երկու տեղիցենք արժեք ստանում մեր գրած bind-ը և իրական bind-ը որնա արաջնահերթ համարում

// (մեր գրած bind ֆունկցիան) եթե bind ֆունկցիային տված ֆունկցիայից և օբյեկտից բացի մնացած արժեքները ստանում ենք և bind ֆունկցիայից և bind ֆունկցիային տված ֆունկցիայից ապա առաջնահերթ է համարվում bind ֆունկցիային տված ֆունկցիայից ստացած արժեքը քանի որ եթե իր սահմանում փոփոխականը հայտարարված չի իր արժեքը վերցնում է մի հատ բարձր սահմանից փոփոխականի օրենքին համաձայն
// (արդեն գործող bind ֆունկցիան) եթե bind ֆունկցիային տված ֆունկցիայից և օբյեկտից բացի մնացած արժեքները ստանում ենք և bind ֆունկցիայից և bind ֆունկցիային տված ֆունկցիայից ապա առաջնահերթ է համարվում bind ֆունկցիայից ստացած արժեքը քանի որ կոդը լոգիական այդպես է գրված

// // 3 //
// ինչ սխալներ կարա բերի

// և եթե երկու ստեղիցե արժեք չի ստանում բայց bind ֆունկցիայի տված ֆունկցիայի մեջ օգտագործվումա տպում undefined այսինքն կա բայց սահմանված չի
// իսկ եթե սխալա ստանում ասենք առանց spread արած կոդը չի աշխատում
// function bind(func, context) {
// return function() {
// return func.apply(context, args)
// }
// }

// // 4 //
// հիշելու համար spread օպերատորը
// function max(x, y, ...val) {
// alert(val)
// }
// let a = [40, 50, 7, 8, 20]
// max(...a); // max(40, 50, 7, 8, 20)


// 12.
// // 1 //
// մնաց մի հատ կարևոր դետալ էլ երբ է այսպես ասած this-ը հանդիպում

// function Person () {
// }
// new Person()

// new Person() նշանակումա որ մենք ուզում ենք օգտագործենք այս ֆունկցիան object ստեղծելու համար այսինքն ինչ է ստացվում որ երբ որ մենք new-ով ենք կանչում ինչ որ մի ֆունկցիա ինքը իր մեջ ստեղծումա մի հատ նոր this

// // 2 //
// պատկերացրեք new-ն տակից ոնցոր սենց մի բանա անում ստեղծումա մի հատ նոր object վերագրումա this-ի մեջ և վերջում վերադարձնումա էտ this-ը
// function Person () {
// this = {}

// return this
// }

// new Person()

// // օրինակ //
// հետևաբար մենք կարող ենք անենք
// function Person() {
// this.name = "Joe";
// this.age = 6;
// }
// const a = new Person()

// alert(a.name)
// կտպի Joe

// և ինչ է ստացվում և էս ամբողջը վերադարձնում է էտ ստեղծված object-ը որը մենք հիմա գցում ենք a-ի մեջ այսինքն եթե մենք alert անենք a.name մենք կստանանք joe

// // 3 //
// սա կոչվում է function constructor(ֆունկցիա կառուցող) այսինքն ինքը ֆունկցիա է որը մենք օգտագործում ենք object ստեղծելու համար

// // 4 //
// // կրկնել

// սա սովորական ֆունկցիա է բայց քանի որ մենք օգտագործելու ենք իրան սովորական object ստեղծելու համար հիմնականում որպես կոնվեցիա մենք մեծատառով ենք իրան ստեղծում դա անպայման չի դա ուղղակի ցանկանալիա
// հիմա երբ որ մենք new-ով ենք էտ ֆունկցիան կանչում ինքը իր մեջ ստեղծում է մի հատ object որը իրա this-ի մեջ է ստեղծվում այսինքն իրա this-ը լինում է նոր դատարկ մի object
// էտ դատարկ մի object-ի մեջ որը this-ն է մենք գցում ենք name և age-ը և էտ դատարկ object-ը վերադարնում է կամ return է արվում էտ ֆունկցիայից ավտոմատիկ, մենք կարող ենք անենք return this բայց new-ն տակից նույնը անումա մեկա

// function Person() {
// this.name = "Joe";
// this.age = 6;
// return this;
// }

// const a = new Person()
// alert(a.name)

// այսինքն new-ն ինչա անում ինքը this ստեղծումա մի հատ նոր object հետո վերջում երբ որ ֆունկցիան ավարտվում է վերադարձնում է էտ նոր object-ը և մենք ստեղ ընթացքում կարող ենք էտ object-ը ոնցոր փոխենք ինչ որ արժեքներ ավելացնենք և այլն և այլն և էտ ամենը քանի որ վերադառնում է մենք գցում ենք մի հատ փոփոխականի մեջ

// հիմա էս a-ը հղվածը էտ object-ը որը ստեղծվել է էս ֆունկցիայով էս function constructor-ով(function կառուցողով) հետևաբար հիմա a.name կտա այս joe-ն որը մենք ֆունկցիայի մեջ ստեղծեցինք


// 13.
// ինչ է ստացվում որ this-ը օգտագործվում է մի քանի տարբեր տարբերակներով

// 1.
// երբ որ մենք կետով ենք կանչում որևէ ֆունկցիա էտ կետի ձախ կողմի արժեքը դառնումա իրա this-ը
// let a = {
// f: function() {
// alert(this)
// }
// }
// a.f()

// սա նշանակումա որ այ էս f-ի this-ը կլինի a-ը

// 2.
// եթե մենք ուղղակի ունենք մի հատ առանձին ֆունկցիա որը չենք կանչում որպես կցած ինչ որ բանին այլ ուղղակի իրան կանչում ենք և alert ենք անում իրա this-ը
// սովորական այսինքն առանց strict mode-ի javascript-ում եթե աշխատացնենք իրա this-ը կլինի window object-ը բրաուզերի մեջ
// եթե մենք աշխատացնենք strict mode-ում(խիստ ռեժիմում) այ սենց "use strict" javascript-ը մի թեթև ուրիշ է աշխատացնում այսինքն էս use strict-ը մենք ասում ենք բրաուզերին, բրաուզեր ջան երբ որ աշխատացնես էս կոդը աշխատացրու մի քիչ ուրիշ ձևով strick ձևով այսպես ասած
// էտ ժամանակ իրա this-ը կլինի undefined

// "use strict"

// function a() {
// alert(this)
// }

// a()
// կտպի undefined

// 3.
// // 1 //
// եթե մենք ունենք ինչ որ մի ֆունկցիա և ուզում ենք իրեն կանչենք այնպես որ իրա this-ը լինի ինչ որ կոնկրետ object
// մենք կարող ենք ֆունկցիայի վրա աշխատացնել call ֆունկցիան և տանք այն object-ը որը ուզում ենք լինի իրա this-ը

// function a(z, d, e) {
// alert(this)
// }

// const b = {
// name: "Joe"
// }

// a.call(b, 1, 2, 3)

// ինչ է ստացվում որ հիմա a-ի this-ը կլինի b object-ը

// // 2 //
// նույնը կարող ենք անել apply-ով ուղղակի տարբերությունը call-ի և apply-ի նա է որ մնացած արժեքները որը մենք ուզում ենք փոխանցենք apply-ին, apply-ով դա զանգված են որպես գալի իսկ call-ի ժամանակ փոխանցում ենք որպես առանձին արժեքներ
// function a(z, d, e) {
// alert(this)
// }

// const b = {
// name: "Joe"
// }

// a.apply(b, [1, 2, 3])

// 4.
// function a(z, d, e) {
// alert(this.name)
// }

// const b = {
// name: "Joe"
// }

// a.bind(b)()

// Ի տարբերություն call() և apply() մեթոդների, bind() մեթոդը անմիջապես չի կատարում ֆունկցիան: Այն պարզապես վերադարձնում է ֆունկցիա, որի վրա սահմանվում է this արժեքը:(որը եթե կանչենք կվերադարձնի return func.apply(context, rr()))


// // bind ֆունկցիայի լոգիկան

// function bind(func, context, ...args ) {
// return function(...arg) {
// function rrr() {
// if(args !== undefined) {
// return args
// } else {
// return arg
// }
// }
// return func.apply(context, rrr())
// }
// }

// 5.
// եթե մենք ունենք ֆունկցիա և իրեն կանչում ենք new-ով իրա this-ը դառնում է մի հատ նոր object և էտ ֆունկցիան վերադարձնում է էտ նույն object-ը
// function zoo() {
// this = {}

// return this
// }

// const a = new zoo()
// alert(a)
// կտպի դատարկ պատուհան





// das 45 //

// JAVASCRIPT - this 2

// 1.
// ինչպես հիշում եք this-ը որոշվում է միայն այն պահին երբ մենք function-ին կանչում ենք

// function fun(a) {
// alert(this)
// alert(a)
// }

// const obj = {
// func: fun
// }

// 1. obj.func(5) // this = obj

// 2. fun(5) // this = window/undefined

// 3. fun.apply(obj, [5]) // this = obj
// fun.call(obj, 5) // this = obj

// 4. const boundFunc = fun.bind(obj)
// boundFunc(5) // this = obj

// 5. new fun(5) // this = {}

// this-ը որոշվում է են պահին երբ որ մեր ֆունկցիան կանչվում է ոչ թե են պահին երբ որ նա ստեղծվում է այլ երբ որ նա կանչվում է
// էս բոլոր օրինակներում մենք էտ ֆունկցիային կանչում ենք, փակագծերով կանչում ենք իրեն հետևաբար էտ պահին որոշվում է իրա this-ը և նայած ոնց ենք այս նույն ֆունկցիաին կանչում իրա this-ը կարա լինի տարբեր


// 2.
// պետք է հիշել երկու կարևոր բան
// this-ը որոշվում է են պահից երբ մենք կանչում ենք իրան
// և պետք է ընդամենը էտ պահը գտնել և գտնել էտ օրենքը մեր ցուցակի մեջ

// օրինակներ

// 2.1
// const a = {
// name: "Joe",
// foo: function(f) {
// f()
// }
// }
// a.foo(function() {
// alert(this)
// })
// կտպի [object Window]

// 2.2
// const a = {
// name: "Joe",
// foo: function() {
// alert(this.name)
// }
// }
// a.foo()
// կտպի Joe

// 2.3
// const a = {
// name: "Joe",
// foo: function() {
// alert(this)
// }
// };
// [1, 2, 3].forEach(a.foo)
// /*
// [1, 2, 3].forEach(function() {
// alert(this)
// }) */
// կտպի [object Window] երեք անգամ

// մենք ստեղ չենք կանչում ֆունկցիային, մենք ստեղ ընդամենը հղում ենք փոխանցում forEach ֆունկցիաին դեպի այս ֆունկցիային հետո forEach-ը իր մեջ կկանչի այս ֆունկցիային ինքը չի կանչի կետով կամ bind-ով ինքը ընդամենը կկանչի իրեն հետևաբար իր this-ը կլինի window object-ը կամ իհարկե undefined եթե strick mode-ում ենք աշխատում

// 2.4
// const a = {
// name: "Joe",
// foo: function() {
// alert(this)
// }
// }
// const f = a.foo
// f()
// կտպի [object Window]


// 3.
// // 1.1 //
// պարզվում է forEach-ը կարող է ընդունել երկու արժեք
// երկրորդ արժեքը context-նա(this-նա) տված ֆունկցիայի

// const a = {
// name: "Joe",
// foo: function() {
// alert(this.name)
// }
// };
// [1, 2, 3].forEach(a.foo, a);
// կտպի Joe երեք անգամ

// այսինքն forEach-ը հիմա եթե տեսնի որ մենք այս a արժեքը փոխանցել ենք ինքը այս ֆունկցիան կաշխատացնի այ էս a this-ով, a-ը կաշխատացնի որպես this
// այսինքն ինքը տակից a.foo ֆունկցիան կկանչի կամ call-ով կամ apply-ով որի առաջի արժեքը կլինի a-ը

// /* context և this նույն բան են դուք հիշեք այդպես */

// // 1.2 //
// // // forEach-ի լոգիկան // //

// function forEach(arr, fun, obj) {
// for(let i = 0; i < arr.length; i++) {
// fun.call(obj)
// }
// }

// const a = {
// name: "Joe",
// foo: function() {
// alert(this.name)
// }
// };

// forEach([1, 2, 3], function(val) {
// alert(this.name)
// }, a)

// կտպի Joe երեք անգամ

// // 2 //
// const a = {
// name: "Joe",
// foo: function() {
// alert(this.name)
// }
// };

// forEach-ի դեպքում մենք կարող ենք փոխանցենք առանձին context որպես վերջին պարամետր
// [1, 2, 3].forEach(a.foo, a)

// map-ի դեպքում էլ
// [1, 2, 3].map(a.foo, a)

// filter-ի դեպքում էլ
// [1, 2, 3].filter(a.foo, a)

// բայց reduce-ի ժամանակ երկրորդ արժեքը դա ոնցոր առաջին ագրեգատրի արժեքն է
// այնպես որ reduce-ի ժամանակ իրականում context մենք չենք կարող փոխանցենք reduce-ի ժամանակ միշտ պետք է եթե this-ով ենք աշխատելու անենք dott bind և փոխանցենք իրա this-ը որը մենք ուզում ենք օգտագործենք այս տրված ֆունկցիայի մեջ
// [1, 2, 3].reduce(a.foo.bind(a), a)


// 4.
// որպեսզի մի քիչ պարզացնենք սա և ասենք որ ուզում ենք այս ֆունկցիան աշխատի այս a object-ի context-ի մեջ այսպես ասած իրա this-ը որ լինի այս object-ը մենք կարող ենք անենք այսպես

// const a = {
// name: "Joe",
// foo: function() {
// alert(this.name)
// }
// };

// [1, 2, 3].forEach(a.foo.bind(a));
// կտպի Joe երեք անգամ

// սա ինչ է ստացվում որ այ էս ամենը a.foo.bind(a) կվերադարձնի մի հատ լրիվ նոր ֆունկցիա որը կաշխատի նույն ձևի ոնց որ այս ֆունկցիան բայց իրա this-ը կլինի a object-ը





// das 46 //

// JAVASCRIPT - this վարժություններ


// 1. Վարժություն 1

// Փոխեք այս կոդը այնպես, որ այն alert անի 45

// const a = {
// age: 23,
// foo: function(arr) {
// arr.forEach(function(val) {
// alert(this.age + val)
// })
// }
// }
// a.foo([22])
// կտպի NaN


// ճիշտը
// const a = {
// age: 23,
// foo: function(arr) {
// // alert(this.age); // 23
// arr.forEach(function(val) {
// alert(this.age + val)
// }.bind(this))
// }
// }

// a.foo([22])
// կտպի 45


// 2. Վարժություն 2

// ինչ alert կարվի էկրանին և ինչու

// function zoo() {
// alert(this.age)
// }
// const b = {
// age: 44
// }
// const a = {
// age: 23,
// foo: zoo.bind(b)
// }
// a.foo()
// կտպի 44


// սա նույն է ինչպես սա
// function zoo() {
// alert(this.age)
// }
// const b = {
// age: 44
// }
// const a = {
// age: 23,
// foo: function() {
// zoo.call(b)
// }
// }
// a.foo()
// կտպի 44


// 3. Վարժություն 3

// Փոխեք այս կոդը այնպես, որ այն alert անի "Mike"

// const a = {
// name: "Joe",
// f: function() {
// alert(this.name)
// }
// }

// const b = {
// name: "Mike"
// }

// a.f()
// կտպի Joe


// սա նույն է ինչպես սա
// function z() {
// alert(this.name)
// }

// const a = {
// name: "Joe",
// f: z
// }

// const b = {
// name: "Mike"
// }

// a.f()


// ճիշտը
// const a = {
// name: "Joe",
// f: function() {
// alert(this.name)
// }
// }

// const b = {
// name: "Mike"
// }

// a.f.apply(b) /// a.f.call(b) /// a.f.bind(b)()
// կտպի Mike

// /// z.apply(b) /// .bind(b)???? /// z.bind(b)()


// 4. Վարժություն 4

// փոխեք այս կոդը այնպես, որ այն ստեղծի նոր Person օբյեկտ

// function Person() {
// this.name = "Mike";
// this.age = 33;
// }

// const a = Person()
// alert(a)
// կտպի undefined

// /// alert(window.age)
// /// կտպի 33


// ճիշտը
// function Person() {
// // this = {}
// this.name = "Mike";
// this.age = 33;
// // return this
// }

// const a = new Person()
// alert(JSON.stringify(a, undefined, 2))
// կտպի {"name": "Mike", "age": 33}

// alert(new Person().name)
// կտպի Mike


// /*
// function Person(name, age) {
// this.name = name
// this.age = age
// }

// const a = new Person("Mike", 33)
// alert(JSON.stringify(a, undefined, 2))
// կտպի {"name": "Mike", "age": 33}

// // պետք է հասկանալ որ մենք կարող ենք էս պահին ստեղծենք object-ը երկու ձևով կամ կարող ենք ստեղծենք ինքնուրույն այսպես {} կամ կարող ենք ստեղծենք ֆունկցիա որին եթե new ով կանչենք կստեղծի այդ նոր object-ը և կվերադարձնի
// */


// 5. Վարժություն 5

// Փոխեք կոդը այնպես, որ ֆունկցիայի գործառույթում this-ը լինի undefined

// function func() {
// alert(this)
// }
// func()


// ճիշտը
// "use strict"

// function func() {
// alert(this)
// }
// func()



// // ??????????
// das 47 //

// JAVASCRIPT - Վարժություն(canvas)

// 1. Ստեղծեք canvas և դրա ներքևում button: button էլեմենտը սեղմելիս canvas-ի վրա պետք է ավելանա կլոր օբյեկտ(գնդակ)՝ կամայական տեղում, կամայական չափի, որը կշարժվի կամայական ուղղությամբ։
// Որպես հավելում, կարող եք փորձել ստեղծել տարբեր գույների կլոր գնդակներ։
// Գնդակը պետք է canvas-ի եզրերին հասնելիս փոխի իր ուղղությունը, այնպես, որ միշտ մնա canvas-ի ներսում:
// Արդյունքում կունենանք canvas-ի ներսում շարժվող գնդակների փունջ:
// Կարող ենք ավելացնել նոր գնդակներ սեղմելով canvas-ի ներքևի button-ը:

//  Add Ball




// das 48 //

// JAVASCRIPT - սլաքով ֆունկցիաներ(arrow functions)

// 1. ֆունկցիա ստեղծելու տարբերակները

// 1.1
// func(5)

// function func(x) {
// alert(x)
// }
// func(5)

// 1.2
// const func2 = function(x) {
// alert(x)
// }
// func2(5)

// 1.3
// const obj = {
// func: function(x) {
// alert(x)
// }
// }
// obj.func(5)

// 1.4
// [5, 4, 3].forEach(function(val) {
// alert(val)
// })
// էտ տիպի ֆունկցիաները կոչվում են unnames function(անանուն ֆունկցիա) այսինքն անուն չունեցող ֆունկցիա


// 2. ինչ է arrow ֆունկցիան

// arrow function-ը(սլաքով ֆունկցիան) նախ և առաջ մեզ հնարաորություն է տալիս գրել կամ ստեղծել ֆունկցիա մի քիչ ավելի պարզ ձևով

// const func = function(x) {
// alert(x)
// }
// func(3)

// ինչպես կարելի սովորական ֆունկցիան թարգմանել arrow ֆունկցիայի function-ը delete ենք անում և փակագծերի աջ կողմից ավելացնում ենք սլաք
// հիմա ստեղծեցինք arrow ֆունկցիա

// const func = (x) => {
// alert(x)
// }
// func(3)

// ինքը մոտաորապես նույն ձևիա աշխատում ինչպես որ սովորական ֆունկցիան ինչ եմ ասում մոտաորապես որովհետև իրականում տարբերություններ կան


// ինչպես ֆունկցիաների երեք ստեղծման տարբերակները դարձնել arrow ֆունկցիա

// const func = function(x) {
// alert(x)
// }
// func(3)
// ||
// \/
// const func = (x) => {
// alert(x)
// }
// func(3)


// const obj = {
// func: function(x) {
// alert(x)
// }
// }
// obj.func(5)
// ||
// \/
// const obj = {
// func: (x) => {
// alert(x)
// }
// }
// obj.func(5)


// [5, 4, 3].forEach(function(val) {
// alert(val)
// })
// ||
// \/
// [5, 4, 3].forEach((val) => {
// alert(val)
// })


// 3. ինչով է տարբերվում բացի տեսքից
// ամենակարևոր ու ամենամեծ տարբերությունը this-ը ինչպես է օգտագործվում

// 3.1
// օրինակներ որ դեպքում this-ը ինչ կլինի

// const func = function() {
// alert(this)
// }
// func()
// կտպի [object Window]


// const func = function() {
// alert(this)
// }
// const obj = {
// func: func
// }
// obj.func()
// կտպի [object Object]


// const func = () => {
// alert(this)
// }
// func()
// կտպի [object Window]


// const func = () => {
// alert(this)
// }
// const obj = {
// func: func
// }
// obj.func()
// կտպի [object Window]


// 3.2
// ըստ են օրենքի դե գիտենք սովորական ֆունկցիան ինչպես է աշխատում այս ֆունկցիայի this-ը կընդունի կետի ձախ կողմի արժեքը ու ամեն ինչ կաշխատի
// բայց կտպի [object Window] ոչ թե են object-ը այլ window

// երբ որ մենք ստեղծում ենք սովորական ֆունկցիա իրա this-ը որոշվում է են պահին երբ մենք իրեն կանչում ենք ու նայած ոնց ենք իրեն կանչում ինչ իրավիճակում և այլն էտ ժամանակ իրա this-ը որոշվում է էտ պահից
// ի տարբերություն arrow ֆունկցիայի
// arrow ֆունկցիան երբ որ մենք ստեղծում ենք երբ որ իրեն հայտարարում ենք հենց էտ պահին իրա this-ը որոշվում է

// իսկ իրա this-ը ինչ է ինչպես է որոշվում դե նայած ինքը որ ֆունկցիայի մեջ է ստեղծվում, ինքը էտ ֆունկցիայի this-ը ընդունում է որպես իրա this-ը


// 3.3
// խնդիր 1
// ինչպես անենք որպեսզի func ֆունկցիայի this-ը լինի forEach-ին տված ֆունկցիայի this-ը

// const obj = {
// func: function() {
// [4, 5, 6].forEach(function(val) {
// alert(this)
// })
// }
// }
// obj.func()
// կտպի [object Window] երեք անգամ


// պատասխան
// 1.
// const obj = {
// func: function() {
// alert(this); // [object Object]
// [4, 5, 6].forEach(function(val) {
// alert(this);
// }.bind(this));
// }
// };
// obj.func();
// կտպի [object Object] հետո [object Object] երեք անգամ


// 2.
// const obj = {
// func: function() {
// alert(this); // [object Object]
// [4, 5, 6].forEach(function(val) {
// alert(this);
// }, this);
// }
// };
// obj.func();
// կտպի [object Object] հետո [object Object] երեք անգամ


// 3.
// const obj = {
// func: function() {
// alert(this); // [object Object]
// [4, 5, 6].forEach((val) => {
// alert(this);
// });
// }
// };
// obj.func();
// կտպի [object Object] հետո [object Object] երեք անգամ


// խնդիր 2
// ինչպես անենք որպեսզի func ֆունկցիայի this-ը լինի forEach-ին տված ֆունկցիայի this-ը

// const obj = {
// name: "Joe",
// func: function() {
// [4, 5, 6].forEach(function(val) {
// alert(this.name)
// })
// },
// // կտպի դատարկ տեքստ երեք անգամ /// this: window

// // 1.
// // func: function() {
// // [4, 5, 6].forEach(function(val) {
// // alert(this.name)
// // }.bind(this))
// // },
// // // կտպի Joe երեք անգամ

// // 2.
// // func: function() {
// // [4, 5, 6].forEach(function(val) {
// // alert(this.name)
// // }, this)
// // },
// // // կտպի Joe երեք անգամ

// // 3.
// // func: function() {
// // [4, 5, 6].forEach((val) => {
// // alert(this.name)
// // })
// // }
// // // կտպի Joe երեք անգամ
// };
// obj.func();


// 4.
// const F = function() {
// // this = {}
// this.name = "Joe"
// // return this;
// }

// const a = new F()

// alert(a)
// կտպի [object Object] /// a:{name: "Joe"}


// const F = () => {
// // this = {}
// this.name = "Joe"
// // return this;
// }

// const a = new F()
// alert(a)
// // error: F is not a constructor

// երբ որ մենք ստեղծում ենք arrow ֆունկցիա new-ով այլևս չենք կարող կանչենք
// այսինքն arrow ֆուկցիան որպես constructor որպես object կառուցող մենք չենք կարող օգտագործենք


// 5.
// 5.1
// arguments-ը զանգվածի պես մի object-ա որի մեջ կան բոլոր են արժեքները որոնք որ եկան մտան իր մեջ այսինքն arguments[0]-ն դա նույն է ինչպես որ a-ն, arguments[1]-ն դա նույն է ինչպես որ b-ն, arguments[2]-ն դա նույն է ինչպես որ c-ն
// const f = function(a, b, c) {
// alert(arguments[0] + arguments[1] + arguments[2])
// // alert(typeof(arguments)) // object
// // alert(Array.isArray(arguments)) // false
// // alert(JSON.stringify(arguments)) // կտպի {"0":4,"1":5,"2":6}
// }

// f(4, 5, 6);
// կտպի 15

// այսինքն առաջին արժեքը տակից վերագրված է 0 տեքստային արժեք անունի մեջ, եկրորդ արժեքը տակից վերագրածա 1 տեքստային արժեքի մեջ և այլն


// 5.2
// եկեք debugger-ով նայենք որպեսզի տեսնենք arguments-ը ինչա

// const f = function(a, b, c) {
// debugger
// }

// f(4, 5, 6);

// arguments-ը object-ա զանգվածին նման որի 0-ի մեջ կա իրեն փոխանցած առաջի արժեքը, 1-ի մեջ կա իրեն փոխանցած երկրորդ արժեքը և այլն
// այսինքն arguments-ը մեզ հնարաորություն է տալիս կարդալ բոլոր են արժեքները որոնք որ մեր ֆունկցիան ընդունեց


// /*

// ստուգելու համար
// alert(Array.isArray([1, 2])) // true
// alert(typeof([1, 2, 3])) // object
// alert(JSON.stringify([1, 2, 3])) // [1, 2, 3]
// alert(JSON.stringify({0: 1, 121: "d", ds:2})) // {"0":1, "121": "d", "ds":2}


// մենք գիտեյնք որ մենք կարող ենք նաև արժեքին անուն հայտարարել առանց երկու ստորակետների եթե մեր ստեղծած անունը համապատասխանում է բոլոր օրենքներին որը մենք ունենք փոփոխական ստեղծելուց
// // սխալով //
// ոչ թե կարող ենք հայտարարնենք անուն արժեքին առանց երկու ստորակտետների եթե մեր ստեղծած անունը համապատասխանում է բոլոր օրենքներին որը մենք ունենք փոփոխական ստեղծելուց այլ կարող ենք
// այլ կարող ենք հայտարարնենք անուն արեժեքին առանց երկու ստորակտետների եթե մեր ստեղծած անունը ՉԻ համապատասխանում բոլոր օրենքներին որը մենք ունենք փոփոխական ստեղծելուց այսինքն կարող է նաև որպես անուն թիվ լինել
// ուղղակի եթե անունը թիվ է չենք կարող վերցնենք արժեքը կետով


// // 1 //
// 1.1
// let x = {"age":10, "name":"hakob"};
// alert(x["age"]);
// alert(x.name);

// 1.2
// let x = {age:10, name:"hakob"};
// alert(x["age"]);
// alert(x.name);

// // 2 //
// 2.1
// let r = {0: "as", "1": "ad", d: "sa", "b": "da"}
// alert(r[0]) // կտպի as
// alert(r["0"]) // կտպի as
// alert(r.0) // error
// alert(r."0") // error
// alert(r[d]) // error: d i s not defined

// 2.2 let r = {0: "as", "1": "ad", d: "sa", "b": "da"}
// alert(r[1]) // կտպի ad
// alert(r["1"]) // կտպի ad
// alert(r.1) // error
// alert(r."1") // error

// 2.3
// let r = {0: "as", "1": "ad", d: "sa", "b": "da"}
// alert(r[d]) // error: d is not defined
// alert(r["d"]) // կտպի sa
// alert(r.d) // կտպի sa
// alert(r."d") // կտպի error

// */


// 5.3
// սովորական ֆունկցիանները ունեն այդ հնարաորությունը կարող եք գրեք arguments և ինքը ձեզ կվերադարձնի բոլոր են արժեքները որոնք որ ձեր ֆունկցիան ընդունեց
// arrow ֆունկցիան չունի դա

// const f = (a, b, c) => {
// alert(arguments)
// }
// f(4, 5, 6)

// // error: arguments is not defined at f


// 5.4
// arguments object-ը մեզ իրականում պետք չի գալիս եթե մենք ուզում ենք ուղղակի մի հատ զանգված ստանանք բոլոր մեր արժեքների մենք ընդամենը կարող ենք սենց անենք(օգտագործենք spread օպերատորը)
// const f = function(...args) {
// }
// f(4, 5, 6)
// և էտ args-ը հիմա կլինի մի հատ զանգված որի մեջ կլինի բոլոր են արժեքները որոնք մենք փոխանցել ենք


// 6.
// եթե մեր ֆունկցիան ընդամենը ունի մեկ տող մեկ ինչ որ հայտարարություն, մեկ ինչ որ գործողություն
// մենք կարող ենք անել

// const f = () => {
// return 5
// }
// f()

// ||
// \/

// const f = () => 5
// f()


// const f = (a, b) => {
// return a + b
// }
// alert(f(4, 5))

// ||
// \/

// const f = (a, b) => a + b
// alert(f(4, 5))


// 7.
// 7.1
// function F() {
// // this = {}
// this.name = "Joe";
// this.sayHi = () => {
// alert(this.name)
// };
// // return this
// }

// const a = new F();
// a.sayHi();
// կտպի Joe


// 7.2
// function F() {
// // this = {}
// this.name = "Joe";
// this.sayHi = () => {
// alert(this.name)
// };
// // return this
// }

// const a = new F();

// const b = a.sayHi;
// b();
// կտպի Joe

// ամենակարևոր, ամենամեծ տարբերությունը սովորական ֆունկցիայի և arrow ֆունկցիայի նա է որ երբ որ սովորական ֆունկցիա ենք ստեղծում իրա this-ը որոշվում է այն պահին երբ մենք իրեն կանչում ենք և ամեն ինչ կախվածա թե ոնց ենք իրեն կանչում իսկ arrow ֆունկցիայի ժամանակ իրա this-ը որոշվում է են պահին երբ մենք իրեն հայտարարում ենք երբ իրեն ստեղծում ենք հետո արդեն ոնց ենք իրան կանչում կապ չունի որովհետև իրա this-ը արդեն որոշված է




// // Վարժություններ

// վարժություն 1

// -Մաքրեք այս կոդը
// -Ինչ է արդյունքը?

// const a = {
// age: 22,
// name: "Joe",
// getName: function() {
// return this.name;
// },
// getAge: () => this.age
// };

// alert(a.getName()); // "Joe"
// alert(a.getAge()); // undefined

// arrow ֆունկցիայի this-ը որոշվում է են պահից երբ նա ստեղծվում է ոչ թե կանչվում
// և իրա this-ը ստանում է իրա ծնող ֆունկցիայից այսինքն այն ֆունկցիայի this-ն է լինում իրա this-ը որի մեջ ինքը կա

// այս դեպքում այս ֆունկցիան չի ստեղծված որևէ ֆունկցիայի մեջ սրանից վերև ոչ մի ֆունկցիա չկա որ փաթաթում է իրեն(որի մեջ ինքը գտնվում է) հետևաբար ինքը ընդունում է որպես իրա this գլոբալ object-ը(window object-ը)
// իսկ գլոբալ object-ը(window object-ը) age չունի հետևաբար մենք կստանանք undefined


// վարժություն 2

// -Մաքրեք այս կոդը
// -Ինչ է արդյունքը?

// const f = () => this.name;

// function f2() {
// return this.name;
// }

// const a = {
// name: "Mike"
// };

// alert(f2.apply(a)) // "Mike"
// alert(f.call(a)); // ""


// սովորական ֆունկցիայի this-ը որոշվում են պահին երբ մենք իրեն կանչում ենք բայց arrow ֆունկցիայի this-ը որոշվում է են պահից երբ նա ստեղծվում է ոչ թե կանչվում
// arrow ֆունկցիայի this-ը արդեն որոշված է, ոնց ուզում ենք կանչենք իրա this-ը արդեն որոշված է
// իսկ եթե ինքը ստեղծվում է գլոբալ scope-ի մեջ ինքը ոչ մի ֆունկցիայի մեջ չի փաթեթաորված իրա this-ը կլինի գլոբալ object-ը այսինքն window-ն

// հետևաբար ինքը ընդունում է որպես իրա this գլոբալ object-ը(window object-ը)
// իսկ գլոբալ object-ի(window object-ի) name-ը դատարկ տեքստ է("") հետևաբար մենք կստանանք դատարկ պատուհան


// վարժություն 3

// -Մաքրեք այս կոդը
// -Ինչ է արդյունքը?

// function f() {
// // this = a
// return () => this.age;
// };

// const a = {
// age: 22
// };

// const z = f.call(a);
// alert(z()); // 22

// alert(f.call(a)()); // 22


// վարժություն 4

// -Մաքրեք այս կոդը

// let a = [5, 40, 29, 44, 33];

// function o() {
// let b = [];
// a.map(function(val) {
// b.push(val + 1);
// });

// let z = b.filter(function(val) {
// return val % 2 === 0;
// });

// return z;
// }

// o()


// let a = [5, 40, 29, 44, 33];

// function transform(arr) {
// return arr
// .map((val) => val + 1)
// .filter((val) => val % 2 === 0);
// }

// alert(transform(a)); // [6, 30, 34]






///   ?????????
// das 49 //

// JAVASCRIPT - Փակումներ(Closures)





































// // CANVAS 1ից 5-ի կոնսպեկտ
// // canvas 6-ը վարժությունը շարիկների արած չի



// // canvas 1
// // 1. ուղակի նկարել  
// // 2. տվյալները պահել object-ի մեջ  նկարելու գործողությունը ֆունկցիայի մեջ



// // canvas 2
// // 1. ուղանկյունա ստեղծվում և շարժվումա canvas-ի մեջ ամեն պատին կպնելուց հետա գալիս
// // 2. տվյալները պահել object-ի մեջ  նկարելու գործողությունը առանձին ֆունկցիայի մեջ թարմացնելու գործողությունը առանձին ֆունկցիայի մեջ և ամեն անգամ թարմացնել հետո նկարել, նկարել function-ն էլ ամեն անգամ կջնջի անցած նկարածը
// // 3. իսկ թարմացնել ֆունկցիայի մեջ ամեն անգամ իրա x-ը և y-ը ավելացնել կոնրետ թվով delta-ներով և ավելացնել երկու հատ if որը կստուգի ամեն անգամ պատին կպնելուց հետ շարժվի մեր ուղանկյունը այսինքն ամեն անգամ delta-ն կբազմապատկի -1-ով



// // canvas 3
// // 1. ամեն անգամ աջ կոճակը սխմելուց գնա աջ, ձախ կոճակը սխմելուց գնա ձախ
// // 2. տվյալները պահել object-ի մեջ  նկարելու գործողությունը առանձին ֆունկցիայի մեջ թարմացնելու գործողությունը առանձին ֆունկցիայի մեջ և ամեն անգամ թարմացնել հետո նկարել, նկարել function-ն էլ ամեն անգամ կջնջի անցած նկարածը
// // 3. իսկ թարմացնել ֆունկցիայի մեջ ամեն անգամ իրա x-ը ավելացնել կոնրետ թվով delta-ով 
// // 4. և ավելացնել երկու հատ event keydown(կոճակը սխմելուց) keyup(կոճակը թողնելուց),  keydown անելուց կոճակը սխմելուց եթե ձախ կոճակը սխմենք delta-ի մեջ կվերագրի բասական թիվ հակառակ դեպքում եթե աջ կոճակը սխմենք delta-ի մեջ կվերագրի դրական թիվ և keyup անելուց կոճակը թողնելուց delta-ն կդարձնենք 0



// // canvas 4
// // 1. կոճակ սխմելուց դանակա գցում,  փամփուշտ ավելացնել որպեսզի կնոպկա սխմելուց կրակի
// // 2. data object-ի մեջ ավելացնել դատարկ զանգված որի մեջ մենք կավելացնենք մեր փամփուշտները
// let data = {
//     bullets: []
// }
// // 3. ամեն կոճակը սխմելուց data object-ի bullets զանգվածի մեջ ավելացնել bullet object որը կունենա իր պարամետրերը որտեղ կլինիի x, y լայնություն բարձրություն width, heigth և delta ինչ որ մի թիվ որպես արագություն 
// document.addEventListener("keydown", function(evt) {
//     if(evt.code === "ArrowRight") {
//         data.hero.xDelta = 1
//     } else if(evt.code === "ArrowLeft") {
//         data.hero.xDelta = -1
//     } else {
//         data.bullets.push({
//             xDelta: 5,
//             x:  data.hero.x + data.hero.width,
//             y:  data.hero.y + data.hero.height/2,
//             width: 20,
//             height: 20
//         })
//     }
// })

// // 4. թարմացնել ֆունկցիայի մեջ  data object-ի մեջի bullets զանգվածի վրայով պտտվել forEach անել և ամեն անգամ վերցնել bullets զանգվածի մեջի անդամները հերթով(որը պետք է լինի ավելացրած bullet object-ը) իր x-ին ավելացնել ամեն անգամ իր delta-ով որպեսզի փամփուշտը շարժվի    
//     data.bullets.forEach(function(bullet) {
//         bullet.x += bullet.xDelta
//     })

// // 5. և որպեսզի փամփուշտը canvas-ի տարացքից դուրս գալուց անվերջ չշարունակի դուրս գալ, թարմացնել ֆունկցիայի մեջ data object-ի մեջի bullets զանգվածը filter-ել և վերագրել data object-ի մեջի bullets զանգվածին (դա անում ենք վերցնելով data object-ի մեջի bullets զանգվածի մեջի ստեղծված object-ին և ասում եթե փամփուշտի x-ը այս դեպքում bullet-ի x-ը փոքր է canvas-ի լայնությունից width-ից վերադարձրու false հակառակ դեպքում true)
// data.bullets = data.bullets.filter(function(bullet) {
//     if(bullet.x > canvas.width) {
//         return false
//     }
//         return true
// })

// // 6. և ստեղծել նկար գործողությունը ֆունկցիան վերագրում ենք մի փոփոխականի մեջ const starImg = document.createElement("img");   starImg.src = "";
// // որը հետո պետք է նկարել ֆունկցիայի մեջ պտտվել data object-ի մեջի bullets զանգվածի վրայով և վերցնել ամեն մի անդամը, արդեն ստեղծված object-ը փամփուշտը և նկարել կանչելով drawImage և տալով այն փոփոխականը որի մեջ կա ստեղծել նկարը ֆունկցիան և ավելացրած փամփուշտի(object-ի) bullet-ի այսինքն bullets զանգվածի մեջի ավելացրած bullet object-ի պարամետրերը
// const starImg = document.createElement("img")
// starImg.src = "data:image/jpeg;base64,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"
// function draw() {
//     data.bullets.forEach(function(bullet) {
//         context.drawImage(starImg, bullet.x, bullet.y, bullet.width, bullet.height)
//     })
// }


// // canvas 4
// // 1. ձայն ենք ավելացնում
// // 2. ստեղծել ձայն գործողությունը ֆունկցիան վերագրում ենք մի փոփոխականի մեջ
// const audio = document.createElement("audio")
// audio.src = ""
// // 3. որը կկանչենք այն ժամանակ երբ կրակենք այսինքն keydown անելուց կոճակ սեխմելուց երբ աջ կամ ձախ կոճակը չենք սխմում որը կշարժի մեր հերոսին այլ հակառակ դեպքում ցանկացած կոճակ որի ժամանակ կաշխատացնենք կկանչենք մեր ֆունկցիան որպեսզի ձայն հանի որը կցած է ստեղծել ձայն ֆունկցիայի վրա անելով
// document.addEventListener("keydown", function(evt) {
//     if(evt.code === "ArrowRight") {
//         data.hero.xDelta = 1
//     } else if(evt.code === "ArrowLeft") {
//         data.hero.xDelta = -1
//     } else {
//         audio.currentTime = 0
//         audio.play()
//         data.bullets.push({
//             xDelta: 5,
//             x: data.hero.x + data.hero.width,
//             y: data.hero.y + data.hero.height/2,
//             width: 20,
//             height: 20
//         })
//     }
// })
// // audio.currentTime = 0 որպեսզի ամեն անգամ ձայնը չկրկնվի, ձայնը հանելուց չսպասի անցած կրակած փամփուշտի ձայնը հանի հետո կրակի այլ միանգամից սկսի ձայնը սկզբից ավարտելով անցած կրակած փամփուշտի ձայնը




// // canvas 5
// // 1. ավելացնում ենք հակառակորդ ում մենք կհարվածենք և նաև ավելացնում ենք ձայն որը կհնչի էն պահին երբ որ իրեն հարվածենք
// // 2. data object-ի մեջ ավելացնել դատարկ զանգված որի մեջ մենք կավելացնենք մեր հակառակորդին
// let data = {
//     bullets: []
//     rabbits: []
// }շ

// // 3. թարմացնել update ֆունկցյայի մեջ ասում ենք եթե data object-ի մեջի rabbits զանգվածի երկարությունը հավասար է 0 այսինք դատարկ է ապա այդ ժամանակ data object-ի մեջի rabbits զանգվածին ավելացնում ենք push ենք անում մի հատ object rabbit object որը կունենա իր պարամետրերը որտեղ կլինի x, y լայնություն բարձրություն width, heigth և delta ինչ որ մի թիվ որպես արագություն 
// function update() {
//     if(data.rabbits.length === 0) {
//         data.rabbits.push({
//             xDelta: -1,
//             x: canvas.width - 100,
//             y: data.hero.y,
//             width: 100,
//             height: 100
//         })
//     }
// }

// // 4. թարմացնել ֆունկցիայի մեջ  data object-ի մեջի rabbits զանգվածի վրայով պտտվել forEach անել և ամեն անգամ վերցնել rabbits զանգվածի մեջի անդամները հերթով(որը պետք է լինի ավելացրած rabbit object-ը) իր x-ին ավելացնել ամեն անգամ իր delta-ով որպեսզի հակարակորդը շարժվի      
// function update() {
//     data.rabbits.forEach(function(rabbit) {
//         rabbit.x += rabbit.xDelta
//     })
// }

// // 5. որպեսզի փամփուշտը հակարակորդին դիպչելուց անհետա և հակարակորդնե անհետանա և սկսի սկիզբից իր տեղից նորից շարժվել
// // 5.1
// // գրում ենք մի հատ ֆունկցիա որը վերցնում է երկու object ու ենթադրում է որ ամեն object-ի մեջ կա x, y, width(լայնություն) և height(բարձրություն) և ինքը ընդամենը մի քիչ պարզ մաթեմով ստուգումա թե իրանք իրար հատում են թե չէ
// function intersect(rect1, rect2) {
//     const x = Math.max(rect1.x, rect2.x),
//     num1 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width),
//     y = Math.max(rect1.y, rect2.y),
//     num2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
//     return (num1 >= x && num2 >= y)
// }

// // 5.2
// // և թարմացնել ֆունկցիայի մեջ պտտվում ենք bullets զանգվածի վրայով որի մեջ էլ պտտվում ենք rabbits զանգվածի վրայով և ասում ենք եթե intersect ֆունկցային տալով rabbit և bullet object-ները վերադարձնի true այսինքն իրար դիպչեն փամփուշտնու ու հակարակորդը ապա էտ ժամանակ bullet object-ի մեջ ավելացնում ենք deleteMe փոփոխական որի մեջ վերագրում ենք true և rabbit object-ի մեջ ավելացնում ենք deleteMe փոփոխական որի մեջ վերագրում ենք true որպեսզի
 
// function update() {
//     data.bullets.forEach(function(bullet) {
//         data.rabbits.forEach(function(rabbit) {
//             if(intersect(rabbit, bullet)) {
//                 stabAudio.currentTime = 0
//                 stabAudio.play()
                
//                 bullet.deleteMe = true
//                 rabbit.deleteMe = true
//             }
//         })
//     })
// }

// // 6.
// // որպեսզի թարմացնել ֆունկցիայի մեջ bullets և rabbits ֆունկցիաները filter-ենք և վերագրենք և վերագրենք նույն bullets և rabbits փոփոխականների մեջ
// // դա անում ենք կանչելով filter ֆունկցիան և վերցնելով bullets զանգվածի ամեն մի անդամը այսինքն bullet object-ը վերադաձնում ենք true եթե bullet object-ի մեջի deleteMe փոփոխականը հավասար չէ true
// // և նույնը անում ենք rabbits object-ի հետ կանչելով filter ֆունկցիան և վերցնելով rabbits զանգվածի ամեն մի անդամը այսինքն rabbit object-ը վերադաձնում ենք true եթե bullet object-ի մեջի deleteMe փոփոխականը հավասար չէ true
// function update() {
//     data.bullets.forEach(function(bullet) {
//         data.rabbits.forEach(function(rabbit) {
//             if(intersect(rabbit, bullet)) {
//                 stabAudio.currentTime = 0
//                 stabAudio.play()
                
//                 bullet.deleteMe = true
//                 rabbit.deleteMe = true
//             }
//         })
//     })
    
//     data.bullets = data.bullets.filter(function(bullet) {
//         return bullet.deleteMe !== true
//     })
//     data.rabbits = data.rabbits.filter(function(rabbit) {
//         return rabbit.deleteMe !== true
//     })
// }



// // 7. և ստեղծել նկար գործողությունը ֆունկցիան վերագրում ենք մի փոփոխականի մեջ const rabbitImg = document.createElement("img"); rabbitImg.src = ""
// // որը հետո պետք է նկարել ֆունկցիայի մեջ պտտվել data object-ի մեջի rabbits զանգվածի վրայով և վերցնել ամեն մի անդամը, արդեն ստեղծված object-ը հակարակորդը և նկարել կանչելով drawImage և տալով այն փոփոխականը որի մեջ կա ստեղծել նկարը ֆունկցիան և ավելացրած հակարակորդի(object-ի) rabbit-ի այսինքն rabbitss զանգվածի մեջի ավելացրած rabbit object-ի պարամետրերը
// const rabbitImg = document.createElement("img")
// rabbitImg.src = ""

// function draw() {
//     data.rabbits.forEach(function(rabbit) {
//         context.drawImage(rabbitImg, rabbit.x, rabbit.y, rabbit.width, rabbit.height)
//     })
// }

///////////////// canvas 4-ի ժամանակ կնոպկա սխմելուց նկարումա, update-ի մեջ թարմացնելուց տանումա առաջ draw-ի մեջ նկարելուց նկարում ավելացրաց պարամետրերով
///////////////// իսկ canvas 5-ի մեջ update-ի մեջ տեսնումա չկա ավելացնումա և draw-ի մեջ նկարումա ավելացրաց պարամետրերով
    








// // canvas 1
// // 1.1
// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// canvas.width = 400;

// context.fillStyle = "red"
// context.fillRect(10, 50, 50, 50);

// context.lineWidth = 10
// context.strokeStyle = "blue"
// context.strokeRect(100, 50, 50, 50);


// // 1.2
// let data = {
//     x: 10,
//     y: 10,
//     width: 50,
//     height: 50,
//     fillStyle: "orange"
// };

// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// function draw() {
//     context.fillStyle = data.fillStyle
//     context.fillRect(data.x, data.y, data.width, data.height);
// }

// draw()



// // canvas 2
// // 2.1
// function loop() {
//     requestAnimationFrame(loop)
//     update()
//     draw()
// }
// loop()


// clearRect(x, y, width, height)



// // 2.2
// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// let data = {
//     x: 10,
//     y: 10,
//     width: 50,
//     height: 50,
//     fillStyle: "red",

//     xDelta: 5,
//     yDelta: 2
// }

// function draw() {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.fillStyle = data.fillStyle
//     context.fillRect(data.x, data.y, data.width, data.height)
// }

// // let xDelta = 5;
// // let yDelta = 2;

// function update() {
//     if(data.x + data.width > canvas.width || data.x < 0) {
//         data.xDelta *= -1
//     }
//     if(data.y + data.height > canvas.height || data.y < 0) {
//         data.yDelta *= -1
//     }
    
//     data.x += data.xDelta
//     data.y += data.yDelta
// }

// function loop() {
//     requestAnimationFrame(loop);

//     update()
//     draw()
// }

// loop()



// // canvas 3
// // 3.1
// document.addEventListener("keydown", function() {
// })

// document.addEventListener("keyup", function() {
// })



// evt object-ը ունի լիքը ինֆորմացիա որից մեկը code: "ArrowRight" տեքստնա այսինքն հղում դեպի աջ
// code: "ArrowRight" է գրվել որովհետև սխմելենք դեպի աջ կնոպկեն եթե սխմենք օրինակ d տառը կգրվեր code: "KeyD"
// code: "ArrowRight", code: "ArrowLeft", code: "ArrowDown", code: "ArrowUp"

// document.addEventListener("keydown", function(evt) {
//     if(evt.code === "ArrowRight") {
//         data.xDelta = 5
//     } else if(evt.code === "ArrowLeft") {
//         data.xDelta = -5
//     }
// })
    
// document.addEventListener("keyup", function(evt) {
//     data.xDelta = 0
// })



// // 3.2
// const canvas = document.querySelector("canvas")
// const context = canvas.getContext("2d")

// let data = {
//     xDelta: 0,
//     x: 10,
//     y: 10,
//     width: 50,
//     height: 50
// }

// function update() {
//     data.x += data.xDelta
// }

// function draw() {
//     context.clearRect(0, 0, canvas.width, canvas.height)
//     context.fillRect(data.x, data.y, data.width, data.height)
// }

// function loop() {
//     requestAnimationFrame(loop)

//     update()
//     draw()
// }

// loop()

// document.addEventListener("keydown", function(evt) {
//     if(evt.code === "ArrowRight") {
//         data.xDelta = 5
//     } else if(evt.code === "ArrowLeft") {
//         data.xDelta = -5
//     }
// })

// document.addEventListener("keyup", function(evt) {
//     data.xDelta = 0
// })




// // canvas 4
// // փամփուշտ ավելացնել որպեսզի կնոպկա սխմելուց կրակի
// // կոճակ սխմելուց դանակա գցում
// // 4.1
// // Թազա անցածը
// // 4.1   1
// const img = document.createElement("img")
// img.src = ""

// const starImg = document.createElement("img")
// starImg.src = "data:image/jpeg;base64,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"

// let data = {
//     bullet: [],
// }

// function update() {
//     data.bullets.forEach(function(bullet) {
//         bullet.x += bullet.xDelta
//     })

//     data.bullets = data.bullets.filter(function(bullet) {
//         if(bullet.x > canvas.width) {
//             return false
//         }
//             return true
//     })
// }

// function draw() {
//     data.bullets.forEach(function(bullet) {
//         context.drawImage(starImg, bullet.x, bullet.y, bullet.width, bullet.height)
//     })
// }

// document.addEventListener("keydown", function(evt) {
//     if(evt.code === "ArrowRight") {
//         data.hero.xDelta = 1
//     } else if(evt.code === "ArrowLeft") {
//         data.hero.xDelta = -1
//     } else {
//         data.bullets.push({
//             xDelta: 5,
//             x: data.hero.x + data.hero.width,
//             y: data.hero.y + data.hero.height/2,
//             width: 20,
//             height: 20
//         })
//     }
// })


// // 4.1    2
// const audio = document.createElement("audio")
// audio.src = ""
// audio.currentTime = 0
// audio.play()






// // 4.2
// // 4.2   1
// // հերոսին աջ ու ձախ տանենք
// const canvas = document.querySelector("canvas")
// const context = canvas.getContext("2d")

// const backgroundImg = document.createElement("img")
// backgroundImg.src = "https://i.pinimg.com/originals/5c/18/0e/5c180e41723312149d2c59680786291d.jpg"

// const heroImg = document.createElement("img")
// heroImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJc-B8bcNBWRy_62-M8qaM5HtJ4A5dWxg1g&usqp=CAU"

// let data = {
//     hero: {
//         xDelta: 0,
//         yDelta: 0,
//         x: 10,
//         y: 140,
//         width: 100,
//         height: 100
//     }
// }

// function update() {
//     data.hero.x += data.hero.xDelta
//     data.hero.y += data.hero.yDelta
// }

// function draw() {
//     context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
//     context.drawImage(heroImg,  data.hero.x, data.hero.y, data.hero.width, data.hero.height)
// }

// function loop() {
//     requestAnimationFrame(loop)
//     update()
//     draw()
// }
// loop()

// document.addEventListener("keydown", function(evt) {
//     if(evt.code === "ArrowRight") {
//         data.hero.xDelta = 1
//     } else if(evt.code = "ArrowLeft") {
//         data.hero.xDelta = -1
//     }
// })

// document.addEventListener("keyup", function(evt) {
//     data.hero.xDelta = 0
// })



// // 4.2   2
// // կոճակ սխմելուց դանակա գցում, ավելացնում ենք փամփուշտ

// const canvas = document.querySelector("canvas")
// const context = canvas.getContext("2d")

// const backgroundImg = document.createElement("img")
// backgroundImg.src = "data:image/jpeg;base64,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"

// const heroImg = document.createElement("img")
// heroImg.src = "https://w7.pngwing.com/pngs/311/300/png-transparent-pacman-pac-man-game-computer-game-baddie-arcade-warrior-japanese-ninja-thumbnail.png"

// const starImg = document.createElement("img")
// starImg.src = "data:image/jpeg;base64,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"

// let data = {
//     hero: {
//     xDelta: 0,
//     yDelta: 0,
//     x: 10,
//     y: 140,
//     width: 100,
//     height: 100
//     },

//     bullets: []
// }

// function update() {
//     data.hero.x += data.hero.xDelta
//     data.hero.y += data.hero.yDelta

//     data.bullets.forEach(function(bullet) {
//         bullet.x += bullet.xDelta
//     })

//     data.bullets = data.bullets.filter(function(bullet) {
//         if(bullet.x > canvas.width) {
//             return false
//         }
//             return true
//     })
// }

// function draw() {
//     context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
//     context.drawImage(heroImg, data.hero.x, data.hero.y, data.hero.width, data.hero.height)

//     data.bullets.forEach(function(bullet) {
//         context.drawImage(starImg, bullet.x, bullet.y, bullet.width, bullet.height)
//     })
// }

// function loop() {
//     requestAnimationFrame(loop)

//     update()
//     draw()
// }
// loop()

// document.addEventListener("keydown", function(evt) {
//     if(evt.code === "ArrowRight") {
//         data.hero.xDelta = 1
//     } else if(evt.code === "ArrowLeft") {
//         data.hero.xDelta = -1
//     } else {
//         data.bullets.push({
//             xDelta: 5,
//             x:  data.hero.x + data.hero.width,
//             y:  data.hero.y + data.hero.height/2,
//             width: 20,
//             height: 20
//         })
//     }
// })

// document.addEventListener("keyup", function(evt) {
//     data.hero.xDelta = 0
// })




// // 4.2   3
// // ձայն ենք ավելացնում
// const canvas = document.querySelector("CANVAS")
// const context = canvas.getContext("2d")

// const backgroundImg = document.createElement("img")
// backgroundImg.src = "data:image/jpeg;base64,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"

// const heroImg = document.createElement("img")
// heroImg.src = "https://w7.pngwing.com/pngs/311/300/png-transparent-pacman-pac-man-game-computer-game-baddie-arcade-warrior-japanese-ninja-thumbnail.png"

// const starImg = document.createElement("img")
// starImg.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFBUVFRcZGBUaGhodGhsYGx8aGx0bHR0bHBkbIR0cIS0kIR0qISEjJTclKi4xNDQ0ISM6Pzo/PjMzND4BCwsLEA8QHRISHTMqIyozMzMzMzMzMzMzMzM1MzMzMzEzMzEzMzMzMzMzMzMzMzMzMzMzMzMzMzEzMzMzMzMzM//AABEIANEA8QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAgH/xABAEAABAwIEAwYDBgQFAwUAAAABAAIRAyEEEjFBBQZRByIyYXGBE0KRUmKCoaKxFHKSwSMzU7Lhc9HxFWPC0vD/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EAB0RAQEBAQEBAAMBAAAAAAAAAAABEQIhEgMxQVH/2gAMAwEAAhEDEQA/AJmREQEREBERAUXdpfPWL4Zi6NOk2maTqYec4JzHM4OEgiIAH1UoqKO3fhmfD4fEAXp1Cxx+68SCfLM0D8SsG5cn820OJ0s9I5ajY+JSJ7zD/wDJp2cNfIyFsq5H4Hxitg6zK9B+V7foRu0jcHp/ddH8k84UeKUszYbWaB8SmTdp+0OrDsfY3SwbSiIoCIiAiIgIiICIqdR4aCSQABJJsABqSeiD5VqBrS5xAaASSTAAFySdgoL7QO0l+JecPg3up0GnvVGktfUI6EXaz8zvaypdpfaGcYXYXCuIwwMOeLGqR+1Py31PRR/h6RNgJc6wHWdB7lb551nrrI6U7N31X8Nwz6z3PqOa45nkudlL3ZJJue7Gq2pWPB8EMPh6NEaU6bGf0tAn8lfLFaEREBERAREQEREBERAREQEREBa9z1wv+L4fiqIEuNMuYPvs77B7kAe62FEHGrSshwfitXCVW1qDi2o02I0I3aRu07hXPOHC/wCEx2KoRAZUdlH3Hd9n6SFh2raV05yNznS4pSkQyuwD4tOdPvN6sPXbQ7Tti5G4VxKrhKrK1FxbUYZBH5gjdp0IOq6M5E50pcUpbNxDQPi059s7Z1YT9NDtObCNuREUUREQEReSYQfHOABJMAakqB+0/tEOKLsJhXRhwYe8a1SNh/7f+701qdqPaJ/El2Dwjv8AABIqVGn/ADDuxp/0+p+b01iwBakRe8Ow4e4l85GDM6NTs1oPVzoHkJOy2fkLh/8AE8RwrCJAqB7o0Apgv+ktA91r+HpQwzNyD7/8A/mpR7FOHTXxFcizGNptPm85ne4DG/1Lrnzza4/W9SRMqIi4O4iIgIiICIiAiIgIiICIiAiIgIiIIG7deGZMXRxAFqtPKf56ZuSf5XNHsouabrovtl4V8fhrngS6g9tQR9nwPHpDs34Vzmt8oruG6uOGcQqYaqytRcWVGGQ4fmCNCCLEGxCYe4GnuYjbe17FU6tGL/krmp+nSPIXOlPilLZmJYB8Snt0zsm5YfqDY7E7euceyag7/wBVo5XWa2o5xaTDm5CI2kSR7hdHLFmLBERRRQf2pdoRql+DwjopiW1qjT4zoWNP2Op+bTTWbajJBHUEfVcgYvDmm8sOoDfzaD/dWRKt4V/h8Pl7xVzgOHEQ97TuQImQP+SPqrjFAAwOm4g3vp0iN115jn314o0W5iB0k/3Knnsm4f8AB4cx5EOrPdUPoTlb+loPuoX4bhS6nUI8TyylT83vMn6AfmF0nw3BihRpUm+GmxrB6NAH9k/LfMY/DPdXiIi4vQIiICIiAiIgIiICIiAiIgIiICIiC04jhG16VSk7w1GOYfRwLT+65GxmGdSqVKTxD2Ocxw6OaS135hdiLS+auzrB8Qc6oQaVd2tSnudszPC71sT1VlHPHDn2c2fyBtvE7q+yyAD1JsOt/W19bx5ALJcw8nV+GVw18OpnwvHhIJgE9LwD0JHVs2l7RMTuB5XNtTB6+EnddIzWa7PMa3CcQpVnQKb81N1/BnsHR0DgJ8iSui1zJhm/dtFyCCTfM720OnQSpP5T57bSp06OLLsoADK13S0WAcBJMaZ7zBnQk56n9JUmosZS4/hHiW4miR/1Gf8AdWHEecsFQEms2odmUf8AFcT0hkge5AWMaX3H+KNwuHqVnEd0d0Hdxs1vuYvsJOy5zq4Vrqrqh7wLgGA/6bQGsc7oYAJGt9itu5m49V4hUa+oMlFmYspDvWg995Fi8i3kCW2kl2Ee0b2kD1I6W0d5nrrddOec/bHVY+s2dm3glvTZvlEdI/urd2Gc+oGUwXPP2bz7A+Svm0SZ1JLjG4sJJtvofT2K2/k3kV+LDqtVzqeHcSA1hh9QAxr8rNYI19F02T1zvN68W/J3CAcTgKWZr8gdiagaZymG5M0WFsjb759rqb1jOD8Dw+DYW4ekymDqQO84jdzjd3uVk1x662uvPOR9REWWhERAREQEREBERAREQEREBERAREQEREGA5x4Y3E4WoCJc1rnt62BzN/E2R5Eg6gKBmUDLh4g0nMQAJgjvWaTtMxAgLobj+MbQwteq4w1lN7j7AwPc2UA4FndaZ7xEXJtOYk93SwBv63Bhb4Z6eKYEQSBJkk2EG51BF9jJsLWsrlkBsA2JjqAJkw4m5mDoSIvrCPaZLjv8wAaR1IMbRfpEA7qoxkXgOFoEmDMf3IGnTrfWsqtOmCQemjfE6SbNi0S6Bfe0KpSZbUwJuIIAMOboADIixPTqCvIrEx0iAYsDI6zHpv8AmvTHmARJN73mTYmJM6SfznZoQDeTMggFrSdiSSHkAa3AOwuQAqFRtpJcM0G86ndxaZJy7GPEdtaz5daxBBkm5OmYwbbaQQd72X2JLrSCRIuSTHdG+tz9Z0VFHCYL4tWnTb3nPexklsRLg03m8CNp1nQqfcPRbTa1jAA1oAaBoABAChPh9QUa9KofAx7H3nwh7S4i5sB0gXN5sZwBlY7Xl6REWGxERAREQEREBERAREQEREBFQxGIZTaXPe1jRq5xDQPc2WpcW7TOGYaR8f4rgPDRBfPo6zP1IN0RQvxbtsNxhcNHR9Z0/VjP/stK4t2i8SxMh2Icxp+WiBTA/E3vfUq4OkcbxGjQE1qtOmOr3tYP1FVMJi6dZgfTe17Do5jg4H3FlyDWrOe4ue5znHUuJcT7lZjlnmjFcPfmw74B8THDMx/8zevmIPmr8jq1FFOA7XXPb38E4O3Lagj1hzQQPrqFacW7Q8TiWltENw7DYuaS99/vQA0RuO8NknNS1e9pvHxXqDA03Sxjg/EFp1Le8ylPUEBx6HIOq09rR1BLYEX26aRNrxoTOwFNgDQRYC7gTHzFpzPPUl3ltrIJqGD4ctrEG5jSS3vTYlakxmmpsATrbeDlO1r/AEyi11VGHBJNp1BnWLWgyTeJMQJBVOmzNBbPlsCXNsLSLzHW41upI5H5caGivUaDP+WCIEfaI/IT9Nytwk1qOE5dxNUTTpPLdi4ZRHS5BPS5IiV7xPB69ATVpPaPtBoLZ88jgb/86yVMy8uYCCCJB1BuFn6axBb8N0vYGxkn0dHeMaiT4QNiveUyNT0B0MwTqIjy3vvBW2c58vjDn49IRTecr2geFxs2PImAB1hujhlwD6W7YyGbzOl7Q3KQJE910wdrDW6xYoMw2c6SNSdvMloEzNrEa21lb/yVxoVGDDvkVGCGZp7zB8snVzdOsQeq0iiy4PTLNtCYM2EkEkkC0gidCqjgJDvDcQYyu17piT0BlsRaJ1S+rPEwoo3w3MuLpgBrm1Bf/MYZGkd5rget3XOU7CVjONc4cSMtpOw4nTKHNcdbAuJH5gzZZ+a1sb/zFzThMA0HEVA0nRrQXPP4W3jzNlZ8M5/4biIDMSxrj8tSaZnp3wAfZc98ZZi6jzUrh7zqXeIX3kE69TcrEOV+E+nX9Oo14DmkEHQtMg+4VVci4HiNbDmaNWpSP3HuZ/tN1tvDO1LiVGzqjKw6VWAn+pmU/UlT5q/UdGIoi4Z21UzbEYZ7fvUXB8/hflj+orcOGdonDa9hiWsPSsDT/U4Bp9iVMprbkVGhWZUAcxwc06FpBH1CrKKIiIIx5l7XcPhnvpUKTq1Rji0knIyQSHQbuMEdAD1Uf8X7V+I15DHsoN6Um97+p8n6Qpe5g7OsBjXPqPpllV1zUpOLSTuS27CTuS2StE4p2JPEnDYlp6NqtLf1sn/arMEVY3iFbEOzVqj6jutRxef1FWi2/ivZvxPDSThzUaPmokVJ/CO9+latiMO+m4texzHDVrgWkexutbEUVXZh3HyExKoL015GhVF/TwTdzPpva8e/7LIUKdNptaDYkgg9Dfz/ALTo5YtmPeBlNx09iB7XKuKOPbMmQfy+ov8ATy6IlZWi+CDoDrNrzcNHqSfrpvf0agJGxted9AIGjSRrYeLosZSyVLNeCSHTEAnuxffLqYi+43V7kgQJ1BkA+upNiLwd0Rc03wIDoDZvJDhYnY7a7fNcgq6ewn02gGO8dwNwSPK0bgrxRpAxEy02G0xIy3jKHExGxNlVa2QR3R5xrFxfQbA/+ERWwVKY3EgHWLjLPTfUdSFO+GpBjGNGjQAPYQoQosMTOgJ0uAZy630k+wsNTMfAseMRQZUGsQ4bhzbOB85U6a5ZJERYaYrmSlnwmIbofhPLT0c1pc13qHAH2UbUADTzECGktsYhrXOa0EjfL59N9d75zxjWYV9P5qwNMAGDlcIqOB2IbMHQuLBMuC1Kk3Kxt++Lm9nZnF5ygbAk3trrAhaiVh+KMinVcScwaXsjukFmnhMEZrG8RA9MXi8XUJ+dstYQ0OIkF0F0jUXbN4mQQATOdxuDNRoZLgyCXAAd6xJBJYTeDeAI26/KnDmFoYW5mTGV4znMZJ1kEmZuYOaD5aZYBuMqBjh3iPiOAfmNz8R5LQBHeIA11ixtC8YnFOa97M78oqGHAuc6GtIcbzcPcIG0DUC2cxGHZlqM7rBUcZ7rS1zjJJcDvN7yZAkaLH4nE4fDAOcGAgGHszudJkmXNB8Rgk2kxpCJrzgKhdTDjdxbJJ00beD5kH0joqOMwNN05qYgTctAIuDr7i3nqYWHxfNbGZhRa45pJLzALj82UE339fQLB4njtep8+UC4yDLHuLz5ytQrJ4vhVETLw3bWDr57ew/74aph2AnvyAbkDMP7K0dUJMkk+t15JVtSRWe1g0cT6tj+5XmG9fy/5Wa4Tybj8VHwsNULT8zxkb65nwD7St14V2MYh8HEV2Ux9mmDUd6ScoB+qz9Rr5Rvg8XUouzUqj6burHOYfq0hbty52hcUD202OOKJNmOp5nEW+ZkOHqZhSNwvso4dRgva+u4Xmq8x/SzKCPIytywXD6WHbko02U2fZY0MHrDRqs3qf4sl/14/ia3+h+tqK/RYaEREBWuMwFKs3LVpsqN6PYHj6OBV0iDSeKdl/DMRJFE0nH5qLi2PRpln6VpfFexJwk4bEg9G1mEfV7J/wBqmpEHMvE+zXidCZw5qNHzUnB8+jQc/wClZvkrsrr4kipiw6hRBswiKr/Y+Bvmb9Bup+RXaMDw3lDBYdobTw7I+8MxJ6nNqfNeeJ8oYSuD/hNpu2cwBpHsLEeRC2FFNEHcU4M/B1jh6kXbmY8Aw9oMZpMkOuARIgkEzYmiGajbKCb3LQQAMwmDOwNs3leUOfOD/wAThHOaP8WjNSnGpLQczPxNkeuU7KLKWJNRmZsmwyZdRIJjfUzMg28luXWbFyxrmkAwXTebb20NhI01JHqFmuB8UqYV80wMrozMeYaYAgWENfBFx9CIAxlJocGlokwDAN/CYG4i3vb0F1hmEyD0uYG4zXIvJaJi+gvIJNqRvlHnHDFoNTPTJ2exxE9MzQQqOL52oC1FrqzurRlYP5nOuB6ArTsU7K2BE+RMTFh019+uqssK54e1rt7x729bXEefqs422Kq59dxq1jL9GsGUBokQ0AyBJIMGbAyTAVQU7d7X5M5MO+2CRrI2AGh6BfKFJxALhFzAaCZOlm7R1JEnzCr/AA+8BeZu7ugn5QTMGJEWE3PoiLN7Q1oHhcL5T3rgmfCZJkayR1sqmB4XUrvDAA3d5LWnI0xciLudBAHqT5iwNdLiAO9MxADZc/fQ+mkzuFuPA8PkpBxHffD3e4GUezQB7KGPnDuB0KDQGMBO7n9559XH9hZXlbDMe3K5jXN6EAhXCKKinnXsqZWmrgsrKmrqbiQ13o7Y+uvVapwzsgx9Qj4rqVBu8uzu9mssfdwXQCK/VTIjLhPY3g6cGvUqVzuBFJh9my79S3XhXLODwkfAw9OmR8waC/3e6XH3KzKKaoiIgIiICIiAiIgIiICIiAiIgIiIKNd4axxdoGkn0AuoI5epxSonKIIvJiAfCCdrR/8ApUjdpnHBh8KaDT/iV+5bVrHGHHWxd4B5knRpWl4UBjQwEgCBoCBZsGND1g2IkGBZa5iWrtx63JOhvMib2taxX1jwHZgRMxaBoJg3tfNAJtbqIsDWOY5ba3hx9D4gXbCTuTvdVWVHAyBYNG9gD1iDruN511WmWSDM5Ek39IkCwMxGm91Xw2Hl5MCwOvSZMec29lj8bjalAMqVKNcNc/KxwaQCTmMEui3rE5RCr4CpWr03Op4ar8MauDWmbAgsAd3xBju+Yso0z+cDwySyYbNzmsL9TrJvb0XmtjQPEA8mcwiJ8hsN/OJWMoY1rmiDdpuAIIIsAWyCOsECL+ivnYgNbJaHWM5ieozC0AX9r+iyq1xDXAEtuXZpbpMyzQm8EE7RP0kPCPDmMI0LWkehAhaC1hM96D+cCGmWiRksYEzpoLLMcp8Zbndg3uHxGND6f36Z1A+8x0gjpl80qRtyIiiiIiAiIgIiICIiAiIgIiICIiAiIgIiICibnftX/hqtTDYRgc9hLXVHmwcLODW7kG0m0g2KkvjGObh6Fas7w02OefwgmPfRcjVqrnuc9xlziXOPUkyT9VZBsWF4tWxuLbUrPLyCXQTaYga+wk6CNgtzFTS03baBc5gDP18tlpnKFK9R9tIEmBa7pnXa262l72TJkC0k2Ba2JM37oBE9ZB3C6fxi/tXpvbBe6ABcl5hoBImY6i50PlYKR+UuAhjW16oJe4Sxrh4AZIcRs8g+wt1UOcL4iMVjsLh2k/ANdkz85BkEzo2Rpv8AkOjwFnpY+OYCIIBHnde0RYaa5zJy+3ENNRgDcQ0GCLZxux2kyLA7GNpC0vhuMZUBAN2wCw7O1AcDdpMAXFgT0cBKy555+xL8DxSs+lABeZb8rg5lOo4OH873GVZ6lb21pBa4AZZmwO4JJmCJ7w3gSPbVOdKDqdOliabnNqU32cwuDmh5MOza+Ia75o8lmOA8Zp4qmHs7zh4mAEvae7Ii4gkZswN9DoF945QGIw9WmB3iwubOgLO9EbRAG/rErc8rF9iz5Z7WazCxmLY2oyQDVb3HtGhc5vhdGpjKpnaZFlyS0SPULpLs94p/FcOwzyZe1mR065mHISfWAfdPyc57DjrfK2dERc3QREQEREBERAREQEREBERAREQEREEe9tHFPg8NdTHirvay32R33H07ob+Jc7KVO3fiefFUMONKVMuN/mqHQjyaxp/Eosa2TC3yjauXqop08xgXk5iY1uTHlA+qs+O8YNY5GWYOlsxHkNB5bm6scXi5aGN8IsT9pUMJhn1Xtp02l9R5DWtAkknQBavjOMryax5x+DFMEv8Aj0yABsHguPoGgk+UrqtaR2d8jM4bTz1Idi3jvu1DRrkb5dTufKFu65261H1ERRXxc5dsGFqM4nVc5pDKgY5h2cBTpsdB6hzYPsujlhOaOXaPEaBo1m+bHDxMds5p/cbhWXBy7w3iFSg8PpmDuDcEbggqUOC8wMxLTkADzctLu6DBBsSSNgL/ANgo95p5cr8OrmjWHmx48L2/aaf3GoKxuCxj6L2vYYcFvys2MxiqIbUqNE2eSJEd03FjpqpN7EuIwcVhSfs1Wj1hj/2Z9VHNXiDKtVtYN8Tcr2n7QEftv5ey2Hk/E/wmOwlaYpue/Dvts6Mk+Xea78K69TeXn5vz26BREXmeoREQEREBERAREQEREBERAREQERYbm3iX8LgsTWmCyk4t/mIys/UQg5r524n/ABePxVYXDqjg0jdjIYw/0tCwjbLy0KrTY57g1oJcSAA0SSTYAAaknZbiV9w1B9R7WMaXPcQ1rWiSXGwAHVdDdm/IbOHMFWqA7FvFzqKYPyN8+rt9BbWh2ZcgjAMGIxADsW8WGootOrR1efmd7C0kyIpaPqIiyoiIgIiIMJzPy9R4hQdRrNtqxw8THbOaevlodFzbzVy3W4bXNGsLaseB3Xt+0PPqNj7FdWrC8y8vUeI0HUazZGrXDxMds5p6/uLFWXByrQqFpW14GoKtCszR2RtRhGofTPf9yxzj+FYvmnlqtw2uaNYSDJY8Duvb9oefUaj6FeuVsVlr0mn5nBt983dI9HAlvuF246/jj3xvsdL8u8RGKwtCtu+m0n+aIePZwIWTWi9mD3U6eIwb/FQqnL/033afqHH3W9Lj1Mrrzdj6iIooiIgIiICIiAiIgIiICIiAoy7cuJ/DwLKI1rVBP8rO8f1ZVJqgvtzqVH4zC0g0lopSyATmc95aWgDU91th1CsEW06ZcQ1oJcSAABJJNgABqVPnZl2ejBNbicS0HFOHdabikD+7yNTtoNyfHZp2djB5cVigHYkiWsNxSB/epG+2g6qTVbQREWQREQEREBERAREQYXmXl+hxCg6jXbIN2uHiY7ZzTsfyOhXN/NPLVfhlc0qokGTTqCQ17eo6Ebt1B8oJ6pWH5k4BQx9B1Cu2QbtcLOY7Z7TsR9DobKy4liMeznmR1XGUXVHS6rTdScbeNgDhPmSJH85UzLniryzi+EYym0hz2fEa+jUa0lr3sdLWECcrnAlpB69LrodXr31JMfURFloREQEREBERAREQEREBERAVnjPHS/mP7FEQXiIiAiIgIiICIiAiIgIiICIiD4i+ogIiICIiAiIgIiIP/9k="

// const audio = document.createElement("audio")
// audio.src = "http://novastar-main.co.hays.tx.us/NovaStar5/sounds/laser.wav"

// let data = {
//     hero: {
//         xDelta: 0,
//         yDelta: 0,
//         x: 10,
//         y: 140,
//         width: 100,
//         height: 100
//     },

//     bullets: []
// }

// function update() {
//     data.hero.x += data.hero.xDelta
//     data.hero.y += data.hero.yDelta

//     data.bullets.forEach(function(bullet) {
//       bullet.x += bullet.xDelta
//     })

//     data.bullets = data.bullets.filter(function(bullet) {
//         if(bullet.x > canvas.width) {
//             return false
//         }
//         return true
//     })
// }

// function draw() {
//     context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
//     context.drawImage(heroImg, data.hero.x, data.hero.y, data.hero.width, data.hero.height)

//     data.bullets.forEach(function(bullet) {
//         context.drawImage(starImg, bullet.x, bullet.y, bullet.width, bullet.height)
//     })
// }

// function loop() {
//     requestAnimationFrame(loop)

//     update()
//     draw()
// }
// loop()

// document.addEventListener("keydown", function(evt) {
//     if(evt.code === "ArrowRight") {
//         data.hero.xDelta = 1
//     } else if(evt.code === "ArrowLeft") {
//         data.hero.xDelta = -1
//     } else {
//         audio.currentTime = 0
//         audio.play()
//         data.bullets.push({
//             xDelta: 5,
//             x: data.hero.x + data.hero.width,
//             y: data.hero.y + data.hero.height/2,
//             width: 20,
//             height: 20
//         })
//     }
// })

// document.addEventListener("keyup", function(evt) {
//     data.hero.xDelta = 0
// })





// // canvas 5
// // hակարակորդ ենք ավելացնում
// // 5.1
// function intersect(rect1, rect2) {
//     const x = Math.max(rect1.x, rect2.x),
//     num1 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width),
//     y = Math.max(rect1.y, rect2.y),
//     num2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
//     return (num1 >= x && num2 >= y)
// }
// // այս ֆունկցիան վերցնում է երկու object ու ենթադրում է որ ամեն object-ի մեջ կա x, y, width(լայնություն) և height(բարձրություն) և ինքը ընդամենը մի քիչ պարզ մաթեմով ստուգումա թե իրանք իրար հատում են թե չէ


// const rabbitImg = document.createElement("img")
// rabbitImg.src = ""

// const stabAudio = document.createElement("audio")
// stabAudio.src = ""

// let data = {
//         rabbits: []
//     }

// function update() {
//     data.bullets.forEach(function(bullet) {
//         data.rabbits.forEach(function(rabbit) {
//             if(intersect(rabbit, bullet)) {
//                 stabAudio.currentTime = 0
//                 stabAudio.play()
                
//                 bullet.deleteMe = true
//                 rabbit.deleteMe = true
//             }
//         })
//     })
    
//     data.bullets = data.bullets.filter(function(bullet) {
//         return bullet.deleteMe !== true
//     })
//     data.rabbits = data.rabbits.filter(function(rabbit) {
//         return rabbit.deleteMe !== true
//     })
    
//     data.rabbits.forEach(function(rabbit) {
//         rabbit.x += rabbit.xDelta
//     })
    
//     if(data.rabbits.length === 0) {
//         data.rabbits.push({
//             xDelta: -1,
//             x: canvas.width - 100,
//             y: data.hero.y,
//             width: 100,
//             height: 100
//         })
//     }
// }

// function draw() {
//     data.rabbits.forEach(function(rabbit) {
//         context.drawImage(rabbitImg, rabbit.x, rabbit.y, rabbit.width, rabbit.height)
//     })
// }

///////////////// canvas 4-ի ժամանակ կնոպկա սխմելուց նկարումա, update-ի մեջ թարմացնելուց տանումա առաջ draw-ի մեջ նկարելուց նկարում ավելացրաց պարամետրերով
///////////////// իսկ canvas 5-ի մեջ update-ի մեջ տեսնումա չկա ավելացնումա և draw-ի մեջ նկարումա ավելացրաց պարամետրերով
    


// // 5.2
// // ավելացնում ենք հակառակորդ ում մենք կհարվածենք և նաև ավելացնում ենք ձայն որը կհնչի էն պահին երբ որ իրեն հարվածենք

// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// const backgroundImg = document.createElement("img");
// backgroundImg.src = "data:image/jpeg;base64,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"

// const heroImg = document.createElement("img")
// heroImg.src = "https://w7.pngwing.com/pngs/311/300/png-transparent-pacman-pac-man-game-computer-game-baddie-arcade-warrior-japanese-ninja-thumbnail.png"

// const starImg = document.createElement("img")
// starImg.src = "data:image/jpeg;base64,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"

// const audio = document.createElement("audio")
// audio.src = "http://novastar-main.co.hays.tx.us/NovaStar5/sounds/laser.wav"

// const rabbitImg = document.createElement("img")
// rabbitImg.src = "data:image/jpeg;base64,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"

// const stabAudio = document.createElement("audio")
// stabAudio.src = "http://sistemas7.sead.ufscar.br:8080/jspui/bitstream/123456789/2261/2/duck.wav"

// let data = {
//     hero: {
//         xDelta: 0,
//         yDelta: 0,
//         x: 10,
//         y: 140,
//         width: 100,
//         height: 100
//     },
//     bullets: [],
//     rabbits: []
// }

// //

// function intersect(rect1, rect2) {
//     const x = Math.max(rect1.x, rect2.x),
//     num1 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width),
//     y = Math.max(rect1.y, rect2.y),
//     num2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);

//     return (num1 >= x && num2 >= y)
// }

// //

// function update() {
//     data.hero.x += data.hero.xDelta
//     data.hero.y += data.hero.yDelta

//     data.bullets.forEach(function(bullet) {
//         bullet.x += bullet.xDelta
//     })

//     data.bullets = data.bullets.filter(function(bullet) {
//         if(bullet.x > canvas.width) {
//             return false
//         }
//         return true
//     })

//     data.bullets.forEach(function(bullet) {
//         data.rabbits.forEach(function(rabbit) {
//             if(intersect(rabbit, bullet)) {
//                 stabAudio.currentTime = 0
//                 stabAudio.play()

//                 bullet.deleteMe = true
//                 rabbit.deleteMe = true
//             }
//         })
//     })

//     data.bullets = data.bullets.filter(function(bullet) {
//         return bullet.deleteMe !== true
//     })
//     data.rabbits = data.rabbits.filter(function(rabbit) {
//         return rabbit.deleteMe !== true
//     })

//     data.rabbits.forEach(function(rabbit) {
//         rabbit.x += rabbit.xDelta
//     })

//     if(data.rabbits.length === 0) {
//         data.rabbits.push({
//             xDelta: -1,
//             x: canvas.width - 100,
//             y: data.hero.y,
//             width: 100,
//             height: 100
//         })
//     }
// }

// function draw() {
//     context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
//     context.drawImage(heroImg, data.hero.x, data.hero.y, data.hero.width, data.hero.height)

//     data.bullets.forEach(function(bullet) {
//         context.drawImage(starImg, bullet.x, bullet.y, bullet.width, bullet.height)
//     })

//     data.rabbits.forEach(function(rabbit) {
//         context.drawImage(rabbitImg, rabbit.x, rabbit.y, rabbit.width, rabbit.height)
//     })
// }

// function loop() {
//     requestAnimationFrame(loop)

//     update()
//     draw()
// }
// loop()

// document.addEventListener("keydown", function(evt) {
//     if(evt.code === "ArrowRight") {
//         data.hero.xDelta = 1
//     } else if(evt.code === "ArrowLeft") {
//         data.hero.xDelta = -1
//     } else {
//         audio.currentTime = 0
//         audio.play()
//         data.bullets.push({
//             xDelta: 5,
//             x: data.hero.x + data.hero.width,
//             y: data.hero.y + data.hero.height/2,
//             width: 20,
//             height: 20
//         })
//     }
// })

// document.addEventListener("keyup", function(evt) {
//     data.hero.xDelta = 0
// })




// ?????
// // canvas 6
// // Վարժություն(canvas)
// // միայն սա է this-ով
// ?????











// // // logika ....




function Logika(time, shhyb, pox) {
    


}

const a = new Logika("clock", "eivueal", "dd");


// // inds petqa darnal milyardater
// // dra hamar petqa

// // .1. shamnak mtacselu, vor ete shat mtacem klini
// // .2. pox, de shamanaky inchna poxna
// // .4. petqa unenam resursner vor en inchi vra vor es petqa shamanak csaxsem lini mi zangov 

// // .3. petqa linem real  mtaceluc te vonc shamanak stexcsem ajsinqn vonc pox ashxatem 
// // ajsinqn chngnem csragravorumov u moranam im aneliqy
// // real najeluc erku ban ka nerka drutyamb vor chey joge

// // .3. 1
// // vuchuly
// // arajiny vor inds tvumer vor es liqy ban gitem u chgitey inchi mejem mtnum bajc parzvec voch mi banel chgitem im imacsacsy voch mi bana u en shamanaky vor inds tvumer heriqa inch vor ban anelu hamar parzvec shat qicha kam ete et shamanakum es hasnem dran et qicha nra hamar inch vor esem uzum

// // .3. 2 
// // giteliqi pakasy biznesum
// // ajsinqn gorty dnelu hamar petqa gorcsic giteliqne8 vor qich dnem shat arnem karch shamanakum 



// // inds dzuma linel real 
// // // mi qich aveli karch chor
// // // es unem pox  es csaxsumem u inds tvuma es hsnumem nran inchin uzumem bayc es chem uzum linem xosqi 25 tarekanum csragravorox stanam mi milion pox es uzum em lini gaxapar arden mtacsacs vor es yndameny et poxy dnem et gaxapari mej vorn el inds energia kta et gorcsy anelu 



// // // chlneluc patchar chka, pti chlini
// // // esel zut hishelu hamar mard moranuma en inch vor uzuma ani


// // unenalov giteliq amen inchic





// // inds petqa ekamuti axbyur, et csragravorumna 
// // inds petqa ekamuti axbyury dnem gorcsi mej vor pox beri , u aranc shamanak csaxselu bajc et gorcsi mej dnelu procsesy vorpesi chxangari ekamuti axbyurin

