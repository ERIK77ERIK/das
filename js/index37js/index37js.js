// վարժություն 1
// Ստեղծել forEach անունով ֆունկցիա, որը կգործի ճիշտ այնպես, ինչպես Aray.forEach. խնդրում ենք օգտագործել ռեկուրսիա!!!
// Օրինակ
// forEach([5, 4, 3], function(val, index) {
//   alert(val);
// });



// //  forEach-ի լոգիկան
// //  function forEach(arr, fun) {
// //    for(let i = 0; i < arr.length; i++) {
// //      fun(arr[i], i);
// //    }
// //  }
// //  forEach([5, 4, 3], function(val, i) {
// //    alert(val + " at index " + i)
// //  })

// //  forEach-ի ռեկուրսիվ մոտեցումը 
// //   function forEach(arr, fun) {
// //     function loop(i) {
// //       if (i >= arr.length) {
// //         return;
// //       }
// //       fun(arr[i], i);
// //       loop(i + 1);
// //     }
// //     loop(0)
// //   }
// //   forEach([5, 4, 3], function (val, i) {
// //     alert(val + " at index " + i);
// //   });

// //  այսինքն նուանսը ինչ է որ recursion նշանակումա ֆունկցիայի մեջ կա մի հատ ֆունկցիա որը կանչում է ինքն իրեն չէ այսինքն ցիկլ է ստեղծվում ֆունկցիաներով
// //  recursive case(ռեկուրսիվ գործ) - են ինչ որ ստեղծումա ցիկլը
// //  termination case-ը(դադարեցման գործ) - են օրենքը որը որոշումա երբ պետք է stop տալ
// //  և իր ներքին գործողությունը որը անում է ամեն ցիկլի ժամանակ մինչև նա ավարտվում է
// //  և ահա մենք ստեղծեցինք forEach-ը recursion-ով




// // // forEach-ի լոգիկան
// // // 1
// // // function forEach(arr, fun) {
// // //   for(let i = 0; i < arr.length; i++) {
// // //     fun(arr[i], i)
// // //   }
// // // }
// // // 2
// // // function forEach(arr, fun) {
// // //   let i = 0;
// // //   while(i < arr.length) {
// // //     fun(arr[i], i);
// // //     i++
// // //   }
// // // }

// // // forEach-ի ռեկուրսիվ մոտեցումը    ամեն անգամ անդամը վերցնելուց այդ անդամի index-ը չի վերցնում
// // //  function forEach(arr, fun) {
// // //      if(arr.length === 0) {
// // //        return
// // //      }
// // //
// // //      fun(arr[0],    )
// // //      arr.shift()
// // //
// // //      return forEach(arr, fun)
// // //  }
// // //
// // //  forEach([3, 54, 45, 2], function(val,   ) {
// // //      alert(val)
// // //  })


// // // Ռեկուրսիա(recursion)
// // //  function f1(n) {
// // //    if(n <= 0) {
// // //      return
// // //    }
// // //    alert("hi")
// // //    return f1(n-1);
// // //  }
// // //  f1(5)
// // //
// // //  function factorial(num) {
// // //    if(num <= 1) {
// // //      return 1
// // //    }
// // //    return num * factorial(num-1)
// // //  }
// // //  alert(factorial(5));




// վարժություն 2
// Ստեղծել pow անունով ֆունկցիա, որը կգործի ճիշտ այնպես, ինչպես Math.pow. խնդրում ենք օգտագործել ռեկուրսիա!!!
// Օրինակ
// pow(5, 3); // 125


// // function pow(x, y) {
// //     if(y === 0) {
// //          return 1;
// //     }
// //     return x * pow(x, y-1);
// // };
// // alert(pow(5, 3));
// //
// // pow(5, 3)
// //    5 * pow(5, 2)
// //       5 * pow(5, 1)
// //             5


// // // function pow(num, degree) {
// // //     if(degree === 0) {
// // //         return 1;
// // //     }
// // //     return num * pow(num, degree-1)
// // // };
// // // alert(pow(5, 3));




// վարժություն 3
// Ստեղծել sum անունով ֆունկցիա, որը գումարում է զանգվածի բոլոր արժեքները:
// Նշենք, որ զանգվածը որպես արժեք կարող է ունենալ զանգված:
// Մի օգտագործեք Array.flat
// Օրինակ
// sum([4, 3, [8, 2], [3, 6, [9, 12, 33], 6], 7, 8, 9])  // 110

// const arr = [0, [1, 2], [1, [2, [3, 4]]]]
// console.log(arr.flat(3))
// կտպի [0, 1, 2, 1, 2, 3, 4]



// //  նախ և առաջ պարզ տաբերակը լուծեք թե ինչպես կարելի է մի զանգված որ ընդամենը ունի թվեր իր բոլոր անդամները գումարել և ստանալ պատասխան
// //  function sum(arr) {
// //      return arr.reduce(function(aggr, val) {
// //          return aggr + val
// //      }, 0);
// //  }
// //  alert(sum([1, 2, 3, 4]));


