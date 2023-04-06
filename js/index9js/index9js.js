// 1
let x = ["Poghos", "Petros", "Martiros"];
let i = 0;

while(i < x.length) {
    alert(x[i]);
    i = i + 1;
}

// 2
let a = ["Poghos", "Petros", "Martiros", "Aramis", "Nika"];
alert(a);

let ai = 0,
    vi = a.length-1;

while(ai < a.length/2){
    let d = a[ai];
    a[ai] = a[vi];
    a[vi] = d;

    ai = ai + 1;
    vi = vi - 1;
}

alert(a);


// 3
let b = [5, 2, 10, 33, 7];
let y = [];

let n = 0;

while(n < b.length){
    y[n] = b[n] * 2;
    n = n + 1;
}
alert(b);
alert(y);



