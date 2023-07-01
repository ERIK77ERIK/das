// // 1.
// // const canvas = document.querySelector("canvas");
// // const context = canvas.getContext("2d")

// // context.fillStyle = "red"
// // context.fillRect(10, 10, 100, 50)

// // canvas context 2d api



// // 2.
// // մենք նաև խոսանցինք որ հիմնականում երբ որ մենք նկարում ենք էկրանի վրա միշտ արժի  ինֆորմացիան որը նկարագրում է իրավիճակը, ինչ ենք ուզում նկարենք էկրանի վրա և այլն պահել առանձին, իսկ են կոդը որը էտ ինֆորմացիան գցումա էկրանի վրա նկարումա էկրանի վրա պահել առանձին

// // նենց որ եկեք ստեղծենք առանձին դիտա ինֆորմացիա որի մեջ 
// // էս պահին ընդամենը նկարագրենք էս տուփը ապագայում կարողենք նկարագրենք մեր հերոսին, փամփուշտին, հակառակորդին բայց այս պահին եկեք ընդամենը նկարագրենք մի հատ տուփ շատ պարզ սկսենք 

// // ինչա մեզ պետք տուփի մասին իմանալ, որտեղա ինքը իր չափը իր գույնը տենց էլեմենտար բաներ դե եկեք նկարագրենք իրեն 

// // const canvas = document.querySelector("canvas");
// // const context = canvas.getContext("2d")

// // let data = {
// //     x: 10,
// //     y: 10,
// //     width: 50,
// //     heigth: 50,
// //     fillStyle: "red"
// // }

// // context.fillStyle = data.fillStyle
// // context.fillRect(data.x, data.y, data.width, data.heigth)



// // 3.
// // հիմնականում ամբողջ միտքը թե ինչի ենք առաջարկում որ էս ինֆորմացիան(ինֆորմացիան որը նկարագրում է իրավիճակը) պահենք առանձին էս ինֆորմացիան(են կոդը որը էտ ինֆորմացիան գցումա էկրանի վրա նկարումա էկրանի վրա) պահենք առանձին որովհետև եթե էս ինֆորմացիան փոխվի մենք կարող ենք ընդամենը էս կոդը նորից աշխատացնենք և ոնցոր թարմացնենք են ինչ որ գտնվում է էկրանի վրա

// // նենց որ եկեք էս կոդը փաթեթաորենք մի հատ ֆունկցիայի մեջ draw(նկարել)

// // const canvas = document.querySelector("canvas");
// // const context = canvas.getContext("2d")

// // let data = {
// //     x: 10,
// //     y: 10,
// //     width: 50,
// //     heigth: 50,
// //     fillStyle: "red"
// // }

// // function draw() {
// //     context.fillStyle = data.fillStyle
// //     context.fillRect(data.x, data.y, data.width, data.heigth)
// // }

// // draw();
// // նույն բանն ենք նկարում



// // 4.
// // բրաուզերը ինչպես է աշխատում սա կարևոր դետալ է, բրաուզերը մոտաորապես ամեն վարկյանի մեջ վաթսուն անգամ ուշադրություննա դարձնում dom-ին այսինքն էտ object-ներին որը նկարագրում է html-ին ուշադրություն է դարձնում css-ին են ինչ որ նկարագրում է էտ dom-ը վերջում ոնց պետքա հայտնվի էկրանի վրա և էտ ամեն ինչը համեմատում է էկրանի իրական նկարի հետ
// // եթե որևէ բան փոխվում է նա գնումա և սկսումա էտ pixel-ները փոխել այսպես ասած ինքը ոնցոր նկարում է էկրանի վրա այսինքն ինչ է ստացվում որ բրաուզերը ունի հետևյալ դերը որ ինքը անընդհատ նայում է իրավիճակը նկարում է էկրանի վրա  նայում է իրավիճակը նկարում է էկրանի վրա

/// /// /// ??????????????   requestAnimationFrame()  ?????????????

// // 5. մենք կարող ենք նենց անենք որ բրաուզերից խնդրենք որպեսզի մինչև նկարելը էկրանի վրա կանչի մի հատ ֆունկցիա  
// // մենք կարող ենք կանչենք հետևյալ ֆունկցիան   requestAnimationFrame()


// // const canvas = document.querySelector("canvas");
// // const context = canvas.getContext("2d")

// // let data = {
// //     x: 10,
// //     y: 10,
// //     width: 50,
// //     heigth: 50,
// //     fillStyle: "red"
// // }