// //  հիմա մի ուրիշ խնդիր կարող է լինել բա որ էս արժեքներից մեկը լինի զանգված, էտ ժամանակ ինչ ենք անելու
// //  դե էտ ժամանակ ինչ անենք եկեք էտ զանգվածի գումարումը վերցնենք և էտ արժեքը ավելացնենք ստեղ
// //  այսինքն 
// //  կարող ենք անենք այսպես ստուգենք եթե val-ը իրոք զանգված է ապա էտ ժամանակ էտ զանգվածի բոլոր արժեքները գումարենք իրար 
// //  function sum(arr) {
// //      return arr.reduce(function(aggr, val) {
// //          if(Array.isArray(val)) {
// //              return aggr + val.reduce(function(aggr, val) {
// //                  return aggr + val
// //              }, 0)
// //          }
// //          return aggr + val
// //      }, 0)
// //  }
// //  alert(sum([1, 2, [3, 4], 5]));


// //  բայց խնդիր կա այստեղ բա որ էս արժեքը նաև լինի զանգված ինչ ենք անելու, պետք է ևս մի հատ if(Array.isArray(val)) անենք 
// //  function sum(arr) {
// //      return arr.reduce(function(aggr, val) {
// //          if(Array.isArray(val)) {
// //              return aggr + val.reduce(function(aggr, val) {
// //                  if(Array.isArray(val)) {
// //                      return aggr + val.reduce(function(aggr, val) {
// //                          return aggr + val
// //                      }, 0)
// //                  }
// //                 return aggr + val
// //              }, 0)
// //          }
// //          return aggr + val
// //      }, 0)
// //  }
// //  alert(sum([1, 2, [3, [4, 5], 6]]));


// //  այսինքն ինչա ստացվում որ մենք կկարողանանք ցանկացած զանգվածի ներքին զանգվածի ներքին զանգվածը գումարել իրար բայց բա որ էտ զանգվածնել ունենա իր մեջ ներքին զանգված   կրկնենք էս ամեն ինչը չէ   ու երեվի արդեն նկատել եք որ մենք անընդհատ գրում ենք նույն կոդը
// //  բայց ինչու եթե մենք արդեն ունենք ֆունկցիա որի մեջ այդպիսի կոդ կա
// //  եկեք անենք մի հատ շատ ավելի խելացի և խորամանկ բան քան թե էս ամեն ինչը անել եկեք ընդամենը ստեղ վերադարձնենք
// //  function sum(arr) {
// //      return arr.reduce(function(aggr, val) {
// //          if(Array.isArray(val)) {
// //              return aggr + sum(val)         //  return aggr + val.reduce(function(aggr, val) {     
// //          }                                  //                     ․․․․
// //          return aggr + val                  //                     return aggr + val
// //      }, 0)                                  //                }, 0)
// //  }
// //  alert(sum([4, 3, [8, 2], [3, 6, [9, 12, 33], 6], 7, 8, 9]))



// //  ինչ է ստացվում որ էս զանգվածի բոլոր անդամներով մենք պտտվում ենք եթե որևէ արժեք մենք ստանանք որը զանգված է մենք իր ներքին բոլոր արժեքների գումարը պետք է ստանանք որպեսզի դա ստանանք մենք կանչում ենք sum,  sum-ը որոշում է էտ զանգվածի գումարումը և մենք էտ գումարումը ընդամենը կպցնում ենք եղած գումարմանը մեր aggr-ին և վերադարձնում ենք, եթե զանգված չի հենց էտ արժեքն ենք գումարում aggr-ին և վերադարձնում արդյունքը
// //  և ինչ է ստացվում որ սա քանի որ ինքը limit չունի էլի անընդհատ հենց զանգվածա տեսնում մտնումա մեջը եթե էտ զանգվածի մեջ զանգվածա տեսնում մտնումա մեջը եթե էտ զանգվածի ու այդպես անընդհատ, կարևոր չի ինչքան զանգված կա զանգվածի մեջ ինքը անընդհատ ուղղակի կպտտվի կպտտվի կհաշվարկի բոլոր իրանց գումարումները և հետ կպտտվի ու ամբողջը մենք կստանանք ամենավերջում
//  
// //  այսինքն որպեսզի մենք անընդհատ չստուգենք եթե զանգված է պետք իր sum-ը հաշվարկենք և նորից կրկնենք էս ամբողջ reduce-ը իր մեջ  դա անիմաստա  մենք արդեն ունենք ֆունկցիա որը գիտի հաշվարկել զանգվածի գումարումը նենց որ եթե մենք հանդիպում ենք զանգված մենք ընդհամենը կանչում ենք էտ ֆունկցիաին որպեսզի հենց էտ գործողությունը անի մեզ համար ոչ թե կրկնենք էտ կոդը անընդհատ գրենք 
// //  բայց միշտ երբ որ մենք ինքնուրույն գրենք կհասնենք ինչ որ մի չափի ինչ որ մի խորության եթե մեզ տրվի զանգված որի մեջ կա զանգված որի մեջ կա զանգված  ավելի շատ քան թե մեր կոդը մեր կոդը չի աշխատի իսկ սենց կապ չունի մեր կոդը կաշխատի 
// //  recursion-ը այ սրանովա շատ հետաքրքիր որ ինքը հնարաորությունա տալիս որ ինչ որ մի լուծում դուք կարողանաք նորից օգտագործեք ինքն իր մեջ 
// //  եթե պարզ չէր կառաջարկեմ debugger-ով քայլեք իր մեջ և ուսումնասիրեք


