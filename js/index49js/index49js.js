

// function sumPairExists(a, b, v) {
//     debugger
//     const obj = b.reduce(function(aggr, value) {
//         aggr[value] = true
//         return aggr
//     }, {})

//     for(let i = 0; i < a.length; i++) {
//         const target = v-a[i]
//         if(obj[target] === true) {
//             return true
//         }
//     }
//     return false
// }

// alert(sumPairExists([4, 2, 6, 1], [12, 10, 13, 9], 18))




// function sumPairExists(a, b, v) {
//     for(let i1 = 0; i1 < b.length; i1++) {
//         for(let i = 0; i < a.length; i++) {
//             if(v-a[i] === b[i1]) {
//                 return true
//             }
//         }
//     }
//     return false
// }

// alert(sumPairExists([4, 2, 6, 1], [12, 10, 13, 9], 8))




// const person1 = {
//     name: "Joe",
//     lastName: "Jaspers",
//     age: 55,
//     friends: [],
//     getFullName: function() {                      // getFullName() {
//         return this.name + " " + this.lastName     //       return this.name + " " + this.lastName
//     }                                              //  }
// };

// person1.getFullName()

// const person2 = {
//     name: "Mike",
//     lastName: "Jackson",
//     age: 66,
//     friends: [person1],
//     getFullName: function() {                       // getFullName() {
//         return this.name + " " + this.lastName      //             return this.name + " " + this.lastName
//     }                                               //  }
// }

// function getFullName(name, lastName) {
//     return name + " " + lastName
// }



// /// OOP


// /// members ,  mefid


// /// function constructor

// function F(){
//     // this = {}

//     this.name = "Joe"

//     // return this
// }

// alert(JSON.stringify(new F()))




const canvas = document.querySelector("canvas");
const btn = document.querySelector("button");
const context = canvas.getContext("2d");



let data = {
    balls: []
};

function update() {
    data.balls.forEach(function(ball) {
        ball.update();
    })
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    data.balls.forEach(function(ball) {
        ball.draw();
    })
}

function loop() {
    requestAnimationFrame(loop);
    update();
    draw();
}

loop();

function Ball() {
    this.r = random(5, 40);
    this.x = random(this.r, canvas.width-this.r);
    this.y = random(this.r, canvas.height-this.r);

    this.xDelta = random(-5, 5);
    this.yDelta = random(-5, 5);

    this.color = "rgb(" + random(0, 255) + ", " + random(0, 255) + ", " + random(0, 255) +")";

    this.update = function() {
        if((this.x + this.r) > canvas.width ||
        this.x - this.r < 0) {
            this.xDelta *= -1;
        }

        if((this.y + this.r) > canvas.height ||
        this.y - this.r < 0) {
            this.yDelta *= -1;
        }

        this.x += this.xDelta;
        this.y += this.yDelta;
    }


    this.draw = function() {
        context.fillStyle = this.color;

        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        context.fill();
    }
}

btn.addEventListener("click", function() {
    const ball = new Ball();
    data.balls.push(ball);
})


function random(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}



function approximatePi(n) {
  let ins = 0;

  for (let i = 0; i < n; i++) {
    const x = Math.random();
    const y = Math.random();
    const distance = Math.sqrt(x * x + y * y);

    if (distance <= 1) {
      ins++;
    }
  }

  return (ins / n) * 4;
}

// You can adjust the number of samples for better accuracy
const approximatedPi = approximatePi(1000000);

console.log(`Approximated π: ${approximatedPi}`);

