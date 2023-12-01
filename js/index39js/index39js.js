// // 1․
// canvas-ը դա մի html էլեմենտ է որը հնարաորություննա մեզ տալիս նկարել էկրանի վրա 
// canvas նշանակումա կտավ և կարելիա պատկերացնել իրան ինչպես հենց կտավ որի վրա մենք կարող ենք նկարենք

// ինչպես կարելի է նրան ստեղծել ինչպես որ ցանկացած ուրիշ html-ի էլեմենտ
// <canvas></canvas>

// // .
// <canvas width="500" heigth="300"></canvas> 



// // 2.
// 1 //
// const canvas = document.querySelector("canvas");
// alert(canvas.width)
// կտպի 500

// 2 //
const canvas = document.querySelector("#a2")
canvas.width = 200



// // 3.
// հիմա մենք ուզում ենք նկարենք այս կտավի վրա դրա համար մեզ պետք են գործիքներ 
// ինչպես կարելիա ստանալ
// դե մենք նկարում ենք երկու ծավալային մակերեսի վրա այսինքն մեզ պետք են 2d այսպես ասած գործիքներ 
// ինչպես կարելիա նրանց ստանալ 

// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d")

//  էս context-ը մի object է որին կցած են ֆունկցիաներ որոնք որ մեզ հնարաորություն կտան նկարել canvas-ի վրա



// // 4.
// 1 //
// եկեք նկարենք ուղղանկյուն 
// նկարելու համար պետք է x, y որպեսզի իմանանք որտեղ և լայնություն, բարձրություն 

const canvass = document.querySelector("#a3");
const context = canvass.getContext("2d")
context.fillRect(10, 10, 50, 50)

// x-ը աշխատում է ընենց ոնց որ դուք սովորեք այսինքն եթե սա 0-ն է մենք 10 գնացիք աջ և ահա ստեղծվեց այս մեր տուփը շեղված դեպի աջ
// y-ը աճում է դեպի ներքև 
// այսինքն աջ գնաց 10 և ներքև եկավ 10

// այսինքն y-ը եթե մենք դարձնենք 50 քանի որ y-ը դեպի ներքևա աճում հետևաբար տուփը կնկարվի ավելի ներքև


// ինչա նշանակում fillRect
// rect-ը կարճ է rectangle նշանակում է ուղղանկյուն 
// fill նշանակումա լցնել
// fillRect լցրու ուղղանկյուն

// 2 //
// լցրեց բայց մենք չասեցինք ինչ գույնի հետևաբար ինքը default գույն ընտրեց սև ու սև ներկեց
// մենք կարող ենք էտ գույնը փոխենք, բայց պետք է փոխենք մինչև նկարելը դա շատ կարեոր է հերթականությունը կարեվոր է

const canvaas = document.querySelector("#a4");
const contextt = canvaas.getContext("2d")

contextt.fillStyle = "red"
contextt.fillRect(10, 10, 50, 50)



// // 5. 
// 1 //
// մենք նաև կարողենք նկարենք ուղղանկյունը բայց միայն սահմանը(եզրագիծը) սահմանը կոչվում է stroke(նրբագիծ)

const canvvas = document.querySelector("#a5");
const conteext = canvvas.getContext("2d")

conteext.fillStyle = "red"
conteext.fillRect(10, 50, 50, 50)

conteext.strokeRect(100, 50, 50, 50)

// ոչ թե fillrect այլ stroke rect միայն են շրջի մասը նկարի 
// արգումենտները նույնն են x, y, լայնություն, բարձրություն
// նենց որ եկեք իրա կողքը նկարենք 

// խնդրեմ ինքը նկարեց միայն այս տուփը որտեղ որ միայն սահմանն է նկարված

// 2 //
// այդ սահմանի գույնը մենք կարող ենք փոխենք 

const cannvas = document.querySelector("#a6");
const conttext = cannvas.getContext("2d")

conttext.fillStyle = "red"
conttext.fillRect(10, 50, 50, 50)

conttext.strokeStyle = "blue"
conttext.strokeRect(100, 50, 50, 50)

// context.strokeStyle = "green"
// context.strokeRect(200, 50, 50, 50)



