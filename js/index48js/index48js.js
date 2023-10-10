// 1 //
// // ֆունկցիա ստեղծելու տարբերակները

// // 1.1
// func(5)

// function func(x) {
//     alert(x)
// }
// func(5)



// // 1.2
// const func2 = function(x) {
//     alert(x)
// }
// func2(5)


// // 1.3
// const obj = {
//     func: function(x) {
//         alert(x)
//     }
// }
// obj.func(5)


// // 1.4
// [5, 4, 3].forEach(function(val) {
//     alert(val)
// })
// այ էս ֆունկցիան 39 տողից հետո հասանելի չէ 
// էտ տիպի ֆունկցիաները կոչվում են unnames function(անանուն ֆունկցիա) այսինքն անուն չունեցող ֆունկցիա




// 2 //
// // 2.1
// // ինչ է arrow ֆունկցիան 
// // arrow function-ը(սլաքով ֆունկցիան) նախ և առաջ մեզ հնարաորություն է տալիս գրել կամ ստեղծել ֆունկցիա մի քիչ ավելի պարզ ձևով

// const func = function(x) {
//     alert(x)
// }
// func(3)

// // ինչպես կարելի սովորական ֆունկցիան թարգմանել arrow ֆունկցիայի function-ը delete ենք անում և փակագծերի աջ կողմից ավելացնում ենք սլաք 
// // հիմա ստեղծեցինք arrow ֆունկցիա

// const func = (x) => {
//     alert(x)
// }
// func(3)

// // ինքը մոտաորապես նույն ձևիա աշխատում ինչպես որ սովորական ֆունկցիան ինչ եմ ասում մոտաորապես որովհետև իրականում տարբերություններ կան 


// // 2.2
// // ինչպես ֆունկցիաների երեք ստեղծման տարբերակները դարձնել arrow ֆունկցիա 

// const func = function(x) {
//     alert(x)
// }
// func(3)
//      ||
//      \/
// const func = (x) => {
//     alert(x)
// }
// func(3)


// const obj = {
//     func: function(x) {
//         alert(x)
//     }
// }
// obj.func(5)
//      ||
//      \/
// const obj = {
//     func: (x) => {
//         alert(x)
//     }
// }
// obj.func(5)



// [5, 4, 3].forEach(function(val) {
//     alert(val)
// })
//      ||
//      \/
// [5, 4, 3].forEach((val) => {
//     alert(val)
// })





// 3 //
// ինչով է տարբերվում բացի տեսքից
// ամենակարևոր ու ամենամեծ տարբերությունը this-ը ինչպես է օգտագործվում


// // 3.1
// // օրինակներ որ դեպքում this-ը ինչ կլինի

// const func = function() {
//     alert(this)
// }
// func()
// // կտպի [object Window]

// const func = function() {
//     alert(this)
// }
// const obj = {
//     func: func
// }
// obj.func()
// // կտպի [object Object]


// const func = () => {
//     alert(this)
// }
// func()
// // կտպի [object Window]

// const func = () => {
//     alert(this)
// }
// const obj = {
//     func: func
// }
// obj.func()
// // կտպի [object Window]


// // 3.2
// // ըստ են օրենքի դե գիտենք սովորական ֆունկցիան ինչպես է աշխատում այս ֆունկցիայի this-ը կընդունի կետի ձախ կողմի արժեքը ու ամեն ինչ կաշխատի 
// // բայց կտպի [object Window] ոչ թե են object-ը այլ window

// // երբ որ մենք ստեղծում ենք սովորական ֆունկցիա իրա this-ը որոշվում է են պահին երբ մենք իրեն կանչում ենք ու նայած ոնց ենք իրեն կանչում ինչ իրավիճակում և այլն էտ ժամանակ իրա this-ը որոշվում է էտ պահից
// // ի տարբերություն arrow ֆունկցիայի
// // arrow ֆունկցիան երբ որ մենք ստեղծում ենք երբ որ իրեն հայտարարում ենք հենց էտ պահին իրա this-ը որոշվում է

// // իսկ իրա this-ը ինչ է ինչպես է որոշվում դե նայած ինքը որ ֆունկցիայի մեջ է ստեղծվում, ինքը էտ ֆունկցիայի this-ը ընդունում է որպես իրա this-ը 


