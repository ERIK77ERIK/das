// // 1
// // նույնպես ինչպես որ բրաուզերը մեզ փոխանցում է alert և prompt ֆունկցիաները նույնպես նա փոխանցում է մեզ մի հատ ուրիշ ֆունկցիա որը կոչվում է setTimeout

// // 2
// // setTimeout ֆունկցիան օգտագործում ենք այսպես
// // փոխանցում ենք որպես առաջին արժեք մի հատ ֆունկցիա և որպես երկրորդ արժեք մի հատ թիվ որը միլիվարյկյան է ներկայացնում 
// // միլիվարկյան նշանակումա, 1 վարկյան ներկայացնելու համար մենք պետք է գրենք 1000(հազար միլիվարկյանը մի վարկյաննա)

// console.log("start");

// setTimeout(function() {
//     console.log("yay");
// }, 1000);

// console.log("end");

// // ինչ է սա նշանակում
// // console.log("start"); - սա նշանակում է տպիր console-ի մեջ start
// // setTimeout(function() { console.log("yay"); }, 1000); - սա նշանակում է որ մենք այ էս ֆունկցիան հանձնում ենք բրաուզերին և խնդրում ենք ասում ենք բրաուզեր ջան խնդրում ենք մի վարկյան հետո էս ֆունկցիան աշխատացրեք գոնե մի վարկյան հետո, ինքը ասումա լավ և վերցնում է իր մոտ 
// // console.log("end"); - հետո մենք տպեցինք end 
// // հետևաբար տպվեց start և end հետո մոտաորապես մի վարկյան հետո նոր տպվեց yay-ը(1 վարկյան հետո է yay-ը երեվում)


// // 3
/// javascript-ը թույլ չի տալիս երկու կոդ զուգահեռ աշխատացնել
// // սա կարևոր է հասկանալ որ ստեղ մենք երբ որ գրում ենք 1 վարկյան հետո, դա չի նշանակում որ ինքը ուղիղ մի վարկյան հետո կաշխատի 
// // ինչու 
// // եկեք սա դարձնենք 10

// // .1.
// console.log("start");

// setTimeout(function() {
//     console.log("yay");
// }, 10);

// console.log("end");


// // .2.
// console.log("start");

// setTimeout(function() {
//     console.log("yay");
// }, 500);

// console.log("end");


// // .3.
// console.log("start");

// setTimeout(function() {
//     console.log("yay");
// }, 500);

// for(let i = 0; i < 5000; i++) {
//     console.log("waiting");
// };

// console.log("end");

// // էս կոդը ինչ է ասում, սա ասում է որ 
// // հիմա եթե աշխատացնենք
// // start-ը կտպի 
// // հետո waiting-ը 5000 անգամ կտպի
// // հետո end-ը
// // հետո yay-ը
// // start-ը կտպի հետո երբ որ waiting 5000 անգամ տպի վերջացնի նոր կտպի end և yay 

// // բայց մենք բրաուզերին խնդրել էինք որ կես վարկյան հետո ինքը տպեր yay, բա ինչի էտքան ուշ տպեց
// // բացատրեմ
// // կան ծրագրաորման լեզուներ որոնք թույլ են տալիս երկու տարբեր կոդեր աշխատել մինույն ժամանակ սա կոչվում է multithreading(բազմաթելային), thread նշանակումա թել, մի հատ կոդի աշխատանքը դա մի հատ էտ թելնա էտ thread-նա, կան ծրագիրներ օրինակ Java-ում կամ C++-ում կարելի է աշխատացնել երկու հատ thread, այսինքն ունենալ երկու հատ զուգահեռ կոդ աշխատող բայց javascript-ում այդպես չենք կարող, javascipt-ը ունի ուղիղ մի հատ thread մի հատ ճանապարհ կոդի, զուգահեռ մենք չենք կարող ոչ մի բան աշխատացնենք 

