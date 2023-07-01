// // 1.
// // Գրել ֆունկցիա transform անունով, որը կստանա օբյեկտներից կազմված զանգված այլ տեսքի

// // [
// //    {fn: "Joe", ln: "Mikayelyan", ph: "039 323 233", gender: "male"},
// //    {fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male"},
// //    {fn: "Jane", ln: "Karapetyan", ph: "039 323 233", gender: "female"},
// //    {fn: "Jill", ln: "Isahaknyan", ph: "039 323 233", gender: "female"}
// // ]

// // ֆունկցիան պետք է զանգվածից ստանա միայն այն արժեքները, որոնց gender-ի արժեքը "female" է,
// // և վերադարձնի այդ օբյեկտներից կազմված զանգված հետևյալ տեսքի

// // [
// //    {firstName: "Jane", lastName: "Karapetyan", phone: "039 323 233", gender: "female" },
// //    {firstName: "Jill", lastName: "Ishakyan", phone: "039 323 233", gender: "female" }
// // ]


// // // Օրինակ:
// // Transform([
// //     {fn: "Joe", ln: "Mikayelyan", ph: "039 323 233", gender: "male"},
// //     {fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male"},
// //     {fn: "Jane", ln: "Karapetyan", ph: "039 323 233", gender: "female"},
// //     {fn: "Jill", ln: "Isahaknyan", ph: "039 323 233", gender: "female"}
// // ])
// // վերադարձնում է'
// // [
// //     {firstName: "kate", lastName: "Karapetyan", phone: "039 323 233", gender: "female" },
// //     {firstName: "Jill", lastName: "Isahakyan", phone: "039 323 233", gender: "female" }
// // ]




// let a = [
//    {fn: "Joe", ln: "Mikayelyan", ph: "039 323 233", gender: "male"},
//    {fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male"},
//    {fn: "Jane", ln: "Karapetyan", ph: "039 323 233", gender: "female"},
//    {fn: "Jill", ln: "Isahaknyan", ph: "039 323 233", gender: "female"}
// ]

// function transform(arr) {
//     return arr.filter(function(obj) {
//         return obj.gender === "female";
//     }).map(function(obj) {
//         return {
//             firstName: obj.fn,
//             lastName: obj.ln,
//             phone: obj.ph,
//             gender: obj.gender
//         };
//     });
// };

// alert(JSON.stringify(transform(a), undefined, 2));


// // // let a = [
// // //     {fn: "Joe", ln: "Mikayelyan", ph: "039 323 233", gender: "male"},
// // //     {fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male"},
// // //     {fn: "Jane", ln: "Karapetyan", ph: "039 323 233", gender: "female"},
// // //     {fn: "Jill", ln: "Isahaknyan", ph: "039 323 233", gender: "female"}
// // //  ]

// // // function transform(arr) {
// // //     return arr.filter(function(val){
// // //         return val.gender === "female"
// // //     }).map(function(val) {
// // //         return {
// // //             firstName: val.fn, 
// // //             lastName: val.ln,
// // //             phone: val.ph,
// // //             gender: val.gender}
// // //        })
// // // }

// // // alert(JSON.stringify(transform(a), undefined, 2));







// // 2
// //  Ստեղծել ֆունկցիա, getAvgAgeByColor անունով, որը որպես արգումենտ ստանում է զանգված, որի ամեն անդամը օբյեկտ է որտեղ գրված է մարդու մասին ինֆորմացիա (անուն, տարիք, մազերի գույն) և ստանում է երկրորդ արգումենտ մազերի գույն։ Ֆունկցիան պետք է վերադարձնի միջին տարիքը այն մարդկանց ում մազերի գույնը համապատասխանում է երկրորդ արգումենտով փոխանցված գույնին։
  
// //  օրինակ։
// //  getAvgAgeByColor([
// //      {name: "Joe", age: 13, hairColor: "red"},
// //      {name: "Mike", age: 10, hairColor: "brown"},
// //      {name: "Jane", age: 4, hairColor: "red"},
// //      {name: "Susan", age: 30, hairColor: "brown"}
// //  ], "brown"); 
// //  պետք է վերադարձնի 20, միջին տարիքը այն մարդկանց ում մազերի գույնը շականակագույն է։



