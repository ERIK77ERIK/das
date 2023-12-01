// // 1


// // 1.1
// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     age: 33
// }

// function printInfo(personObj) {
//     alert(personObj.firstName + " " + personObj.lastName + " is " + personObj.age + " years old");
// }

// printInfo(person); // Joe Smith is 33 years old


// // 1.2
// // սիրունության համար
// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     age: 33
// };

// function printInfo(personObj) {
//     const firstName = personObj.firstName;
//     const lastName = personObj.lastName;
//     const age = personObj.age;

//     alert(firstName + " " + lastName + " is " + age + " years old");
// };

// printInfo(person);  // Joe Smith is 33 years old




// // 2
// // destructuring
// // 2.1
// // տարբերակ 1
// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     age: 33
// };

// function printInfo(personObj) {
//     const {firstName, lastName, age} = personObj;

//     // const first = personObj.firstNam;
//     // const last = personObj.lastNam;
//     // const age = personObj.age;

//     alert(firstName + " " + lastName + " is " + age + " years old");
// };

// printInfo(person);   // Joe Smith is 33 years old





// // 2.2
// // տարբերակ 2
// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     age: 33
// };

// function printInfo({firstName, lastName, age}) {

//     // const firstName = personObj.firstName;
//     // const lastName = personObj.lastName;
//     // const age = personObj.age;

//     alert(firstName + " " + lastName + " is " + age + " years old");
// };

// printInfo(person);  // Joe Smith is 33 years old


// // 2.3
// // կարող ենք չօգտագործենք object-ի մեջի արժեքները
// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     age: 33,
//     friends: [],
//     favoritColor: "red"
// };

// function printInfo({firstName, lastName, age}) {

//     // const firstName = personObj.firstName;
//     // const lastName = personObj.lastName;
//     // const age = personObj.age;

//     alert(firstName + " " + lastName + " is " + age + " years old");
// };

// printInfo(person);  // Joe Smith is 33 years old



// // 3.
// // պատկերացրեք age չկա
// // 3.1
// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     // age: 33,
//     friends: [],
//     favoritColor: "red"
// };

// function printInfo({firstName, lastName, age}) {

//     // const firstName = personObj.firstName;
//     // const lastName = personObj.lastName;
//     // const age = personObj.age;

//     alert(firstName + " " + lastName + " is " + age + " years old");
// };

// printInfo(person);  // Joe Smith is undefined years old



// // 3.2
// // եթե age-ը չլինի են object-ի մեջ որից մենք փորձում ենք իրեն վերցնենք ինքը ավտոմատ կընդունի destructuring-ի մեջ իրեն վերագրած արժեքը
// // բայց
// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     // age: 33,
//     friends: [],
//     favoritColor: "red"
// };

// function printInfo({firstName, lastName, age="unknown"}) {

//     // const firstName = personObj.firstName;
//     // const lastName = personObj.lastName;
//     // const age = "unknown";

//     alert(firstName + " " + lastName + " is " + age + " years old");
// };

// printInfo(person);  // Joe Smith is unknown years old

// // 3.3
// // բայց եթե ինքը էտ արժեքը ունենա object-ի մեջ այսինքն undefined չլինի destructuring-ի մեջ իրեն վերագրած արժեքը ինքը չի ընդունի
// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     age: 33,
//     friends: [],
//     favoritColor: "red"
// };

// function printInfo({firstName, lastName, age="unknown"}) {

//     // const firstName = personObj.firstName;
//     // const lastName = personObj.lastName;
//     // const age = personObj.age;

//     alert(firstName + " " + lastName + " is " + age + " years old");
// };

// printInfo(person);  // Joe Smith is 33 years old




// // 4
// // 4.1

// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     age: 33,
//     friends: [],
//     favoritColor: "red"
// };

// function printInfo({firstName: x, lastName, age="unknown"}) {

//     // const firstName = personObj.firstName;
//     // const lastName = personObj.lastName;
//     // const age = personObj.age;
    
//     // const x = personObj.firstName

//     alert(x + " " + lastName + " is " + age + " years old");
// };

// printInfo(person);  // Joe Smith is 33 years old


// // 4.2
// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     // age: 33,
//     friends: [],
//     favoritColor: "red"
// };

// function printInfo({firstName, lastName, age:x=99}) {

//     // const firstName = personObj.firstName;
//     // const lastName = personObj.lastName;
//     // const age = personObj.age;
    
//     // const x = 99

//     alert(firstName + " " + lastName + " is " + x + " years old");
// };

// printInfo(person);  // Joe Smith is 99 years old







// // 5
// // էս տիպի գործողություն մենք նաև կարող ենք անենք զանգվածների հետ

// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     // age: 33,
//     friends: [],
//     favoritColor: "red"

// }
// const {friends:x=1234} = person;

// alert(x)



// // 3.1
// const list = [
//     5, 9, 33, 100
// ];

// const [s, k, a, f, b] = list;

// // const a = list[0];
// // const b = list[1];

// alert(a + `${b}`);


// // 3.2
// const list = [
//     5, 9, 33, 100
// ];

// const [a=99, b] = list;
// alert(a); // 5

// // 3.3

// const list = [
// ];
// const [a=99, b] = list;
// alert(a); // 99