// // այսինքն ինչ է ստացվում որ երբ որ կես վարկյան հետո բրաուզերը արթնանում ու ասումա ես էս(function() { console.log("yay"); }) ֆունկցիան ունեյ որ պետք է աշխատացնեյ ինքը տեսնումա որ էս for loop-ը պտտվումա ինչ որ կոդա աշխատում և ինքը զուգահեռ էս for loop-ին չի կարող սա(function() { console.log("yay") }) աշխատացնի նույնպես նա նաև չի կարող stop տա for loop-ին իր գործը անի և հետո սա(function() { console.log("yay") }) շարունակի
// // հետևաբար բրաուզերը ինչ է անում ինքը ասում է լավ էս ֆունկցիան պատրաստ է արդեն ես իրան պիտի աշխատացնեմ բայց սպասում է համբերատար սպասում է, սպասում է միչև են աշխատող javascript կոդը որը էս պարագայում for loop-ն է և հետո console.log("end")-ը ավարտվում է, հետո նոր ինքը ասում է այ հիմա կարող եմ ու միանգամից աշխատացնում է մեր տված ֆունկցիան(function() { console.log("yay") })
// // որը հետևաբար քանի որ էլի եմ ասում էս for loop-ը էտքան երկար է տևում աշխատում է ոչ թե կես վարկյան հետո այլ աշխատում է ավելի ուշ որովհետև սպասում է միչև այս loop-ը ավարտվի այսինքն ինքը կես վարկյան հետո պատրաստ է աշխատելու բայց չի աշխատում միչև ինքը կարողանա աշխատել միչև էտ կոդը որը աշխատում է էտ thread(թել)-ի վրա ավարտվի որպեսզի հաջորդը մտնի էտ thread-ի մեջ և շարունակի իր գործը անել այդպես կարելի է պատկերացնել


                
// // 4
/// հերթ 
/// --------------
/// 
/// 0 միլիվարկյան հետո դա չի նշանակում որ ինքը անմիջապես պիտի աշխատի, դա նշանակում է քցի ֆունկցիան հերթի մեջ և են ժամանակ երբ որ ինքը պատրաստ է սպասի որ աշխատող javascript չլինի երբ որ արդեն աշխատող javascript-ը ավարտի իր գործը նոր արդեն կարող էս էտ հերթից հանես են ֆունկցիաներին և սկսես իրենց աշխատացնել

// // եկեք մի քիչ ավելի լավ պատկերացնենք ինչպես է setTimeout-ը աշխատում
            
// // բրաուզերի մեջ կա մի հատ հերթ որը ամենասկզբից դատարկ է
// // երբ որ մենք կանչում ենք setTimeout ինքը այդ ֆունկցիային վերցնում է և քցում է էտ հերթի մեջ 
// // այսինքն եկեք էս կոդը վերևից ներքև ուսումնասիրենք 

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

// // կտպի start հետո end հետո ok հետո yay


// // օրինակ 2
// // ինչա նշանակում 0 միլիվարկյան հետո դա չի նշանակում որ ինքը անմիջապես պիտի աշխատի, դա նշանակում է քցի ֆունկցիան հերթի մեջ և են ժամանակ երբ որ ինքը պատրաստ է սպասի որ աշխատող javascript չլինի երբ որ արդեն աշխատող javascript-ը ավարտի իր գործը նոր արդեն կարող էս էտ հերթից հանես են ֆունկցիաներին և սկսես իրենց աշխատացնել

// // էլի էտ նույն ալգորիթմով եկեք քայլենք էտ նույն քայլերով ու տեսնենք իրոք ինչ է անում
// // console.log("start"); - սա նշանակում է տպիր console-ի մեջ start
// // setTimeout(function() { console.log("yay") }, 0); - սա նշանակում է դիր էս ֆունկցիան հերթի մեջ 0 ժամանակով
// // setTimeout(function() { console.log("ok"); }, 0); - սա նշանակում է դիր էս ֆունկցիան հերթի մեջ 0 ժամանակով
// // console.log("end"); - սա նշանակում է տպիր console-ի մեջ end

