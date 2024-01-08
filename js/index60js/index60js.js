// // 1
// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     age: 33
// }

// function printInfo(personObj) {
//     alert(personObj.firstName + " " + personObj.lastName + " is " + personObj.age + " years old");
// }

// printInfo(person); 
// // կտպի Joe Smith is 33 years old

// // ինչպես տեսնում եք էս կոդը մի քիչ շատ երկարա և իրեն կարողա մի քիչ դժվար լինի կարդալ հետևաբար մենք կարող ենք էս կոդը մի քիչ ավելի պարզացնել այնպես անել որ ավելի հեշտ դա կարդացվի
// // հետևյալ ձևով
// // ստեղծենք փոփոխականներ առանձին և ստեղ ընդամենը օգտագործենք այդ փոփոխականները

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

// printInfo(person);
// // կտպի Joe Smith is 33 years old



// // 2
// // բայց պարզվում է որ մենք սա կարող ենք ավելի պարզացնենք որովհետև ինչպես նկատել եք ստեղ անընդհատ ասում ենք personObj.
// // էս ամենը մենք կարող ենք ստեղծենք ավելի պարզ ձևով օգտագործելով object destructurs(օբյեկտների քանդիչներ)

// // 2.1
// // եթե ուզում ենք object-ից արժեքներ վերցնել անում ենք
// // գրում ենք const {}, վերագրում ենք այն object-ը որից ուզում ենք արժեքները վերցնենք և մեջը դնում ենք անուները են բանալիների որ մենք ուզում ենք քաղենք
// // const {firstName, lastName, age} = personObj;
// // բացի նրանից որ սրանք(firstName, lastName, age) բանալիներն են էն արժեքների որ մենք ուզում ենք քաղենք նրանք նաև լինում են փոփոխականների անունները որի մեջ էտ արժեքը կգրվի

// // {firstName, lastName, age} էս կոդը ինչ է անում ինքը ասում է որ էտ firstName անունով արժեքը թող դուրս գա և մտնի փոփոխականի մեջ որը ունի էտ նույն անունը(firstName) և firstName-ը կընդունի Joe նույնը արվումա lastName-ի համար այսինքն lastName անունով փոփոխական է ստեղծվում որի արժեքը կլինի lastName բանալիի արժեքը այսինքն Smith, age-ն էլ կընդունի 33 և ահա ամենը աշխատում է

// // const {firstName, lastName, age} = personObj;
// // ||
// // \/
// // const first = personObj.firstNam;
// // const last = personObj.lastNam;
// // const age = personObj.age;

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

// printInfo(person);   
// // կտպի Joe Smith is 33 years old


// // 2.2
// // մենք կամ կարող ենք person object-ը վերցնենք հետո իրանից ստանանք սա(այսինքն կիրառենք Object Destructuring(օբյեկտների ոչնչացում) կոնցեպտը)
// // կամ անմիջապես կարող ենք ստանանք, այսինքն մենք միանգամից object-ը վերցնելուց իրա վրա աշխատացնում ենք destructuring(քայքայող) կոնցեպտը այսինքն իրա մեջից քաղում ենք firstName, lastName և age-ը

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

// printInfo(person);
// // կտպի Joe Smith is 33 years old



// // 3
// // գաղափար կազմելու համար

// // հիշելու համար
// // եթե փոփոխականը օգտագործում ենք ու ինքը ստեղծված չի կոդը չի աշխատի
// // իսկ եթե օգտագործենք փոփոխականը որը ստեղծված լինի բայց մեջը ոչ մի բան վերագրած չլինի իրա արժեքը կլինի undefined
// alert(a); // error // a is not a defined
// let a
// alert(a); 
// // կտպի undefined