// let a = [
//          {name: "Joe", age: 13, hairColor: "red"},
//          {name: "Mike", age: 10, hairColor: "brown"},
//          {name: "Jane", age: 4, hairColor: "red"},
//          {name: "Susan", age: 30, hairColor: "brown"}
//      ]

// function getAvgAgeByColor(arr, hairColor) {
//     let filteredArray = arr.filter(function(obj) {
//         return obj.hairColor === hairColor
//     });

//     let totalAge = filteredArray.reduce(function(aggr, obj) {
//         return aggr + obj.age
//     }, 0);

//     return totalAge / filteredArray.length;
// };

// alert(getAvgAgeByColor(a, "brown"));




// // 3.
// //  Ստեղծել ֆունկցիա getPersonWithMostFriendsByName անունով, որը որպես արգումենտ ստանում է զանգված, որի ամեն անդամը օբյեկտը է որտեղ գրված է մարդու մասին ինֆորմացիա (անուն, ընկերների ցուցակ) և ստանում է երկրորդ արգումենտ անուն։ Ֆունկցիան պետք է վերադարձնի այն մարդու անունը ով ունի ամենաշատ քանակությամբ ընկերներ տրված անունով (երկրորդ արգումենտով փոխանցած անունը)։

// //  getPersonWithMostFriendsByName([
// //      {
// //          name: "Joe",
// //          friends: [
// //              {name: "Susan", age: 12},
// //              {name: "Jane", age: 43},
// //              {name: "Susan", age: 33}
// //          ]
// //      },
// //      {
// //          name: "Liz",
// //          friends: [
// //                  {name: "Mila", age: 12},
// //                  {name: "Susan", age: 43},
// //                  {name: "Jane", age: 33}
// //          ]
// //      },
// //      {
// //          name: "Mike",
// //          friends: [
// //              {name: "Susan", age: 12},
// //              {name: "Susan", age: 43},
// //              {name: "Susan", age: 33}
// //          ]
// //      }
// //  ], "Susan");
// //  պետք է վերադարձնի "Mike", քանի որ նա ունի ամենաշատ քանակությամբ ընկերներ Susan անունով։



//  let a = [
//      {
//          name: "Joe",
//          friends: [
//              {name: "Susan", age: 12},
//              {name: "Jane", age: 43},
//              {name: "Susan", age: 33}
//          ]
//      },
//      {
//          name: "Liz",
//          friends: [
//                  {name: "Mila", age: 12},
//                  {name: "Susan", age: 43},
//                  {name: "Jane", age: 33}
//          ]
//      },
//      {
//          name: "Mike",
//          friends: [
//              {name: "Susan", age: 12},
//              {name: "Susan", age: 43},
//              {name: "Susan", age: 33}
//          ]
//      }
//  ]

//  function getPersonWithMostFriendsByName(people, friendName) {
//      let filteredPeople = people.map(function(personObj) {
//          return {
//              name: personObj.name,
//              count: personObj.friends.filter(function(friendObj) {
//                  return friendObj.name === friendName;
//              }).length
//          };
//      })
//      const max = filteredPeople.reduce(function(aggr, obj) {
//          if(aggr === undefined) {
//          return obj;
//          
//          if(obj.count > aggr.count) {
//              return obj;
//          }
//          return aggr;      
//      }, undefined);  
//      return max.name;
//  }

// alert(getPersonWithMostFriendsByName(a, "Susan"));

// // //  let a = [
// // //      {
// // //          name: "Joe",
// // //          friends: [
// // //              {name: "Susan", age: 12},
// // //              {name: "Jane", age: 43},
// // //              {name: "Susan", age: 33}
// // //          ]
// // //      },
// // //      {
// // //          name: "Liz",
// // //          friends: [
// // //                  {name: "Mila", age: 12},
// // //                  {name: "Susan", age: 43},
// // //                  {name: "Jane", age: 33}
// // //          ]
// // //      },
// // //      {
// // //          name: "Mike",
// // //          friends: [
// // //              {name: "Susan", age: 12},
// // //              {name: "Susan", age: 43},
// // //              {name: "Susan", age: 33}
// // //          ]
// // //      }
// // //  ]

