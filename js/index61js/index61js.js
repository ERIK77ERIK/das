// // 1
// // երբ մենք գրում ենք մի հատ մեծ պրոեկտ որտեղ որ կա հարյուրաոր եթե ոչ հազարաոր տողեր javascript-ի, էտ ամենը դնել մի հատ մեծ javascript ֆայլի մեջ բավականին անհարմար է մանավանդ եթե մենք աշխատում ենք ուրիշ ինժիներների հետ, ավելի տրմաբանական է որ էտ կոդը մենք բաժանենք տարբեր ֆայլերի մեջ որոնք որ մենք նաև կարող ենք դնենք առանձին պապկաների կամ directory(գրացուցակ)-ների մեջ սիրուն դասաորենք որպեսզի ավելի հեշտ լինի էտքան կոդի հետ աշխատել
// // javascipt-ում ինչպես դա կարելի է անել, օգտագործել module-ներ
// // ամեն էտ առանձին ֆայլը կարելի է կոչել module


// // 2
// // որպեսզի մենք ասենք բրաուզերին որ այս index.js-ը սովորական javascript ֆայլ չէ այլ modul(մոդուլ) է մենք պետք է անենք այդպես 
// // javascript ֆայլը երբ որ մենք դարձնում ենք module նա այդ ֆայլը աշխատացնում է "strict mode"-ում և հնարաորություն է տալիս ուրիշ javascript ֆայլերի մեջի ինֆորմացիան օգտագործի

// <script type="module" src="index.js"></script>

// // ինչով է տարբերվում module-ը սովորական javascript ֆայլից դե մի քանի պատճառով բայց ամենապարզ ամենավառ օրինակը նա է որ երբ որ որևէ javascript-ը modul է ինքը աշխատում է strick mode-ում 
// // եթե հիշում եք երբ որ սովորական javascript էինք գրում մենք կարող էինք որոշեինք կամ գրեինք "use strick" տեքստը դնեինք վերևը որը նշանակումա տեքստը կաշխատի strick mode-ի մեջ կամ եթե չէինք դնում չէր աշխատում strick mode-ի մեջ
// // բայց modul-ները միշտ strick mode-ում են աշխատում, դա նշանակում է որ մեր կոդը աշխատում է մի քիչ ուրիշ ձևով հետևաբար մենք պետք է ասենք բրաուզերին որ էս ֆայլը modul է և օգտագործելու է ուրիշ modul-ներին ուրիշ ֆայլերին 


// // 3
// // export
// // import {} from "";

// // 3.1
// // ինչպես կարելի է ստեղծել մի հատ ուրիշ ֆայլ և իրեն, իր մեջի ինֆորմացիան օգտագործել ստեղ 

// // ինչպես կարող ենք անենք որ hello.js ֆայլի մեջի ֆունկցիան հասանելի լինի էտ ֆայլից դուրս որպեսզի նա հասանելի լինի մենք պետք է իրեն export անենք 
// // ոնց ենք անում դա, գրում ենք ֆունկցիայից առաջ export

/// hello.js
/// export function sayHi() {
///     console.log("hello Armenia");
/// };


// // 3.2
// // index.js-ում որպեսզի օգտագործենք մենք այս ֆունկցիան մենք անում ենք հետևյալը 
// // անում ենք import(ներմուծել) այսինքն քաշում ենք, բացում ենք էն խուճուճ փակագծերը {} և իր մեջ գրում ենք անունը էն բանի որը մենք ուզում ենք քաշենք դե էս պահին մենք ուզում ենք sayHi ֆունկցիան չէ նենց որ գրում ենք sayHi, հետո գրում ենք from(որտեղից) և չակերտների մեջ գրում ենք ճանապարհը դեպի են ֆայլը որի մեջ sayHi-ը գտնվում է, և էտ ֆայլը քաշում ենք և էտ ֆայլի մեջից մենք քաշում ենք sayHi ֆունկցիան և հիմա մենք էտ sayHi ֆունկցիան կարող ենք օգտագործենք օրինակ իրեն կարող ենք կանչենք 

// import {sayHi} from "./hello.js";

// sayHi();
// // կտպի hello Armenia