// // միչև console.log("end")-ի ավարտվելը էս հերթի մեջի ֆունկցիաները պատրաստ էին իրանք կարող էին աշխատեին բայց հիշեք որ նույն ժամանակ երկու կոդ չեն կարող աշխատեն javascript-ի մեջ և իրանք չեն կարող ասեն console.log("end") դու մի աշխատի stop ենք տալիս որպեսզի սա(setTimeout-ները) աշխատի 
// // ինքը թողումա էս ամենը(այն կոդերը որը որ հերթի մեջ չի ընգնում) ավարտվի նոր ինքը գալիս մտնումա և ասումա դե առաջինը 0-ով սա էր պատրաստ(վերևից ներքևա կարդում) սա տպում և հանում է հերթից հետո աշխատացնում է սա որը տպում է ok, դա էլ տպում է հանում է հերթից
// // հետևաբար եթե մենք էս կոդը աշխատացնենք մենք տեսնում ենք start, end հետո նոր yay և ok

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

// // կտպի start հետո end հետո yay հետո ok



// // 5
// // ամեն անգամ մենք կանչում ենք էս setTimeout-ը բացի նրանից որ ինքը ընդունում է իրեն տված արժեքները և քցում է էտ հերթի մեջ և երբ որ իրանք պատրաստ են լինում սպասում է միչև javascript-ը ավարտվի(էլ աշխատող կոդ չունենա, էտ thread(թել)-ը հանգիստ լինի) որպեսզի ինքը հաջորդ էտ ֆունկցիային աշխատացնի
// // բացի դրանից ինքը նաև վերադարձնում է մի հատ արժեք մի հատ թիվ
// // ինչի համար որովհետև մենք կարող ենք էս թվով չեղարկել մեր խնդրանքը, մենք կարող ենք կանչել clearTimeout() և փոխանցենք այն թիվը որը setTimeout()-ը վերադարձրեց
// // չեղարկել նշանակումա ոնցոր էտ հերթից իրեն հանում ենք

// console.log("start");

// const id = setTimeout(function() {
//     console.log("yay")
// }, 0);

// clearTimeout(id);

// setTimeout(function() {
//     console.log("ok");
// }, 0);

// console.log("end");
// // կտպի start հետո end հետո ok

// // այսինքն yay-ը մենք չենք տեսնում քանի որ մենք չեղարկեցինք այդ խնդրանքը, չեղարկել նշանակումա էտ հերթից մենք իրան հանեցինք


// // եթե մենք կանչենք չեղարկել էս clearTimeout()-ը իր աշխատանքից հետո ոչ մի վատ բան չիլինի
// console.log("start");

// const id = setTimeout(function() {
//     console.log("yay");
//     clearTimeout(id);
// }, 0);

// setTimeout(function() {
//     console.log("ok");
// }, 0);

// console.log("end");
// // կտպի start հետո end հետո yay հետո ok



// // 6
// // ինչպես setTimeout-ը կարելի է կիրառել ինչ որ օգտակար նպատակի համար
// // դե հասկանալիա որ միշտ կարելիա մեր կոդի մեջ եթե մենք ցանկացած բան ուզում ենք անենք մի քիչ հետո օրինակ user-ը ինչ որ բան արեց ու մենք ուզում ենք մի քիչ հետո մի հատ պատուհան բացենք էտ մի քիչ հետոն մենք կարող ենք արտահայտենք setTimeout-ով
// // ցանկացած կոդ եթե մենք ուզում ենք աշխատի մի քիչ հետո մենք իրեն աշխատացնում ենք setTimeout-ով

// // օրինակ
// // թե ինչպես setTimeout-ը կարելի է կիրառել ինչ որ օգտակար նպատակի համար

/* 
/// իմ համար
let list = [
    "Joe",
    "Rob",
    "Mike",
    "Lisa",
    "Zara"
];

const root = document.querySelector("#root");

const div = document.createElement("div");
div.innerText = "barev";

root.appendChild(div);
root.innerHTML = "hajox"
// // եթե root-ի մեջ appendChild ենք անում հետո ենք ներքին HTML-ը փոխում ինքը ավելացնումա div-ի մեջ div հետո ընդհանուր ներքին HTML-ը փոխումա և մնումա միայն այդ փոխած ներքին HTML-ը

root.innerHTML = "hajox"
root.appendChild(div);
// // իսկ եթե root-ի մեջ ներքին HTML-ը փոխում ենք հետո ենք root-ի մեջ appendChild անում ինքը ավելացնումա ներքին HTML-ը հետո նոր ավելացնումա դիվը և երկուսն էլ երեվում են

// list.map(name => {
//     const div = document.createElement("div");
//     div.innerText = name;
//     return div;
// }).forEach(el => {
//     root.appendChild(el);
// });
 */

