let y = {};

y["age"] = 10; 
y["name"] = "hakob"; 
y["phone"] = "098 234363";
y["address"] = {}; 
y["address"]["city"] = "Yerevan";
y["address"]["street"] = "Baghramyan";

alert(y["address"]["city"]);
alert(y["address"]["street"]);



let person = {
    name: "Jon",
    age: 46,
    address: {
        city: "Yerevan",
        street: "Arshakunyac",
        aprtNum: 52
    },
    friends: [
        {
            name: "Mike",
            age: 23
        },
        {
            name: "Jane",
            age: 34
        }
    ]
};


let f = function(num) {
    return num * 2;
};

let x = [
    {
        y: [f(1), f(10)]
    },
    {
        z: {
            a: {
                b: [f(7), f(9)]
            },
            c: {
                z: [f(20), f(12), f(21)]
            }
        }
    },
    20,
    [
        [7, 5, 2]
    ],
    f
];

alert(x[0].y[1] + x[3][0][2] + x[2] + x[4](5));