// // 4
// // ամփոփում
// // ունենք index.html որտեղ մենք ունենք script teg որը հղում է դեպի մեր index.js ֆայլը, մենք բրաուզերին ասում ենք բրաուզեր ջան սա սովորական ֆայլ չէ սա module է, նենց որ հարգի էտ փաստը աշխատացրա իրեն strick mode-ում և եթե ինքը որևէ բան import անի խնդրում եմ գնա և էտ ֆայլն է քաշի որպեսզի նա կարողանա իր մեջի ինֆորմացիան օգտագործի 
// // դա սա է <script type="module" src="index.js"></script>

// // հետո մենք մտնում ենք index.js-ի մեջ որը ասում է import, ասում է մենք ուզում ենք էս մասնիկը էս ֆայլի մեջի, այսինքն բրաուզերը երբ որ էս javascript-ը կարդում է ասում է ես էս ֆայլը պետքա նախ և առաջ քաշեմ քաշում է և հետո իր մեջից քաշում է դուրս sayHi ֆունկցիան որին մենք հիմա կարող ենք օգտագործենք 

/// hello.js
/// export function sayHi() {
///     console.log("hello Armenia");
/// };
    
// import {sayHi} from "./hello.js";
// sayHi();
// // կտպի hello Armenia


// // 5
// // բացի ֆունկցիայից մենք կարող ենք ցանկացած ուրիշ բան export անենք 
// // օրինակ կարող ենք const-ը export անենք․

/// hello.js
/// export function sayHi() {
///     console.log("hello Armenia");
/// };
/// export const PI = 3.14;
/// export class Dog {
///     woof() {
///         console.log("woof woof");
///     };
/// };

// import {sayHi, PI, Dog} from "./hello.js";

// sayHi();

// console.log(PI);

// const d = new Dog();
// d.woof();
// // կտպի hello Armenia հետո 3.14 հետո woof woof


// // 6
// // ինչի է պարտադրում մեզ որպեսզի մենք նշենք ինչեր ենք ուզում export անենք որովհետև կարողա ուրիշ էլեմենտներ ստեղ լինեն որ մենք չենք ուզում export անենք որը ներքին մեր խոհանոցնա 
// // այսինքն պատկերացրեք մենք ունենք մի հատ փոփոխական օրինակ let a = 3; որը ինչ որ օգտագործում ենք ինչ որ մեր գործողության մեջ բայց մենք չենք ուզում որ իրենից(իր ֆայլից) դուրս էտ փոփոխականը հասանելի լինի դրա համար իրան ընդամենը export չԷնք անում բայց են ինչ որ մենք ուզում ենք դրսից երևա, մեր API(application programming interface(հավելվածի ծրագրավորման ինտերֆեյս))-ը որի միջոցով կարելիա խոսալ դրսից դեպի էս ֆայլի ներքին խոհանոցի հետ այ դա մենք export ենք անում որպեսզի նա հասանելի լինի իրենից դուրս

/// let a = 3;


// // 7
// // էլ ինչպես կարելի է export անել դե մի տարբերակը կողքը դնել export
// // կամ մենք կարող ենք գրենք export {} և իր մեջ նշենք են ամեն ինչը որ մենք ուզում ենք export անենք (մենք նաև կարող ենք վերևից export անենք)
// // այսինքն ուզում ենք export անենք sayHi-ը, PI-ը և Dog-ը գրում ենք export {sayHi, PI, Dog}

/// function sayHi() {
///     console.log("hello Armenia");
/// }
/// 
/// const PI = 3.14;
/// 
/// class Dog {
///     woof() {
///         console.log("woof woof");
///     };
/// }
///
/// export {sayHi, PI, Dog}

// import {sayHi, PI, Dog} from "./hello.js";

// sayHi();
// console.log(PI);
// const d = new Dog();
// d.woof();
// // կտպի hello Armenia հետո 3.14 հետո woof woof


// // 8
// // export default function foo() {
// //     console.log("fooooo");
// // }
// // import hopar from "./hello.js";
// // եթե մենք export անենք կողքը գրելով default, import անելուց մենք կողքը գրենք որևէ ցանկացած անուն(փոփոխական) կապ չունի օրինակ hopar, այդ փոփոխականը կընդունի էն արժեքը որը export է արած այս դեպքում այս("./hello.js") ֆայլից որպես default