// // // function sum(arr) {
// // //    let result = 0;
// // //    for(let i = 0; i < arr.length; i++) {
// // //         result = result + arr[i]
// // //    }
// // //    return result
// // // };
// // // alert(sum([1, 2, 3, 4]));
// // //           ||
// // // let arr = [1, 2, 3, 4]
// // // function sum(arr) {
// // //    let result = 0;
// // //    function loop (i) {
// // //     if(i >= arr.length){
// // //         return;
// // //     }
// // //     result = result + arr[i]
// // //     loop(i + 1) 
// // //    }
// // //    loop(0)
// // //    return result
// // // }
// // // alert(sum(arr));
// // //           ||
// // // function sum(arr) {
// // //     function loop(i) {
// // //         if(i >= arr.length) {
// // //             return 0;
// // //         }
// // //         return arr[i] + loop(i + 1)
// // //     }
// // //     return loop(0)
// // // }
// // // alert(sum([1, 2, 3, 4]));
// // 
// // // function sum(arr) {
// // //     if(arr.length <= 0){
// // //         return 0;
// // //     }
// // //     return arr.shift() + sum(arr)
// // // }
// // // alert(sum([1, 2, 3, 4]));
// // 
// // // function sum(arr) {
// // //     function loop(i) {
// // //        if(i >= arr.length) {
// // //            return 0;
// // //        }
// // //        if(Array.isArray(arr[i])) {
// // //            return  sum(arr[i]) + loop(i + 1)
// // //        }
// // //         return arr[i] + loop(i + 1) 
// // //     }
// // //     return loop(0) 
// // // }
// // // alert(sum([4, 3, [8, 2], 3, 4 , [1, [2,3]]]))
// // // // 30




// վարժություն 4
// Ստեղծել <<stringifyJSON>> անունով ֆունկցիա, որն ընդունում է օբյեկտ, որը կարող է ունենալ կամայական խորությամբ ենթաօբյեկտներ և զանգվածներ, և վերադարձնում է JSON տեքստ։ 
// Ձեր ֆունկցիան պետք է վերադարձնի այն, ինչ վերադարձնում է JSON.stringify ֆունկցիան, բայց բնականաբար JSON.stirngify-ը ձեր ֆունկցիայի ներսում օգտագործելու իրավունք չունեք :)

// Հուշում՝ օգտագործել ռեկուրսիա և յուրաքանչյուր արժեքի համար ստուգել դրա տիպը՝ Համապատասխան որոշում կայացնելու համար:

// ---

// Implement a function called stringifyJSON which takes an object that can have an arbitrarily deep nesting of objects and arrays and converts it into a valid JSON string. The output of calling your stringifyJSON should be the same as calling JSON.stringify with the same input. Do not use JSON.stringify, write the logic yourself.

// Hint: Use recursion and check the types of each value to serialize it correctly

// ---

// Օրինակ Ձեր ֆունկցիան ստուգելու համար՝
// Sample data you can use to test your code:

//  {
//      "destination_addresses": [
//          "Washington, DC, USA",
//          "Philadelphia, PA, USA",
//          "Santa Barbara, CA, USA",
//          "Miami, FL, USA",
//          "Austin, TX, USA",
//          "Napa County, CA, USA"
//      ],
//      "origin_addresses": [
//          "New York, NY, USA"
//      ],
//      "rows": [{
//          "elements": [{
//              "distance": {
//                  "text": "227 mi",
//                  "value": 365468,
//                  "isFar": true
//              },
//              "duration": {
//                  "text": "3 hours 54 mins",
//                  "value": 14064
//              },
//              "status": "OK"
//          },
//          {
//              "distance": {
//                  "text": "94.6 mi",
//                  "value": 152193
//              },
//              "duration": {
//                  "text": "1 hours 44 mins",
//                  "value": 6227
//              },
//              "status": "OK"
//          },
//          {
//              "distance": {
//                  "text": "2.878 mi",
//                  "value": 4632197
//              }, 
//              "duration": {
//                  "text": "1 day 18 hours",
//                  "value": 151772
//              },
//              "status": "OK"
//          },
//          {
//              "distance": {
//                  "text": "1,286 mi",
//                  "value": 2069031
//              },
//              "duration": {
//                  "text": "18 hours 43 mins",
//                  "value": 67405
//              },
//              "status": "OK"
//          },
//          {
//              "distance": {
//                  "text": "1,742 mi",
//                  "value": 2802972
//              },
//              "duration": {
//                  "text": "1 day 2 hours",
//                  "value": 93070
//              },
//              "status": "OK"
//          }
//      ]
//      }],
//      "status": "OK"
//  }