// // //  function getPersonWithMostFriendsByName(people, friendName) {
// // //      people.forEach(function(obj) {
// // //          obj.friends = obj.friends.filter(function(friendObj) {
// // //              return friendObj.name === friendName
// // //          }).length
// // //      })
// // //      
// // //     const max = people.reduce(function(aggr, obj) {
// // //        if(obj.friends > aggr.friends) {
// // //          return obj
// // //        }
// // //  
// // //        return aggr
// // //      })
// // //      
// // //      return max.name
// // //  };

// // //  alert(getPersonWithMostFriendsByName(a, "Susan"));



// // 4.
// // Գրել ֆունկցիա removeAtIndex անունով, որը կստանա զանգված ու թիվ և կվերադարձնի նոր զանգված։ Նոր զանգվածը կպարունակի առաջինի բոլոր արժեքները, բացի մեր տված ինդեքսի արժեքը։
// // 
// // Օրինակ:
// // 
// // removeAtIndex([5, 10, 15, 20], 2);
// // վերադարձնում է [5, 10, 20]


// let a = [5, 10, 15, 20];

// function removeAtIndex(arr, index) {
//     return arr.filter(function(val, i) {
//          return i !== index;
//     });
// };

// alert(removeAtIndex(a, 2));


// // // let a = [5, 10, 15, 20];
// // // 
// // // function removeAtIndex(arr, index) {
// // //     return arr.filter(function(val) {
// // //          if(arr[index] !== val) {
// // //            return true
// // //         }
// // //         return false
// // //     })
// // // };
// // // 
// // // alert(removeAtIndex(a, 2));



// // 5. 
// // Գրեք ֆունկցիա toNumber անունով, որն ընդունում է բինարյան string, այսինքն բինարյան թվանշաները որպես տեքստային արժեք, որն համարժեք է հաշվարկման երկուական համակարգի թվերին: 
// // Կարդացեք բինարյան թվերն աջից դեպի ձախ, բինարյան թվերի մասին կարող եք կարդալ գուգլից:
// //
// // Օրինակ
// //
// // toNumber("101") պետք է վերադարձնի 5
// // toNumber("111") պետք է վերադարձնի 7

// // 1
// function toNumber(binaryStr) {
//     return binaryStr.split("")                        // ["1", "0", "0", "1", "0", "1"]
//                     .map(function(numberStr) {
//                         return +numberStr
//                     })                                // [1, 0, 0, 1, 0, 1]
//                     .reverse()                        // [1, 0, 1, 0, 0, 1]
//                     .map(function(val, i) {
//                         if(val === 1) {
//                             return Math.pow(2, i)
//                         }
//                         return 0
//                     })
//                     .reduce(function(aggr, val) {
//                         return aggr + val
//                     }, 0)
// }
// alert(toNumber("100101"));

// // 2
// function toNumber(binaryStr) {
//     return binaryStr.split("")          // ["1", "0", "0", "1", "0", "1"]
//                     .reverse()          // ["1", "0", "1", "0", "0", 1]
//                     .map(function(val, i) {
//                         if(val === "1") {
//                             return Math.pow(2, i)
//                         }
//                         return 0;
//                     })
//                     .reduce(function(aggr, val) {
//                         return aggr + val
//                     }, 0);
// }

// alert(toNumber("100101"));


// // 6.
// //  Հավելյալ ինֆորմացիա։
// //  Տրված նախադասության վրա կարող ենք օգտագործել search ֆունկցիան գտնելու մեզ հետաքրքրող տեքստի ինդեքսը: Օրինակ․
// //  "Hello world".search("world"); // կվերադարձնի 6
// //  եթե փնտրվող տեքստը առկա չէ նախադասության մեջ կվերադարձնի -1. Օրինակ:
// //  "Hello world".search("pizza"); // կվերադարձնի -1
 
