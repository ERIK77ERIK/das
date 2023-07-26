// 1.
// // ինչպես հիշում եք this-ը որոշվում է միայն այն պահին երբ մենք function-ին կանչում ենք 

// function fun(a) {
//     alert(this)
//     alert(a)
// }

// const obj = {
//     func: fun
// }

// 1. obj.func(5)  // this = obj

// 2. fun(5)       // this = window/undefined

// 3. fun.apply(obj, [5])    // this = obj
//    fun.call(obj, 5)       // this = obj

// 4. const boundFunc = fun.bind(obj)
//    boundFunc(5)     // this = obj

// 5. new fun(5)       // this = {}


// // this-ը որոշվում է են պահին երբ որ մեր ֆունկցիան կանչվում է ոչ թե են պահին երբ որ նա ստեղծվում է այլ երբ որ նա կանչվում է 
// // էս բոլոր օրինակներում մենք էտ ֆունկցիային կանչում ենք, փակագծերով կանչում ենք իրեն հետևաբար էտ պահին որոշվում է իրա this-ը և նայած ոնց ենք այս նույն ֆունկցիաին կանչում իրա this-ը կարա լինի տարբեր 


// 2.
// պետք է հիշել երկու կարևոր բան 
// this-ը որոշվում է են պահից երբ մենք կանչում ենք իրան 
// և պետք է ընդամենը էտ պահը գտնել և գտնել էտ օրենքը մեր ցուցակի մեջ

// օրինակներ //

// 2.1
// const a = {
//     name: "Joe",
//     foo: function(f) {
//        f()
//     }
// }
// a.foo(function() {
//     alert(this)
// })
// // կտպի [object Window]


// 2.2
// const a = {
//     name: "Joe",
//     foo: function() {
//         alert(this.name)
//     }
// }
// a.foo()
// // կտպի Joe



// 2.3
// const a = {
//     name: "Joe",
//     foo: function(f) {
//         alert(this)
//     }
// };
// [1, 2, 3].forEach(a.foo) 
// // կտպի [object Window] երեք անգամ

// // մենք ստեղ չենք կանչում ֆունկցիային, մենք ստեղ ընդամենը հղում ենք փոխանցում forEach ֆունկցիաին դեպի այս ֆունկցիային հետո forEach-ը իր մեջ կկանչի այս ֆունկցիային ինքը չի կանչի կետով կամ bind-ով ինքը ընդամենը կկանչի իրեն հետևաբար իր this-ը կլինի window object-ը կամ իհարկե undefined եթե strick mode-ում ենք աշխատում


// 2.4
// const a = {
//     name: "Joe",
//     foo: function() {
//         alert(this)
//     }
// }
// const f = a.foo
// f()
// կտպի [object Window]



// 3.
// 1.1 //
// // պարզվում է forEach-ը կարող է ընդունել երկու արժեք 
// // երկրորդ արժեքը context-նա(this-նա) տված ֆունկցիայի

// const a = {
//     name: "Joe",
//     foo: function() {
//         alert(this.name)
//     }
// };
// [1, 2, 3].forEach(a.foo, a);
// // կտպի Joe երեք անգամ

// // այսինքն forEach-ը հիմա եթե տեսնի որ մենք այս a արժեքը փոխանցել ենք ինքը այս ֆունկցիան կաշխատացնի այ էս a this-ով, a-ը կաշխատացնի որպես this 
// // այսինքն ինքը տակից a.foo ֆունկցիան կկանչի կամ call-ով կամ apply-ով որի առաջի արժեքը կլինի a-ը

/* context և this նույն բան են դուք հիշեք այդպես */


// 1.2 //
// // forEach-ի լոգիկան // // 

// function forEach(arr, fun, obj) {
//     for(let i = 0; i < arr.length; i++) {
//         fun.call(obj)
//     }
// }

// const a = {
//     name: "Joe",
//     foo: function() {
//         alert(this.name)
//     }
// };

// forEach([1, 2, 3], function(val) {
//     alert(this.name)
// }, a) 
// // կտպի Joe երեք անգամ


// 2 //
// const a = {
//     name: "Joe",
//     foo: function() {
//         alert(this.name)
//     }
// };

// // forEach-ի դեպքում մենք կարող ենք փոխանցենք առանձին context որպես վերջին պարամետր
// [1, 2, 3].forEach(a.foo, a)

// // map-ի դեպքում էլ 
// [1, 2, 3].map(a.foo, a)

// // // filter-ի դեպքում էլ
// [1, 2, 3].filter(a.foo, a)


// // բայց reduce-ի ժամանակ երկրորդ արժեքը դա ոնցոր առաջին ագրեգատրի արժեքն է
// // այնպես որ reduce-ի ժամանակ իրականում context մենք չենք կարող փոխանցենք reduce-ի ժամանակ միշտ պետք է եթե this-ով ենք աշխատելու անենք dօtt bind և փոխանցենք իրա this-ը որը մենք ուզում ենք օգտագործենք այս տրված ֆունկցիայի մեջ
// [1, 2, 3].reduce(a.foo.bind(a), a)





// 4.
// // որպեսզի մի քիչ պարզացնենք սա և ասենք որ ուզում ենք այս ֆունկցիան աշխատի այս a object-ի context-ի մեջ այսպես ասած իրա this-ը որ լինի այս object-ը մենք կարող ենք անենք այսպես

// const a = {
//     name: "Joe",
//     foo: function() {
//         alert(this.name)
//     }
// };

// [1, 2, 3].forEach(a.foo.bind(a));
// // կտպի Joe երեք անգամ

// // սա ինչ է ստացվում որ այ էս ամենը a.foo.bind(a)  կվերադարձնի մի հատ լրիվ նոր ֆունկցիա որը կաշխատի նույն ձևի ոնց որ այս ֆունկցիան բայց իրա this-ը կլինի a object-ը

