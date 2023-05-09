// let a = [7, 99, 22, 34, 22, 93, 101];

// // 1
// let filt = function(arr) {
//     let filteredArr = [];
//     let i = 0;

//     arr.forEach(function(val){
//          if(val % 2 === 0) {
//             filteredArr[i] = val;
//             i += 1;
//          };
//     });

//     return filteredArr
// };

// alert(filt(a));

// // 2
// let filter = function(arr, fun) {
//     let filteredArr = [];
//     let i = 0;

//     arr.forEach(function(val){
//          if(fun(val)) {
//             filteredArr[i] = val;
//             i += 1;
//          };
//     });

//     return filteredArr
// };

// alert(filter(a, function(val){
//     return val % 2 === 0;
// }));

// // կամ
// // 2
// let filter = function(arr, fun) {
//     let i = 0;
//     let r = [];

//     let i2 = 0;
//     while(i2 < arr.length) {
//         if(fun(arr[i2])) {
//             r[i] = arr[i2]
//             i += 1
//         };
//         i2 += 1;
//     };

//     return r
// }

// alert(filter(a, function(val) {
//     return val % 2 === 0;
// }));


// // filter ֆունկցիային տալիս ենք զանգված ու ֆունկցիա և մեր տված ֆուկցիան  
// // աշխատելով այնքան անգամ որքան մեր տված զանգվածի մեջ եղած անդամների քանակն է և ամեն անգամ ստանալով մեր տված զանգվածի անդամները հերթականությամբ
// // այն արժեքները որի ժամանակ աշխատացնելուց վերադարձնում է true արժեք, այդ արժեքները filter ֆունկցիայի մեջ վերագրվում է նոր զանգվածի մեջ հերթականությամբ(քանի որ այդ արժեքները վերագրվում է նոր զանգվածի i index-ի մեջ որը սկսվում է 0-ից և ավելանում է մեկով միայն այն դեպքում երբ որ filter ֆունկցիային տված ֆունկցիան վերադարձնում է true արժեք) և filter ֆունկցիան մեզ վերադարձնում է այդ նոր զանգվածը



// // համեմատելու համար
// // map ֆունկցիան մեջը forEach-ով
// let map = function(arr, fun) {
//     let r = [];
//     arr.forEach(function(val, i) {
//         r[i] = fun(val)
//     })
//     return r
// }
// alert([1,2,3].map(function(val) {
//     if(val%2 !== 0){
//     return val * 2
//     }
// }));

// // map ֆուկցիան առանց forEach-ի
// let map = function(arr, fun) { 
//   let r = []; 
//   let i = 0; 
//   while(i < arr.length) { 
//     r[i]=fun(arr[i]); 
//     i +=1; 
//   }; 
//   return r 
// }; 
// alert(a.map(function(val) { 
//     if(val%2 !== 0){
//         return val * 2
//     }
// })); 




// // 3 վարժություն 
// // տպեք են մարդկանց անունները որոնց տարիքը 18-ից բարձր են

let people = [
    {
        name: "Joe",
        age: 34
    },
    {
        name: "Mike",
        age: 22
    },
    {
        name: "Jane",
        age: 12
    }
];


let result = people.filter(function(person) {
    return person.age > 18
}).map(function(person) {
    return person.name
});

alert(result);
