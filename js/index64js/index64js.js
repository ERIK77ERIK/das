// // Ասինխրոն գործառույթներ(asynchronous functions)
// // 1
// const firstName = "Paruyr";
// const lastName = "Sevak";
// const name = `${firstName} ${lastName}`

// function func(x, y) {
//     const a = x + 2;
//     const b = y + 2;
//     const c = x + y;
//     return c * 2;
// }

// const result = func(2, 4);

// alert(result);


// // 2
// // 2.1
// function func(x, y) {
//     const a = x + 2;
//     const b = y + 2;
//     const c = x + y;
//     setTimeout(function() {
//         return c * 2;
//     }, 1000)
// }

// const result = func(2, 4);

// alert(result);


// // 2.2
// function func(x, y, callback) {
//     const a = x + 2;
//     const b = y + 2;
//     const c = x + y;
//     setTimeout(function() {
//         callback(c * 2);
//     }, 1000);
// }

// func(2, 4, function(result) {
//     alert(result);
// });





// // 3   
// // 6 : 54
// // բացի callback-ներից կա երկրորդ մոտեցում թե ինչպես մենք կարող ենք իմանանք երբ ֆունկցիան ավարտվեց և ուրեմն իհարկե ստացանք իր արդյունքը նւ այսինքնս ֆունկցիան դա օգտագործելով promise, promise նշանակում է խոստում
// // միտքը ինչում է 


// // երբ որ մենք կանչում ենք ինչ որ ասինխրոն ֆունկցիային նա մեզ կարող է վերադարձնել խոստում
// // այսինքն ֆունկցիան ոնցոր կոպիտ ասած մեզ ասում է խոսքեմ տալիս ինչ որ մի պահ կավարտեմ և ինչ որ մի պահ երբ որ նա կատարում է իր խոստումը մենք իմանում ենք դրա մասին 

// // հիմա ինչպես կարելիա էտ իմ ասած իրականում կոդաորել
// // Promise-ը ինքը function constructor է մենք գիտենք ինչպես կարելիա իրեն օգտագործել ուրեմն
// // ինքը իր constructor-ի մեջ ընդունում է մի հատ ֆունկցիա և ինքը ինչ է անում, ինքը կանչում է այս ֆունկցիային և փոխանցում է այս ֆունկցիային երկու արժեք resolve, reject որոնք որ նաև ֆունկցիաներ են

// // մի հատել ուսումնասիրենք 
// // promise-ը function constructor է
// // եթե հիշում եք function constructor-ը իրականում վերջում վերադարձնում է մի հատ object չէ նենց որ կանչելով new Promise() իրականում մենք կստանանք մի հատ նոր object, իրեն փոխանցում ենք երբ որ իրեն կառուցում ենք էտ object-ը կոպիտ ասած , իրեն փոխանցում ենք մի հատ ֆունկցիա էտ ֆունկցիային էտ promise-ը իր ներքին կոդից կկանչի և կփոխանցի իրեն երկու հատ ֆունկցիա resolve(լուծել) և reject(մերժել)

// // հիմա մենք էս կոդը(setTimeout-ի) վերցնում ենք և դնում ենք իր մեջ և ստեղ ոչ թե կանչում ենք callback էս callback-ի էս գործողությունները արդեն հանում ենք , էլ callback չենք օգտագործում որովհետև հիմա օգտագործում ենք promise б, մեք ստեղ օգտագործում ենք resolve և իհարկե էս promise-ին մենք պետք է վերադարձնենք նենց որ մենք ասում ենք return 
// debugger;
// function func(x , y) {
//     const c = x + y;

//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(c * 2);
//         }, 1000);
//     });
// };

// const promise = func(2, 4);

// promise.then(function(result) {
//     alert(result);
// });
// // promise-ը հասկացանք բայց ինչպես կարող ենք իմանանք երբ է էտ խոստումը կատարվել
// // այսպես նայենք անում ենք promise.then()  then նշանակում է հետո այսինքն մենք երբ որ ինչ որ մեկը ձեզ խոստում է տալիս ասում եք հետո ինչ եղավ ձեր խոստումը չէ երբ (կատարվեց, կատարվեց?) և փոխանցում ենք մի հատ ֆունկցիա որը ընդունում է պատասխանը(result) և ստեղ մենք կարող ենք անենք alert(result) այսինքն ինչ է ստացվում 




/* const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });
  
  promise1.then((value) => {
    console.log(value);
    // Expected output: "foo"
  });
  
  console.log(promise1);
  // Expected output: [object Promise] */




  