// Գրել ֆունկցիա transform անունով, որը կստանա օբյեկտներից կազմված զանգված այլ տեսքի

let a = [
    {fn: "Joe", In: "Mikayelyan", ph: "039 323 233", gender: "male"},
    {fn: "Mike", In: "Hovsepyan", ph: "039 323 233", gender: "male"},
    {fn: "Jane", In: "Karapetyan", ph: "039 323 233", gender: "female"},
    {fn: "Jill", In: "Isahaknyan", ph: "039 323 233", gender: "female"}
]

// ֆունկցիան պետք է զանգվածից ստանա միայն այն արժեքները, որոնց gender-ի արժեքը "female" է,
// և վերադարձնի այդ օբյեկտներից կազմված զանգված հետևյալ տեսքի

// [
//     {firstName: "Jane", lastName: "Karapetyan", phone: "039 323 233", gender: "female" },
//     {firstName: "Jill", lastName: "Ishakyan", phone: "039 323 233", gender: "female" }
// ]


// // Օրինակ'
// Transform([
//     {fn: "Joe", In: "Mikayelyan", ph: "039 323 233", gender: "male"},
//     {fn: "Mike", In: "Hovsepyan", ph: "039 323 233", gender: "male"},
//     {fn: "Jane", In: "Karapetyan", ph: "039 323 233", gender: "female"},
//     {fn: "Jill", In: "Isahaknyan", ph: "039 323 233", gender: "female"}
// ])
// // վերադարձնում է'
// [
//     {firstName: "kate", lastName: "Karapetyan", phone: "039 323 233", gender: "female" },
//     {firstName: "Jill", lastName: "Isahakyan", phone: "039 323 233", gender: "female" }
// ]


function transform(arr) {
 return arr.filter(function(val){
    return val.gender === "female"
}).map(function(val) {
    
     return {firstName: val.fn, lastName: val.In, phone: val.ph, gender: val.gender}
})
};

alert(JSON.stringify(transform(a)))