// // function draw() {
// //     context.fillStyle = data.fillStyle
// //     context.fillRect(data.x, data.y, data.width, data.heigth)
// // }

// // draw()

// requestAnimationFrame(function() {

// })

// // սա ինչ է նշանակում, requestAnimationFrame նշանակումա որ  ասում ենք բրաուզեր ջան մինչև նկարելը էկրանի վրա մի հատ կանչիր այս function-ին մենք մի քիչ գործ ունենք անելու , էտ գործը կանենք երբ որ ավարտվի էտ ֆունկցիան նոր ոնց որ կգնաս ու կնկարես էկրանի վրա
// // բայց սա եթե մենք ընդամենը կանչենք էս ֆունկցիան սենց մի անգամ առաջին անգամ մինչև նկարելը ինքը մի հատ տենց ֆունկցիա կկանչի և դրանից հետո կշարունակի ցիկլը և անընդհատ նկարել նկարել նկարել



// // 6
// // իսկ մենք ինչ ենք ուզում, մենք ուզում ենք որ ինքը ամեն նկարելուց առաջ կանչի մեր ֆունկցիան  ամեն նկարելուց առաջ, 
// // դրա համար մենք կարող ենք անենք այսպես  ստեղծենք մի հատ ֆունկցիա կոչենք loop


// // const canvas = document.querySelector("canvas");
// // const context = canvas.getContext("2d")

// // let data = {
// //     x: 10,
// //     y: 10,
// //     width: 50,
// //     heigth: 50,
// //     fillStyle: "red"
// // }

// // function draw() {
// //     context.fillStyle = data.fillStyle
// //     context.fillRect(data.x, data.y, data.width, data.heigth)
// // }

// draw()

// // function loop() {
// //     requestAnimationFrame(loop)
// // }

// // loop()

// այսինքն ինչ է հիմա ստացվում որ ստեղ մենք կանչում ենք էս ֆունկցիան(loop-ը) էս ֆունկցիայի մեջ մենք ասում ենք requestAnimationFrame որը նշանակումա հաջորդ անգամ նկարելուց առաջ մի հատ կանչիր այս ֆունկցիային , ինքը հաջորդ անգամ նկարելուց առաջ կանչում է loop որը ասում է հաջորդ  հաջորդ ապագայում նկարելուց առաջ կանչիր էս loop-ը ինքը ասումա կկանչեմ գնումա նկարումա ու հաջորդ անգամ ասումա մի հատ ֆունկցիա ունեյ որ պտի կանչեյ կանչում է էտ ֆունկցիան որը էս ֆունկցիան է որը ասում է իսկ հետո հաջորդ անգամ նորից էս ֆունկցիան կանչի
// պատկերացրեցիք ու տենց ստացվումա մի հատ loop(ցիկլ)






// // 7.
// իսկ հիմա այստեղ ինչ կարող ենք անենք մենք էտ draw ֆունկցիան կարող ենք կանչենք ստեղից 
// այսինքն հիմա եթե ես ռան անեմ

// // const canvas = document.querySelector("canvas");
// // const context = canvas.getContext("2d")

// // let data = {
// //     x: 10,
// //     y: 10,
// //     width: 50,
// //     heigth: 50,
// //     fillStyle: "red"
// // }

// // function draw() {
// //     context.fillStyle = data.fillStyle
// //     context.fillRect(data.x, data.y, data.width, data.heigth)
// // }


// // function loop() {
// //     requestAnimationFrame(loop)

// //     draw()
// // }

// // loop()

// // ինչա հիմա կատարվում 
// // հիմա էս տուփը անընդհատ նկարվումա էկրանի վրա, իրար վրա իրար վրա ամեն վարկյան վաթսուն անգամ ապացուցեմ ձեզ նայեք ստեղ 




// // 8.
// // որպեսզի ապացուցեմ եկեք նենց անենք որ էս տուփի իրավիճակը էս loop-ի ընթացքում փոխվի էտ ժամանակ դուք կտեսնեք տարբերությունը pixel-ների
// // եկեք սենց անենք 

// // const canvas = document.querySelector("canvas");
// // const context = canvas.getContext("2d")

// // let data = {
// //     x: 10,
// //     y: 10,
// //     width: 40,
// //     heigth: 50,
// //     fillStyle: "red"
// // }

// // function draw() {
// //     context.fillStyle = data.fillStyle
// //     context.fillRect(data.x, data.y, data.width, data.heigth)
// // }


// // function loop() {
// //     requestAnimationFrame(loop)

// //     data.x += 1
// //     draw()
 
// // }

// // loop()