/* 
եթե մենք export ենք անում առանց կողքը գրելով default ապա այդ ժամանակ import անելուց կողքը դնում ենք խուճուճ փակագիծներ և իր մեջ գրում ենք անունը էն բանի որը մենք ուզում ենք քաշենք և իրեն կարող ենք օգտագործենք, 
իսկ եթե մենք export ենք անում կողքը գրելով default ապա այդ ժամանակ import անելուց մենք կողքը գրում ենք ցանկացած անուն(փոփոխական) առանց խուճուճ փակագիծների և այդ փոփոխականը ընդունում է այն արժեքը որը export է արած որպես default
 */

// // այսինքն ինչ է ստացվում որ էս պարագայում foo ֆունկցիան կգնա և կմտնի hopar-ի մեջ 

/// export default function foo() {
///     console.log("fooooo");
/// }

// import hopar from "./hello.js";

// hopar();
// // կտպի fooooo


// // 9
// // ինպես կարող ենք ստանանք և առանց default export արածը և default-ով export արածը

/// function sayHi() {
///     console.log("hello Armenia");
/// }
///
/// const PI = 3.14;
///
/// class Dog {
///     woof() {
///         console.log("woof woof");
///     };
/// }
///
/// export {
///     sayHi,
///     PI,
///     Dog
/// }
///
/// export default function foo() {
///     console.log("fooooo");
/// }

// import hopar, {sayHi, PI, Dog} from "./hello.js";

// hopar();

// sayHi();
// console.log(PI);
// const d = new Dog();
// d.woof();

// // կտպի fooooo  հետո hello Armenia հետո 3.14 հետո woof woof


// // 10
// // ամփոփում   (մի քիչ խառը)
// // .1. (1,2) մենք գիտենք ինչպես կարելիա ստեղծել առանձին module
// // .2. (3) ինչպես կարելիա export անել կամ այնպես անել որպեսզի իր ներքին ինչ որ մասնիկները հասանելի լինեն էտ ֆայլից դուրս export անելով 
// // .3. (3,7) կարող ենք export անենք 
// // (3) կամ միանգամից կողքը գրելով export
// // (7) կամ ստեղծել ամեն ինչը ինչ որ մենք ուզում ենք հետո ուղակի առանձին գրել export և նշել էտ ամենը որ մենք ուզում ենք export անենք
// // .4. (8) մենք նաև կարող ենք export անենք այսպես ասած default արժեք
// // ․5. (8, ,9,) որը եթե ուղակի ինչ որ անուն գրենք դա կընդունի default-ի արժեքը եթե խուճուճ փակագիծների մեջ դնենք էտ ժամանակ արդեն անուններն ենք նշում և էտ արժեքները մենք կստանանք եթե իհարկե իրենք export արած են



// /// /// // 10 : 40
// // // //// 11 : 35

// // 11
// // .1.
// // պատկերացրեք մենք էս մեր կոդի մեջ sayHi անունով մի հատ ուրիշ local(տեղական) ֆունկցիա ունենք որը ասում է ուրիշ բան օրինակ function sayHi() {};

/// function sayHi() {
///     console.log("hello Armenia");
/// };
/// 
/// export {sayHi};
/// 
/// export default function foo() {
///     console.log("foooo");
/// }

// import hopar, {sayHi} from "./hello.js";

// function sayHi() {
//     console.log("hello World");
// }

// hopar();
// sayHi();
// // Uncaught SyntaxError: Identifier 'sayHi' has already been declared(«sayHi» նույնացուցիչն արդեն հայտարարված է)

// // բնականաբար սա error է տալիս ինչու որովհետև ասում է դուք արդեն անուն նշել եք էն անունը էն ֆունկցիայի որը էս ֆայլի մեջ էր հետո մի հատ էլ local մի հատ ուրիշ անուն ունեք և սա հակասում է իրար(այսինքն պատկերացրեք նույն է ինչ նույն ֆայլի մեջ երկու նույն անունով փոփոխական ունենաք)
// // կամ պատկերացրեք մենք ունենք երկու տարբեր module-ներ բայց երկուսն էլ export են անում ֆունկցիա որը ունի նույն անունը էտ ժամանակ նույն խնդիրն է առաջանում և javascript-ը բնականաբար error է տալիս

