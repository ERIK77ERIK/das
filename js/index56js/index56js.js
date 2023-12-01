// // 1.
// class Person {
//     sayHi() {
//         alert("hi")
//     }
//     sayBye() {
//         alert("bye")
//     }
// }

// const obj = new Person();


// // 2.
// // շաբլոնին կցենք մի հատ ֆունկցիա դա նշանակումա էս ֆունկցիան շաբլոնի մասնիկը չի այսինքն ինքը չի նկարագրում շաբլոնին(իր ստեղծած object-ի մեջ չի այսինքն this-ին կպած չի), ինքը ուղղակի ֆունկցիայա որը կպածա շաբլոնին 
// // այսինքն ինչ է ստացվում որ այս obj-ը հիմա ում վերագրածա new Person() այսինքն Person-ի ստեղծած object-ը, ինքը իր մեջ կունենա sayHi և sayBi բայց boo չի ունենա որովհետև boo-ն շաբլոնի մասնիկը չի ինքը չի նկարագրում ստրուկտուրան(իր ստեղծած object-ի մեջ չի) ինքը ուղակի ֆունկցիա է որը կպած է հենց շաբլոնին
// // դա նշանակում է որ եթե ուզենամ էս boo-ն կանչեմ ես պետքա անեմ Person.boo()

// // ֆունկցիաները որոնք որ կցած են class-ից ոչ թե նկարագրում են ապագա object-ին(այսինքն այն object-ի մեջ են որը որ ստեղծում է class-ը) այլ հենց class-ից են կցած էտ տիպի ֆունկցիաները կոչվում են static ֆունկցիաներ 
// // իրենց javascript-ում կարելիա ստեղծել երկու տարբերակով 
// // .1. 
// // կամ կարելիա հենց այ սենց ուղակի class-ին կպցնել 

// class Person {
//     sayHi() {
//         alert("hi")
//     }
//     sayBye() {
//         alert("bye")
//     }
// }
// Person.boo = function() {
//     alert("boo")
// }
// Person.boo(); // boo

// const obj = new Person();

// obj.boo();      // Uncaught TypeError: obj.boo is not a function
// Person.sayHi(); // Uncaught TypeError: Person.sayHi is not a function

// // .2.
// // կամ կարելիա անել այսպես գրել static և ֆունկցիան
// // հիմա zoo-ն քանի որ static է նույն է ինչ որ boo-ն այսինքն ինքը կցած է հենց class-ից հետևաբար մենք կարող ենք անենք Person.zoo() և ստանանք, obj-ը բայց չի ունենա այսինքն եթե մենք փորձենք անել obj.zoo() չի աշխատի որովհետև obj-ը zoo չունի zoo-ն this-ին չի կցվում, zoo-ն կցվումա հենց class-ին

// class Person {
//     sayHi() {
//         alert("hi");
//     }
//     sayBye() {
//         alert("bye");
//     }

//     static zoo() {
//         alert("zoo");
//     }
// }

// Person.boo = function() {
//     alert("boo")
// }

// Person.boo(); // boo
// Person.zoo(); // zoo

// const obj = new Person();
// obj.boo();   // Uncaught TypeError: obj.boo is not a function
// Person.sayHi(); // Uncaught TypeError: Person.sayHi is not a function


// // static ֆունկցիաները կցած են class-ից
// // սովորական ֆունկցիաները ուղղակի նկարագրում են ապագա object-ին այսինքն կցվում են this-ի վրա և ստեղծվում են միայն են պահից երբ որ էտ object-ը ստեղծվում է և գտնվում են իր մեջ 



// // 3.   
// // որտեղ ենք տեսել այդպիսի օրինակ 

// // 3. .1.
// const a = []
// a[0] = 5;
// a[1] = 9;

// alert(a); // 5,9

// // 3. .2.
// // Array-ը կարելիա պատկերացնել որպես շաբլոն որպես class
// // տենց կարելիա պատկերացնել, իրականում function constructor է բայց դե էս պարագայում կապ չունի ինչ որ մի class է որից մենք կանչում ենք new և ստանում ենք մի հատ զանգված 

// const a = new Array(); // []
// a[0] = 5;
// a[1] = 9;

// alert(a); // 5, 9

// // 3. .3.
// // այդ զանգվածը ունի անմիջապես իրեն կցած լիքը ֆունկցիաներ օրինակ push, pop, forEach, map, reduce, filter
// // այսինքն մենք հիմա կարող ենք անենք a.forEach(); 