// // ինչ է ստացվում կանչում ենք էս loop-ը ասում ենք բրաուզեր ջան հաջորդ անգամ երբ որ պետքա նկարես մի հատ էս ֆունկցիան կանչի երբ որ մենք գալիսենք ստեղ x-ը մի հատ առաջ ենք տալիս և կանչում ենք draw հետո ինքը քանի որ ավարտվումա էս ֆունկցիան աշխատելը բրաուզերը դնում նկարումա հետո հաջորդ անգամ requestAnimationFrame-ը երբ որ պատրաստվումա հեսա պտի ելի pixel-ները փոխի նորից կանչումա մեր ֆունկցիային մեր ֆունկցիան x-ը մի հատ էլա առաջ տալիս ու canvas-ը փոխումա հիմա բրաուզերը գնումա նկարումա, հետո հաջորդ անգամ նկարելուց առաջ էլի մեզա կանչում x-ը մի հատ առաջա գնում canvas-ը նորից նկարում ենք նորից ինքը շարունակումա ու նկարումա 
// // նայեք ինչ է կատարվում 





// // 9.
// // հիմա երևի հարցա ձեզ ծագում ինչու է տուփը աճում ինչու ինքը չի շարժվում բացատրեմ




// // 10.??
// // այսինքն ինչ է ստացվում որ մենք որպեսզի տեսնենք մի հատ տուփ շարժվելուց միչև նորից նկարելը պետքա հին տուփը ջնջենք նայեք ստեղ
// // ստեղ մեր draw ֆունկցիայից մինչև նկարելը էս նոր տուփը եկեք ջնջենք 
// // կա մի հատ ֆունկցիա որը կոչվումա clearRect ոչ թե fillRect այլ clearReact clear(պարզ) նշանակումա ոնցոր մաքրի clear react
// // ինքը էլի ուղանկյունա նկարում բայց պատկերացրեք ռետինով ինքը ուղակի ջնջումա ամեն ինչ ինչ որ էտ x, y-ի լայնության և բարձրությունի մեջ է 

// // այսինքն ինչ կարող ենք անենք 


// // const canvas = document.querySelector("canvas")
// // const context = canvas.getContext("2d")

// // let data = {
// //     x: 10,
// //     y: 10,
// //     width: 50,
// //     height: 50,
// //     fillStyle: "red"
// // }

// // function draw() {
// //     context.clearRect(0, 0, canvas.width, canvas.height)
// //     context.fillStyle = data.fillStyle
// //     context.fillRect(data.x, data.y, data.width, data.height)
// // }

// // function loop() {
// //    requestAnimationFrame(loop)

// //    data.x += 1
// //    draw()
// // }

// // loop()


/* 
const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

let data = {
    x: 10,
    y: 10,
    width: 50,
    height: 50,
    fillStyle: "red"
}

function draw() {
    context.fillStyle = data.fillStyle
    context.fillRect(data.x, data.y, data.width, data.height)
    context.clearRect(data.x, 20, 30, 30)
}

function loop() {
   requestAnimationFrame(loop)

   data.x += 1
   draw()
}

loop() 
*/




// // 11
// // եկեք էս կոդը դնենք մի հատ ուրիշ ֆունկցիայի մեջ որը թող կոչվի update(թարմացնել) ինչու որովհետև ստեղ մենք աշխատում ենք ինֆորմացիայան փոխելով նենց որ եկեք ինֆորմացիան փոխենք մի տեղ ու նկարենք ուրիշ տեղ 

// const canvas = document.querySelector("canvas")
// const context = canvas.getContext("2d")

// let data = {
//     x: 10,
//     y: 10,
//     width: 50,
//     height: 50,
//     fillStyle: "red"
// }

// function draw() {
//     context.fillRect(data.x, data.y, data.width, data.height)
//     context.clearRect(data.x, 0, canvas.width, canvas.height)
//     context.fillStyle = data.fillStyle
// }

// function update() {
//     data.x += 1
// }

// function loop() {
//     requestAnimationFrame(loop)
    
//     update()
//     draw()
// }

// loop()

// // այսինքն ինչ է ստացվում հիմա ամեն ցիկլի ժամանակ մինչև նկարելը էկրանի վրա բրաուզերը կանչում է էս loop-ը, էս loop-ում մենք ստեղծում ենք հաջորդ խնդրանքը բրաուզերի բայց հաջորդ անգամ որ նկարես էլի ինձ մի հատ կանչի դա անում ենք այստեղ հետո կանչում ենք update թարմացնել այսպես ասած որպեսզի ինֆորմացիան թարմացնենք հիմիկվա իրավիճակից ելնելով և draw ենք կանչում որպեսզի canvas-ի վրա նկարենք մեր կտավի վրա նկարենք և երբ որ մենք ավարտում ենք բրաուզերը այդ կտավը կարդալով էտ ինֆորմացիան վերածումա պիքսելների և գցումա էկրանի վրա  