// // .2.
// // մենք կարող ենք ասենք այ էս sayHi-ը ես ուզում եմ բայց քանի որ sayHi-ը արդեն ես ուրիշ ձևի օգտագործում եմ ես ուզում եմ էս sayHi-ը մտնի մի հատ ուրիշ անունի մեջ օրինակ poghos-ի մեջ  {sayHi as poghos}
// // էս պարագայում կաշխատի

/// function sayHi() {
///     console.log("hello Armenia");
/// };
/// 
/// export {sayHi};
/// 
/// export default function foo() {
///     console.log("foooo");
/// }

// import hopar, {sayHi as poghos} from "./hello.js";

// function sayHi() {
//     console.log("hello World");
// }

// hopar();
// sayHi();
// poghos();
// // կտպի foooo հետո hello World հետո hello Armenia


/// // // /// /// /// 13: 43
// // 12
// // ամեն ինչը հարթ աշխատում է ոչ մի խնդիր չկա բայց իրականում մի հատ խնդիր կա այստեղ 
// // ինչպես է սա աշխատում երբ որ մենք ասում ենք որ մենք օգտագործելու ենք module-ներ և բրաուզերին ասում ենք ֆայլը module է(type="module"), բրաուզերը տեսնումա դա քաշումա էս ֆայլին(src="index61js/index61js.js") հետո ուսումնասիրում է իրեն և ասում է բայց իրեն պետք է էս hello.js ֆայլը(import hopar, {sayHi as poghos} from "./hello.js";) հետո գնում է էտ hello.js-ին է քաշում

// // քաշում ինչ նկատի ունենք քաշում ասելով
// // դե հիշեք որ սա կայք է հետևաբար էս ամեն ինչը գտնվում է մի հատ ուրիշ համակարգչի վրա ինտերնետում ինչ որ web server-ի վրա իսկ օգտագործողը էս ամեն ինչի օգտագործում է բրաուզերի մեջ լրիվ ուրիշ համակարգչի վրա այսինքն երբ որ նա գրում է ինչ որ մի հասցե էտ http-ի get-ը ոնցոր էտ փաթեթը էտ խնդրանքը որ ես ուզում եմ ինչ որ մի բան գնում հասնում է web server-ին էտ web server-ը հետ է ուղարկում է այս js61html.html-ը
// // բրաուզերը սա կարդում է ասում է բայց նաև էս html-ը պահանջում է այս index61.js ֆայլը նորից գնումա խնդրումա index.js ֆայլը server-ից որը էտ index61js.js javascript-ն է ուղարկում հետո իրեն է ուսումնասիրում ասում է բայց նաև այս index61js.js ֆայլը պահանջում է այս hello.js ֆայլին գնում է նորից server և իրեն է բերում

// // հիմա 
// // պատկերացրեք մենք ունենք մի հատ մեծ ծրագիր որոնք ունեն ֆայլեր այդ ֆայլերը ունեն մի հատ ուրիշ ֆայլեր որոնք որ պահանջում են ուրիշ ֆայլեր էտ ամեն ինչը սենց հատ հատ քաշելը բնականաբար կտևի պետենցյալ բավականին երկար ժամանակ որ նշանակումա որ մեր ծրագիրը մեր application-ը բավականին երկար կտևի միչև ինքը արթնանա և ինչ որ գործ անի 
// // այսինքն պատկերացրեք դուք մտնում եք facebook.com և պտի չգիտեմ 8 վարկյան սպասեք մինչև ինքը բոլոր էտ ֆայլերը քաշի հարյուրավոր եթե ոչ հազարավոր ֆայլերը քաշի մինչև ինքը աշխատի բնականաբար դա օպտիմալ չէ 
// // այնպես որ արժի էս ֆայլերը էս module-ները նախօրոք կպցնել իրար

// //   
// // ․․․․

