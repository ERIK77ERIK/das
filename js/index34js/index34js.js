// let a = 3.4;
// let b = "abc";
// let c = true;
// let c1 = false;
// let d = undefined;
// let e = NaN;
// let f = null;
// let g = function() {

// };

// let h = [5, 43, 2];

// let i = {
//     name: "Joe",
//     nationality: "Armenian"
// }

// բացի էս արժեքներից կա ևս մեկ արժեք որը կոչվում է null
// null(դատարկ)-ը արժեք է որը նշանակում է ոչմիբան

// մի րոպե չկա արդեն մի հատ տենց արժեք   undefined   կա 
// բա ինչու կա ևս մեկ արժեք որը կոչվում է undefined եթե արդեն մի արժեք կա
// ես կարծում եմ որ էս արժեքը ավելացրելեն javascript-ի մեջ որպեսզի ինքը մի քիչ ավելի նմանվի ուրիշ լեզուների ուրիշ ավելի ընենց հայտնի լեզուներին օրինակ JAVA-ին, C++-ին

// ինքը իրականում անպետք է ես իրան չեմ օգտագործում կոդ գրելուց կառաջարկեմ որ null-ը ընդահնրապես չօգտագործեք
// բայց պետք է գիտակցել որ այսպիսի արժեք կա որովհետև կարող է հանդիպեք օրինակ մի հատ ֆունկցիայի որը ինչ որ ուրիշ ծրագրաորող է գրել որը ասենք թե որ այսինչ այսինչ պայմաններում վերադարձնում է null  և ձեզ կարող է պետք լինի համեմատել մի րոպե էս արժեքը null է  եթե այո էս սա արա հակառակ դեպքում նա արա 
// նենց որ պետք է հասկանալ որ null գոյություն ունի բայց ելի եմ ասում ինքը լրիվ անպետք է որովհետև բոլոր տեղեր որտեղ որ կարելի էր օգտագործել null մենք ուղղակի կարողենք օգտագործենք undefined և երբ որ նոր ենք ստեղծում փոփոխականը ինքը undefined է այսինքն դատարկ նենց որ մի տեսակ հարմար է իրան օգտագործել
// երկու արժեք որ նշանակում է դատարկ մի տեսակ պետք չի նենց որ ես կառաջարկեմ որ միշտ օգտագործեք undefined ամեն տեղ, բայց գիտակցեք որ նաև կա մի հատ երկրորդ արժեք որը կոչվում է null որը նշանակում է ոչմիբան 



// կա մի հատ ֆունկցիա որը կոչվում է typeoff որը վերադարձնում է տեքստ որի մեջ կա են արժեքի տիպը որը դուք փոխանցելեք 
// այսինքն ինչ է ստացվում որ մենք typeoff-ը կարող ենք օգտագործենք որպեսզի հասկանանք type-ը որևէ արժեքի կամ փոփոխականի

// let a = 3.4;
// alert(typeoff(a));
// կտպի number


// let b = "abc";
// alert(typeoff(b));
// կտպի string


// let c = true;
// alert(typeof(c));
// կտպի boolean


// let d = undefined;
// alert(typeof(d));
// կտպի undefined


// let e = NaN;
// alert(typeof(e))
// կտպի number
// եթե մենք ուզում ենք ստուգենք եթե ինչ որ արժեքը NaN է թե չէ մեզ պետք է ոչ թե համեմատել ինչ որ հավասարումներով կամ typeof-ով կամ ինչ որ տենց մի բանով այլ պետք է կանչել isNaN() ֆունկցիան և սա կվերադարձնի true եթե NaN է false եթե ոչ
// այսինքն ստեղ մենք պետք է օգտագործենք isNaN որպեսզի ստուգենք արժեքը NaN է թե չէ, սա կվերադարձնի true կամ false


// ինչպես հիշումեք null-ը անիմաստ երկրորդ արժեք է որը նշանակում է ոչմիբան
// բայց ինքը ունի ևս մի խնդիր typeof(f) չէ
// եկեք alert անենք ինչ տիպի է էս null-ը, որը նշանակումա ոչմիբան
// let f = null;
// alert(typeof(f));
// կտպի object
// (null-ի) դատարկ արժեքի type-ը object է(դա սխալներից մեկն է), առաջարկումեմ null չօգտագործեք 
// եթե մենք ուզում ենք ստուգենք եթե ինչ որ արժեքը null է թե չէ, մեզ պետք է համեմատել null-ի հետ(alert(f === null)) և սա կվերադարձնի true եթե null է false եթե ոչ 


// let g = function() {
// };
// alert(typeof(g));
// կտպի  function


