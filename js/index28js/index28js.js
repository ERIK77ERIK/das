/*
 COMMON STRING FUNCTIONS
    toUpperCase
    toLowerCase
    substring(startIdx, endIdx)
    split(sep)
    replaceAll(search, replaceTxt)
    search
*/


// // 1
// // toUpperCase տեքստը դարձնումա մեծատառ 
// // toUpperCase ֆունկցիային տալիս ենք տեքստ և նա վերադարձնում է նոր տեքստ որը մեր տված տեքստն է ամբողջովին մեծատառ(մեր տված տեքստը չի փոխում) 

// let a = "Hello World";
// let b = a.toUpperCase();
// alert(a);
// alert(b);

// // կտպի Hello World հետո HELLO WORLD

// // 2
// // toLowerCase() տեքստը դարձնումա փոքրատառ
// // toLowerCase ֆունկցիային տալիս ենք տեքստ և նա վերադարձնում է նոր տեքստ որը մեր տված տեքստն է ամբողջովին փոքրատառ(մեր տված տեքստը չի փոխում) 

// let a = "Hello World";
// let b = a.toLowerCase();
// alert(a);
// alert(b);

// // կտպի Hello World հետո hello world



// այս ֆուկցիաները կցած են string-ին նույն ձևի ոնց forEach-ը կցած էր զանգվածին, նույն ձևի էս ֆունկցիաները կցած են հենց string-ին


// // // 3
// // substring պատկերացրեք մենք ունենք մի հատ տեքստ ու ուզում ենք վերցնենք մենակ մի հատվածը այդ տեքստի օրինակ
// // ասենք ստեղ վերցնենք llo 2-ից մինչև 5-ը պետքա գնանք, որովհետև ինքը էս առաջի index-ը որ վերցնումա ետ index-ը կարդումա բայց ես վերջին index-ի արժեքը նա չի կարդում ինքը կարդումա մինչև այս վերջի index-ը, այսինքն 2 index-ը կարդացվումա բայց 5-րդ index-ը չի կարդացվում, կարդացվումա մինչև էտ index-ը 
// // հետևաբար երբ որ run անենք մենք կտեսնենք llo

// // substring ֆուկցիային տալիս ենք երկու index և նա վերադարձնում է այդ երկու index-ի մեջտեղի տեքստը (մեր տված տեքստը չի փոխում) 
// // substring ֆուկցիան իրեն տված առաջի index-ը կարդումա բայց իրեն տված երկրորրդ index-ի արժեքը նա չի կարդում ինքը կարդումա մինչև այդ index-ը

// let a = "Hello World";
// let b = a.substring(2, 5);
// alert(a);
// alert(b);

// // կտպի Hello World հետո llo 

// // // օրինակ
// function nameToUpper(name) {
//     return name.substring(0, 1).toUpperCase() + name.substring(1, name.length).toLowerCase()
// };

// alert(nameToUpper("joe dsfflsd"));



// // 4. split նշանակումա բաժանել այսինքն եթե մենք ունենք ինչ որ տեքստ, split ֆունկցիայով մենք կարող ենք էս տեքստը ջարդենք և ստանանք մասնիկներ, դետալները էտ տեքստի մաս-մաս մի զանգվածի մեջ, այսինքն split-ը մեզ վերադարձնումա զանգված որի մեջ կան այդ դետալները

// // split ֆուկցիային տալիս ենք տեքստ(string) և մի արժեք որով ուզում ենք բաժանենք այդ տեքստը ըստ իրեն տված այդ արժեքի և նա վերադարձնումա զանգված որի մեջ կան այդ դետալները (մեր տված տեքստը չի փոխում) 

// let a = "Hello World";
// let b = a.split(" ");
// alert(a);
// alert(b);

// կտպի Hello World հետո Hello,World



// // իսկ եթե մենք տանք մի հատ տեքստ որի մեջ ոչ մի բան չկա դա նշանակում է ինքը բաժանում է ամեն տառը, այսինքն ամեն տառի մեջտեղը կա ոչմիբան,այդ ոչմիբանով բաժանումա այսինքն մենք ստանում ենք մի հատ զանգված որի մեջ կա ամեն մասնիկը այդ տեքստի

// let a = "I went to the store";
// let b = a.split("");
// alert(b);

// // կտպի I, ,w,e,n,t, ,t,o, ,t,h,e, ,s,t,o,r,e






// // այսինքն ինչա ստացվում որ եթե մենք ուզում ենք ինչ որ տեքստ ջարդենք տառերով կարող ենք split անենք դատարկ տեքստով մենք նաև կարող ենք իրան split անել մի դատարկ տեղով(պռաբելով) որպեսզի ստանանք տառերը 
// ինչ է սա հետաքրքիր

// function foo(name) {
//     let names = name.split(" "); // ["joe", "shmoe", "roubeni"]
//     let upperNames = names.map(function(val) {
//         return val.substring(0, 1).toUpperCase() + val.substring(1, val.length).toLowerCase();
//     });
//     // upperNames = ["Joe", "Shmoe", "Roubeni"]
//     return upperNames.join(" "); // "Joe Shmoe Roubeni"
//     /// join ֆունկցիան վերցնում է մի զանգված և մի արժեք և նա կպցնում է բոլոր արժեքները իրար որպես տեքստ այսինքն տեքստաորում է բոլոր անդամները և կպցնում է իրար (երկրորդ արժեքը որոշում է երբ որ կպցնում է իրար իրանց մեջտեղները ինչ պետքա լինի)
//     /// join ֆունկցիան վերցնում է մի զանգված և մի արժեք և նա վերցնում է բոլոր անդամները եթե դեռ տեքստ չեն դարձնում է տեքստ(դե մեր պարագայում արդեն տեքստ են) և կպցնում է իրար և երկրորդ արժեքը որոշումա երբ որ մենք կպցնում ենք ետ անդամները իրար մեջտեղները ինչ ենք դնում(էս պահին մենք դնում ենք մի հատ պռաբել այսինքն դատարկ տեքստ և ահա սրա արդյունքը կլինի մի հատ տեքստ որը կունենա Joe հետո էտ պռաբելը Shmoe հետո էտ պռաբելը  Roubeni ,  "Joe Shmoe Roubeni")
// };

