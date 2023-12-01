// // 1
// // logic error(տրամաբանության սխալ, լոգիկայի սխալ)
// // կարող են մեր կոդի մեջ լինել լոգիկայի սխալներ
// debugger;
// let sum = 0;
// let input;
// do {
//     input = prompt('enter number');
//     if(input === "exit") {
//         break
//     }
//     sum = sum + (+input);
// } while (input !== 'exit')

// alert(sum);


// // 2
// // SyntaxError(գրելաձևի սխալ)
// // Uncaught SyntaxError: Unexpected identifier 'a'
// // կան նաև syntax-տիկայի սխալներ այսպես ասած syntax error
// // ինչ է նշանակում syntax error երբ որ մենք լեզվի սխալ ենք թույլ տալիս
// // օրինակ

// let sum = 0;
// let input a;
// do {
//     input = prompt('enter number');
//     if(input === "exit") {
//         break
//     }
//     sum = sum + (+input);
// } while (input !== 'exit')

// alert(sum);



// // 3
// // ReferenceError(հղման սխալ)
// // Reference:Error: fo is not defined (fo-ն սահմանված չէ)

// function foo() {

// }

// fo()



// // 4
// // TypeError(տիպի սխալ, տեսակի սխալ)
// // Uncaught TypeError: a is not a function

// // այսինքն մենք օգտագործում ենք մի տիպ ոչ այնպես ինչպես իրեն պետք օգտագործել, այսինքն իրեն փորձում ենք օգտագործենք որպես ֆունկցիա որը իհարկե չի կարելի 
// let a = 3;

// a();



// // 5
// // 1.
// // logic error(տրամաբանության սխալ, լոգիկայի սխալ)
// // որոնք debugger-ով ենք մենք շտկում

// // 2.
// // SyntaxError(գրելաձևի սխալ)
// // երբ որ մենք ուղղակի կոդը սխալ ենք գրում ինչ որ լեզվի սխալ ենք թույլ տալիս 

// // 3.
// // ReferenceError(հղման սխալ)
// // երբ որ մենք ուզում ենք օգտագործել մի բան որը գոյություն չունի

// // 4.
// // TypeError(տիպի սխալ, տեսակի սխալ)
// // երբ որ օգտագործում ենք մի բան ոչ այնպես ինչպես կարելիա 
// // օրինակ թվին փորձում ենք օգտագործենք որպես ֆունկցիա որը իհարկե չի կարելի





// // 6.
// // էս տիպի խնդիրներ մենք կարող ենք տեստաորման ընթացքում գտնել լուծել և այլն 
// // բայց խնդիրը որ նաև մենք հաճախ առընչվում ենք խնդիրների հետ(error-ների հետ) որոնց պատճառը մեր կոդը չի կամ լոգիկան չի այլ որովհետև դրսից եկած ինչ որ մի ինֆորմացիա օրինակ սխալ ունի իր մեջ 

// // օրինակ
// // պատկերացրեք մենք ուզում ենք կարդանք մի քիչ JSON 
// // էտ JSON-ը կարողա գա ուրիշ ասենք server-ից ուրիշ ասենք կամպուտերից կամ կապ չունի որտեղից էս պահին եկեք աշխատենք localStorage-ի հետ

// localStorage.setItem("data", JSON.stringify({name: "Joe"}));

// // հիմա սա եթե աշխատացնենք ինքը ուրեմն էս կոդը կգրի մեր localStorage-ի մեջ, այսինքն բրաուզերի հիշողության մեջ կավելացնի էս բանալիով էս անունով էս ինֆորմացիան որպես տեքստ
// // հիմա որպեսզի հաստատենք իրոք արեց բացում ենք մեր դեֆթուզը և գնում ենք Application և ահա տեսնում ենք որ data-ում կա մի հատ սենց տեքստ որտեղ որ գրվածա {"name": "Joe"}

// // հիմա եկեք կոդ գրենք որը կարդում է դա 
// // ասյինքն

// const data = localStorage.getItem("data");

// // և սա մեզ պետք է վերադարձնի ինչ որ մի ինֆորմացիա որը տեքստային ձևով է գալու նենց որ եկեք իրեն վերածենք հետ որպես javascript object

// const data = localStorage.getItem("data");
// const obj = JSON.parse(data);
// debugger;



// // 1.1
// try {
//     const data = localStorage.getItem("data");
//     const obj = JSON.parse(data);
//     debugger;
// } catch(err) {
//     debugger;
// }
// alert("yay");



// // 1.2
// function a() {
//     try {
//     alert("hi")
//     const data = localStorage.getItem("data"),
//     const obj = JSON.parse(data);
//     } catch(err) {
//         alert("error happened");
//     } finally {
//         alert("bye");
//     }
// }
// a()

// // 1.3
// function a() {
//     try {
//     alert("hi")
//     return "yay"
//     } catch(err) {
//         alert("error happened");
//     } finally {
//         alert("bye");
//     }
// }

// a()



// // 7.
// // կա try(փորձել) որը նշանակում է փորձիր ունի սկիզբ ունի վերջ
// try {

// }

// // հետո կա catch(բռնել) որը նշանակումա բռնի որը ընդունում է ինչ որ error object
// try {

// } catch(err) {

// }