// //  Օգտագործեք search ֆունկցիան ստեղծելու համար find ֆունկցիա, որը որպես արգումենտ ստանում է զանգված բաղկացած օբյեկտներից, և փնտրվող տեքստը որպես երկրորդ արգումենտ: Ֆունկցիան պետք է վերադարձնի զանգված, որը կպարունակի բոլոր այն օբեկտները որոնց մեջ առկա է փնտրվող տեքստը որպես արժեք: Ենթադրեք որ արգումենտում ստացած զանգվածի օբյեկտները չունեն ներկառուցված(nested) օբյեկտներ կամ զանգվածներ:

// //  Հուշում: Օգտագործեք Object.keys, օբյեկտի բանալիները զանգվածի մեջ ունենալու համար, որոնց վրայով կարող եք ցիկլ պտտվել և գտնել համապատասխանողները

// //  Օրինակ:
 
// //  find([
// //      {name: "Apple", color: "red"},
// //      {name: "Banana", color: "yellow"},
// //      {name: "Orange", color: "orange"},
// //      {name: "Apple", color: "yellow"},
// //  ], "yellow"); 
// //  this should return [{ name: "Banana", color: "yellow"}, {name: "Apple", color: "yellow"}]

// //  find([
// //      {title: "White Fang", author: "Jack London"},
// //      {title: "The Adventures of Tom Sawyer", author: "Mark Twain"},
// //  ], "Twain"); 
// //  this should return [{title: "The Adventures of Tom Sawyer", author: "Mark Twain"}]


// let a = [
//     {name: "Apple", color: "red"},
//     {name: "Banana", color: "yellow"},
//     {name: "Orange", color: "orange"},
//     {name: "Apple", color: "yellow"},
// ]; 

// function find(arr, searchText) {
//     return  arr.filter(function(obj) {
//                 const values = Object.values(obj);
//                 for(let i = 0; i < values.length; i++) {
//                     const valueTxt = "" + values[i]
//                     if(valueTxt.search(searchText) !== -1) {
//                         return true;
//                     }
//                 }
//                 return false
//             })
// }    

// alert(JSON.stringify(find(a,"yellow"),undefined, 2));




// // 7.
// //  Ստեղծել ֆունկցիա magic անունով, որն ընդունում է օբյեկտ որը վերադարձնում նոր օբյեկտ, որտեղ բանալիները(keys) կդառնան արժեքներ(values) իսկ արժեքները(values) բանալիներ(keys):
// //  
// //  Օրինակ:
// //  
// //  magic({
// //      firstName: "Michael",
// //      lastName: "Jackson"
// //  });
// //  
// //  պիտի վերադարձնի:
// //  
// //  {
// //      Michael: "firstName",
// //      Jackson: "lastName"
// //  }

// //1
// let obj = {
//     firstName: "Michael",
//     lastName: "Jackson"
// };

// function magic(obj) {
//     const keys = Object.keys(obj);
//     let newObj = {};
//     keys.forEach(function(key) {
//         const value = obj[key];
//         newObj[value] = key;
//     });
//     return newObj;
// }

// alert(JSON.stringify(magic(obj), undefined, 2))


// //2
// let obj = {
//     firstName: "Michael",
//     lastName: "Jackson"
// };

// function magic(obj) {
//     return Object.keys(obj)
//                  .reduce(function(aggr, key) {
//                     aggr[obj[key]] = key
//                     return aggr
//                  }, {})
// }

// alert(JSON.stringify(magic(obj), undefined, 2))



// // // let obj = {
// // //     firstName: "Michael",
// // //     lastName: "Jackson"
// // // };
// // // 
// // // function magic(obj) {
// // //     const keys = Object.keys(obj) 
// // //     let newObj = {}
// // //     keys.forEach(function(key) {
// // //       newObj[obj[key]] = key
// // //     })
// // //     return newObj
// // // }
// // // 
// // // alert(JSON.stringify(magic(obj), undefined, 2));




