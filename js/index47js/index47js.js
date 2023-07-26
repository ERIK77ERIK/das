// Ստեղծեք canvas և դրա ներքևում button: button էլեմենտը սեղմելիս canvas-ի վրա պետք է ավելանա կլոր օբյեկտ(գնդակ)՝ 
// կամայական տեղում, կամայական չափի, որը կշարճվի կամայական ուղղությամբ։ Որպես հավելում, կարող եք փորձել ստեղծել տարբեր գույների կլոր գնդակներ։
// Գնդակը պետք է canvas-ի եզրերին հասնելիս փոխի իր ուղղությունը, այնպես, որ միշտ մնա canvas-ի ներսում:
// Արդյունքում կունենանք canvas-ի ներսում շարժվող գնդակների փունջ: Կարող ենք ավելացնել նոր գնդակներ սեղմելով canvas-ի ներքևի button-ը:



const canvas = document.querySelector("canvas")
const btn = document.querySelector("button")
const context = canvas.getContext("2d")

let data = {
    balls: []
}

function update() {
  data.balls.forEach(function(ball) {
       ball.update()
  })
}

function draw() {
    data.balls.forEach(function(ball) {
        ball.draw()
    })
}

function loop() {
    requestAnimationFrame(loop)

    update()
    draw()
}
loop()


function Ball() {
    this.x = 100
    this.y = 100
    this.r = 40
    this.xDelta = 1
    this.yDelta = 1
    this.update = function() {
        this.x += this.xDelta
        this.y += this.yDelta
    }
    this.draw = function() {
        context.beginPath();
        context.arc(100, 75, 50, 0, 2 * Math.PI, );
        context.fill()
           
    }
}



btn.addEventListener("click", function() {
     const ball = new Ball()
     data.balls.push(ball)
})