// //  const data = {
// //      "destination_addresses": [
// //          "Washington, DC, USA",
// //          "Philadelphia, PA, USA",
// //          "Santa Barbara, CA, USA",
// //          "Miami, FL, USA",
// //          "Austin, TX, USA",
// //          "Napa County, CA, USA"
// //      ],
// //      "origin_addresses": [
// //          "New York, NY, USA"
// //      ],
// //      "rows": [{
// //          "elements": [{
// //              "distance": {
// //                  "text": "227 mi",
// //                  "value": 365468,
// //                  "isFar": true
// //              },
// //              "duration": {
// //                  "text": "3 hours 54 mins",
// //                  "value": 14064
// //              },
// //              "status": "OK"
// //          },
// //          {
// //              "distance": {
// //                  "text": "94.6 mi",
// //                  "value": 152193
// //              },
// //              "duration": {
// //                  "text": "1 hours 44 mins",
// //                  "value": 6227
// //              },
// //              "status": "OK"
// //          },
// //          {
// //              "distance": {
// //                  "text": "2.878 mi",
// //                  "value": 4632197
// //              },
// //              "duration": {
// //                  "text": "1 day 18 hours",
// //                  "value": 151772
// //              },
// //              "status": "OK"
// //          },
// //          {
// //              "distance": {
// //                  "text": "1,286 mi",
// //                  "value": 2069031
// //              },
// //              "duration": {
// //                  "text": "18 hours 43 mins",
// //                  "value": 67405
// //              },
// //              "status": "OK"
// //          },
// //          {
// //              "distance": {
// //                  "text": "1,742 mi",
// //                  "value": 2802972
// //              },
// //              "duration": {
// //                  "text": "1 day 2 hours",
// //                  "value": 93070
// //              },
// //              "status": "OK"
// //          }
// //          ]
// //      }],
// //      "status": "OK"
// //  }


// //  function stringifyJSON(input) {
// //      // undefined
// //      if (input === undefined) {
// //          return input;    // undefined
// //      }
// //  
// //      // null
// //      if (input === null) {
// //          return "" + input  // "" + null // "null"
// //      }
// //  
// //      // NaN
// //      // number
// //      if (typeof (input) === "number") {
// //          if (isNaN(input)) {
// //              return "" + null;  // "null"
// //          }
// //          return "" + input;  // "input"
// //      }
// //  
// //      // boolean
// //      if (typeof (input) === "boolean") {
// //          return "" + input;  // "input"
// //      }
// //  
// //      // string
// //      if (typeof (input) === "string") {
// //          return "\"" + input + "\""   // "\"abc\"" //  ասենք input-ը abc-ա մեզ պետք է վերադարձնել " \"abc\" "  այսինքն "abc" որպես ինֆորմացիա որպես տեքստի ներքին ինֆորմացիա
// //      }
// //  
// //      // function
// //      if (typeof (input) === "function") {
// //          return undefined
// //      }
// //  
// //      // // array
// //      // if(Array.isArray(input)) {
// //      //     return "[" + input.map(stringifyJSON).join(",") + "]"   // սա input.map(stringifyJSON) նույն է ինչպես որ սա input.map(function(val) return stringifyJSON(val))
// //      // }
// //      // // object 
// //      // return "{" + Object.keys(input).map(function(key) {
// //      //     return "\"" + key + "\":" + stringifyJSON(input[key])
// //      // }) + "}"  
// //  
// //  
// //      // // array2    4-րդ կետ /*սխալով*/
// //      // if(Array.isArray(input)) {
// //      //     return "[" + input.filter(function(val) {
// //      //         return typeof(val) !== "function"
// //      //     }).map(stringifyJSON).join(",") + "]" 
// //      // }
// //      // // object2   4-րդ կետ 
// //      // return "{" + Object.keys(input).filter(function(key) {
// //      //     return typeof(input[key]) !== "function"
// //      // }).map(function(key) {
// //      //     return "\"" + key + "\":" + stringifyJSON(input[key])
// //      // }) + "}"  
// //  
// //  
// //      // // array2    4-ի 2-րդ կետ
// //      // if(Array.isArray(input)) {
// //      //     return "[" + input.map(function(val) {
// //      //         if(typeof(val) === "function") {
// //      //             return null
// //      //         }
// //      //         return val
// //      //     }).map(stringifyJSON).join(",") + "]" 
// //      // }
// //      // // object2   4-ի 2-րդ կետ (նույննա լոգիկան ոնց 4-րդ կետի ուղղակի սխալը գալիս էր array-ի լոգիկայից )
// //      // return "{" + Object.keys(input).filter(function(key) {
// //      //     return typeof(input[key]) !== "function"
// //      // }).map(function(key) {
// //      //     return "\"" + key + "\":" + stringifyJSON(input[key])
// //      // }) + "}"  
// //  
// //  
// //      // array3    5-րդ կետ
// //      if (Array.isArray(input)) {
// //          return "[" + input.map(function (val) {
// //              if (val === undefined) {
// //                  return null
// //              }
// //              return val
// //          }).map(function (val) {
// //              if (typeof (val) === "function") {
// //                  return null
// //              }
// //              return val
// //          }).map(stringifyJSON).join(",") + "]";
// //      }
// //      // object3   5-րդ կետ
// //      return "{" + Object.keys(input).filter(function (key) {
// //          return typeof (input[key]) !== "function" && input[key] !== undefined
// //      }).map(function (key) {
// //          const value = input[key]
// //          return "\"" + key + "\":" + stringifyJSON(value);  // եթե անենք "\"" + key + "\":" + input[key]  ամեն անգամ նույն արժեքը կգումարի այսինքն եթե input[key] լինի NaN ինքը հենց NaN էլ կգումարի իսկ stringifyJSON(input[key])-ի դեպքում կգումարի "null"
// //      }) + "}";
// //  
// //  }


