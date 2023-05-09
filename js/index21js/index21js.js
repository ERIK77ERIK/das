// // 1

let a = {
    name: "joe",
    age: 39,
    phone: "82348234"
};

alert(Object.keys(a));

 Object.keys(a).forEach(function(key){
     let value = a[key]
     alert(key + " : " + value)
 })

// // keys ֆունկցիան կցած է մի հատ object-ի որի անունը Object է, որը վերցնում է մի object և վերադարձնում է մի զանգված որի մեջ կա մեր տված object-ի բոլոր բանալիները 




// // 2

// let a = {
//     name: "joe",
//     age: 39,
//     phone: "82348234"
// };

// alert(Object.values(a));

// // values ֆունկցիան կցած է մի հատ object-ի որի անունը Object է, որը վերցնում է մի object և վերադարձնում է մի զանգված որի մեջ կա մեր տված object-ի բոլոր արժեքները




// // 3

// let a = {
//     name: "joe",
//     age: 39,
//     phone: "82348234"
// };

// let stringify = function(obj) {
//     let result = "";

//     Object.keys(obj).forEach(function(key) {
//         let value = obj[key];
//         result += key + ":" + value + ","
//     })
//     return result
// }

// alert(stringify(a));
// // մոտավորապես


// alert(JSON.stringify(a))

// // stringify ֆունկցիան կցած է մի հատ object-ի որի անունը JSON է, որը վերցնում է մի object և վերադարձնում է մեր տված object-ի տեքստային տարբերակը,




// // 4

// let a = {
//    name: "joe",
//     age: 39,
//     phone: "82348234"
// };

// let str = JSON.stringify(a);

// let b = JSON.parse(str);

// alert(b);

// // parse ֆունկցիան կցած է մի հատ object-ի որի անունը JSON է, որը վերցնում է object-ի տեքստային տարբերակը և վերադարձնում է իրենից ստեղծած object
    




// // 5

//  let a = {
//      name: "joe",
//      age: 39,
//      phone: "82348234"
//  };

//  let str = JSON.stringify(a);

//  localStorage.setItem("test1", str);

// // setItem ֆունկցիան կցած է մի հատ object-ի որի անունը localStorage է, որը վերցնում է ինչ որ մի բանալի և ինչ որ մի արժեք և բրաուզերի մեջ ասում է մեր տված բանալին թող լինի մեր տված արժեքի բանալին

// // 6

// let d = localStorage.getItem("test1");

// let obj = JSON.parse(d);

// alert(obj.name);

// // getItem ֆունկցիան կցած է մի հատ object-ի որի անունը localStorage է, որը վերցնում է ինչ որ մի բանալի և վերադարձնումա էն արժեքը որը համապատասխանումա մեր տված բանալուն