// // արժի էս ֆայլերը էս module-ները նախօրոք կպցնել իրար 
// // ինչպես կարելի է այս module-ները նախօրոք կպցնել իրար
// // և երբ որ մենք ուղարկում ենք web server-ը ուղարկում է բրաուզերին անմիջապես բոլոր ֆայլերը արդեն իրար կպցրած ուղարկի ոչ թե հատ հատ հատ

// // որպեսզի մենք էս module-ները կպցնենք իրար մենք կօգտագործենք մի հատ ծրագիր որը կոչվում է webpack
// // webpack ծրագիրը օգատգործելու համար մենք նախ և առաջ պետք է instal անենք node js ծրագիրը որը իր հետ կքաշի npm ծրագիրը և npx ծրագիրը

// // npm-ը հնարաորություն է մեզ տալիս ինչ որ պրոեկտներ քաշել և իրենց օգտագործել 
// // npx-ը էլի պրոեկտը քաշում է բայց անմիջապես աշխատացնում է իրեն և ջնջում է հետևաբար instal անել կամ հետո իրան պահել ջնջել և այլն մեզ պետք չի
// // նենց որ մենք կօգտագործենք npx ծրագիրը որպեսզի օգտագործենք էս ամեն ինչը մեզ պետքա commandline interface(հրամանի տողի միջերես) որը եթե mac-ում եք կարելի է օգտագործել terminal կամ git bush եթե windows-ի վրա եք կամ եթե դուք visual studio code եք օգտագործում ինքը իր մեջ ունի terminal մենք կարող ենք գնանք view և բացենք այս terminal ծրագիրը և ահա ստեղ մենք ունենք մի հատ commandline interface, լավ ուրեմն մենք կօգտագործենք npx ծրագիրը որպեսզի մենք աշխատացնենք webpack ծրագիրը

// // 17 : 20
/// // hima e2e menq enter anenq menq anmijapes tesnwujm enq w8 xndi8 ka .....


// // այսինքն ինչ է ստացվում որ մենք կարող ենք մեր javscript կոդը բաժանենք առանձին ֆայլերի են մասնիկները ամեն ֆայլի որ մենք ուզում ենք էտ ֆայլից դուրս երևա մենք export ենք անում,  էն մասերը որ մենք ուզում ենք քաշենք ուրիշ ֆայլից inport ենք անում հետո մենք աշխատացնում ենք webpack-ը որպեսզի էտ ամենը կպցնի իրար դարձնի մի հատ ֆայլ որին մենք հղում ենք մեր index html-ից ․․․․










// // 6.
// // կարող է փոփոխական լինի որ չօգտագործենք

// // 7.
// // տարբերակները
// // 1.
// // 2.


// // 3.
// // մենք կարող ենք անենք import հետո ստեղ դնենք որևէ անուն կապ չունի եկեք գրենք hopar
// // import hopar from "./hello.js";

// // էս հոպարի արժեքը ինչ է
// // հոպարը կընդունի են արժեքը որը export է արած այ էս ֆայլից(էս դեպքում hello.js ֆայլից) որպես default
// // այսինքն էս պարագայում այ էս ֆունկցիան(foo ֆունկցիան) կգնա և կմտնի hopar-ի մեջ
// // և հիմա մենք կարող ենք հիմա կանչենք hopar-ին որը իհարկե ընդունել է էտ ֆունկցիայի արժեքը և ահա ստանում ենք foo 

// import hopar from "./hello.js";

// hopar();  // foooo


// // 8
// // հիմա մենք նաև կարող ենք 
// // հիմա էս ել ենք export արել default-նել ենք export արել չէ
// // իչպես կարող ենք ստանանք և default-ը և էս մնացածը

// import hopar, {sayHi} from "./hello.js"

// hopar();   // hello Armenia
// sayHi();   // foooo



// // 9
// ամփոփում



// // 10
import hopar, {sayHi as poghos} from "./hello.js";

function sayHi() {
    console.log("hello World");
}

hopar();
poghos();
sayHi()



// // 11
// // module-ները կպցնել իրար
// // amboxj-ը կպցնել իրար որ դառնա մի հատ ֆայլ





// // // export(արտահանում) import(ներմուծում)