// // հմի ստեղ մենք կարող ենք const a = 3 որը ճիշտա ստեղ սխալ չկա պատկերացրեք մենք ավելացնում ենք մի հատ սխալ a = 5; ինչիա սա սխալ որովհետև const-ը չի կարող փոխվի և մենք ստեղ փորձում ենք փոխենք սա կտա error չէ
// // error-ի ժամանակ ինչ կլինի կկանչվի էս catch բլոկը իսկ եթե սխալ չլինի catch բլոկը չի կանչվի
// try {
//     const a = 3;
//     a = 5;
// } catch(err) {
//     alert("something went wrong")
// }
// // something went wrong


// բացի catch-ից մենք կարող ենք ասենք finnaly(վերջապես)
// try {
//     const a = 3;
//     a = 5;
// } catch(err) {
//     alert("something went wrong");
// } finally {
//     alert("ok, now what?")
// }
// something went wrong հետո ok, now what?

// // եթե աշխատացնենք սկզբից կասի something went wrong հետո կասի օկեյ հիմա ինչ


// և իհարկե կարող ենք շարունակենք մնացած կոդը

// try {
//     const a = 3;
//     a = 5;
//     alert("barev") // im komic
// } catch(err) {
//     alert("something went wrong");
// } finally {
//     alert("ok, now what?")
// }
// alert("sdhagh")
// կտպի something went wrong հետո ok, now what? հետո sdhagh

// // ինչի մնացած կոդն է տպեց որովհետև մենք բռնեցինք error-ը թույլ չտվեցինք որը ինքը ջարդի և ցխի մեր ծրագիրը

/*
// իսկ եթե սխալ չլինի կաշխատացնի finally-ի բլոկի մեջի կոդը և բլոկներից դուրս գտնվող կոդը 
try {
    const a = 3;
} catch(err) {
    alert("something went wrong");
} finally {
    alert("ok, now what?")
}
alert("sdhagh")
// // կտպի ok, now what? հետո sdhagh
*/



// // իսկ առանց try catch -ի եթե մենք թույլ տաինք այսպիսի սխալսա ինչպես տեսնում եք չի աշխատի և մենք ուրեմն մտնում ենք ստեղ և տեսնում ենք որ կա 
// const a = 3;
// a = 5;
// alert("lasjdf");
// // Uncaught TypeError: Assignment to constant variable. (Հանձնարարություն հաստատուն փոփոխականին.

// // Uncaught նշանակում է չբռնված 
// // ասյինքն ինչ է ստացվում որ կա այսպիսի error որը մենք չենք բռնել կոդի մեջ հետևաբար ինքը ստեղ ասում է որ ինքը չբռնված error է(uncaught error)


// // եթե մենք իրան բռնեյնք եթե անեյնք try և հետո անեյնք catch(catch նշանակումա բռնել) էտ ժամանակ մենք արդեն բռնում ենք հետևաբար ինքը console-ում էլ չի նկարվի եթե իհարկե մենք ստեղ չգրենք  console.error() մենք կարող ենք ստեղ անենք 
// try {
//     const a = 3;
//     a = 5;
//     alert("lasjdf");
// } catch(err) {
//     // console.error("uh ohhh :( ");
// }

// // և ինչպես տեսնում եք էտ alert-ը եղավ որովհետև մենք էտ error-ը բռնեցինք ու չթողեցինք որ մեր ծրագիրը ջարդի




// // 10

// // որ հերիք չի որ մենք կարող ենք եղած error-ները բռնենք մենք ինչ error-նեերի մասին ենք հա մինչև էս պահը խոսացել
// SyntaxError
// ReferenceError
// TypeError


// // պարզվումա մենք որպես ծրագրաորող կարող ենք ստեղծենք error ինչպես նայեք ստեղ անում ենք throw(նետել) այսինքն մենք ստեղծում ենք կամ գցում ենք մի հատ error, error-ը ինչա object-ա չէ որը ունի իրա function constructor-ը և իրան մենք փոխանցում ենք տեքստը որը ուզում ենք երևա էկրանի վրա օրինակ "Roubeni error message@";
// try {
//     throw new Error("Roubeni error message@");
// } catch(err) {
//    debugger
// }
 
// // հույսով եմ էսքանը պարզ էր որ մենք կարող ենք մեր error-ը գցենք հա էսպես ասած հայտարարենք կամ ստեղծենք և էտ նույն error-ը հետո կարող ենք կամ catch անենք կամ եթե catch չանենք նշանակումա սա ( throw new Error("Roubeni error message@"); )  մեր ծրագիրը կջարդի և էս error-ը կտպվի  ուրեմն console-ում  uncaughtError կլինի էտ պարագայում 




// // stack-ը ասում է են հերթականությունը ֆունկցիաների որոնք որ աշխատել են միչև մենք հասանք մեր error-ին օրինակ նայենք ինքը ասումա որ a-ն կանչելուց սկսելեն հետո մտելենք a-ի մեջ b-ն ենք կանչել հետո b-ի մեջ ստեղծել ենք error
// function a() {
//     b();
// }

// function b() {
//     throw new Error("uh ohhh");
// }

// a()



// // 11
// // մեր գործը ոչ միայն կոդ ստեղծելն է, ծրագիր ստեղծելն է մեր գործը նաև սխալների գտնելը և իրենց շըկնելն է նենց որ պետք է բավականին ուժեղանանք այս հմտությունով