// // 2, 3
// // շատ արժեք տաս ու սխալ արժեք տաս կապ չունի ինքը Destructuring մոտեցումը տված փոփոխականի մեջ վերագրում է object-ի համապատասխան անունով բանալիի արժեքը իսկ եթե այդպիսի արժեք չկա իր մեջ վերագրում է undefined քանի որ object-ի մեջ այդպիսի անունով բանալի չկա որին վերագրած է արժեք դե պատկերացրեք կա բայց վերագրած չէ արժեք այսինքն իր արժեքը դառնում է undefined  հիշենք կանոնը( եթե ստեղծված չէ ու օգտագործում ենք բերում է is not defined  իսկ եթե եթե ստեղծված է բայց արժեք վերագրած չէ իր արժեքը դառնում է undefined)
// // իսկ եթե օգտագործենք փոփոխականը որը ստեղծված լինի բայց մեջը ոչ մի բան վերագրած չլինի իրա արժեքը կլինի undefined
// // 4
// // իսկ եթե քիչ արժեք տաս ու օգտագործես կոդը չի աշխատի
// // (եթե փոփոխականը օգտագործում ենք ու ինքը ստեղծված չի կոդը չի աշխատի)


// // 1  տեղերը փոխած կապ չունի համապատասխան բանալու արժեքը դնումա իր նոր փոփոխականի մեջ որի անունը նույն բանալու անուն 

// // 2 եթե շատ արժեք տանք ու օգտագործենք ավել տված արժեքի անունը, 
// // {firstName, lastName, age, asas}

// // 3 եթե սխալ արժեք տանք
// // {firstName, lastName, dfdf}

// // 4 եթե քիչ արժեք տանք ու օգտագործենք

// // 5
// // կարող ենք չօգտագործենք object-ի մեջի արժեքները



// // .1.
// // տեղերը փոխած կապ չունի համապատասխան բանալու արժեքը դնումա իր նոր փոփոխականի մեջ որի անունը նույն բանալու անուն է 
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
// // կտպի Joe Smith is 33 years old


// // .2.
// // եթե շատ արժեք տանք ու օգտագործենք ավել տված արժեքի անունը
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

//     alert(firstName + " " + lastName + " is " + age + " years old   " + asas);
// };

// printInfo(person); 
// // կտպի Joe Smith is 33 years old    undefined


// // .3.
// // եթե սխալ արժեք տանք
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

// printInfo(person);  
// // կտպի Joe undefined is Smith years old


// // .4.
// // եթե քիչ արժեք տանք ու օգտագործենք
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

// printInfo(person);  
// // ReferenceError: age is not defined



// // .5.
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

// printInfo(person);  
// // կտպի Joe Smith is 33 years old



// // 4
// // մենք կարող ենք destructuring կոնցեպտի մեջ ցանկացած փոփոխականի վերագրենք ցանկացած արժեք են դեպքում երբ որ ինքը չունենա տրված object-ի մեջ նույն անունով արժեք
// // բայց եթե տրված object-ի մեջ լինի այդ անունով արժեք այդ դեպքում տրված object-ից ինքը արժեքը կվերցնի և destructuring-ի մեջ իրեն վերագրած արժեքը չի օգտագործի
// // 4.1
// // պատկերացրեք age չկա
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

// printInfo(person);
// // կտպի Joe Smith is undefined years old


// // 4.2
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

// printInfo(person);
// // կտպի Joe Smith is unknown years old


// // 4.3
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

// printInfo(person);
// // կտպի Joe Smith is 33 years old



// // 5
// // եթե մենք ուզում ենք firstName անունով բանալիի արժեքը վերցնենք այսինքն "Joe"-ն ուզում ենք վերցնենք բայց փոփոխականի(այն փոփոխականի որի մեջ կվերագրվի այդ արժեքը) անունը ուզում ենք դարձնենք օրինակ x 
// // դա անում ենք այսպես

// // այսինքն firstName-ը կլինի այն բանալիի անունը ում արժեքը մենք կվերցնենք և էտ արժեքը մենք կվերագրենք x անունով փոփոխականի մեջ, այսինքն հիմա x-ը կընդունի Joe արժեքը 
// // եթե դա չանենք եթե մենք չասենք էս անունով ենք ուզում փոփոխականը ինքը կստեղծի փոփոխական որը կունենա նույն անունը ինչպես որ բանալին և իր մեջ կվերագրի այդ նույն բանալիի համապատասխան արժեքը այսինքն էս պարագայում քանի որ մենք չենք ասել ինչ անունով ինքը firstName բանալիի արժեքը կվերցնի կստանա Joe և կստեղծի մի փոփոխական ում անունը կլինի firstName ու կվերագրի "Joe"-ն իր մեջ և ահա մենք ստեղ կկարողանանք օգտագործենք էտ փոփոխականը 

