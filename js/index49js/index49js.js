

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




function sumPairExists(a, b, v) {
    for(let i1 = 0; i1 < b.length; i1++) {
        for(let i = 0; i < a.length; i++) {
            if(v-a[i] === b[i1]) {
                return true
            }
        }
    }
    return false
}

alert(sumPairExists([4, 2, 6, 1], [12, 10, 13, 9], 8))




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