// // .1.
// let list = [
//     "Joe",
//     "Rob",
//     "Mike",
//     "Lisa",
//     "Zara"
// ];

// const root = document.querySelector("#root");

// list.map(name => {
//     const div = document.createElement("div");
//     div.innerText = name;
//     return div;
// }).forEach(el => {
//     root.appendChild(el);
// });


// .2.
// let list = [
//     "Joe",
//     "Rob",
//     "Mike",
//     "Lisa",
//     "Zara"
// ];

// let searchText = "";

// const input =document.querySelector("input");
// input.addEventListener("keyup", (e) => {
//     searchText = e.target.value;
//     render();
// });

// const root = document.querySelector("#root");

// function render() {
//     root.innerHTML = ""

//     list.map(name => {
//         const div = document.createElement("div");
//         div.innerText = name;
//         return div;
//     }).forEach(el => {
//         root.appendChild(el);
//     });
// }


// .3.
let list = [
    "Joe",
    "Rob",
    "Mike",
    "Lisa",
    "Zara"
];

let searchText = "";

const input =document.querySelector("input");
input.addEventListener("keyup", (e) => {
    searchText = e.target.value;
    render();
});

const root = document.querySelector("#root");

function render() {
    root.innerHTML = "";

    list.filter((name) => {
        return name.indexOf(searchText) !== -1;
    }).map(name => {
        const div = document.createElement("div");
        div.innerText = name;
        return div;
    }).forEach(el => {
        root.appendChild(el);
    });
}






// // .1.
// let list = [
//     "Joe",
//     "Rob",
//     "Mike",
//     "Lisa",
//     "Zara"
// ];

// let searchText = "";

// const input = document.querySelector("input");
// input.addEventListener("keyup", (e) => {
//     searchText = e.target.value
//     render()
// })

// const root = document.querySelector("#root");

// function render() {
//     root.innerHTML = "";

//     list.filter((name) => {
//         return name.indexOf(searchText) !== -1
//     })
//     .map(name => {
//         const div = document.createElement("div");
//         div.innerText = name;
//         return div;
//     }).forEach(el => {
//         root.appendChild(el);
//     });
// }

// render()

// // .2.
// let list = [
//     "Joe",
//     "Rob",
//     "Mike",
//     "Lisa",
//     "Zara"
// ];

// let searchText = "";

// const input = document.querySelector("input");
// input.addEventListener("keyup", (e) => {
//     searchText = e.target.value
//     refresh()
// })

// function refresh() {
//     setTimeout(() => {
//         render();
//     }, 1000)
// }

// const root = document.querySelector("#root");

// function render() {
//     root.innerHTML = "";

//     list.filter((name) => {
//         return name.indexOf(searchText) !== -1
//     })
//     .map(name => {
//         const div = document.createElement("div");
//         div.innerText = name;
//         return div;
//     }).forEach(el => {
//         root.appendChild(el);
//     });
// }

// render()

// // .3.
// let list = [
//     "Joe",
//     "Rob",
//     "Mike",
//     "Lisa",
//     "Zara"
// ];

// let searchText = "";

// const input = document.querySelector("input");
// input.addEventListener("keyup", (e) => {
//     searchText = e.target.value
//     refresh()
// })

// let id;
// function refresh() {
//     if(id !== undefined) {
//         clearTimeout(id);
//     }
//     id = setTimeout(() => {
//         render();
//     }, 1000)
// }

// const root = document.querySelector("#root");

// function render() {
//     root.innerHTML = "";

//     list.filter((name) => {
//         return name.indexOf(searchText) !== -1
//     })
//     .map(name => {
//         const div = document.createElement("div");
//         div.innerText = name;
//         return div;
//     }).forEach(el => {
//         root.appendChild(el);
//     });
// }

// render()





















// const div = document.createElement("div");
// div.innerText = `Joe
// Rob
// Mike
// Lisa
// Zara`;
// // return div

// const aa = document.createElement("div");
// aa.innerText = "nabs";

// root.innerHTML = "sdnsjbkhbkjnk";

// aa.innerText = "hajox";
// root.appendChild(23424);