// let h = [5, 43, 2];
// alert(typeof(h));
// կտպի object
// այսինքն զանգվածը object է,
// զանգվածը object է ուղղակի ինքը շատ կոնկրետ շատ սպեցիֆիկ object է, ինքնել ունի իր մեջ բանալի և արժեք ուղղակի են բանալիները որ ինքը օգտագործում է թվեր են 0-ից մինչև ինչ որ մի բան, ինքը ունի length, ինքը ունի տարբեր ֆունկցիաներ օրինակ forEach և այլն, բայց ինքը object է որին կցած են էտ բոլոր ֆունկցիաները որի մեջ կան էլի ինչպես որ ցանկացած object բանալի արժեք կոմբինացիաներ զույգեր ուղղակի ինքը մի քիչ ավելի specifik տիպի object է որը ունի որոշ հատկություններ
// ինչպես ստուգենք եթե ինչ որ մի արժեքը իրոք հենց զանգված է թե չէ էտ ժամանակ պետք է անենք Array.isArray(h); այսպես եթե աշխատացնենք խնդրեմ տվեց true 
// նենց որ որպեսզի ստուգենք եթե ինչ որ մի արժեքը զանգված է թե ոչ մենք պետք է օգտագործենք Array.isArray(); ֆունկցիան, իսկ Array-ը դա object է որին կցած է isArray ֆունկցիան, որը  վերցնում է ինչ որ արժեք ու ասում է զանգված է թե ոչ սա կվերադարձնի true կամ false


// իսկ մնացած բոլոր դեպքերում ունենք object-ներ 
// այսինքն ինչ տիպի արժեքներ ունենք javascript-ում 
// ունենք թվեր, տեքստեր, բուլյան, undefined, NaN, null, ֆունկցիաներ, զանգվածներ, և ամեն ինչը էլ ինչ մնումա ցանկացած ուրիշ արժեք կլինի object
// let i = {
//     name: "Joe",
//     nationality: "Armenian"
// }
// alert(typeof(i));
// կտպի object




// այսինքն եկեք էլի ուշադիր նայենք եթե մենք ուզում ենք ստուգենք ինչ որ մի արժեքը թիվ է թե չէ կանչում ենք typeof(); փոխանցում ենք իրեն էտ արժեքը և ստանում ենք մի հատ տեքստ որը եթե հավասար է number գիտենք որ նա թիվ է
// եթե մենք անենք typeof(b); և ստանանք string գիտենք որ տեքստ է
// եթե նույնը անենք բուլյան գիտենք որ բուլյան է,
// undefined գիտենք որ undefined է,
// NaN-ից զգույշ եղեք որովհետև էլի եմ ասում եթե անեք typeof(NaN); ինքը կասի որ թիվ է, բայց ինքը թիվ չէ քանի որ ինքը կոչվում է NaN(not a number) նենց որ օգտագործեք isNaN() որպեսզի իմանաք ինչ որ արժեքը NaN է թե ոչ,
// null-ը ուղղակի մի օգատագործեք բայց եթե պետք է ստուգել ինչ որ արժեքը null է թե չէ արեք ===  let f = null; alert(f === null); եթե վերադարձնի true ապա էտ ժամանակ ինքը null է եթե false ուրեմն null չէ
// ուրեմն կան ֆունկցիաներ որի typeof()-ը վերադարձնում է չակերտների մեջ function  
// եթե զանգված է զգույշ եղեք որովհետև զանգվածը object է իրականում, ինքը ուղղակի ավելի specific object է, եթե մենք ուզում ենք ստուգենք ինչ որ արժեքը զանգված է թե չէ օգտագործումենք Array.isArray() ֆունկցիան որը կվերադարձնի true եթե զանգված է false եթե ոչ
// և մնացած բոլոր դեպքերում եթե անենք typeOf() և փոխանցենք ինչ որ արժեք ինքը կասի object որովհետև մնացած բոլոր type-երը object են 

// ահա խնդրեմ էս են տարբեր տիպի արժեքները որ մենք կարող ենք ունենանք javascript-ի մեջ թվեր, տեքստեր, բուլյան, undefined, NaN, null, function, զանգված և object-ներ



// իրականում function-ը ինքը object է բայց երբ որ անում ենք typeof() վերադարձնում է function բայց իրականում ինքն էլ տակից object է, բայց դե մենք չենք տեսնում տենց, չենք պատկերացնում իրեն տենց, օգտագործում ենք իրեն որպես ուղղակի function որը նորմալա եթե էտ փաստը պարզ չի մի մտածեք կարող եք մոռանաք դրա մասին ուղղակի գիտակցեք որ իրականում function-ը, զանգվածը և object-ը երեքնել object են տակից

// էս են բոլոր տիպի արժեքները որոնք որ գոյություն ունեն javascript-ի մեջ