// //  1.
// //  նախ և առաջ եկեք հասկանանք երբ որ մենք JSON.stringify() կանչում ենք undefined-ով ինչ է վերադարձնում և ըստ դրան որոշենք
// //  եկեք տեսնենք իրանց վիճակը երբ որ մենք կանչում ենք JSON.stringify() ոնց է վերադարձնում որ սովորենք և էս նույն օրենքները մենք դնենք մեր ֆունկցիայի մեջ
// //  const a = JSON.stringify(undefined)  //  undefined
// //  const s = JSON.stringify(null)       //  "null"
// //  const d = JSON.stringify(NaN)        //  "null"
// //  const f = JSON.stringify(124)        //  "124"
// //  const g = JSON.stringify(true)       //  "true"
// //  const h = JSON.stringify("fdfs")     //  "\"fdfs\""
// //  const j = JSON.stringify([1, 2, 3])  //  "[1, 2, 3]"
// //  const k = alert(JSON.stringify({     //  "{\"name\":\"Joe\", \"age\": 12}"
// //      name: "Joe",
// //      age: 12,
// //  })   )
// //  debugger;

// //  ստեղ սկզբից չէինք նայում function-ի դեպքում ինչա վերադարձնում
// //  const l = alert(JSON.stringify(function() {}))   // undefined
// //  debugger;



// //  2.
// //  եթե մենք ուզում ենք ներսի տեքստի մեջ հենց որպես արժեք ունենանք չակերտ մենք պետքա է անենք այսպես ասած accept(ըսքեփտ)  \   որը նշանակումա հաջորդ չակերտը կամ հաջորդ են ինչ որ մենք անում ենք դա հատուկ է ինքը ոնցոր կոդային չակերտ չի ինքը չի փակում մյուս չակերտը այլ ինքը տենց ուղղակի ընդունի որպես արժեք  "\""  այսա նույն է ինչպես որ տեքստային սա  "    այսինքն տեքստի մեջ կա մի հատ չակերտ
// //  alert("\"")
// //  կտպի "
// //  այսինքն չակերտը նույն էտ ներքին ինֆորմացիաննա

// //  օրինակ եթե abc անեմ ստեղ
// //  alert("abc")
// //  կտպի abc
// //  հիմա եթե ես ուզենամ էտ abc-ն չակերտներով փակեմ ես կանեմ սենց
// //  alert("\"abc\"")
// //  կտպի "abc"
// //  այսինքն էս ամեն ինչը ներքին այսքանը \"abc\"  ներքին արժեքնա տեքստի դրսի չակերտները ընդամենը ասումա որ էն ինֆորմացիան որը իր մեջա տեքստա



// //  3.
// //  եկեք ստուգենք որպեսզի հաստատենք որ նույնն են
// //
// //  alert(JSON.stringify(null) === stringifyJSON(null))
// //  կտպի true
// //
// //  alert(JSON.stringify(NaN) === stringifyJSON(NaN))
// //  կտպի true
// //
// //  alert(JSON.stringify(234) === stringifyJSON(234))
// //  կտպի true
// //
// //  alert(JSON.stringify(true) === stringifyJSON(true))
// //  կտպի true
// //
// //  alert(JSON.stringify("assff") === stringifyJSON("assff"))
// //  կտպի true
// //
// //  alert(JSON.stringify([1, 2, 3]) === stringifyJSON([1, 2, 3]))
// //  կտպի true
// //
// //  alert(stringifyJSON(data) === JSON.stringify(data))
// //  կտպի true
// //
// //
// //  alert(stringifyJSON(function() {}) === JSON.stringify(function() {}))
// //  կտպի true




// //  4.
// //  հիմա կարելի էր նաև մի քանի ուրիշ բաներ անել այստեղ

// //  մենք գիտենք որ օրինակ եթե մենք տալիսենք object որը ունի ֆունկցիաներ JSON.stringify()-ին ինքը էտ ֆունկցիաներին ոնցոր բանի տեղ չի դնում ինքը տեքստը վերադարձնումա բայց տեքստի մեջ ֆունկցիա չկա,
// //  let f = function() {alert("barev")};
// //  alert(JSON.stringify(f))  // կտպի undefined
// //  alert(JSON.stringify([1, f, 2]))  // կտպի [1,null,2]
// //  alert( JSON.stringify({"ad":1, "ds": f, "df":[1, f,2],"fs": 2}));  // կտպի {"ad":1,"df":[1,null,2],"fs":2}

// //  alert(stringifyJSON(f))  // կտպի {}
// //  alert(stringifyJSON([1, f, 2]))  // կտպի [1,2]
// //  alert(stringifyJSON({"ad":1, "ds": f, "df":[1, f,2],"fs": 2}));  // կտպի {"ad":1,"df":[1,2],"fs":2}