// const list = [
//     5, 9, 33, 100
// ];
// const [s, d, f, g, a=99] = list;
// alert(a); // 99


// // // զանգվածի դեպքում տեղերը կապ ունի առաջի փոփոխականի մեջ մտնում է 0 index-ի արժեքը երկրորդ փոփոխականի մեջ 1index-ի արժեք և այդպես շարունակ



/// 3
// // մենք տեսանք երկու մոտեցում թե ինչպես կարելի է object-ի արժեքները վերցնել որպեսզի մենք օգտագործենք,  որպեսզի մենք աշխատենք 
// // և մենք նաև տեսանք թե ինչպես կարելի է զանգվածից ինչ որ արժեքներ վերցնել քցել փոփոխականի մեջ և իրենցով աշխատել





////////
// 1. հիշելու համար
// եթե փոփոխականը օգտագործում ենք ու ինքը ստեղծված չի կոդը չի աշխատի
// իսկ եթե օգտագործենք փոփոխականը որը ստեղծված լինի բայց մեջը ոչ մի բան վերագրած չլինի իրա արժեքը կլինի undefined

// alert(a); // error // a is not a defined

// let a
// alert(a); // undefined




// 2.
///// 2.1
// տեղերը փոխած կապ չունի համապատասխան բանալու արժեքը դնումա իր նոր փոփոխականի մեջ որի անունը նույն բանալու անուն է 

// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     age: 33
// };

// function printInfo(personObj) {
//     const {age, firstName, lastName} = personObj;

//     // const first = personObj.firstNam;
//     // const last = personObj.lastNam;
//     // const age = personObj.age;

//     alert(firstName + " " + lastName + " is " + age + " years old");
// };

// printInfo(person);



// 2.2
// եթե շատ արժեք տաս ու օգտագործես ավել տված արժեքի անունը, 

// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     age: 33
// };

// function printInfo(personObj) {
//     const {firstName, lastName, age, asas} = personObj;

//     // const firstName = personObj.firstName;
//     // const lastName = personObj.lastName;
//     // const age = personObj.age;

//     // const asas = personObj.asas  // udefined

//     alert(firstName + " " + lastName + " is " + age + " years old    " + asas);
// };

// printInfo(person); // Joe Smith is 33 years old    undefined



// 2.3
// եթե քիչ արժեք տաս ու օգտագործես

// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     age: 33
// };

// function printInfo(personObj) {
//     const {firstName, lastName} = personObj;

//     // const firstName = personObj.firstName;
//     // const lastName = personObj.lastName;

//     alert(firstName + " " + lastName + " is " + age + " years old");
// };

// printInfo(person);  // error // age is not defined



// 2.4
// եթե սխալ արժեք տաս

// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     age: 33
// };

// function printInfo(personObj) {
//     const {firstName, lastName, dfdf} = personObj;

//     // const first = personObj.firstNam;
//     // const last = personObj.lastNam;
//     // const age = personObj.age;

//     // const dfdf = personObj.dfdf

//     alert(firstName + " " + dfdf  + " is " + lastName + " years old");
// };

// printInfo(person);  // Joe undefined is Smith years old



// // // շատ արժեք տաս ու սխալ արժեք տաս կապ չունի ինքը   Destructuring մոտեցումը տված փոփոխականի մեջ վերագրում է object-ի համապատասխան անունով բանալիի արժեքը իսկ եթե այդպիսի արժեք չկա իր մեջ  վերագրում է undefined քանի որ object-ի մեջ այդպիսի անունով բանալի չկա որին վերագրած է արժեք դե պատկերացրեք կա բայց վերագրած չէ արժեք այսինքն իր արժեքը դառնում է undefined  հիշենք վերևի կանոնը( եթե ստեղծված չէ ու օգտագործում ենք բերում է is not defined  իսկ եթե եթե ստեղծված է բայց արժեք վերագրած չէ իր արժեքը դառնում է undefined)
// // // իսկ եթե օգտագործենք փոփոխականը որը ստեղծված լինի բայց մեջը ոչ մի բան վերագրած չլինի իրա արժեքը կլինի undefined

// // // իսկ եթե քիչ արժեք տաս ու օգտագործես կոդը չի աշխատի
// // // (եթե փոփոխականը օգտագործում ենք ու ինքը ստեղծված չի կոդը չի աշխատի)


//// 1  տեղերը փոխած կապ չունի համապատասխան բանալու արժեքը դնումա իր նոր փոփոխականի մեջ որի անունը նույն բանալու անուն է 
//// 2 եթե շատ արժեք տաս ու օգտագործես ավել տված արժեքի անունը, 
//// 3 եթե քիչ արժեք տաս
//// 4 եթե սխալ արժեք տաս




// // 2.5
// // կարող ենք չօգտագործենք object-ի մեջի արժեքները
// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     age: 33,
//     friends: [],
//     favoritColor: "red"
// };

// function printInfo({lastName, firstName, age}) {

//     // const firstName = personObj.firstName;
//     // const lastName = personObj.lastName;
//     // const age = personObj.age;

//     alert(firstName + " " + lastName + " is " + age + " years old");
// };

// printInfo(person);  // Joe Smith is 33 years old