// // 8.
// //  Ստեղծեք ֆունկցիա անվանեք diamond, որը կստեղծի տեքստ որը նման կլինի ադամանդի, որտեղ ադամանդի բարձրությունը ֆունկցիային տրված կենտ թիվն է:
// //  Տրված թիվը միշտ պետք է լինի դրական, կենտ և ամբողջ թիվ:
// //  
// //  Հուշում: Երբ նախադասության մեջ առկա է "\n" ապա այն տեղափոխելու է նոր տող 
// //  
// //  Օրինակ:
// //  alert(diamond(5)); 
// //  Կվերադարձնի հետևյալը
// //  
// //      *
// //     ***
// //    *****
// //     ***
// //      *


// function spaces(num) {
//     let str = "";
//     for(let i = 0; i < num; i++) {
//         str += " ";
//     }
//     return str
// }

// function stars(num) {
//     let str = "";
//     for(let i = 0; i < num; i++) {
//         str += "*";
//     }
//     return str
// }

// function diamond(heigth) {
//     let str = ""
//     let topSpaces = heigth/2-1
//     for(let i = 1; i <= heigth; i +=2) {
//         str += spaces(topSpaces) + stars(i) + "\n"
//         topSpaces--
//     }

//     let bottomSpaces = 1;
//     for(let x = heigth-2; x > 0; x -= 2) {
//         str += spaces(bottomSpaces) + stars(x) + "\n"
//         bottomSpaces++
//     }
//     return str 
// }

// alert(diamond(5));


//  //  // միայն 5-ի համար
//  //  // function diamond(number) {
//  //  //     const num = number + 2
//  //  //     let string
//  //  //     let string2 = ""
//  //      
//  //  //     let i = 1
//  //  //     let i2
//  //  //     do {
//  //  //         i2 = i
//  //  //         if(2 * i2 > number) {
//  //  //            while(i2 > 1) {
//  //  //             string2 = string2 + (2 * i2-3) // + "\n"
//  //  //             i2--
//  //  //            }
//  //  //         }
//  //          
//  //  //        if(i === 1) {
//  //  //             for(let i = 1; (2 * i-1) <= number; i++) {
//  //  //             string = (2 * i)-1 +"" // + "\n" 
//  //  //             string2 = string2 + string
//  //  //             }
//  //  //         }
//  //  //      i++
//  //  //     } while((2 * i) < num) 
//  //     
//  //  
//  //  //    let arr = string2.split("")
//  //  //             .map(function(num) {
//  //  //                 return +num
//  //  //             })              // [1, 3, 5, 3, 1]
//  //  
//  //      
//  //  //     let arr2 = arr.map(function(num) {      // [
//  //  //         let newArr = []                   //   ["*"],
//  //  //         let str = ""                      //   ["*", "*", "*"],
//  //  //         let i = 0                         //   ["*", "*", "*", "*", "*"],
//  //  //         while(i < num) {                  //   ["*", "*", "*"],
//  //  //             newArr[i] = str + "*"         //   ["*"]
//  //  //             i++                           // ]
//  //  //         }
//  //  //         return newArr
//  //  //     })
//  //  
//  //  
//  //  //     /////1 mi qich sxal
//  //  //     // let str = ""
//  //  //     //     arr2.forEach(function(val) {
//  //  //     //         str = str + "    " + val.join(" ") +
//  //  //     //         "\n" 
//  //  //     //     })
//  //  //     //     return str
//  //  
//  //  //     ////2
//  //  //     // let stringifyDiamond = "     " + arr2[0].join(" ") + "\n" +  "  " + arr2[1].join(" ") + "\n" + arr2[2].join(" ") + "\n" +"  " + arr2[3].join(" ") + "\n" + "    " + arr2[4].join("  ") 
//  //  //     // return stringifyDiamond
//  //  
//  //  
//  //  //     ////3
//  //  //     function stringifyDiamond (arr2) {
//  //  //         return  "     " + arr2[0].join(" ") + 
//  //  //                 "\n" + 
//  //  //                 "   " + arr2[1].join(" ") + 
//  //  //                 "\n" + 
//  //  //                 arr2[2].join(" ") +
//  //  //                 "\n" +
//  //  //                 "   " + arr2[3].join(" ") + 
//  //  //                 "\n" + 
//  //  //                 "     " + arr2[4].join(" ")
//  //  //     };
//  //  //     return stringifyDiamond(arr2)
//  //  
//  //  
//  //  //     ////4 mi qich sxal
//  //  //     // let stringifyDiamond = arr2.reduce(function(aggr, num) {
//  //  //     //   aggr = aggr + "    " + num.join(" ") + "\n" 
//  //  //     //   return aggr
//  //  //     // }, "")
//  //  //     // return stringifyDiamond
//  //    
//  //  // }
//  //  //   alert(diamond(5));



