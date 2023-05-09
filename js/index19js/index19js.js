// // 1  

// let forEach = function(arr, fun) {
//     let i = 0;
//     while(i < arr.length) {
//         fun(arr[i], i);
//         i += 1;
//     };
// };

// let zoo = [5, 2, 3];
// zoo.forEach(function(val,i) {
//     zoo[i] = val * 3;
// });
// alert(zoo);

// let zoo = [5, 2, 3];
// let r = [];
// zoo.forEach(function(val,i) {
//    r[i] = val * 3;
// });
// alert(r);


// // 2  
// // ֆունկցիան աշխատելով այնքան անգամ որքան մեր տված զանգվածի մեջ եղած անդամների քանակն է և ամեն անգամ ստանալով մեր տված զանգվածի անդամները հերթականությամբ 
// // map ֆունկցիաին տված ֆունկցիան էն արժեքը որը որ վերադարձնում է, map ֆունկցիայի մեջ վերագրվում է նոր զանգվածի նույն index-ի մեջ, հին զանգվածը չի փոխում, և map ֆունկցիան մեզ վերադարձնում է այդ նոր զանգվածը

// let zoo = [5, 2, 3];

// let map = function(arr, fun) {
//     let r = [];
//     let i = 0;
//     while(i < arr.length) {
//         r[i] = fun(arr[i]);
//         i += 1;
//     };
//     return r;
// }

// alert(zoo.map(function(val) {
//       return val * 3;
// }));
// alert(zoo);

// // կամ

// let zoo = [5, 2, 3];
// let map = function(arr, fun) {
//     let r = [];
//     arr.forEach(function(val,i){
//         r[i] = fun(val);
//     };
//     return r;
// }

// alert(zoo.map(function(val) {
//       return val * 3;
// }));
// alert(zoo);


// // 3 օրինակ

let people = [
    {
        name: "Jone",
        lastname: "Mikayelyan"
    },
    {
        name:"Mike",
        lastname: "Poghosyan"
    }
];

let nam = [];  
people.forEach( function(val, i) {
    nam[i] = val.name ;
});
alert(nam);



let names = people.map(function(val) {
    return val.name;
});

alert(names);