// // 3.3
// // խնդիր 1
// // ինչպես անենք որպեսզի func ֆունկցիայի this-ը լինի forEach-ին տված ֆունկցիայի this-ը  

// const obj = {
//     func: function() {
//         [4, 5, 6].forEach(function(val) {
//             alert(this)
//         })
//     }
// }
// obj.func()
// // կտպի [object Window] երեք անգամ

// // պատասխան
// // 1.
// const obj = {
//     func: function() {
//         alert(this);  // [object Object]
//         [4, 5, 6].forEach(function(val) {
//             alert(this);
//         }.bind(this));
//     }
// };
// obj.func();
// // կտպի [object Object] հետո [object Object] երեք անգամ


// // 2.
// const obj = {
//     func: function() {
//         alert(this);  // [object Object]
//         [4, 5, 6].forEach(function(val) {
//             alert(this);
//         }, this);
//     }
// };
// obj.func();
// // կտպի [object Object] հետո [object Object] երեք անգամ


// // 3.
// const obj = {
//     func: function() {
//         alert(this);  // [object Object]
//         [4, 5, 6].forEach((val) => {
//             alert(this);
//         });
//     }
// };
// obj.func();
// // կտպի [object Object] հետո [object Object] երեք անգամ


// // խնդիր 2
// // ինչպես անենք որպեսզի func ֆունկցիայի this-ը լինի forEach-ին տված ֆունկցիայի this-ը  

// const obj = {
//     name: "Joe",
//     func: function() {
//         [4, 5, 6].forEach(function(val) {
//             alert(this.name)
//         })
//     },
//     // կտպի դատարկ տեքստ երեք անգամ   /// this: window

       // // 1.
//     // func: function() {
//     //     [4, 5, 6].forEach(function(val) {
//     //         alert(this.name)
//     //     }.bind(this))
//     // },
//     // // կտպի Joe երեք անգամ

       // // 2.
//     // func: function() {
//     //     [4, 5, 6].forEach(function(val) {
//     //         alert(this.name)
//     //     }, this)
//     // },
//     // // կտպի Joe երեք անգամ

       // // 3.
//     // func: function() {
//     //     [4, 5, 6].forEach((val) => {
//     //         alert(this.name)
//     //     })
//     // }
//     // // կտպի Joe երեք անգամ
// };
// obj.func();
 



// 4 //
// const F = function() {
//     // this = {}
//     this.name = "Joe"
//     // return this;
// }

// const a = new F()

// alert(a)
// // կտպի [object Object]  /// a:{name: "Joe"}


// const F = () => {
//     // this = {}
//     this.name = "Joe"
//     // return this;
// }

// const a = new F()
// alert(a)
// // error: F is not a constructor

// // երբ որ մենք ստեղծում ենք arrow ֆունկցիա new-ով այլևս չենք կարող կանչենք
// // այսինքն arrow ֆուկցիան որպես constructor որպես object կառուցող մենք չենք կարող օգտագործենք 



// 5 //
// // 5.1
// // arguments-ը զանգվածի պես մի object-ա որի մեջ կան բոլոր են արժեքները որոնք որ եկան մտան իր մեջ այսինքն arguments[0]-ն դա նույն է ինչպես որ a-ն, arguments[1]-ն դա նույն է ինչպես որ b-ն, arguments[2]-ն դա նույն է ինչպես որ c-ն 
// const f = function(a, b, c) {
//        alert(arguments[0] + arguments[1] + arguments[2])
//        //   alert(typeof(arguments))          // object
//        //   alert(Array.isArray(arguments))   // false
//        //   alert(JSON.stringify(arguments))   // կտպի {"0":4,"1":5,"2":6}
// }

// f(4, 5, 6);
// // կտպի 15

// // այսինքն առաջին արժեքը տակից վերագրված է 0 տեքստային արժեք անունի մեջ, եկրորդ արժեքը տակից վերագրածա 1 տեքստային արժեքի մեջ և այլն


// // 5.2
// // եկեք debugger-ով նայենք որպեսզի տեսնենք arguments-ը ինչա 