// //  array
// //  մենք չունենք էտ տիպի լոգիկա բայց կարող ենք շատ հեշտ ավելացնենք
// //  այսինքն մենք կարող ենք ընդամենը ստեղ մինչև map անելը մենք էս input-ը filter-ացնենք և մեզ պետքա վերադարձնել արժեքը միայն են ժամանակ այսինքն true են ժամանակ երբ որ ֆունկցիա չի typeof(val) !== "function"
// //  այսինքն եթե typeof(val) !== "function" անենք էտ ժամանակ միանգամից էս զանգվածից բոլոր ֆունկցիաները կհանենք հետո նոր էն մնացած մասը որտեղ ֆունկցիա չկա մենք կդարձնենք JSON-ի

// //  object
// //  իսկ այստեղ բանալիները մենք վերցրեցինք դե եկեք նախ և առաջ filter-ացնենք էտ բանալիները,filter ֆունկցիան ընդունում է բանալի և մենք վերադարձնում ենք true էն ժամանակ երբ որ typeof(input[key])-ը (input[key]-ը արժեքն է) հավասար չի function-ին,  այսպես typeof(input[key]) !== "function"
// //  ու էս ժամանակ ինչ կստացվի որ մենք նախ և առաջ filter-ացնում ենք են բանալիները object-ների որոնք որ հղում են դեպի ֆունկցիաներ և էն մնացորդ բանալիները որոնք որ չեն հղում ֆունկցիաներին իրենց վրայով պտտվում ենք և ստանում ենք մեր JSON-ը

// // /* սխալով */
// // alert( JSON.stringify({"ad":1, "ds":f, "df":[1, f, 2], "fs":2}) === stringifyJSON({"ad":1, "ds":f, "df":[1, f, 2], "fs":2}))
// // կտպի false


// //  4.-ի 2-րդ կետ
// //  1.
// //  let f = function() {alert("barev")};
// //  alert(JSON.stringify(f))  // կտպի undefined
// //  alert(JSON.stringify([1, f, 2]))  // կտպի [1,null,2]
// //  alert( JSON.stringify({"ad":1, "ds": f, "df":[1, f,2],"fs": 2}));  // կտպի {"ad":1,"df":[1,null,2],"fs":2}
 
// //  alert(stringifyJSON(f))  // կտպի {}
// //  alert(stringifyJSON([1, f, 2]))  // կտպի [1,null,2]
// //  alert(stringifyJSON({"ad":1, "ds": f, "df":[1, f,2],"fs": 2}));  // կտպի {"ad":1,"df":[1,null,2],"fs":2}
 
// //  array
// //  JSON.stringify() ֆունկցիային երբ որ տալիսենք զանգված որի մեջ կա ֆունկցիա նա այդ ֆունկցիան դարձնումա null
// //  alert(JSON.stringify([1, f, 2]))
// //  կտպի [1,null,2]

// //  այսինք մեզ պետքա ոչ թե filter-ացնել, այլ map անել input-ը և վերադարձնել null եթե այդ արժեքը ֆունկցիա է մնացած դեպքերում նույն արժեքը, և հետո իրենց վրայով պտտվել և ստանալ մեր JSON-ը
// //   input.map(function(val) {
// //      if(typeof(val) === "function") {
// //         return null
// //      }
// //      return val
// //   })

// //  object
// //  նույննա լոգիկանա ոնց 4-րդ կետի ուղղակի սխալը գալիս էր array-ի լոգիկայից

// //  2.
// //  function
// //  let f = function() {alert("barev")};
// //  alert(JSON.stringify(f))  // կտպի undefined
// //  alert(stringifyJSON(f))   // կտպի {}   այսինքն իր մեջ կա տեքստային էս արժեքը "{}"
 
// //  և 4-րդ կետի սխալը Էն էր որ JSON.stringify() ֆունկցիային երբ որ տալիսենք ֆունկցիա նա վերադարձնումա undefined
// //  իսկ մեր stringifyJSON() ֆունկցիային երբ որ տալիսենք ֆունկցիա նա վերադարձնումա "{}" քանի որ մեր stringifyJSON ֆունկցիան բոլոր արժեքների վրա պտտվելուց հետո վերջում վերադարձնում է "{" + ... + "}"
 
// //  այդ լոգիկան ավելացնելու համար պետք է ասենք եթե մեր տված արժեքը(input-ը) ֆունկցիա է այսինք հավասար է ֆունկցիային վերադարձրու undefined
// //  if(typeof(input) === "function") {
// //     return undefined
// //  }
 
// //  let f = function() {alert("barev")};
// //  alert(JSON.stringify(f))  // կտպի undefined
// //  alert(stringifyJSON(f))   // կտպի undefined



// //   5․
  
// // //   let f = function() {alert("barev")};
// // //   alert(JSON.stringify({"ds": 1, "se": undefined, "fs": NaN, "kl": null, "nd": f,"sd": 23, "aa":[1, undefined, NaN, null, f, 2]}))
// // //   JSON.stringify() ֆունկցիան զանգվածի մեջի undefiend, NaN, null, function արժեքները դարձնումա null
// // //   իսկ object-ի մեջի undefiend, function արժեքներին ցույց չի տալիս համարումա չկա իսկ NaN և null արժեքները դարձնումա null
 