// // 6.
// եզրագծերի լայնությունը մենք նաև կարող ենք փոխենք 

const canvasss = document.querySelector("#a7");
const contexttt = canvasss.getContext("2d")

contexttt.fillStyle = "red"
contexttt.fillRect(10, 50, 50, 50)

contexttt.lineWidth = 10
contexttt.strokeStyle = "blue"
contexttt.strokeRect(100, 50, 50, 50)

// context.lineWidth = 10
// context.strokeStyle = "green"
// context.strokeRect(200, 50, 50, 50)



// // 7. 
// հիմնականում երբ որ մենք ծրագրաորում ենք ու ինչ որ բան ենք ուզում նկարենք էկրանի վրա մենք ունենում ենք ինչ որ դիտա ինֆորմացիա և ունենք են կոդը որը փորձումա էտ ինֆորմացիան նկարի էկրանի վրա
// այսինքն ինչպես կարող ենք դա անենք 

// 1 //
// մենք կարող ենք ստեղ ստեղծենք էտ ինֆորմացիան ասենք let data ինչու չէ թող լինի հենց այդ object-ը
// let data = {
//     x: 10,
//     y: 10,
//     width: 50,
//     heigth: 50
// };

// այսինքն սա ինչ է սա ինֆորմացիա Է դա դիտա է որը ունի ինչ որ ինֆորմացիա պարամետրներ x-ի մասին, y-ի մասին լայնության մասին բարձրությունի մասին

// 2 //
// որը մենք հիմա կուզենանք նկարենք էկրանի վրա
// let data = {
//     x: 10,
//     y: 10,
//     width: 50,
//     heigth: 50
// };

// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d")

// function draw() {
// }

// սա Էն ֆունկցիանա որը մենք կկանչենք երբ որ մենք կուզենանք ինֆորմացիան որը սա է նկարենք էկրանի վրա 
// ենթադրենք որ էս dita-ն ուղանկյունի մասինա նենց որ եկեք իրեն նկարենք այսինքն մենք կարող ենք հիմա իրեն ստեղ անենք 

let data = {
    x: 10,
    y: 10,
    width: 50,
    height: 50
};

const Canvas = document.querySelector("#a8");
const Context = Canvas.getContext("2d")

function draw() {
    Context.fillRect(data.x, data.y, data.width, data.height);
}
draw()


// 3 //
// նաև կարող ենք գույն ավելացնենք հիմա գույնը կարող էինք ստեղ ավելացնենք բսյց եկեք դա ավելացնենք որպես dita ինֆորմացիա նենց որ եկեք անենք 

let Data = {
    x: 10,
    y: 10,
    width: 50,
    height: 50,
    fillStyle: "orange"
};

const CAnvas = document.querySelector("#a9");
const COntext = CAnvas.getContext("2d")

function Draw() {
    COntext.fillStyle = Data.fillStyle
    COntext.fillRect(Data.x, Data.y, Data.width, Data.height);
}

Draw()


// ինչու էս ամեն ինչը դրեցինք ֆունկցիայի մեջ և այլն և այլն որովհետև ապագայում մենք կտեսնենք թե ինչպես կարելիյա էս ինֆորմացիան փոխել և նորից կանչել draw ֆունկցիան որպեսզի նա իրավիճակը փոխի և այդպես մենք ապագայում կտեսնենք ինչպես կարելիյա ստեղծել անիմեյշններ և վերջում մի շատ պարզ խաղ
// այսինքն միտքը ինչումա որ մենք ունենք ինֆորմացիա data որը նկարագրում է իրավիճակը խաղի և մենք ունենք ինչ որ կոդ էս պարագայում draw կոդը որը ուղակի էտ ինֆորմացիան կարդալով նկարումա էկրանի վրա  երբ որ մենք ուզում ենք փոխենք ինչ որ բան խաղի հետ կապված մենք փոխում ենք ինֆորմացիան data-ն և հետո նորից կանչելով draw ինքը էկրանը ոնցոր փոխումա, նոր էտ դետալները նկարումա էկրանի վրա և հետևաբար այսպես մենք ստանում ենք ապագայում անիմեյշններ խաղեր և այլն որի մասին մենք կխոսանք հետո 