// const f = function(a, b, c) {
//        debugger    
// }

// f(4, 5, 6);


// // arguments-ը object-ա զանգվածին նման որի 0-ի մեջ կա իրեն փոխանցած առաջի արժեքը, 1-ի մեջ կա իրեն փոխանցած երկրորդ արժեքը և այլն
// // այսինքն arguments-ը մեզ հնարաորություն է տալիս կարդալ բոլոր են արժեքները որոնք որ մեր ֆունկցիան ընդունեց 

/*

// // ստուգելու համար
// alert(Array.isArray([1, 2]))   // true
// alert(typeof([1, 2, 3]))       // object
// alert(JSON.stringify([1, 2, 3]))   // [1, 2, 3]
// alert(JSON.stringify({0: 1, 121: "d", ds:2}))   // {"0":1, "121": "d", "ds":2}
 

// // մենք գիտեյնք որ մենք կարող ենք նաև արժեքին անուն հայտարարել առանց երկու ստորակետների եթե մեր ստեղծած անունը համապատասխանում է բոլոր օրենքներին որը մենք ունենք փոփոխական ստեղծելուց
// // սխալով //
// // ոչ թե կարող ենք հայտարարնենք անուն արժեքին առանց երկու ստորակտետների եթե մեր ստեղծած անունը համապատասխանում է բոլոր օրենքներին որը մենք ունենք փոփոխական ստեղծելուց այլ կարող ենք
// // այլ կարող ենք հայտարարնենք անուն արեժեքին առանց երկու ստորակտետների եթե մեր ստեղծած անունը ՉԻ համապատասխանում է բոլոր օրենքներին որը մենք ունենք փոփոխական ստեղծելուց այսինքն կարող է նաև որպես անուն թիվ լինել
// // ուղղակի եթե անունը թիվ է չենք կարող վերցնենք արժեքը կետով 

// 1 //
// 1.1
// let x = {"age":10, "name":"hakob"};
// alert(x["age"]);
// alert(x.name);

// 1.2
// let x = {age:10, name:"hakob"};
// alert(x["age"]);
// alert(x.name);


// 2 //
// 2.1
// let r = {0: "as", "1": "ad", d: "sa", "b": "da"}
// alert(r[0])     // կտպի as
// alert(r["0"])   // կտպի as
// alert(r.0)      // error
// alert(r[d])     // error: d is not defined

// // 2.2
// let r = {0: "as", "1": "ad", d: "sa", "b": "da"}
// alert(r[1])     // կտպի ad
// alert(r["1"])   // կտպի ad
// alert(r.1)      // error

// // 2.3
// let r = {0: "as", "1": "ad", d: "sa", "b": "da"}
// alert(r[d])     // error: d is not defined
// alert(r["d"])   // կտպի sa
// alert(r.d)      // կտպի sa

*/


// // 5.3
// // սովորական ֆունկցիանները ունեն այդ հնարաորությունը կարող եք գրեք arguments և ինքը ձեզ կվերադարձնի բոլոր են արժեքները որոնք որ ձեր ֆունկցիան ընդունեց
// // arrow ֆունկցիան չունի դա

// const f = (a, b, c) => {
//     alert(arguments)
// }
// f(4, 5, 6)

/// error: arguments is not defined at f


// // 5.4
// // arguments object-ը մեզ իրականում պետք չի գալիս եթե մենք ուզում ենք ուղղակի մի հատ զանգված ստանանք բոլոր մեր արժեքների մենք ընդամենը կարող ենք սենց անենք(օգտագործենք spread օպերատորը)
// const f = function(...args) {
// }
// f(4, 5, 6)
// // և էտ args-ը հիմա կլինի մի հատ զանգված որի մեջ կլինի բոլոր են արժեքները որոնք մենք փոխանցել ենք



// 6 //
// // եթե մեր ֆունկցիան ընդամենը ունի մեկ տող մեկ ինչ որ հայտարարություն, մեկ ինչ որ գործողություն 
// // մենք կարող ենք անել

// const f = () => {
//     return 5
// }
// f()

//      ||
//      \/

// const f = () => 5
// f()