// const a = new Array(); // []
// a[0] = 5;
// a[1] = 9;

// a.forEach((val) => {
//     alert(val);
// });
// // կտպի 5 հետո 9


// // 3. .4.
// // այսինքն ինչ է ստացվում որ էս forEach-ը հիմա կցած է object-ին(a object-ին), հիմա հարց էս forEach-ը Array-ի վրա կա թե չէ, եթե մենք անեինք alert(Array.forEach())
// // ճիշտ եք ենթադրում որ չի աշխատի տենց բան չկա որովհետև ինքը static չի ինքը չի կցած class-ից ինքը կցածա հենց object-ից(այսինքն այդ class-ից ստեղծած object-ի մեջ է, էս պարագայում էտ object-ը a-ն է)
// // այսինքն մենք անում ենք new Array() ստանում ենք էտ նոր զանգվածը որը էտ պահին ստեղծում է իր մեջ բոլոր էտ ֆունկցիաները(forEach-ը, map-ը, filter-ը, reduce-ը և այլն)

// const a = new Array(); // []
// a[0] = 5;
// a[1] = 9;

// alert(Array.forEach); // undefined


// // 3. .5.
// // բայց Array-ը ունի static ֆունկցիա( isArray ), որը ստուգում է ինչ որ մի արժեք զանգված է թե ոչ
// // isArray-ը static է, ինչու է static որովհետև ինքը կպած է հենց class-ից
// // եթե մենք անենք  alert(a.isArray) կտեսնեք որ էս ֆունկցիան գոյություն չունի, բայց Array-ը ունի իր մեջ այդ static ֆունկցիան 

// const a = new Array(); // []
// a[0] = 5;
// a[1] = 9;

// ///Array.isArray

// alert(Array.isArray); // function isArray() { [native code] }
// alert(Array.isArray(a));  // true

// alert(a.isArray); // undefined 


// //  3. .6.
// // նույն իմիջայլոց հիշում եք երբ որ մենք անում ենք Object.keys({name: "Joe"}); և ինքը վերդարձնում է զանգված որի մեջ կան բոլոր բանալիները
// // սա էլա static ինչու որովհետև ինքը կցածա անմիջապես հենց ոնց որ function constructor-ից կամ կարելի է պատկերացնել որպես class էս Object-ը class է որովհետև կարելիա անել new Object(); որպեսզի ստեղծենք նոր object-ը 

// Object.keys({name: "Joe"});

// new Object(); // {}



// // 4.
// // այսինքն ինչ է ստացվում որ երբ որ մենք նկարագրում ենք շաբլոն կամ class մենք իր մեջ դնում ենք ֆունկցիաներ որոնք որ նկարագրում են թե ապագայում երբ որ object-ը ստեղծվի այդ շաբլոնով կամ այդ class-ով ինչ ֆունկցիաներ իր մեջ կունենա դրանք սովորական ոչ static ֆունկցիաներն են 
// // կան նաև static ֆունկցիաներ, static ֆունկցիաները չեն ստեղծվում և կպնում էտ նոր object-ին այլ ուղղակի արդեն ստեղծված են և կպած են հենց class-ից կամ function constructor-ից 

// // այսինքն որպեսզի օգտագործել ոչ static ֆունկցիաները class-ի մեջի, մենք պետքա սկզբից նոր object ստեղծենք որպեսզի էտ object-ի միջոցով կանչենք այդ ֆունկցիաներին 
// // իսկ static ֆունկցիաները արդեն class-ին կպած են ընդամենը պետքա անել class-ի անունը . և էտ class-ի անունը և էտ static ֆունկցիայի անունը որպեսզի օգտագործենք static ֆունկցիաներ