// // 9.
// //  Գրել ֆունկցիա pow անունով, որը կստանա երկու թիվ, և առաջին թիվը կբազմապատկի ինքն իրենով այնքան անգամ, որքան երկրորդ թիվն է: Չօգտագործել Math.pow() ֆունկցիան այլ գրել ինքնուրույն:

// //  Օրինակ:

// //  pow(5, 3); // վերադարձնում է 125 (5 * 5 * 5)
// //  pow(3, 2); // վերադարձնում է 9 (3 * 3)


// function pow(num1, num2) {   // num1=3, num2=2
//     let result = num1;       // 125
//     while(num2 > 1) {
//         result *= num1       // result = result * num1
//         num2--
//     }
//     return result
// };

// alert(pow(5, 3));   // Math.pow(2, 4); // alert(2**4);

// // alert(2**4);  
// // կտպի 16





// // 10.
// // Գրել ֆունկցիա reverse անունով, որը կստանա թիվ և կվերադարձնի նոր թիվ այդ թվի թվանշանները հակառակ շրջած:

// // Օրինակ:

// // reverse(123); // վերադարձնում է 321
// // reverse(5829); // վերադարձնում է 9285


// function reverse(num) {
//     const numStr = "" + num;    // "5829"
//     const reversedNumStr = numStr.split("")       // ["5", "8", "2", "9"]
//                                 .reverse()       // ["9", "2", "8", "5"]
//                                 .join("");        // "9285"
//     return +reversedNumStr;
// };

// alert(reverse(5829));



// // 1
// // //  function reverse(number) {
// // //      let stringifyNumber = number + "" ;
// // //      let arr = stringifyNumber.split("");
// // //      let reverseArr = arr.reverse();
// // //  
// // //      let reverseStrNumber = reverseArr.join("");
// // //      let result = +reverseStrNumber
// // //      return result
// // //  }
// // //  
// // //  alert(reverse(1234));
// // //  
// // 2
// // //  function reverse(num) {
// // //      let strNum = num + "" ;
// // //      const reversedNumStr = strNum.split("")
// // //                                  .reverse()
// // //                                  .join("");
// // //      return +reversedNumStr;
// // //  };
// // //  
// // //  alert(reverse(1234));



// // 11.Վարժություն - նիշերի հաճախականություն 
    
// // Գտեք տրված սթրինգում տառերի/նիշերի ընդհանուր քանակը: Ալերթ պատուհանի դիալոգի մեջ տպեք, թե տպեք թե ինձ հաճախականությամբ է հանդիպում տվյալ տառը/նիշը: <br>

// // function alertFreq(str) {
// //    ... code ...
// // }
    
// // alert("h : 1");
// // alert("e : 1");
// // alert("l : 3");
// // alert("o : 2");
// // alert("- : 1");
// // alert("w : 1");
// // alert("d : 1");

// // alertFreq("hello-world");


// function alertFreq(str) {
//     const freqMap = str.split("").reduce(function(aggr, val) {
//         if(aggr[val] === undefined) {
//             aggr[val] = 1;
//         } else {
//             aggr[val]++
//         }
//         return aggr
//     }, {});
//     Object.keys(freqMap).forEach(function(key) {
//         alert(`${key} : ${freqMap[key]}`)  // key + ":" + freqMap[key]
//     })
// }

// alertFreq("hello-world");












