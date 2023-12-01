// // 1
// function func() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(88)
//             reject(new Error("Vay mi ban exav"));
//         }, 1000);
//     });
// }

// const p = func();

// p.then(function(result) {
//     alert(result); // 88
// });

// p.catch(function(error) {
//     alert(error)
// });  // Error: Vay mi ban exav


// // 2
// // պարզվում է որ then ֆունկցիան բացի դրանից որ կանչում է իր տրված ֆունկցիաին են ժամանակ երբ խոստումը կատարվում է, ինքը վերադարձնում է մի հատ նոր խոստում 
// // ուրեմն մենք այստեղ կարող ենք վերագրենք մի հատ p2 որովհետև այ էս then ֆունկցիային երբ որ մենք կանչում ենք նա վերադարձնում է մի հատ նոր խոստում ինչ խոստում ինչ է դերը էտ խոստումի էտ խոստումը ուրեմն կկատարվի են արժեքով որը վերադարձնում է իրեն տված ֆունկցիան էլի եմ ասում էս խոստումը կկատարվի են արժեքով որը վերադարձնում է այ էս ֆունկցիան այսինքն եթե ստեղ մենք ուղղակի վերադարձնենք 1 օրինակ չէ հետո անենք p2.then() և փոխանցենք մի հատ function() {} որը կընդունի ինչ որ result և alert անենք այդ result-ը այ էս result-ը կլինի են արժեքը որը այ էս ֆունկցիան վերադարձրեց որը 1 է

// function func() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(8);
//         }, 1000);
//     });
// }

// const p = func();

// const p2 = p.then(function(result) {
//     return 1;
// });

// p2.then(function(result) {
//     alert(result);
// });

// // հիմա ձեզ հարց է ծագում բա էս then-ը ինքն էլ է նույնպես promise վերադարձնում կամ խոստում վերադարձնում այո ինքն էլ է վերադարձնում այսինքն մենք ստեղ կարող ենք անենք օրինակ const p3 և հետո ասենք p3.then() իրեն փոխանցենք function որը էլի նույնպես կընդունի ինչ որ մի արժեք և եկեք alert անենք էտ արժեքը
// // հիմա եկեք աշխատացնենք և տեսնենք ինչ կլինի էտ արժեքը undefined ինչու որովհետև այ էս then-ը էս խոստումը ստեղծելա այ էս then-ը(երկրորդ then-ը) հիմա հարց իր տրված ֆունկցիան ինչ է վերադարձնում ոչ մի աբան հետևաբար իր result-ը undefined էր, բայց եթե ստեղ վերադարձնեյնք 99 այ հիմա արդեն այ էս p3-ը կկատարվի էտ 99-ով նենց որ հիմա կարող ենք աշխատացնենք և կտեսնենք 99

// // .1
// function func() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(8);
//         }, 1000);
//     });
// }

// const p = func();

// const p2 = p.then(function(result) {
//     return 1;
// });

// const p3 = p2.then(function(result) {
    
// })

// p3.then(function(result) {
//     alert(result);
// });  // undefined


// // .2
// function func() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(8);
//         }, 1000);
//     });
// }

// const p = func();

// const p2 = p.then(function(result) {
//     return 1;
// });

// const p3 = p2.then(function(result) {
//     return 99
// })

// p3.then(function(result) {
//     alert(result);
// });  // 99




// // 2
// function func() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(8);
//         }, 1000);
//     });
// }

// const p = func().then(function(result) {
//     return result + 1; // 9
// }).then(function(result) {
//     return result + 2; // 11
// }).then(function(result) {
//     alert(result);
// });  // 11



// // 3
// // էս մեդոթը եբ որ մենք մեկից մյուսը գնում ենք կոչվումա ոնց որ chaining(շղթա ստեղծել, շղթայականացնել)
// // հիմա էս chaining-ը կամ էս then-երը ինչ ով են շատ կարևոր 
// // նայեք ստեղ պատկերացրեք մենք ունենք մի հատ ուրիշ ասինխրոն ֆուկցիա







// function foreach(arr, fun) {
//     let i = 0
//     while(i < arr.length) {
//         fun(arr[i], i);
//         i++
//     };
// };

// foreach([1, 2, 3], function(val, i) {
//     alert(val + i)
// }) // 1, 3, 5


// function map(arr, fun) {
//     let i = 0;
//     let newArr = [];
//     while(i < arr.length) {
//         newArr[i] = fun(arr[i], i)
//         i++
//     };
//     return newArr
// }

// alert(map([1, 2, 3], function(val, i) {
//     return val + i
// })) // 1,3,5



// function filter(arr, fun) {
//     let i = 0;
//     let i2 = 0;
//     let newArr = [];
//     while(i < arr.length) {
//         if(fun(arr[i], i)) {
//             newArr[i2] = arr[i]
//             i2++
//         }
//         i++
//     };
//     return newArr
// }

// alert(filter([1, 2, 3, 4], function(val, i) {
//     return val % 2 === 0
// }))