// //   վարժություն 5
// //   undefined
// // 1.
// 1 //
// //   object
  
// //   երբ որ JSON.stringify()-ը աշխատումա և հանդիպումա մի զույգ որի արժեքը undefined է ինքը ընդամենը էտ զույգին հանումա իր մեջից ինքը չի էլ օգտագործում դա իր JSON-ի մեջ ոնցոր անտեսումա
// //   alert(JSON.stringify(undefined))
// //   const dat = {
// //       a: null,
// //       b: NaN,
// //       "c": undefined,
// //   }
// //   alert(JSON.stringify(dat))
// //   alert(stringifyJSON(dat))
 
// //   որպեսզի մենք էլ նույնը անենք եկեք ստեղ որտեղ որ մենք բանալիներով object-ի պտտվում ենք և ստեղ filter-ացնում ենք բոլոր բանալիները ում արժեքը ֆունկցիա է այստեղ եկեք նաև filter-ացնենք բոլոր բանալիները ում արժեքը undefined է հետևաբար մենք կունենանք նույն օրենքը նենց որ եկեք ասենք
// //   return typeof(input[key]) !== "function" && input[key] !== undefined;
 
// //   այսինքն ինչա ստացվում որ մենք երբ որ մեր object-ը տեքստաորում ենք JSON-ի ենք վերածում մենք բանալիները էտ object-ների filter-ացնում ենք ու հանում ենք բոլոր բանալիները որոնց արժեքը կամ ֆունկցիա է կամ undefined է ու պահում ենք մնացածը և էտ մնացածի վրայով հետո պտտվում ենք և ստեղծում ենք էտ տեքստերը որոնք որ հետո կպցնում ենք իրար

// 2 //
// // array

// //  եթե մենք ունենք մի հատ ինչ որ մի անուն որը հղում է դեպի զանգվածի և եկեք զանգվածի մեջ դնենք ինչ որ արժեքներ, եթե էս զանգվածի մեջ կա undefined
// //  let f = function() {alert("barev")};
// //  const da = {
// //      a: 344,
// //      c: undefined,
// //      p: f,
// //      /* x: null, */
// //      /* l: NaN,  */
// //      d: [1, 2, undefined,/* null, NaN, f, */ 3, 4]
// //  }
// //  alert(JSON.stringify(da))
// //  alert(stringifyJSON(da))

// //  պարզվում է որ երբ որ ինքը վերածվումա JSON-ին էս undefined-ը դառնում է null որպես տեքստ

// //  քանի որ մենք էտ օրենքը չունենք էս պահին հիմա եթե ես աշխատացնեմ կտեսնենք որ JSON.stringify()-ը ու մեր stringifyJSON-ը նույն արդյունքը չեն տա աշխատացնեմ տվեց false խնդրեմ
// //  alert(JSON.stringify(da) === stringifyJSON(da))
// //  կտպի false

// //  այսինքն որպեսզի էս undefined-ը մեր կոդի մեջ վերադարձնի true մենք կարող ենք պտտվենք բոլոր անդամներով զանգվածի և ստուգենք եթե անդամը undefined չի պահենք իրեն եթե undefiend է դարձնենք null
// //  այսինքն մենք պետքա զանգվածից ստանանք մի հատ ուրիշ զանգված որտեղ որ բոլոր undefined-ները դառել են null ինչպես դա կարելիա անել
// //  array-ի մեջ մինչև filter անելը եկեք map անենք
// //  այդ օրենքնա որ մենք բաց էինք թողել մեր լոգիկայի մեջ ու քանի որ մենք հիմա ավելացրեցինք էտ map ֆունկցիան որը բոլոր undefined-ներին վերածումա null մեր կոդնելա նույն ձևի աշխատում



// //  2.
// //  հիմա այստեղ շատ կարևոր դաս կա սովորելու բոլորիս համար դասը հետևյալն է որ
// //  երբ որ մենք կոդ ենք գրում շատ կարևոր է խորը մտածել թե ինչպես ենք տեստաորելու այդ կոդը որպեսզի հստակ իմանանք նա ճիշտ է աշխատում
// //  էս object-ը որով մենք տեստաորում էինք ինքը բոլոր արժեքները չէր տեստաորում ինքը տեստաորում էր դե տեքստային արժեքներ, զանգված, թիվ կար, բուլյան արժեք կար բայց իրականում մենք գիտենք որ կան լիքը ուրիշ արժեքներ օրինակ undefined null և NaN որի տեստաորումը էստեղ չկար հետևաբար քանի որ այդ օրինակները բացակայում էին մեր տեստաորման կոդի մեջ մեր data-ի մեջ մենք բաց թողեցինք մի օրինակը և հետևաբար ստեղծեցինք կոդ որը հարյուր տոկոս ճիշտ չէր աշխատում
// //  նենց որ պետք է սա ընդունել որպես դաս և ապագայում մի շատ խորը և ուշադիր մտածել թե հերիք չի որ մենք ոնց ենք գրելու կոդը որպեսզի աշխատի նաև պետք է հասկանալ ինչպես պետքա տեստաորել այդ կոդը որպեսզի հստակ իմանանք որ մեր կոդը աշխատում է ճիշտ և առանց թերությունների