// alert(foo("joe shmoe rubeni"));



// // 5.join ֆուկցիային տալիս ենք զանգված և մի արժեք և նա վերադարձնում է մի տեքստ որի մեջ այդ զանգվածի բոլոր անդամներն են (այսինքն նա կպցնում է բոլոր արժեքները իրար որպես տեքստ այսինքն տեքստաորում է բոլոր անդամները և կպցնում է իրար (երկրորդ արժեքը որոշում է երբ որ կպցնում է իրար իրանց մեջտեղները ինչ պետքա լինի)), (մեր տված տեքստը չի փոխում) 

// let a = ["Joe", "Shmoe", "Roubeni"];
// alert(a);
// alert(a.join(" "));   // "Joe Shmoe Roubeni"

// կտպի Joe,Shmoe,Roubeni հետո Joe Shmoe Roubeni  



// // 6.replaceAll ֆունկցիային տալիս ենք  տեքստ և  երկու արժեք և նա այդ տեքստի մեջի երկրորդ արժեքը փոխարինումա երրորդ արժեքով և վերադարձնումա այդ տեքստը (մեր տված տեքստը չի փոխում) 

// let a ="Who is the bomb";
// let b = a.replaceAll("bomb", "best person ever");
// alert(b);

// // կտպի Who is the best person ever



// // 7.search ֆունկցիային տալիս ենք տեքստ և մի արժեք և նա վերադարձնում է index որի մեջ կա այդ արժեքը եթե չգտնի կվերդարձնի -1(-1 որովհետև -1 index չկա) 

// let a = "This person went to the store and purchased a car :)";

// let b = a.search("store");
// alert(b);

// կտպի 24


// // ինչպես որ զանգվածի մեջից էինք կարդում արժեք նույն ձև մենք կարող ենք կարդալ արժեք string-ից բայց չենք կարող փոխել 

// alert(a[3].toLocaleUpperCase());

// կտպի S




/// ըտենց ֆունկցիա գոյություն չունի որը string-ին փոխի բոլոր ֆունկցիաները տալիսա ձեզ նոր տեքստ ինքը եղած տեքստը երբեք չի փոխում 
/// սա կարեվոր է ինչու որովհետև ի տարբերություն string-ին  օրինակ array-ի պարագայում կան ֆունկցիաներ որոնք որ փոխում են էտ զանգվածը ու կան ֆունկցիաներ որոնք որ չեն փոխում օրինակ push-ը փոխումա բայց map-ը չի փոխում




































// function fooo(name) {
// let names = name.split(" ");
// let upperNames = names.map(function(val) {
//     return val.substring(0, 1).toUpperCase() + val.substring(1, val.length).toLowerCase();
// });
// return upperNames.join(" ");
// };

// alert(fooo("joe shmoe rubeni"))



// function eoo(name) {
//     let names = name.split(" ");
//     let upperNames = names.map(function(val) {
//         return val.substring(0, 1).toUpperCase() + val.substring(1, val.length).toLowerCase();
//     });
//     return upperNames.join(" ");
// }

// alert(eoo("barev ashxarhi hayer"));




// function eo(name) {
//     let names = name.split(" ");
//     let upperNames = names.map(function(val) {
//         return val.substring(0, 1).toUpperCase() + val.substring(1, val.length).toLowerCase();
//     });
//     return upperNames.join(" ");
// };

// alert(eo("barev aper aper aper"));





// function qq(name) {
//    let names = name.split(" ");
//    let upperNames = names.map(function(val){
//     return val.substring(0, 1).toUpperCase() + val.substring(1, val.length).toLowerCase()
//    })
//    return upperNames.join(" ");
// }

// alert(qq("barev karmir arev kanach terev teyev barev"));






// function qqww(name) {
//     let names = name.split(" ");
//     let upperNames = names.map(function(val) {
//         return val.substring(0, 1).toUpperCase() + val.substring(1, val.length).toLowerCase()
//     })
//     return upperNames.join("   ")
// }

// alert(qqww("barev karmir arev kanach terev teyev barev"));



// function wwee(name) {
// let names = name.split(" ");
// let upperName = names.map(function(val) {
//     return val.substring(0, 1).toUpperCase() + val.substring(1, val.length).toLowerCase()
// })
// return upperName.join("  ")
// };

// alert(wwee("barev dzes inpes eq"));




// function fu(name) {
//     let names = name.split(" "); 
//     let upperNames = names.map(function(val) {
//         return val.substring(0, 1).toUpperCase() + val.substring(1, val.length).toLowerCase()
//     })
//     return upperNames.join(" ")
// };

// alert(fu("barev hameceq aystex"))

// function fuo(name) {
//     let names = name.split(" ");
//     let upperNames = names.map(function(val) {
//         return val.substring(0, 1).toUpperCase().toUpperCase() + val.substring(1, val.length).toLowerCase()
//     })
//     return upperNames.join("  ")
// }


// alert(fuo("gna ari zangahari"))