// // 5.
// // հիշելու համար
/*

// // // 1. toString-ը class-երի և funcction constructor-ների ժամանակ
// // // 2. this-ին ոնց ենք արժեք ավելացնում function constructor-ի դեպքում և class-երի դեպքում 
// // // 3. ոնց ենք փոփոխական ստեղծում(let-ով, const-ով և var-ով) և վերագրում արժեք function constructor-ի և class-երի դեպքում

// // 1. 
// // toString-ը class-երի և funcction constructor-ների ժամանակ

// // 1. .1.
// class Animal {
//     constructor(name) {
//         this._name = name;
//     }
//     toString() {
//         return this._name;
//     }
// }

// class Dog extends Animal {
//     talk() {
//         alert(this._name + " says woof");
//     }
//     // toString() {
//     //     return "Dog";
//     // }
// }

// const a = new Dog("barev")

// alert(a)
// // կտպի barev
// // մյուս դեպքում կտպի Dog


// // 1. .2.
// // function constructor-ների ժամանակ  prototype-ի մեջի toString()-ը աշխատում է ավտոմատ եթե անմիջապես this-ին կցենք object դա կհամարվի ավելի առաջնահերթ
// // ինչպես որ class-երի դեպքում առաջնահերթ նայում է այն class-ի մեջ որից ինքը ստեղծվել է this-ին կցած է object եթե այո օգտագործում է և հետո նոր ստուգում է այն class-ի բլոկի ներսում this-ին կցած կա որից ինքը ժառանգել է   
// // այս function constructor-ի դեպքում էլ նույն ձև է առաջնահերթ նայում է անմիջապես իր object-ի մեջ կա toString(այսինքն function constructor-ի բլոկի մեջ this-ին կցած է toString) եթե այո օգտագործում է եթե ոչ նոր գնում է __proto__ -ով հղումով անմիջապես իր ունունի վրա կցած(ոչ թե իր ստեղծած object-ի մեջի) prototype object-ի մեջ է նայում 

// // մենք նաև կարող ենք toString-ը փոխենք այսպես
// // այսինքն այս դեպքում (Object.prototype.toString =) Object ֆունկցիան տակից ունենում է __proto__ հղում դեպի իր իր վրա կցած prototype object որի մեջ կա toString() ֆունկցիան որը ավտոմատ կանչվում է տակից որը մենք փոխում ենք վերագրելով ուրիշ ֆունկցիա 
// // իսկ այս դեպքում (this.toString = ) Object ֆունկցիայի ստեղծած object-ին այսինքն this-ին կցում ենք toString որը ավտոմատ կանչվում է տակից, class-ի դեպքում extends անելուց առաջինը կանչվում է այն toString()-ը որը գտնվում է իր բլոկի մեջ եթե չիլինում նոր գնում է գտնում է ժառանգած toString-ը

// function Object() {
//         // this = {}
//         // this.__proto__ = Object.prototype;
    
//         // // 2.
//         this.toString = function() {
//             return "Dog";
//         }
//        // return this;
// }
// const a = new Object;

// Object.prototype.toString = function() {
//     return "yay";
// };

// alert(a); // Dog


// // 2. 
// // this-ին ոնց ենք արժեք ավելացնում function constructor-ի դեպքում և class-երի դեպքում 

// // 2. .1.
// // .1. արժեքները  function constructor-ի ժամանակ եթե ուզում ենք արժեքներ դնենք իր ստեղծած object-ի մեջ անում ենք this.անունը բանալու և վերագրում ենք արժեք
// // .2. իսկ class-երի ժամանակ եթե ուզում ենք արժեքներ դնենք իր ստեղծած object-ի մեջ ուղղակի փոփոխականին վերագրում ենք արժեք առանց this.  անելու

// // .1. 

// function Dog () {
//     // this = {}
//     this.baseField = "base field";
//     this.talk = function() {
//         alert("woof")
//     }
//     // return this
// }

// const dog1 = new Dog();

// dog1.talk(); // woof
// alert(dog1.baseField); // base field
    
// // // ||
// // // \/

// // // 2. .2.

// class Dog {
//     // this = {}
//     baseField = "base field"
//     talk = function() {
//         alert("woof");
//     }
//     toString = () => {
//         return "dog";
//     }
//     // return this
// }

// const dog1 = new Dog();

// dog1.talk(); // woof
// alert(dog1.baseField); // base field


// // 3.
// // ոնց ենք փոփոխական ստեղծում(let-ով, const-ով և var-ով) և վերագրում արժեք function constructor-ի և class-երի դեպքում

// // 3. .1.
// // class-երի դեպքում կամ վերագրում ենք արժեք

// class Dog {
//     // this = {}
//     constructor(nam) {
//         const a = 9;
//         this.name = nam;
//     }
//     name2 = nam
//     name3 = name
//     sayA() {
//         alert(a)
//     }
//     talk() {
//         alert(this.name + " says woof");
//     }
//     toString() {
//         return "dog";
//     }
//     // return this
// };
// const dog1 = new Dog("Hafo");
// alert(dog1.name); // Hafo

// // .4.
// dog1.talk(); // Hafo says woof
// // .3.
// // dog1.sayA(); // ReferenceError: a is not defined
// // .2.
// alert(dog1.name2); // ReferenceError: nam is not defined
// alert(dog1.name3); // դատարկ, մաքուր էջ է տպում


// // // ||
// // // \/

// // // 3. .2.

// class Dog {
//     // this = {}
//     baseField = "base field"
//     talk = function() {
//         alert("woof");
//     }
//     toString = () => {
//         return "dog";
//     }
//     // return this
// }

// const dog1 = new Dog();

// dog1.talk(); // woof
// alert(dog1.baseField); // base field

*/