// const f = (a, b) => {
//     return a + b
// }
// alert(f(4, 5))

//      ||
//      \/

// const f = (a, b) => a + b
// alert(f(4, 5))



// 7 //
// // 7.1
// function F() {
//     // this = {}
//     this.name = "Joe";
//     this.sayHi = () => {
//         alert(this.name)
//     };
//     // return this
// }

// const a = new F();
// a.sayHi();
// // կտպի Joe


// // 7.2
// function F() {
//     // this = {}
//     this.name = "Joe";
//     this.sayHi = () => {
//         alert(this.name)
//     };
//     // return this
// }

// const a = new F();

// const b = a.sayHi;
// b();
// // կտպի Joe

// // ամենակարևոր, ամենամեծ տարբերությունը սովորական ֆունկցիայի և arrow ֆունկցիայի նա է որ երբ որ սովորական ֆունկցիա ենք ստեղծում իրա this-ը որոշվում է այն պահին երբ մենք իրեն կանչում ենք և ամեն ինչ կախվածա թե ոնց ենք իրեն կանչում իսկ arrow ֆունկցիայի ժամանակ իրա this-ը որոշվում է են պահին երբ մենք իրեն հայտարարում ենք երբ իրեն ստեղծում ենք հետո արդեն ոնց ենք իրան կանչում կապ չունի որովհետև իրա this-ը արդեն որոշված է




// // Վարժություններ

// // վարժություն 1

// // -Մաքրեք այս կոդը
// // -Ինչ է արդյունքը?

// const a = {
//        age: 22,
//        name: "Joe",
//        getName: function() {
//               return this.name;
//        },
//        getAge: () => this.age
// };

// alert(a.getName());  // "Joe"
// alert(a.getAge());   // undefined

// // arrow ֆունկցիայի this-ը որոշվում է են պահից երբ նա ստեղծվում է ոչ թե կանչվում 
// // և իրա this-ը ստանում է իրա ծնող ֆունկցիայից այսինքն այն ֆունկցիայի this-ն է լինում իրա this-ը որի մեջ ինքը կա  

// // այս դեպքում այս ֆունկցիան չի ստեղծված որևէ ֆունկցիայի մեջ սրանից վերև ոչ մի ֆունկցիա չկա որ փաթաթում է իրեն(որի մեջ ինքը գտնվում է) հետևաբար ինքը ընդունում է որպես իրա this գլոբալ object-ը(window object-ը)
// // իսկ գլոբալ object-ը(window object-ը) age չունի հետևաբար մենք կստանանք undefined



// // վարժություն 2

// // -Մաքրեք այս կոդը
// // -Ինչ է արդյունքը?

// const f = () => this.name;

// function f2() {
//        return this.name;
// }

// const a = {
//        name: "Mike"
// };

// alert(f2.apply(a)) // "Mike"
// alert(f.call(a));  // ""


// // սովորական ֆունկցիայի this-ը որոշվում են պահին երբ մենք իրեն կանչում ենք բայց arrow ֆունկցիայի this-ը որոշվում է են պահից երբ նա ստեղծվում է ոչ թե կանչվում 
// // arrow ֆունկցիայի this-ը արդեն որոշված է, ոնց ուզում ենք կանչենք իրա this-ը արդեն որոշված է
// // իսկ եթե ինքը ստեղծվում է գլոբալ scope-ի մեջ ինքը ոչ մի ֆունկցիայի մեջ չի փաթեթաորված իրա this-ը կլինի գլոբալ object-ը այսինքն window-ն 

// // հետևաբար ինքը ընդունում է որպես իրա this գլոբալ object-ը(window object-ը)
// // իսկ գլոբալ object-ի(window object-ի) name-ը դատարկ տեքստ է("") հետևաբար մենք կստանանք դատարկ պատուհան



// // վարժություն 3

// // -Մաքրեք այս կոդը
// // -Ինչ է արդյունքը?

// function f() {
//        // this = a
//        return () => this.age;
// };

// const a = {
//        age: 22
// };

// const z = f.call(a);
// alert(z());  // 22

// alert(f.call(a)()); // 22



// // վարժություն 4

// // -Մաքրեք այս կոդը