// // //  const a = JSON.stringify(undefined)  //  undefined
// // //  const s = JSON.stringify(null)       //  "null"
// // //  const d = JSON.stringify(NaN)        //  "null"
// // //  const f = JSON.stringify(124)        //  "124"
// // //  const g = JSON.stringify(true)       //  "true"
// // //  const h = JSON.stringify("fdfs")     //  "\"fdfs\""
// // //  const j = JSON.stringify([1, 2, 3])  //  "[1, 2, 3]"
// // //  const k = alert(JSON.stringify({     //  "{\"name\":\"Joe\", \"age\": 12}"
// // //      name: "Joe",
// // //      age: 12,
// // //  })   )
// // //  const l = alert(JSON.stringify(function() {}))   // undefined
// //
// // //  let f = function() {alert("barev")};
// // //  alert(JSON.stringify({"ds": 1, "se": undefined, "fs": NaN, "kl": null, "nd": f,"sd": 23, "aa":[1, undefined, NaN, null, f, 2]}))
// // //   JSON.stringify() ֆունկցիան  զանգվածի մեջի undefiend, NaN, null, function արժեքները դարձնումա null
// // //   իսկ object-ի մեջի undefiend, function արժեքներին ցույց չի տալիս համարումա չկա իսկ NaN և null արժեքները դարձնումա null



// // //  function stringifyJSON(input) {
// // //      if (input === undefined) {
// // //          return input // undefiend
// // //      }
// // //
// // //      if (input === null) {
// // //          return "" + input // "" + null // "null"
// // //      }
// // //
// // //      if (typeof (input) === "number") {
// // //          if (isNaN(input)) {
// // //              return "" + null  // "null"
// // //          }
// // //          return "" + input // "input"
// // //      }
// // //
// // //      if (typeof (input) === "boolean") {
// // //          return "" + input  // "input"
// // //      }
// // //
// // //      if (typeof (input) === "string") {
// // //          return "\"" + input + "\"" // "\"input\""
// // //      }
// // //
// // //      if (typeof (input) === "function") {
// // //          return undefined
// // //      }
// // //
// // //      if (Array.isArray(input)) {
// // //          return "[" + input.map(function (val) {
// // //              if (val === undefined || typeof(val) === "function") {
// // //                  return null
// // //              }
// // //              return val
// // //          }).map(stringifyJSON).join(",") + "]"  // առանց join-ի էլա լինում
// // //      }
// // //
// // //      return "{" + Object.keys(input).filter(function (key) {
// // //          return typeof (input[key]) !== "function" && input[key] !== undefined
// // //      }).map(function (key) {
// // //          return "\"" + key + "\":" + stringifyJSON(input[key])
// // //      }) + "}"
// // //
// // //  }
// // //  // let f = function () { alert("barev") };
// // //  // let dataa = { "ds": 1, "se": undefined, "fs": NaN, "kl": null, "nd": f, "sd": 23, "aa": [1, undefined, NaN, null, f, 2] }
// // //
// // //  // alert(JSON.stringify(dataa))
// // //  // alert(stringifyJSON(dataa))
// // //
// // //  // alert(JSON.stringify(dataa) === stringifyJSON(dataa))


// // // ավելի կրճատ ձևը
// // //  function stringifyJSO(input) {
// // //      if(input === undefined || typeof(input) === "function") {
// // //          return input // undefined
// // //      }
// // //
// // //      if(input === null || typeof(input) === "number" || typeof(input) === "boolean" ) {
// // //          if(isNaN(input)) {
// // //              return "" + null // "null"
// // //          }
// // //          return "" + input // "input"
// // //      }
// // //
// // //      if(typeof(input) === "string") {
// // //          return "\"" + input + "\"" // "\"input\""
// // //      }
// // //
// // //      if(Array.isArray(input)) {
// // //          return "[" + input.map(function(val) {
// // //              if(val === undefined || typeof(val) === "function") {
// // //                  return null
// // //              }
// // //              return val
// // //          }).map(stringifyJSO).join(",") + "]"
// // //      }
// // //
// // //      return "{" + Object.keys(input).filter(function(key) {
// // //          return input[key] !== undefined && typeof(input[key]) !== "function"
// // //      }).map(function(key) {
// // //          return "\"" + key + "\":" + stringifyJSO(input[key])
// // //      }) + "}"
// // //  }
// // //
// // //  // let f = function () { alert("barev") };
// // //  // let dataa = { "ds": 1, "se": undefined, "fs": NaN, "kl": null, "nd": f, "sd": 23, "aa": [1, undefined, NaN, null, f, 2] }
// // //
// // //  // alert(JSON.stringify(dataa))
// // //  // alert(stringifyJSO(dataa))
// // //
// // //  // alert(JSON.stringify(dataa) === stringifyJSO(dataa))