// // Javascript OOP - Ամփոփում

// // 1.
// // object oriented programming(օբյեկտ կողմնորոշված ծրագրավորում)-ը առաջարկում է թե մենք ինչպես կարող ենք դասաորենք մեր կոդը, ինքը առաջարկում է որ մենք մեր ինֆորմացիան data-ն պահենք object-ների մեջ
// // ինքը նաև ունի մի քանի կոնցեպտներ 
// // -Encapsulation, 
// // -Inheritance
// // -Polymorphism
// // -Abstraction


// // - Encapsulation-ը դա նշանակումա որ object-ները իրենց ներքին խոհանոցը պահում են գաղտնիք այսինքն ներքին փոփոխականները կամ ներքին լոգիկան չեն թողում որ դուրս գա իրենից դուրս

// // կա inheritance
// // կա Նախատիպային ժառանգություն(Prototypal Inheritance) երբ որ object-ները ժառանգում են իրարից
// // կա Դասական ժառանգություն (Classical Inheritance) որտեղ կան շաբլոններ կամ class-եր որոնք որ ժառանգում են իրարից, այդ շաբլոնները օգտագործելով մենք կարող ենք ստեղծենք object-ներ, այդ շաբլոնների մեջ կարող են լինել ֆունկցիաներ որոնք որ ստեղծվում են հենց են պահին երբ որ object-ն է ստեղծվում և մտնում են էտ object-ի մեջ, բայց նաև կան static ֆունկցիաներ որոնք որ կպած են հենց շաբլոնից հենց class-ից որոնք որ չեն մտնում ստեղծած object-ների մեջ այլ ուղղակի մնում են class-ին կպած և մենք կարող ենք իրան class-ի միջոցով կանչել

// // Պոլիմորֆիզմ(Polymorphism) կոնցեպտի դերը նրանում է որ ֆունկցիան կարող է ունենալ տարբեր դերեր
// // .1. կախված են արժեքների քանակից որ ինքը ստանումա է
// // .2. կախված են արժեքների տիպից որ ինքը ստանումա է
// // .3. կախված որ object-ին է նա կցած

// // նաև կա Abstraction, Abstraction-ի միտքը նրանումա որ նայած context մենք միայն ցույց ենք տալիս են մասը object-ի որը պետք է կամ անհրաժեշտ է որպեսզի անել հենց այդ գորժոզությունը ոչ ավել, այսինքն մենք կենտրոնանում ենք են մասի վրա որը պետք է և էն մնացած դետալները որոնք որ էտ պահին կարողա պետք չգան մենք ցույց չենք տալիս մենք պահում ենք 


// // 2.
// //  object oriented programming(օբյեկտ կողմնորոշված ծրագրավորում)-ը իրականում կիրառվում է շատ տարբեր ծրագրաորման լեզուններով 
// // եկեք տեսնենք 

// // Javascript-ի syntax-ը
// class HelloWorld {
//     hello() {
//         console.log("Hello Armenia");
//     }
// }

// // Java-ի syntax-ը
// public class HelloWorld {
//     public static void main(String[] args) {
//         System.out.println("Hello Armenia!!!");
//     }
// }

// // C#(C shurp)-ի syntax-ը
// namespace HelloWorld
// {
//     class Hello {
//         static void Main(string[] args)
//         {
//             System.Console.WriteLine("Hello Armenia!");
//         }
//     }
// }

// // C++-ի syntax-ը
// #include <iostream>

// int main() {
//     std::cout << "Hello Armenia!";
//     return 0;
// }

// // այսինքն էն կոնցեպտները որ մենք սովորեցինք(ֆունկցիաները, class-երը, static է կամ static չէ, տեքստերը, թվերը, return է անում թե ուրիշ ինչ է անում) էտ ամբողջը կարելի է օգտագործել լրիվ ուրիշ ծրագրաորման լեզուների մեջ այսինքն ամբողջ նպատակը միայն javascript սովորելը չէ այլ սովորել կոնցեպտները որպեսզի մենք կարողանանք այդ նույն կոնցեպտները կիրառենք շատ ուրիշ լեզուներում

