// // 1.
// let a = [5, 40, 29, 44, 33];

// function o() {
//        let b = [];
//        a.map(function(val) {
//               b.push(val + 1);
//        });

//        let z = b.filter(function(val) {
//               return val % 2 === 0;
//        });

//        return z;
// }

// o()


// // 2.
// let a = [5, 40, 29, 44, 33];

// function o(arr) {
//        let b = [];
//        arr.map(function(val) {
//               b.push(val + 1);
//        });

//        let z = b.filter(function(val) {
//               return val % 2 === 0;
//        });

//        return z;
// }

// o([389, 3, 45, 86]);


// // 3. 
// let a = [5, 40, 29, 44, 33];

// function o(arr) {
//        let b = [];
//        arr.forEach(function(val) {
//               b.push(val + 1);
//        });

//        let z = b.filter(function(val) {
//               return val % 2 === 0;
//        });

//        return z;
// }

// o(a);


// // 4.
// let a = [5, 40, 29, 44, 33];

// function o(arr) {
//        let b = arr.map(function(val) {
//               return val + 1
//        });

//        let z = b.filter(function(val) {
//               return val % 2 === 0;
//        });

//        return z;
// }

// o(a);


// // 5.
// let a = [5, 40, 29, 44, 33];

// function o(arr) {
//        let b = arr.map((val) => val + 1);

//        let z = b.filter((val) => val % 2 === 0;
//        });

//        return z;
// }

// o(a);


// // 6.
// let a = [5, 40, 29, 44, 33];

// function o(arr) {
//        let z = arr
//                  .map((val) => val + 1)
//                  .filter((val) => val % 2 === 0);
//        return z;
// }

// o(a);


// // 7.
// let a = [5, 40, 29, 44, 33];

// function o(arr) {
//        return arr
//                  .map((val) => val + 1)
//                  .filter((val) => val % 2 === 0);
// }

// o(a);


// // 8.
// let a = [5, 40, 29, 44, 33];

// function transform(arr) {
//        return arr
//                  .map((val) => val + 1)
//                  .filter((val) => val % 2 === 0);
// }

// alert(transform(a));  // [6, 30, 34]








// 1 //
// // 2 // //



// function func(x) {
//        alert(x)
// }


// const func2 = function(x) {
//        alert(x)
// }
// func2(3)


/* const func2 = (x) => {
     alert(x);
}

func2(4) */



// const obj = {
//        func: function(x) {
//               alert(x)
//        }
// }

/* const obj = {
       func: (x) => {
              alert(x)
       }
}
 */


// [5, 4, 3].forEach(function(val) {
//        alert(val)
// })

/* [5, 4, 3].forEach((val) => {
       alert(val)
}) */




// 3 //









// // ternary operator , եռակի օպերատոր

// const age = 54;

// // let message;
// // if(age >= 18) {
// //        message = "yes";
// // } else {
// //        message = "no"
// // }



// let message = age >= 18 ? "yes" : "no";

// const a = [5, 22, 99, 44, 55].map((val) => {
//        return  val % 2 === 0 ? "even" : "odd"
// })

// // alert(a);


// const b = [5, 22, 99, 44, 55].map((val) => val % 2 === 0       ?"even"          :"odd");

// alert(b)





// // // // // // // // // // // // OOP ամփոփում
// object oriented programming (OOP)
// -encapsulation
// -Inheritance
// -Polymorphism
// -Abstraction


// class HelloWorld {

// }


// puplic static void MediaDeviceInfo(String[] args) {
//        System.out.println("Hello Armenia!)]
// }






// // template literals

// const a = "hello \"yay\" world";

// const a = "hello 'yay'" + "\n" + 
//  "world";

// // const a = `hello 
// // world`;

// alert(a);

// const a = "hello "


// function getHtml() {
//        return "<div> world </div>";
// }

// const html = getHtml();
// document.body.innerHtml = html;



// // / // truthy / falsy


// // falsy
// false
// 0
// ""
// undefined
// null
// NaN




// let a = "";

// if(!a) {
//        alert("yay");
// } else {
//        alert("nooo");
// }


// let b = !!a;

// alert(b);


