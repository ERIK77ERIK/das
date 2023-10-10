// function fun(a) {
//     alert(this)
//     alert(a)
// }

// const obj = {
//     func: fun
// }

// 1. obj.func(5)  // this = obj

// 2. fun(5)       // this = window/undefined

// 3. fun.apply(obj, [5])    // this = obj
//    fun.call(obj, 5)       // this = obj

// 4. const boundFunc = fun.bind(obj)
//    boundFunc(5)     // this = obj

// 5. new fun(5)       // this = {}




// // վարժություն 1
// // Փոխեք այս կոդը այնպես, որ այն alert անի 45

// // const a = {
// //     age: 23,
// //     foo: function(arr) {
// //         arr.forEach(function(val) {
// //             alert(this.age + val)
// //         })
// //     }
// // }
// // a.foo([22])
// // // կտպի NaN


// // ճիշտը
// const a = {
//     age: 23,
//     foo: function(arr) {
//         // alert(this.age);  // 23
//         arr.forEach(function(val) {
//             alert(this.age + val)
//         }.bind(this))
//     }
// }

// a.foo([22])
// //  կտպի 45



// // վարժություն 2
// // ինչ alert կարվի էկրանին և ինչու

// // function zoo() {
// //     alert(this.age)
// // }
// // const b = {
// //     age: 44
// // }
// // const a = {
// //     age: 23,
// //     foo: zoo.bind(b)
// // }
// // a.foo()
// // // կտպի 44


// // սա նույն է ինչպես սա
// function zoo() {
//     alert(this.age)
// }
// const b = {
//     age: 44
// }
// const a = {
//     age: 23,
//     foo: function() {
//         zoo.call(b)
//     }
// }
// a.foo()
// // կտպի 44




// // վարժություն 3
// // Փոխեք այս կոդը այնպես, որ այն alert անի "Mike"

// // const a = {
// //     name: "Joe",
// //     f: function() {
// //         alert(this.name)
// //     }
// // }

// // const b = {
// //     name: "Mike"
// // }

// // a.f()
// // կտպի Joe


// // սա նույն է ինչպես սա
// // function z() {
// //     alert(this.name)
// // }

// // const a = {
// //     name: "Joe",
// //     f: z
// // }

// // const b = {
// //     name: "Mike"
// // }

// // a.f()


// // ճիշտը
// const a = {
//     name: "Joe",
//     f: function() {
//         alert(this.name)
//     }
// }

// const b = {
//     name: "Mike"
// }

// a.f.apply(b)  /// a.f.call(b)   /// a.f.bind(b)()
// կտպի Mike

// // // z.apply(b)  /// .bind(b)????  /// z.bind(b)()



// // վարժություն 4
// // փոխեք այս կոդը այնպես, որ այն ստեղծի նոր Person օբյեկտ

// // function Person() {
// //    this.name = "Mike";
// //    this.age = 33;
// // }

// // const a = Person()
// // alert(a)
// // կտպի undefined

/// alert(window.age)
/// կտպի 33


// // ճիշտը
// function Person() {
//     // this = {}
//     this.name = "Mike";
//     this.age = 33;
//     // return this
// }

// const a = new Person()
// alert(JSON.stringify(a, undefined, 2))
// // կտպի {"name": "Mike", "age": 33}

// alert(new Person().name)
// // կտպի Mike


/* 
function Person(name, age) {
    this.name = name
    this.age = age
}

const a = new Person("Mike", 33)
alert(JSON.stringify(a, undefined, 2))
կտպի {"name": "Mike", "age": 33}

// պետք է հասկանալ որ մենք կարող ենք էս պահին ստեղծենք object-ը երկու ձևով կամ կարող ենք ստեղծենք ինքնուրույն այսպես {} կամ կարող ենք ստեղծենք ֆունկցիա որին եթե new ով կանչենք կստեղծի այդ նոր object-ը և կվերադարձնի
*/



// // վարժություն 5
// // Փոխեք կոդը այնպես, որ ֆունկցիայի գործառույթում this-ը լինի undefined

// // function func() {
// //     alert(this)
// // }
// // func()

// // ճիշտը
// "use strict"

// function func() {
//     alert(this)
// }
// func()





