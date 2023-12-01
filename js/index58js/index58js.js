// // 1
// // մենք գիտենք որ մենք կարող ենք տեքստ կամ string արժեք ստեղծել չակերտներով "" կամ ''
// // սխալ
// const a = "hello "yay" world";
// alert(a);  // error

// // սխալ
// const b = 'hello 'yay' world';
// alert(b);  // error


// // // տարբերակ 1
// const c = "hello \"yay\" world";
// alert(c);  // hello "yay" world

// const c = 'hello \'yay\' world';
// alert(c);  // hello 'yay' world

// const c = 'hello \"yay\" world';
// alert(c);  // hello "yay" world

// const c = "hello \'yay\' world";
// alert(c);  // hello 'yay' world


// // տարբերակ 2
// const d = 'hello "yay" world';
// alert(d);  // hello "yay" world

// const d = "hello 'yay' world";
// alert(d);  // hello 'yay' world


// // հետաքրքրության համար

// const f = "hello \'yay\'' world";
// alert(f);  // hello 'yay'' world

// const f = "hello \"yay\"" world";
// alert(f);  // error



// // 2
// // այս չակերտը ՝՝ տաբերվումա մյուս երկու("", '') չակերտներից մի քանի բանով

// // 2.1
// // առաջի տարբերությունը նա է որ
// // ինքը հնարաորություն է տալիս շատ հեշտ ստեղծել իր մեջ մի քանի տող(մի քանի տողանի տեքստ)

// const a = `hello
// world`;
// alert(a);

// // կտպի  hello
// //       world

// // այսինքն ինքը պահպանում է իր ստրուկտուրան ինչպես տեսնում եք 


// // իսկ եթե մենք սա նույնը ուզենայնք ստանայնք սովորական չակերտներով դա չի աշխատի
// const b = "hello
// world";
// alert(b);  // error

// // ճիշտը
// const b = "hello\n" +
// "world";
// alert(b);  
// // կտպի  hello
// //       world


// // 2.2
// // երկրորդը նա հնարաորություն ունի templating(կաղապարում)-ի
// // ՝ ${} ՝ կարող ենք մեջը գրենք javascript
// // կարող ենք հղենք դեպի փոփոխական ` ${name1} `

// // function getHtml(name1, name2) {
// //     return "<div>hello " + name1 + "<a href=\"https://jsfiddle.net/\">" + name2 + "</a></div>";
// // }
// // 
// // const html = getHtml("Kachatur", "Zarine");
// // document.body.innerHTML = document.body.innerHTML + html;
// // // կտպի hello KachaturZarine


// function getHtml(name1, name2) {
//     return `<div>
//     <a href="https://jsfiddle.net/"> click me ${name1}</a>
//     <h1> ${name2.toUpperCase()} </h1>
//     </div>`;
// };

// const html = getHtml("Kachatur", "Zarine");
// document.body.innerHTML = document.body.innerHTML + html;
// // կտպի  click me Kachatur
// //       ZARINE


// // որպես օրինակ պատկերացնելու սա ՝ ${} ՝
// const b = "hi";
// const a = `hello ${b} word`;
// alert(a)
// // կտպի hello hi word



// // 3
// // այսինքն ինչ է ստացվում որ
// // templating-ը մեզ օգնումա որպեսզի մենք անընդհատ տեքստերը իրար կպցնելով կպցնելով չզբաղվենք այլ ստեղծենք մի հատ ընդհանուր տեքստ մեջը գրենք ինչ որ մեզ պետքա և են մասը որտեղ որ պետք է javascript-ով ինչ որ մի բան ավելացնել մենք ուղղակի ասում ենք ${} և մեջը գրում ենք էտ javascript-ը և ինչ որ դա վերադարձնում է դա անմիջապես կպնում է այդ մասնիկի մեջ ընդհանուր տեքստի մեջ և էտ ընդհանուր տեքստը ստեղծվում է և մեզ վերադառնում է հետո ինչ ուզում ենք էտ տեքստով անում ենք 