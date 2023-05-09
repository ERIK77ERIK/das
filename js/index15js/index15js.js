let x = function(y, z) {
   return y + z;
};

let u = x(5, 10);

alert(u);
alert(x(7,9));
alert(x(11,3));

// 1
let iseven = function(x) {
    return x % 2 === 0;
};

alert(iseven(12));

// 2
let add = function(n){
 let i = 0;
 let sum = 0;
 while(i < n.length){
    sum = sum + n[i];
    i = i + 1;
 }
 return sum;
}

alert(add([1, 2, 3, 4, 5, 6]));

// 3
let y = 10;

let div = function(t, s) {
    return t / s
};

let dip = function(y,zoo) {
     return zoo(y) * zoo(y)
};

let yup = function(c) {
    return div(y,2);
};

let d = dip(4, yup);

alert(d);