// // 12.
// // էլ ինչ կարելիյա անել 

// 1 //
// // եկեք նենց անենք երբ որ էս տուփը հասնի սահմանին ոնցոր խփի ու հետ գա

// const canvas = document.querySelector("canvas")
// const context = canvas.getContext("2d")

// let data = {
//     x: 10,
//     y: 10,
//     width: 50,
//     height: 50,
//     fillStyle: "red"
// }

// function draw() {
//     context.clearRect(0, 0, canvas.width, canvas.height)
//     context.fillStyle = data.fillStyle
//     context.fillRect(data.x, data.y, data.width, data.height)
// }

// let xDelta = 1

// function update() {
//     if(data.x + data.width > canvas.width) {
//         xDelta = -1
//     } 

//     data.x += xDelta
// }

// function loop() {
//     requestAnimationFrame(loop)
    
//     update()
//     draw()
// }

// loop()



// 2 //
// // երբ որ հետ գա նենց անենք խփի ու էլի հետ գնա

// 2.1 //
// const canvas = document.querySelector("canvas")
// const context = canvas.getContext("2d")

// let data = {
//     x: 10,
//     y: 10,
//     width: 50,
//     height: 50,
//     fillStyle: "red"
// }

// function draw() {
//     context.clearRect(0, 0, canvas.width, canvas.height)
//     context.fillStyle = data.fillStyle
//     context.fillRect(data.x, data.y, data.width, data.height)
// }

// let xDelta = 10

// function update() {
//     if(data.x + data.width > canvas.width) {
//         xDelta = -10
//     } else if(data.x < 0) {
//         xDelta = 10
//     }

//     data.x += xDelta
// }

// function loop() {
//     requestAnimationFrame(loop)

//     update()
//     draw()
// }

// loop()



// 2.2 //
// const canvas = document.querySelector("canvas")
// const context = canvas.getContext("2d")

// let data = {
//     x: 10,
//     y: 10,
//     width: 50,
//     height: 50,
//     fillStyle: "red"
// }

// function draw() {
//     context.clearRect(0, 0, canvas.width, canvas.height)
//     context.fillStyle = data.fillStyle
//     context.fillRect(data.x, data.y, data.width, data.height)
// }

// let xDelta = 10

// function update() {
//     if(data.x + data.width > canvas.width) {
//         xDelta *= -1
//     } else if(data.x < 0) {
//         xDelta *= -1
//     }

//     data.x += xDelta
// }

// function loop() {
//     requestAnimationFrame(loop)

//     update()
//     draw()
// }

// loop()


// 2.3 //
// const canvas = document.querySelector("canvas")
// const context = canvas.getContext("2d")

// let data = {
//     x: 10,
//     y: 10,
//     width: 50,
//     height: 50,
//     fillStyle: "red"
// }

// function draw() {
//     context.clearRect(0, 0, canvas.width, canvas.height)
//     context.fillStyle = data.fillStyle
//     context.fillRect(data.x, data.y, data.width, data.height)
// }

// let xDelta = 10

// function update() {
//     if(data.x + data.width > canvas.width || data.x < 0) {
//         xDelta *= -1
//     } 
//     data.x += xDelta
// }

// function loop() {
//     requestAnimationFrame(loop)

//     update()
//     draw()
// }

// loop()




// // 13.
// // բացի x-ից նման մի բան  կարող ենք անենք y-ով 
// // նույն լոգիկանա ուղակի էս անգամ ոչ թե կողքի սահմաններն ենք ստուգում այլ վերևի և ներքևի

const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

let data = {
    x: 10,
    y: 10,
    width: 50,
    height: 50,
    fillStyle: "red"
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = "red"
    context.fillRect(data.x, data.y, data.width, data.height)
}

let xDelta = 5
let yDelta = 2

function update() {
    if(data.x + data.width > canvas.width || data.x < 0) {
        xDelta *= -1
    }
    if(data.y + data.height > canvas.height || data.y < 0) {
        yDelta *= -1
    }

    data.x += xDelta
    data.y += yDelta
}

function loop() {
    requestAnimationFrame(loop)

    update()
    draw()
}

loop()
