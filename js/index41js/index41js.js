// եկեք խոսանք օգտագործողի փոխազդեցության մասին 
// այսինքն ինչպես կարող ենք ալնպես անենք որ օգտագործողը էս մեր canvas-ի, էն ով որ նայումա մեր canvas-ը մեր կայքը կարողանա canvas-ի հետ ինչ որ ռեակցիա տա ինչ որ ազդեցություն գործակցի 

// եկեք ստեղծենք մի հատ տուփ ու այնպես անենք օգտագործողը էտ տուփը շարժի ներքև վերև աջ ձախ և այլն և այլն

// 1 //
// const canvas = document.querySelector("canvas")
// const context = canvas.getContext("2d")

// let data = {
//    xDelta: 0,
//    x: 10,
//    y: 10,
//    width: 50,
//    height: 50
// }

// function update() {

// }

// function draw() {
//     context.clearRect(0, 0, canvas.width, canvas.height)
//     context.fillRect(data.x, data.y, data.width, data.height)
// }

// function loop() {
//     requestAnimationFrame(loop)
//     update()
//     draw()
// }
// loop()

// document.addEventListener("keydown", function() {
//     data.x += 10
// })

// document.addEventListener("keyup", function() {

// })


// 2 //
// const canvass = document.getElementById("aa")
// const contextt = canvass.getContext("2d")

// let dataa = {
//    xDelta: 0,
//    x: 10,
//    y: 10,
//    width: 50,
//    height: 50
// }

// function update() {
//    dataa.x += dataa.xDelta
// }

// function draw() {
//     contextt.clearRect(0, 0, canvass.width, canvass.height)
//     contextt.fillRect(dataa.x, dataa.y, dataa.width, dataa.height)
// }

// function loop() {
//     requestAnimationFrame(loop)
//     update()
//     draw()
// }
// loop()

// document.addEventListener("keydown", function() {
//     dataa.xDelta = 1
// })

// document.addEventListener("keyup", function() {
//     dataa.xDelta = 0
// })



// 3 //
// սա ցանկացած կոճակ եթե մենք սխմենք ինքը կսկսի շարժվել և եթե էտ կոճակը մենք թողնենք stop կտա
// բայց եկեք տարբերենք աջ կոճակը ձախ կոճակից 

// addEventListener ֆունկցիային տված ֆունկցիան ստանում է մի հատ object (evt object) որի վրա կա լիքը ինֆորմացիա եկեք ուսումնասիրենք այդ ինֆորմացիան 
// դնենք debugger աշխատացնենք

// const canvas = document.querySelector("canvas")
// const context = canvas.getContext("2d")

// let data = {
//    xDelta: 0,
//    x: 10,
//    y: 10,
//    width: 50,
//    height: 50
// }

// function update() {
//    data.x += data.xDelta
// }

// function draw() {
//     context.clearRect(0, 0, canvas.width, canvas.height)
//     context.fillRect(data.x, data.y, data.width, data.height)
  
// }

// function loop() {
//     requestAnimationFrame(loop)

//     update()
//     draw()
// }

// loop()

// document.addEventListener("keydown", function(evt) {
//     data.xDelta = 1
//   debugger
// })

// document.addEventListener("keyup", function(evt) {
//     data.xDelta = 0
// })

// evt object-ը ունի լիքը ինֆորմացիա որից մեկը code: "ArrowRight" տեքստնա այսինքն հղում դեպի աջ
// // // code: "ArrowRight" է գրվել որովհետև սխմելենք դեպի աջ կնոպկեն եթե սխմենք օրինակ d տառը կգրվեր code: "KeyD"



// 4 //
const canvas = document.querySelector(".bb")
const context = canvas.getContext("2d")

let data = {
   xDelta: 0,
   x: 10,
   y: 10,
   width: 50,
   height: 50
}

function update() {
   data.x += data.xDelta
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillRect(data.x, data.y, data.width, data.height)
}

function loop() {
    requestAnimationFrame(loop)

    update()
    draw()
}

loop()

document.addEventListener("keydown", function(evt) {
    if(evt.code === "ArrowRight") {
        data.xDelta = 5
    } else if(evt.code === "ArrowLeft") {
        data.xDelta = -5
    }  
})

document.addEventListener("keyup", function(evt) {
    data.xDelta = 0
})