// // 5.1
// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     age: 33,
//     friends: [],
//     favoritColor: "red"
// };

// function printInfo({firstName: x, lastName, age="unknown"}) {

//     // const x = personObj.firstName

//     // const lastName = personObj.lastName;
//     // const age = personObj.age;

//     alert(x + " " + lastName + " is " + age + " years old");
// };

// printInfo(person);
// // կտպի Joe Smith is 33 years old


// // 5.2
// // Example(օրինակ)

// // (age:x="99") այստեղ x-ը փոփոխականի անունն է, age-ը են բանալին է որի արժեքը մենք փորձում ենք քաղել եթե էտ արժեքը չլինի ինքը կընդունի 99 բայց եթե արժեքը լինի ինքը կընդունի հենց էտ արժեքը

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
//     // const x = personObj.age;

//     alert(firstName + " " + lastName + " is " + x + " years old");
// };

// printInfo(person);
// // կտպի Joe Smith is 99 years old



// // 6
// // էս տիպի գործողություն մենք նաև կարող ենք անենք զանգվածների հետ

// // 6.1
// // հիշեցում 
// // object-ից ինչպես ենք քաղում արժեքներ destructuring կոնցեպտով
// const person = {
//     firstName: "Joe",
//     lastName: "Smith",
//     age: 33,
//     // friends: [],
//     favoritColor: "red"
// }
// const {friends:x=1234} = person;

// alert(x)
// // կտպի 1234


// // 6.2
// // զանգվածի հետ ինչպես ենք աշխատում
// // [a, b] սա ասում է առաջին index-ի արժեքը թող մտնի փոփոխականի մեջ ում անունը կլինի a երկրորդ արժեքը թող մտնի մի փոփոխականի մեջ որի անունը կլինի b
// const list = [
//     5, 9, 33, 100
// ];

// const [a, b] = list;

// // const a = list[0];
// // const b = list[1];

// alert(a);
// alert(b);
// // կտպի 5
// // կտպի 9


// // 6.3
// // array destructuring-ի մեջ էլ կարող ենք արժեք վերագրենք փոփոխականին
// // այս դեպքում իր համապատասխան index-ում արժեք եթե լինի այդ արժեքը կմտնի այդ փոփոխականի մեջ, այս դեպքում 5-ը կմտնի a-ի մեջ

// const list = [
//     5, 9, 33, 100
// ];
// const [a=99, b] = list;
// alert(a);
// // կտպի 5

// const list = [];
// const [a=99, b] = list;
// alert(a);
// // կտպի 99

// // // զանգվածի դեպքում տեղերը կապ ունի առաջի փոփոխականի մեջ մտնում է 0 index-ի արժեքը երկրորդ փոփոխականի մեջ 1index-ի արժեքը և այդպես շարունակ


// // 6.4
// // եթե մենք կարող էինք object destructuring-ի ժամանակ ինչ-որ անունով բանալիի արժեքը վերցնենք և փոփոխականի(այն փոփոխականի որի մեջ կվերագրվի այդ արժեքը) անունը դարձնեինք օրինակ x
// // ապա array destructuring-ի ժամանակ չենք կարող այդպես անենք

// const list = [5, 9, 33, 100];
// const [a=99, b:v=23] = list
// alert(v);
// // SyntaxError: Unexpected token ':'



// // 7
// // մենք տեսանք երկու մոտեցում 
// // թե ինչպես կարելի է object-ի արժեքները վերցնել որպեսզի մենք օգտագործենք, որպեսզի մենք իրենցով աշխատենք 
// // և մենք նաև տեսանք թե ինչպես կարելի է զանգվածից ինչ որ արժեքներ վերցնել գցել փոփոխականի մեջ և իրենցով աշխատել

