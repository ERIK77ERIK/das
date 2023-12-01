// // 1
// // նույնպես ինչպես որ բրաուզերը փոխանցում է alert և prompt ֆունկցիաները նույնպես նա փոխանցում է մեզ մի հատ ուրիշ ֆունկցիա որը կոչվում է setTimeout

// // 2
// // իրեն օգտագործում ենք այսպես
// // փոխանցում ենք որպես առաջին արժեք մի հատ ֆունկցիա և որպես երկրորդ արժեք մի հատ թիվ որը միլիվարկյան է ներկայացնում 
// // միլիվարկյան նշանակումա 1 վարկյան ներկայացնելու համար մենք պետք է գրենք 1000(հազար միլիվարկյանը մի վարկյաննա)

// console.log("start");

// setTimeout(function() {
//     console.log("yay");
// }, 1000);

// console.log("end");

// // սա նշանակում է տպիր console-ի մեջ start սա նշանակում է որ մենք այ էս ֆունկցիան հանձնում ենք բրաուզերին և խնդրում ենք ասում ենք բրաուզեր ջան խնդրում ենք մի վարկյան հետո էս ֆունկցիան աշխատացրեք, նւ գոնե մի վարկյան հետո ինքը ասումա օկեյ և վերցնում է իր մոտ հետո մենք տպեցինք end հետևաբար տպվեց start և end հետո մոտաորապես մի վարկյան հետո նոր տպվեց yay-ը(1 վարկյան հետոյա երեվում)


// // սա կարևոր է հասկանալ որ ստեղ մենք երբ որ գրում ենք 1 վարկյան հետո դա չի նշանակում որ ինքը ուղիղ մի վարկյան հետո կաշխատի ինչու 
// // եկեք սա դարձնենք 10

// console.log("start");

// setTimeout(function() {
//     console.log("yay");
// }, 10);

// console.log("end");




// console.log("start");

// setTimeout(function() {
//     console.log("yay");
// }, 500);

// console.log("end");



// console.log("start");

// setTimeout(function() {
//     console.log("yay");
// }, 500);

// for(let i = 0; i < 5000; i++) {
//     console.log("waiting");
// };

// console.log("end");

// // .....
            



            
            
// // 3
// // եկեք մի քիչ ավելի լավ պատկերացնենք ինչպես է սա աշխատում
            
// // ուրեմն բրաուզերի մեջ կա մի հատ հերթ որը ամենասկզբից դատարկ է
// // երբ որ մենք կանչում ենք setTimeout ինքը այդ ֆունկցիային վերցնում է և քցում է էտ հերթի մեջ 
// // այսինքն եկեք էս կոդը վերևից ներքև մի հատ ուսումնասիրենք 


// // օրինակ 1
// console.log("start");

// setTimeout(function() {
//     console.log("yay");
// }, 500);

// setTimeout(function() {
//     console.log("ok");
// }, 200);

// console.log("end");


// հերթ 
// --------------
// function() {
//     console.log("yay");
// }, 500

// function() {
//     console.log("ok");
// }, 200

// // start հետո end հետո ok հետո yay


// // օրինակ 2
// console.log("start");

// setTimeout(function() {
//     console.log("yay")
// }, 0);

// setTimeout(function() {
//     console.log("ok");
// }, 0);

// console.log("end");

// հերթ 
// --------------
// function() {
//     console.log("yay")
// }, 0

// function() {
//     console.log("ok");
// }, 0

// // start հետո end հետո yay հետո ok



// // օրինակ 3
// console.log("start");

// const id = setTimeout(function() {
//     console.log("yay")
// }, 0);

// clearTimeout(id);

// setTimeout(function() {
//     console.log("ok");
// }, 0);

// console.log("end");



// // ......



// // 4

// let list = [
//     "Joe",
//     "Rob",
//     "Mike",
//     "Lisa",
//     "Zara"
// ];

// const root = document.querySelector("#root");

// const div = document.createElement("div");
// div.innerText = `Joe
// Rob
// Mike
// Lisa
// Zara`;
// // return div

// root.appendChild(div);



// list.map(name => {
//     const div = document.createElement("div");
//     div.innerText = name;
//     return div;
// }).forEach(el => {
//     root.appendChild(el);
// });












