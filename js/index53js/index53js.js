// // 1.
// // prototypal inheritance(նախատիպային ժառանգություն) ժամանակ object-ները ժառանգում են իրարից
// // classical inheritance(դասական ժառանգություն) ժամանակ մենք ունենք շաբլոններ որոնք որ նկարագրում են մեր object-ներին, շաբլոնները ժառանգում են իրարից և մենք այդ շաբլոններից կարող ենք ստեղծենք object-ներ, այդ շաբլոնները կոչվում են classic


// // 2.
// // ինչպես կարելիա ստեղծել class
// // գրում ենք class իր անունը սկիզբ և վերջ class Dog {}
// // այս շաբլոնը մենք կարող ենք օգտագործենք որպեսզի ստեղծենք object (new Dog()), նույնպես ինչպես որ մենք օգտագործում ենք function constructor-ները
// // դա կվերադարձնի մի հատ նոր object 
// class Dog {
//     // this = {}

//     // return this
// }
// const dog1 = new Dog();
// alert(dog1); // [object Object]
// alert(JSON.stringify(dog1, undefined, 2)); // {}
// // քանի որ մեր շաբլոնը դատարկ է սա կվերադարձնի մի հատ դատարկ object 

/*
function Dog() {
    // thsi = {}

    // return this
}
const dog1 = new Dog();
alert(dog1); // [object Object]
alert(JSON.stringify(dog1, undefined, 2)); // {}
*/


// // 3.
// // այս շաբլոնի մեջ այսինքն class-ի մեջ մենք կարող ենք ավելացնենք ֆունկցիաներ և արժեքներ
// // սա ինչա նշանակումա որ եթե հիմա էս շաբլոնով կամ էս class-ով մենք ստեղծենք նոր object այդ object-ը կունենա մեր ավելացրած ֆունկցիաները և արժեքները
// // այսինքն հիմա մենք կարող ենք անենք օրինակ dog1.talk()
// class Dog {
//     // this = {}
//     baseField = "base field"
//     talk() {
//         alert("woof");
//     }
//     toString() {
//         return "dog";
//     }
//     // return this
// }

// const dog1 = new Dog();

// dog1.talk(); // woof
// alert(dog1.baseField); // base field

/*
// // ի տարբերություն function constructor-ի որի մեջ մենք արժեք ավելացնում էինք this-ին որպեսզի իր ստեղծած object-ից կարողանայնք կարդայնք այդ արժեքը, շաբլոնների(class-ների) դեպքում մենք ուղղակի իր բլոկի ներսում ստեղծելով ֆունկցիա կամ արժեք(առանց this-ին կպցնելու) կարող ենք այդ արժեքը կարդալ իր ստեղծած object-ից
function Dog () {
    // this = {}
    this.baseField = "base field";
    this.talk = function() {
        alert("woof")
      }
    // return this
}

const dog1 = new Dog();

dog1.talk(); // woof
alert(dog1.baseField); // base field

// //  ||
// //  \/

class Dog {
    // this = {}
    baseField = "base field"
    talk = function() {
    alert("woof");
    }
    toString = () => {
    return "dog";
    }
    // return this
}

const dog1 = new Dog();

dog1.talk(); // woof
alert(dog1.baseField); // base field
*/



// // 4.
// // շաբլոնները կամ class-երը ունեն մի հատ ֆունկցիա որը կոչվում է constructor
// // constructor-ը դա էն ֆունկցիան է որը անմիջապես կկանչվի են պահին երբ որ մեր նոր object-ը ստեղծվի

// // շատ-շատ նման է function constructor-ին իմիջայլոց
// // սա ինչա նշանակում
// // որ եթե մենք ստեղ փոխանցենք անունը շունիկի օրինակ "Hafo" դա կգնա կմտնի constructor ֆունկցիայի մեջ
// // և իրեն կարող ենք ստեղ օգտագործենք օրինակ կարող ենք this-ին կպցնենք name (constructor(name) { this.name = name; }),  // this-ը դա այդ նոր ստեղծված object-նա 

// class Dog {
//     // this = {}
//     constructor(name) {
//         this.name = name;
//     }
//     talk() {
//         alert(this.name + " says woof");
//     }
//     toString() {
//         return "dog";
//     }
//     // return this
// }

// const dog1 = new Dog("Hafo");

// alert(dog1.name); // Hafo
// dog1.talk();      // Hafo says woof

// // այսինքն ստեղ երբ որ մենք կանչում ենք new Dog(); , մենք այդ Dog շաբլոնից կամ class-ից ստեղծում ենք մի հատ object, անմիջապես դրանից հետո constructor ֆունկցիան է կանչվում որի this-ը կլինի հենց էտ object-ը և էտ նոր object-ը վերադարձնումա և վերագրում ենք dog1 փոփոխականի մեջ
// // այսինքն հիմա կարող ենք անենք talk() {alert(this.name + " says woof")};
// // այսինքն մենք ունենք շաբլոն կամ class, որը կարող է ունենալ տարբեր ֆունկցիաներ և արժեքներ, նաև constructor որին կարելիա իհարկե փոխանցել ինչ-որ արժեք որը this-ին կարող է կպցնի տարբեր արժեքներ որոնք որ նաև հասանելի են մնացած ֆունկցիաներից, ինչու են հասանելի շատ պարզ որովհետև հիշեք որ մենք կետով ենք կանչում որը նշանակումա որ հիմա այ էս talk()-ի this-ը կլինի այս dog1 object-ը իսկ այս object-ին քանի որ կցած է name-ը հետևաբար ինքը կարողա անի this.name, մենք նաև կարող ենք ուղակի alert անենք dog1.name քանի որ ինքը կցած է հենց this-ին(ստեղծված object-ին)

/*
// // .1. constructor-ը դա էն ֆունկցիան է որը անմիջապես կկանչվի են պահին երբ որ մեր նոր object-ը ստեղծվի
// // .2. ի տարբերություն function constructor-ի որից մենք արժեք ստանում էինք իր կողքի փակագիծներից, շաբլոնների(class-ների) դեպքում մենք փոխանցած արժեքը ստանում ենք constructor ֆունկցիայի կողքի փակագիծներից և այդ արժեքը կարող ենք օգտագործենք այսինքն հասանելի է միայն constructor ֆունկցիայի բլոկի ներսում
// // .3. և միայն constructor ֆունցկիայի բլոկի ներսում կարող ենք ստեղծենք արժեք let-ով, const-ով, և var-ով,որը նույնպես հասանելի է միայն constructor ֆունկցիայի բլոկի ներսում
// // .4. և constructor ֆունկցիայի բլոկի ներսում this-ին(this-ը հղում է դեպի էն object-ին որի մեջ ֆունկցիան աշխատում է, և հիշեք որ this-ը որոշվում է միայն այն պահին երբ մենք function-ին կանչում ենք) կցում ենք արժեք անմիջապես this. անելով ինչպես function constructor-ի մեջ իսկ class-ի բլոկի ներսում կցում ենք this-ին արժեք առանց this. անելու ուղղակի փոփոխականին վերագրում ենք արժեք, օրինակ baseField = "base field"
class Dog {
    // this = {}
    constructor(nam) {
        const a = 9;
        this.name = nam;
    }
    name2 = nam
    name3 = name
    sayA() {
        alert(a)
    }
    talk() {
        alert(this.name + " says woof");
    }
    toString() {
        return "dog";
    }
    // return this
}

const dog1 = new Dog("Hafo");

alert(dog1.name); // Hafo
// .4.
dog1.talk();       // Hafo says woof
// .3.
dog1.sayA();       // ReferenceError: a is not defined
// .2.
alert(dog1.name2); // ReferenceError: nam is not defined
alert(dog1.name3); // դատարկ, մաքուր էջ է տպում

// // ||
// // \/

function Dog(nam) {
    // this = {}
    const a = 9;
    this.name = nam
    this.name3 = name;
    this.sayA = function() {
        alert(a)
    }
    this.talk = function() {
        alert(this.name + " says woof");
    }
    this.toString = function() {
        return "dog";
    }
    // return this
}

const dog1 = new Dog("Hafo");

alert(dog1.name);      // Hafo
// .4.
dog1.talk();           // Hafo says woof
// .3.
dog1.sayA();           // 9

alert(dog1.name3);     // դատարկ, մաքուր էջ է տպում
*/



// // 5.
// // incapsulation-ը մեզ ասում է որ մենք պետք է մեր ներքին խոհանոցը պահենք փագ, այսինքն մեր ներքին ֆունկցիաները և մեր ներքին փոփոխականները պետք է այնպես անենք որպեսզի դրսից օգտագործողները մեր object-ի այսինքն ծրագրաորողները որոնք որ օգտագործում են մեր object-ը չկարողանան մեր ներքին փոփոխականները փոխեն կամ կարդան
// // բայց ստեղ օրինակ պատկերացրեք էս name-ը(որը ներքին արժեքա) մենք չենք ուզում մեկը գա ու մեր name-ը փոխի և դարձնի օրինակ "kachatur", մենք չենք ուզում դա մենք ուզում ենք որ մեր name-ը միշտ լինի Hafo 
// // այսինքն ինչպես կարելիա անել որ մենք ներքին բլոկից ղեակավարենք իրեն բայց դրսից չղեկավարեն
// // իրականում javascript-ում կա այդպիսի թերություն էս պահին հիմա փորձում են մցնել ինչ որ նոր բաներ լեզվի մեջ որպեսզի հնարաորություն լինի կպցնել արժեքներ object-ին որոնք որ անհասանելի են դրսից բայց էս պահին չկա տենց հնարաորություն հետևաբար մենք կարող ենք անենք այսպես _
// // այսպես _ գծիկ կարող ենք ստեղծենք սա կոչվում է underscore(ընդգծել), այս տակի գծիկը կոչվում է underscore, դա ինչ արեց, իրականում ոչ մի բան մեկա հասանելիա մենք կարող ենք ասենք dog1._name = "khachatur" օրինակ փոխենք դարձնենք "khachatur" 
// // այսինքն են փաստը որ էս գծիկը կա չի նշանակում որ ծրագրաորողը չի կարող իրեն կարդա կամ գրի բայց կա էսպիսի ոնց որ չգրված օրենք javascript-ի մեջ որ եթե մենք տեսնում ենք որևէ փոփոխական որը սկսում է underscore-ով մենք իրեն պետքա ձեռք չտանք ոչ պետք է կարդանք, ոչ պետք է փոխենք այսինքն դա սիգնալ է ոնցոր մնացած ծրագրաորողներին որ սա ձեռք մի տուր սա քո գործը չի սա իմ ներքին փոփոխականն է դու գործ չունես 
// // նենց որ էսպիսի կոդ(dog1._name = "khachatur") ուրիշ ծրագրաորողները հիմնականում չեն անի հետևելով այդ օրենքին այսինքն տենց մենք կարող ենք պահպանենք մեր name-ը և հաստատենք որ առաջինը ոչ ոք չի փոխի նրան և երկրորդը չէն կարծի որ սա փոփոխական է որ ես կարող եմ օգտագործեմ որից կարդամ ոչ սա ներքին ոնցոր խոհանոցի մասնիկ է գործ չունեք միայն օգտագործեք էն ինչ որ գծիկով չի օրինակ talk()-ը և toString() այսինքն եթե մենք այս շաբլոնով այս class-ով ստեղծենք մի հատ object, էտ object-ը կունենա _name իրեն կցած նաև talk() և toString() բայց ծրագրաորողները որոնք որ կօգտագործեն այս object-ը միայն կօգտագործեն talk()-ը և toString-ը քանի որ name-ը սկսում է underscore-ով 

// class Dog {
//     constructor(name) {
//         this._name = name;
//     }    
//     talk() {
//         alert(this._name + " says woof");
//     }
//     toString() {
//         return "dog";
//     }
// }

// const dog1 = new Dog("Hafo");

// dog1._name = "Kachatur";
// dog1.talk();  // Kachatur says woof



// // 6.
// // հիշեցում toString()-ից(1, 2), extends(3), եթե երկու toString()-ենք ունենում առաջինը կստուգվի թե toString()-ը կա հենց էն շաբլոնում որից ինքը ստեղծվել է թե չէ եթե ունի անմիջապես դա է կանչվում եթե չունի նոր իրա ժառանգված toString()-նա կանչում(4), ինչ է super-ը, super-ը օգտագործելու երկու տարբերակները(5, 5.1, 5.2)
// // .1.
// // հիշեցում toString()-ից

// // եթե հիշում եք toString()-ը դա այն ֆունցկիան է որը ավտոմատ կկանչվի են պահին երբ որ մենք ուզենանք ցանկացած object դարձնենք տեքստ այսինքն եթե մենք alert անենք հիմա dog1 ինքը տակից դե պետք է տեքստ ստեղծի որպեսզի նկարի alert պատուհանի մեջ այսինքն ինքը տակից իրականում կկանչի toString() function-ը որը կվերադարձնի անունը որը կլինի Hafo 
// class Dog {
//     constructor(name) {
//         this._name = name;
//     }
//     talk() {
//         alert(this._name + " says woof");
//     }
//     toString() {
//         return this._name;
//     }
// }

// const dog1 = new Dog("Hafo");

// alert(dog1);             // Hafo
// alert(dog1.toString());  // Hafo


// // .2.
// // շատ սիրուն շունիկ ստեղծեցինք այս շաբլոնով հիմա եկեք ստեղծենք կատու
// // դե մեզ պետք է շաբլոն որպեսզի նկարագրենք կատվին բայց դե կատուն էլ ունի անուն կատուն էլ գիտի խոսալ և կատուն էլ ունի toString()-ը նենց որ եկեք էս ամենը copy անենք և անունը փոխենք դարձնենք Cat ուղղակի ստեղ woof-ի տեղը ասումա mew, բայց քիչ թե շատ մնացածը մնում է նույն է 
// // հիմա մենք այս նոր class-ով կամ շաբլոնով կարող ենք ստեղծենք կատու

// class Dog {
//     constructor(name) {
//         this._name = name;
//     }    
//     talk() {
//         alert(this._name + " says woof");
//     }
//     toString() {
//         return "dog";
//     }
// }

// class Cat {
//     constructor(name) {
//         this._name = name;
//     }
//     talk() {
//         alert(this._name + " says mew");
//     }
//     toString() {
//         return this._name;
//     }
// }

// const cat1 = new Cat("Phiso");

// alert(cat1);  // Phiso
// cat1.talk();  // Phiso says mew


// // ․3.
// // extends ինչպես կարելի է անել որ շաբլոնները,class-երը կարողանան ժառանգեն իրարից

// // եթե նկատել եք այս երկու class-երը գրեթե նույն են դե միքիչ տարբերություն կա ասենք talk()-ի մեջ բայց ասենք toString()-ը նույննա constructor-ը նույննա 
// // նայեք ինչ կարող ենք անենք 
// // մենք չենք սիրում շատ կոդ գրել մենք չենք սիրում նույն կոդը անընդհատ կրկնել նենց որ կարելիա անել շատ խելացի բան մի հատել class ստեղծել որի անունի թող լինի Animal(կենդանի), հիմա էս constructor()-ը և toString()-ը եկեք copy անենք և փաստ անենք Animal-ի մեջ
// // հիմա մենք ունենք class որը ունի էտ constructor-ը և toString-ը, հիմա մենք կարող ենք ասենք Dog ես ուզում եմ որ դու ժառանգես Animal class-ից (class Dog extends Animal {})
// // հիմա մենք այս constructor-ը կարող ենք ջնջենք հանենք և toString-ը ջնջենք հանենք Dog-ի մեջից, նույնը կարող ենք անենք կատվի հետ
// // հիմա Dog class-ը ժառանգում է Animal class-ից, ինչա նշանակում որ երբ որ մենք ստեղծենք նոր object այս Dog-ով ինքը քանի որ constructor չունի կգնա իրա ծնողի բլոկի մեջ կնայի constructor ունի, եթե ունի անմիջապես դա կօգտագործի 
// // երբ որ մենք alert ենք անում dog1 ինքը փորձում է իրեն տեքստ դարձնել որպեսզի նկարի էկրանի վրա, ինչպես դարձնի տեքստ կանչում է իր toString() ֆունկցիան, տենցա իրեն տեքստաորում, բայց եթե object-ին տեքստաորումա toString()-ով բայց Dog-ը չունի toString() նայումա Dog-ը ումիցա ժառանգում Animal-ից գնումա Animal-ի մեջ տեսնումա կա toString() և իրեն օգտագործումա 

// // սա շատ հարմար բան է և սա էն ամենա կարևոր մասն է classical inheritance(Դասական ժառանգություն)-ի, որ շաբլոնները կամ class-երը կարողանում են իրարից ժառանգել հետո իրենց օգտագործելով մենք կարող ենք ստեղծենք նոր object-ներ

// class Animal {
//     constructor(name) {
//         this._name = name;
//     }
//     toString() {
//         return this._name;
//     }
// }

// class Dog extends Animal {
//     talk() {
//         alert(this._name + " says woof");
//     }
// }

// class Cat extends Animal {
//     talk() {
//         alert(this._name + " says mew");
//     }
// }

// const dog1 = new Dog("Hafo");

// dog1.talk(); // Hafo says woof
// alert(dog1); // Hafo



// // .4.
// // եթե մենք ստեղծում ենք dog1 Dog շաբլոնով և կանչում ենք toString() առաջին հերթին կստուգվի թե toString()-ը կա հենց էն շաբլոնում որից ինքը ստեղծվել է թե չէ այսինքն նայում ենք Dog շաբլոնի մեջ եթե ունի անմիջապես դա է կանչվում եթե չունի նոր իրա ժառանգված toString()-նա կանչում 

// class Animal {
//     constructor(name) {
//         this._name = name;
//     }
//     toString() {
//         return this._name;
//     }
// }

// class Dog extends Animal {
//     talk() {
//         alert(this._name + " says woof");
//     }
//     toString() {
//         return "Dog";
//     }
// }

// class Cat extends Animal {
//     talk() {
//         alert(this._name + " says mew");
//     }
// }

// const dog1 = new Dog("Hafo");

// dog1.talk(); // Hafo says woof
// alert(dog1.toString()); // Dog



// // .5.
// // ինչ է super-ը

// // պատկերացրեք մենք մեր toString()-ի մեջ ուզում ենք նաև կանչենք ծնողի toString()-ը այսինքն ժառանգված toString()-ը 
// // ինչպես դա կարելիա անել
// // super նշանակում է իմ ծնող շաբլոնը իմ ծնող class-ը 
// // այսինքն սա ինչ է ասում սա ասումա երբ որ իմ toString()-ը կանչվի ես կվերադարձնեմ մի հատ տեքստ որը կլինի "Dog named " որին ես կկպցնեմ էս գործողությունի(super.toString()) արդյունքը 
// // իսկ էս գործողությունը super.toString() ինչ է ասում
// // super նշանակումա իմ ծնողը այսինքն էն շաբլոնը ումից ես ժառանգում եմ  ․toString() 
// // այսինքն սա ինչա ստացվում որ կասի էս իմ toString()-ը չի այլ են շաբլոնի toString()-նա ումից ես ժառանգում եմ որ ես չլինեյ էտ կլիներ այ էտ ում ես ուզում եմ կանչեմ հետևաբար կգնա վերև ու կասի ինչ toString() էինք մենք ժառանգում եթե էս մեկը չլիներ հետևաբար super.toString()-ը կկանչի toString() { return this._name}

// // super-ը օգտագործվում է երկու ձևով մեկը սա է
// // ․5.1 ինչպես է օգտագործվում super-ը
// class Animal {
//     constructor(name) {
//         this._name = name;
//     }
//     toString() {
//         return this._name;
//     }
// }

// class Dog extends Animal {
//     talk() {
//         alert(this._name + " says woof - " + this.toString());
//     }
//     toString() {
//         return "Dog named " + super.toString();
//     }
// }

// class Cat extends Animal {
//     talk() {
//         alert(this._name + " says mew");
//     }
// }

// const dog1 = new Dog("Hafo");

// dog1.talk(); // Hafo says woof - Dog named Hafo
// alert(dog1.toString()); // Dog named Hafo


// // ․5.2 ինչպես է օգտագործվում super-ը
// // պատկերացրեք մենք ուզում ենք ունենանք մեր սեփական constructor-ը 
// // մենք կարող ենք սենց անենք բայց էս ժամանակ քանի որ ծնողն է ունի constructor մենք անպայման պետք է նաև ծնող constructor-ին կանչենք 
// // անպայման և դա հիմնականում պետք է անել հենց առաջի տողում մեր constructor ֆունկցիայի
// // օրենքը նենցա որ պետք է անպայման ծնող constructor-ին կանչել միչև this-ը օգտագործելը 
// // ինչպես ենք կանչում ծնող constructor-ին այսպես չենք անում super.constructor(); դրա տեղը ընդամենը կանչում ենք այսպես super();
// // հիմա մեր ծնող constructor-ը սպասում է անուն հետևաբար մենք այս անունը(name-ը) փոխանցում ենք իրեն super(name);
// // հիմա ինչ է ստացվում որ մեր շունիկը ունի իր սեփական constructor-ը որը նախնական կկանչի ծնողի constructor-ին որպեսզի ինքը իր գործողությունը անի, հետո կարողա ավելորդ ինչ որ գործողություններ անի օրինակ ավելացնի նաև տարիք մեր Dog-ին որպեսզի մեր շունը բացի անունից ունենա նաև տարիք (this._age = age)

// // հիմա մեր dog1-ը կունենա _name = "Hafo", _age = 18, talk() և toString() ֆունկցիաներ էսքանը պարզ է հույսովեմ 

// // այսինքն super-ը են հատուկ անուն է որի միջոցով մենք կարող ենք մեր շաբլոնից(class-ից) խոսալ մեր ծնող class-ի հետ
// // constructor-ի մեջ մենք կանչում ենք հենց super()-ին որպես ֆունկցիա որպեսզի ծնողի constructor-ին կանչենք սա անպայման է առանց դրա չի աշխատի 
// // իսկ ուրիշ տեղերում ուրիշ սովորական ֆունկցիաներում մենք կարող ենք անենք super ու կետ ու կանչենք ինչ որ ֆունկցիա որը նշանակումա կանչիր ծնողի ֆունկցիան ոչ թե իմ local ֆունկցիան էն ֆունկցիան որ ես եմ ստեղծել իմ շաբլոնի մեջ 

// class Animal {
//     constructor(name) {
//         this._name = name;
//     }
//     toString() {
//         return this._name;
//     }
// }

// class Dog extends Animal {
//     constructor(name, age) {
//         super(name);
//         this._age = age;
//     }
//     talk() {
//         alert(this._name + " says woof - " + this.toString());
//     }
//     toString() {
//         return "Dog named " + super.toString();
//     }
// }

// class Cat extends Animal {
//     talk() {
//         alert(this._name + " says mew");
//     }
// }

// const dog1 = new Dog("Hafo", 18);

// dog1.talk(); // Hafo says woof - Dog named Hafo
// alert(dog1.toString()); // Dog named Hafo



// // 7.
// // Ամփոփում
// // մենք հասկացանք երեք կարևոր կոնցեպտներ 
// // ․1. առաջինը որ մենք ունենք շաբլոններ(class-եր) ում մենք ստեղծում ենք շատ պարզ գրում ենք class իր անունը () {} որի մեջ էլ դնում ենք լիքը-լիքը արժեքներ երբ որ մենք ստեղծում ենք մի հատ object այդ class-ը օգտագործելով այդ object-ը ունենում է այդ արժեքները իր մեջ
// // constructor()-ը դա մի հատ հատուկ ֆունկցիա է որը մենք դսից չպետքա օգտագործենք ինքը ուղղակի մի ֆունկցիա է որը աշխատում է են պահին երբ որ object-ը ստեղծվում է, ինքը իր մեջ ընդունում է այն արժեքները որը մենք փոխանցում ենք են պահին երբ կանչում ենք, հետո ինքը ինչ որ գործողություննա անում օրինակ կարող է կպցնի այդ արժեքները իրեն և այլն 
// // ․2. երկրորդը այն է որ մեր շաբլոնները մեր class-երը կարող են ժառանգեն իրարից extends օգտագործելով այսինքն սա class Dog extends Animal {} նշանակումա ստեղծում ենք մի շաբլոն ում անունը Dog է որը ժառանգում է Animal շաբլոնից սա նշանակումա որ հիմա այն ֆունկցիաները որոնք որ Dog-ի մեջ չլինեն ինքը անմիջապես ուղղակի կժառանգի Animal-ից 
// // ․3. և մենք պետք է մեր constructur-ից ամպայման կանչենք մեր ծնող class-ի constructor-ին ինչպես ենք դա անում կանչելով super(name) ֆունկցիան և փոխանցելով էն ինֆորմացիան որը ծնող constructor-ը սպասում է օրինակ էս պարագայում անուն ենք փոխանցում, մենք նաև կարող ենք կանչենք ցանկացած ֆունկցիա որը կցած է մեր ծնող class-ից, այն class-ից որից մենք ժառանգում ենք super օգտագործելով այսինքն անում ենք super. և անունը էտ ֆունկցիայի որը ուզում ենք կանչենք որը մենք ժառանգում էինք ու մենք անմիջապես հենց այդ ժառանգված ֆունկցիան կարողանում ենք կանչենք այդպես



// // 8.
// // instanceof(օրինակ)
// // երբ որ մենք օգտագործում ենք Dog class-ը որպեսզի ստեղծենք dog1-ին մենք ապագայում կարող ենք ասենք այս dog1-ը, այն object-ը որը dog1-ի մեջ է այս Dog շաբլոնիցա ստեղծված թե չէ
// // ինչպես որ կարողանում էինք ասել function constructor-ի դեպքում
// // դա անում էինք այսպես dog1 instanceof Dog

// class Animal {
//     constructor(name) {
//         this._name = name;
//     }
//     toString() {
//         return this._name;
//     }
// }

// class Dog extends Animal {
//     constructor(name, age) {
//         super(name);
//         this._age = age;
//     }
//     talk() {
//         alert(this._name + " says woof - " + this.toString());
//     }
//     toString() {
//         return "Dog named " + super.toString();
//     }
// }

// class Cat extends Animal {
//     talk() {
//         alert(this._name + " says mew");
//     }
// }

// const dog1 = new Dog("Hafo", 18);

// alert(dog1 instanceof Dog);    // true
// alert(dog1 instanceof Cat);    // false
// alert(dog1 instanceof Animal); // true
// // այսինքն ինչ է ստացվում որ այս dog1 object-ը հերիք չի որ կարելիա ասել որ ինքը շուն է ինքը նաև կենդանի է





// // 9.
// // ․1. ուղղակի canvas-ը (Canvas 5),  
// // .2. canvas-ը encapsulation կոնցեպտով, 
// // .3. canvas-ը Դասական ժառանգություն(Classical Inheritance)-ով առանց extends անելու
// // .4. canvas-ը Դասական ժառանգություն(Classical Inheritance)-ով extends անելով
/* 
    .1. 1
    հակարակորդա ձախ կողմը հասնելուց աջ կողմիցա գալիս

    .1. 2 
    առանց EXTENDS անելու
    որպեսզի գտնենք ավելացած կոդը

    .1. 3
    EXTENDS անելով
    որպեսզի գտնենք ավելացած կոդը

    ավելացած կոդ չկա, անցնում գնումա հակարակորդը
*/



// // պրակտիկ օրինակ
// // .1.
// // ուղղակի canvas-ը (Canvas 5)

// const canvas = document.querySelector("canvas")
// const context = canvas.getContext("2d")

// const backgroundImg = document.createElement("img")
// backgroundImg.src = "data:image/jpeg;base64,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"

// const heroImg = document.createElement("img")
// heroImg.src = "https://w7.pngwing.com/pngs/311/300/png-transparent-pacman-pac-man-game-computer-game-baddie-arcade-warrior-japanese-ninja-thumbnail.png"

// const starImg = document.createElement("img")
// starImg.src = "data:image/jpeg;base64,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"

// const audio = document.createElement("audio")
// audio.src = "http://novastar-main.co.hays.tx.us/NovaStar5/sounds/laser.wav"

// const rabbitImg = document.createElement("img")
// rabbitImg.src = "data:image/jpeg;base64,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"

// const stabAudio = document.createElement("audio")
// stabAudio.src = "http://sistemas7.sead.ufscar.br:8080/jspui/bitstream/123456789/2261/2/duck.wav"

// let data = {
//     hero: {
//         xDelta: 0,
//         yDelta: 0,
//         x: 10,
//         y: 140,
//         width: 100,
//         height: 100
//     },
//     bullets: [],
//     rabbits: []
// }

// //

// function intersect(rect1, rect2) {
//     const x = Math.max(rect1.x, rect2.x),
//     num1 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width),
//     y = Math.max(rect1.y, rect2.y),
//     num2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);

//     return (num1 >= x && num2 >= y)
// }

// //

// function update() {
//     data.hero.x += data.hero.xDelta
//     data.hero.y += data.hero.yDelta

//     data.bullets.forEach(function(bullet) {
//         bullet.x += bullet.xDelta
//     })

//     data.bullets = data.bullets.filter(function(bullet) {
//         if(bullet.x > canvas.width) {
//             return false
//         }
//         return true
//     })

//     data.bullets.forEach(function(bullet) {
//         data.rabbits.forEach(function(rabbit) {
//             if(intersect(rabbit, bullet)) {
//                 stabAudio.currentTime = 0
//                 stabAudio.play()

//                 bullet.deleteMe = true
//                 rabbit.deleteMe = true
//             }
//         })
//     })

//     data.bullets = data.bullets.filter(function(bullet) {
//         return bullet.deleteMe !== true
//     })
//     data.rabbits = data.rabbits.filter(function(rabbit) {
//         return rabbit.deleteMe !== true
//     })

//     data.rabbits.forEach(function(rabbit) {
//         rabbit.x += rabbit.xDelta
//     })

//     if(data.rabbits.length === 0) {
//         data.rabbits.push({
//             xDelta: -1,
//             x: canvas.width - 100,
//             y: data.hero.y,
//             width: 100,
//             height: 100
//         })
//     }
// }

// function draw() {
//     context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
//     context.drawImage(heroImg, data.hero.x, data.hero.y, data.hero.width, data.hero.height)

//     data.bullets.forEach(function(bullet) {
//         context.drawImage(starImg, bullet.x, bullet.y, bullet.width, bullet.height)
//     })

//     data.rabbits.forEach(function(rabbit) {
//         context.drawImage(rabbitImg, rabbit.x, rabbit.y, rabbit.width, rabbit.height)
//     })
// }

// function loop() {
//     requestAnimationFrame(loop)

//     update()
//     draw()
// }
// loop()

// document.addEventListener("keydown", function(evt) {
//     if(evt.code === "ArrowRight") {
//             data.hero.xDelta = 1
//         } else if(evt.code === "ArrowLeft") {
//             data.hero.xDelta = -1
//         } else {
//             audio.currentTime = 0
//             audio.play()
//             data.bullets.push({
//             xDelta: 5,
//             x: data.hero.x + data.hero.width,
//             y: data.hero.y + data.hero.height/2,
//             width: 20,
//             height: 20
//         })
//     }
// })

// document.addEventListener("keyup", function(evt) {
//     data.hero.xDelta = 0
// })



// // .1. 1
// // հակարակորդա ձախ կողմը հասնելուց աջ կողմիցա գալիս

// // առանց EXTENDS անելու
// // ավելացած կոդը
// // class Rabbit-ի մեջի update ֆունկցիայի մեջի
// // if((this._xDelta < 0 && this._x + this._width < 0) || (this._xDelta > 0 && this._x > canvas.width)) {
// //     this.deleteMe = true;
// // }
// // data.rabbits = data.rabbits.filter((rabbit) => rabbit.deleteMe !== true)

// // ավելացած կոդը
// // որ հակարակորդը աջ կողմից գալուց նկարի սկզբից սկսի
// // մյուս if-ի տեղը
// // data.rabbits.push(new Rabbit(canvas.width, 140, 100, 100););


// const canvas = document.querySelector("canvas")
// const context = canvas.getContext("2d")

// const backgroundImg = document.createElement("img")
// backgroundImg.src = "data:image/jpeg;base64,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"

// const heroImg = document.createElement("img")
// heroImg.src = "https://w7.pngwing.com/pngs/311/300/png-transparent-pacman-pac-man-game-computer-game-baddie-arcade-warrior-japanese-ninja-thumbnail.png"

// const starImg = document.createElement("img")
// starImg.src = "data:image/jpeg;base64,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"

// const audio = document.createElement("audio")
// audio.src = "http://novastar-main.co.hays.tx.us/NovaStar5/sounds/laser.wav"

// const rabbitImg = document.createElement("img")
// rabbitImg.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIgAiAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBQYHBAj/xAA6EAABAwMABwQIBQQDAQAAAAABAAIDBAURBhIhMUFRkRNhcrEHIjM0UnHB0RQjMoGhFUKS8ENi4ST/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAeEQEBAAIDAQADAAAAAAAAAAAAAQIREiExQQNRYf/aAAwDAQACEQMRAD8A7WiKklxdqsAzjO3ggqRRqTc4+hTs5vij6FBKKOzm+KPoU7Ob4mdCglFHZzfEzoU7Ob4mdCglFHZzfEzoU7Ob4o+hQSijs5viZ0KdnN8TOhQSijs5vij6FOzm+KPoUEoo1JucfQqASHFrwAQM7NxQVIiICiP258H1UqI/bnwfVBeREQFKhWqypio6aSoqHakUbS5zjwCCKurgooHz1UrIomDLnOOAFp1X6RqWKfVpaCWeIHGu6TUz8hgrTtLNJZrvUGSVxjpWH8mLO4cz3polopdNJY21zpG0Nsd7KRzNaSbva3g3kTv4Ajatak9Y3b46zY7vT3qgbV0oeG6xa5rxgtcN4XvXis1sp7Rb46KkDuzZ/c45c4neT3rxXjSe12hxjqJjJMP+GIazv34D91Gt69ZpFocnpHhD/wAq2vczO90oB6YKz9g0pt97JjhLoqkDJhkxkjmOaaJZWdREUUCsP94PgHmVfCsP94PgHmUFSIiAoj9ufB9VKiP258H1QXkREErn3pRujo2U9ua7DXDtpe8ZwPIldAXI/SzSOqb4xkdQGB9K1r8bS0hzt3zz/C1j6xn41Sz2iXSqvcJJRSWandmsrJXarWt4taT/AHEZ+W88AehV2n8LRHbtFKJ9VqNDI3tiJAaNg1WjbjvK5pNZ6aobE2qfPOYQBGZJM6g/6t/S3cNwCptc160Sun9TstXJM12BNBKcslaP7XAfwRtHVao2m63LShtR/wDfFd2yHcGxvA/bV2Kq1aHaRXxxe+P+m0529tVtJe49zMg9cfuumaKaS0Ok9rbWULi17fVmgefWidyP0PFZtZ5VeMcYr/RnpXTnWorhQVreR1oXdDkfylk0R01huNO6SggpxFI13bvqWkDB2kBpJK7OinKrqA3IiKKKw/3g+AeZV9WH+8HwDzKCpERAUR+3Pg+qlRH7c+D6oLrjhpPILzUE3bQ+t+oE56r1LDQy/gri+J59Rxx1VjN6e6618NsoJ6ypP5cTckczwC4Jfb7U1xr7s2CWpZE/NQ+Fus2LO4E8Atz9PVdV01nttPTucyKpqHNkc08QNg81yrRPSGS00FfQxwQFs7XwyP1TrmN2dh24I2kjI2ErU8S93tNnvNyv93p7ZaKJ0tRO7VbrSYA5k7NgA2rO6UCo0VrBR3CenqZuzMkjKdxcYwMfq2bN6w1guTNHbi242uNzKlocAXYI2gg7P3Vi/wB4qLmKiSdtPEZQBIYYGMdJjdrOA1nbhvJV1TpntG7+62V7L1Zn5DdlRBnAlZxB+h4FfQFpuVLd7dT19C/XgnZrNPEcweRB2EL5Lt0z7fUUoB2yAse3O8LuHoMqp5KG7UxGaWKZj4znc5wOsMcNjWn91MieuoIiLDbyVlY2mnpoz/zSann9l6+G1az2/wDUtK444zmKkYXOxz4f73rZlQVh/vB8A8yr6sP94PgHmVBUiIgKI/bnwfVSoj9ufB9UF5Ym/UuvEJ2g5bsdjkssVS9rXsLHAFpGCDySdJY0XTS3zaWaBVtHBF21xpnNfG0by9pByO8tJx81wGotN4ppNSvtdfBO3Z2wpXjPz2bV2i/6UP0fu01JZpIqitA7OXXGtHG3OxzgCMuG3YDxIWC0k00vrq+qqrXXTUofA2IMOHAAb3BpyGuO3nyyVub+JevXKJHVzXFrHsdg4Pq4LT3g7ldbE4AOlk13/E7cPkvVSQNqpJpXyPfUveXOe92S8naSTz2/ysrDTQQaucSzHnuH2+a0jC01vnqJw9jXF52Ne76BbHDDHa2spqSQCrn2OlztPM/LfsVJqRFG40wbJINjpXHDG93/AIFl/RnY7XpPNf2XztZKinhjlgqWPcwxD1s4A2bwDg703pPW72D0gQ2e3QUt7afw1PG2NtS05cGtGAXA7zzI6LdLxeIYbM2rp5A4VMYMLhxBGdYft9F831dwpqmqZBVhsjWxhxB3Enu/3etv0euV1qZo5H0FfX2h0+HMjBe6MZ1nNjG/VxwHyCxZJ23ju9OuaIUJp6A1UoImqjrnPBvD7rPKAAAABgcApWVFYf7wfAPMq+rD/eD4B5lBUiIgKI/bnwfVSoj9ufB9UF5CiFBx70kf0qyyOs9npGS19VK2pMMWS9p3EnYS4kDYN/HctBqa2oeXOlpZGxfhjL2jRrNABIOSNg28127RvRGW26T3W+3SaGpqalxMD2g5jaTtG3uDR8hwWA0gvtuttHcLdo610f4qRz56gP2NJ/UGA7hsxsx3K4TXifk431y292mgtNwZQ2a5S1kzYh+MmLcNE3FrW/8AXcdp27M7DjzxUFS7PaSSgAet+SdvzOV7GwB9Q19PA8PLg8nX2P25JcDw4Z3leczVj530jZZmua313vOQxu3PHaSSPkreXxvG4a7USwxauH1DnkbmggNH7DOFunoXuFBT3O92yvqIoY66CMRiaYM1yC8Oa3O84cOi1N9NKWhs2q/Gx7mvdH8s43g81VSW+BssbjRgu7T1mTASNI3YcPhP+4Ukv0tx+Op1Whdh0T0SuVLTxy3CsuurBE+d4MkjzsjDSAMAZzsVs6J6XaN0VJVWe9Or30seJKWSIZxvLW7y4d2w8jwV30dR2eaopoxG+kno+0dT0TpzLFl2MvjLvW3D9JzjPFdLUs/aTLXjXtENKINI6V3qdhWRbJqcnOO8cx5blsKx1HZLdR3KpuNPTMbV1H65Omccs4yeZWRQv8FYf7wfAPMq+rD/AHg+AeZRFSIiAoj9ufB9VKiP258H1QXkRCcILVVF29NLCHFvaMLdYcMjGV8+3ulrbdVOoK+nEU7OL/0uHxN5hfQMkuAuZ+lmhfpNa2Npa2FgodadtO5uHTOwW4B3g4zs7+jnMfThy7cuuF5p7fF2McgdUP3nft5u5DuXrs0MUMMrp3h8kwy92c5BWs01luck8TobPNLqvDtSeIta7Bzh2cbDx2hfQ8MGhwpoYRZbcGRj1WfhGnVPTmt3LTPFyG2MrZ7fJWupZ/w1PKYvxep+W7uz596PaAGmmfgcGk7W+E8u5d2jvttjiEMYa2IDVEYZhoHLC576TbXQV1kLtGKGkir+2a6UxtMb3s25DTuznG/eMqcjixOgD31umVvpqiphjdGTOBnVc/V4fPJGzlld3XzDoVotWVt2M1VK+1Gic2oE8zCHueDkamdhdkZ6L6Mt9wbNEGiUTOYAHSAYDu/ltWcspy01MbrbJIrbZMq4EAKw/wB4PgHmVfCsP94PgHmUFSIiAoj9ufB9VKpIIdrMIBxjbxQX0VjXm5x/4n7prTc4+h+6C6WNO8Kkwg8SqNabnH0P3TWm5x9D90EOpGFU/go+Q6KvWm5x9D901pucfQ/dBR+Bi+Ef4qRRxjh/Cq1pucfQ/dNabnH0P3QG0zRuyFWIWhUa03OPofumtNzj6H7oLwYApwrGtNzj6H7prTc4+h+6D0Lzv94PgHmVOvNzj6H7qADrFzzlx5DACCpERAREQEREBERAREQEREBERAREQEREBERB/9k="

// const stabAudio = document.createElement("audio")
// stabAudio.src = "http://sistemas7.sead.ufscar.br:8080/jspui/bitstream/123456789/2261/2/duck.wav"

// let data = {
//     hero: {
//         xDelta: 0,
//         yDelta: 0,
//         x: 10,
//         y: 140,
//         width: 100,
//         height: 100
//     },
//     bullets: [],
//     rabbits: []
// }

// //

// function intersect(rect1, rect2) {
//     const x = Math.max(rect1.x, rect2.x),
//     num1 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width),
//     y = Math.max(rect1.y, rect2.y),
//     num2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);

//     return (num1 >= x && num2 >= y)
// }

// //

// function update() {
//     data.hero.x += data.hero.xDelta
//     data.hero.y += data.hero.yDelta

//     data.bullets.forEach(function(bullet) {
//         bullet.x += bullet.xDelta
//     })

//     data.bullets = data.bullets.filter(function(bullet) {
//         if(bullet.x > canvas.width) {
//             return false
//         }
//         return true
//     })

//     data.bullets.forEach(function(bullet) {
//         data.rabbits.forEach(function(rabbit) {
//             if(intersect(rabbit, bullet)) {
//                 stabAudio.currentTime = 0
//                 stabAudio.play()

//                 bullet.deleteMe = true
//                 rabbit.deleteMe = true
//             }
//         })
//     })

//     data.bullets = data.bullets.filter(function(bullet) {
//         return bullet.deleteMe !== true
//     })

//     // ավելացած կոդը
//     data.rabbits.forEach(function(rabbit) {
//         if((rabbit.xDelta < 0 && rabbit.x + rabbit.width < 0) || (rabbit.xDelta > 0 && rabbit.x > canvas.width)) {
//             rabbit.deleteMe = true;
//         }
//     })

//     data.rabbits = data.rabbits.filter(function(rabbit) {
//         return rabbit.deleteMe !== true
//     })

   
//     data.rabbits.forEach(function(rabbit) {
//         rabbit.x += rabbit.xDelta
//     })

//     if(data.rabbits.length === 0) {
//         data.rabbits.push({
//             xDelta: -1,
//             x: canvas.width - 100,
//             y: data.hero.y,
//             width: 100,
//             height: 100
//         })
//     }
//     // // որ հակարակորդը աջ կողմից գալուց նկարի սկզբից սկսի
//     // // մյուս if-ի տեղը
//     //  if(data.rabbits.length === 0) {
//     //     data.rabbits.push({
//     //         xDelta: -1,
//     //         x: canvas.width,
//     //         y: data.hero.y,
//     //         width: 100,
//     //         height: 100
//     //     })
//     //  }

// }

// function draw() {
//     context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
//     context.drawImage(heroImg, data.hero.x, data.hero.y, data.hero.width, data.hero.height)

//     data.bullets.forEach(function(bullet) {
//         context.drawImage(starImg, bullet.x, bullet.y, bullet.width, bullet.height)
//     })

//     data.rabbits.forEach(function(rabbit) {
//         context.drawImage(rabbitImg, rabbit.x, rabbit.y, rabbit.width, rabbit.height)
//     })
// }

// function loop() {
//     requestAnimationFrame(loop)

//     update()
//     draw()
// }
// loop()

// document.addEventListener("keydown", function(evt) {
//     if(evt.code === "ArrowRight") {
//             data.hero.xDelta = 1
//         } else if(evt.code === "ArrowLeft") {
//             data.hero.xDelta = -1
//         } else {
//             audio.currentTime = 0
//             audio.play()
//             data.bullets.push({
//             xDelta: 5,
//             x: data.hero.x + data.hero.width,
//             y: data.hero.y + data.hero.height/2,
//             width: 20,
//             height: 20
//         })
//     }
// })

// document.addEventListener("keyup", function(evt) {
//     data.hero.xDelta = 0
// })



// // .1. 2
// // առանց EXTENDS անելու
// // որպեսզի գտնենք ավելացած կոդը

// // ավելացած կոդը
// // class Rabbit-ի մեջի update ֆունկցիայի մեջի
// // if((this._xDelta < 0 && this._x + this._width < 0) || (this._xDelta > 0 && this._x > canvas.width)) {
// //     this.deleteMe = true;
// // }
// // data.rabbits = data.rabbits.filter((rabbit) => rabbit.deleteMe !== true)

// // ավելացած կոդը
// // որ հակարակորդը աջ կողմից գալուց նկարի սկզբից սկսի
// // մյուս if-ի տեղը
// // data.rabbits.push(new Rabbit(canvas.width, 140, 100, 100););


// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// // const backgroundImg = document.createElement("img")
// // backgroundImg.src = "data:image/jpeg;base64,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"


// // class Hero {
// //     constructor(x, y, width, height) {
// //         this._x = x;
// //         this._y = y;
// //         this._width = width;
// //         this._height = height;

// //         this._speed = 1;
// //         this._xDelta = 0;
// //         this._yDelta = 0;

// //         this._img = document.createElement("img");
// //         this._img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwx3cRyk0JKQEKJAHw9OglG6QpBa0Hqps4qQ&usqp=CAU"

// //         this._audio = document.createElement("audio");
// //         this._audio.src = "http://novastar-main.co.hays.tx.us/NovaStar5/sounds/laser.wav";
// //     }

// //     getBoundingBox() {
// //         return {
// //             x: this._x,
// //             y: this._y,
// //             width: this._width,
// //             height: this._height
// //         };
// //     }

// //     update() {
// //         this._x += this._xDelta;
// //         this._y += this._yDelta;
// //     }

// //     render() {
// //         context.drawImage(this._img, this._x, this._y, this._width, this._height);
// //     }

// //     goRight() {
// //         this._xDelta = this._speed;
// //     };

// //     goLeft() {
// //         this._xDelta = this._speed * -1;
// //     };

// //     stop() {
// //         this._xDelta = 0;
// //     }
    
// //     fire() {
// //         const x = this._x + this._width,
// //         y = this._y + this._height/2,
// //         width = 20,
// //         height = 20;

// //         const bullet = new Bullet(x, y, width, height);
// //         bullet.goRight();
// //         data.bullets.push(bullet);

// //         this._audio.currentTime = 0;
// //         this._audio.play();
// //     }
// // }


// class Rabbit {
//     constructor(x, y, width, height) {
//         this._x = x;
//         this._y = y;
//         this._width = width;
//         this._height = height;

//         this._speed = 1;
//         this._xDelta = 0;
//         this._yDelta = 0;

//         this._img = document.createElement("img");
//         this._img.src = "data:image/jpeg;base64,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"
//     }
//     getBoundingBox() {
//         return {
//             x: this._x,
//             y: this._y,
//             width: this._width,
//             height: this._height
//         };
//     }
//     update() {
//         this._x += this._xDelta;
//         this._y += this._yDelta;

//         if((this._xDelta < 0 && this._x + this._width < 0) || (this._xDelta > 0 && this._x > canvas.width)) {
//             this.deleteMe = true;
//         }
//     }
//     render() {
//         context.drawImage(this._img, this._x, this._y, this._width, this._height);
//     }
//     goRight() {
//         this._xDelta = this._speed;
//     };
//     goLeft() {
//         this._xDelta = this._speed * -1;
//     };
//     stop() {
//         this._xDelta = 0;
//     }
//     die() {
//         this.deleteMe = true;
//     }
// }


// // class Bullet {
// //     constructor(x, y, width, height) {
// //         this._x = x;
// //         this._y = y;
// //         this._width = width;
// //         this._height = height;

// //         this._speed = 5;
// //         this._xDelta = 0;
// //         this._yDelta = 0;

// //         this._img = document.createElement("img");
// //         this._img.src = "data:image/jpeg;base64,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"

// //         this._stabAudio = document.createElement("audio");
// //         this._stabAudio.src = "http://sistemas7.sead.ufscar.br:8080/jspui/bitstream/123456789/2261/2/duck.wav"
// //     }

// //     getBoundingBox() {
// //         return {
// //             x: this._x,
// //             y: this._y,
// //             width: this._width,
// //             height: this._height
// //         };
// //     }

// //     update() {
// //         this._x += this._xDelta;
// //         this._y += this._yDelta;

// //         if((this._xDelta < 0 && this._x + this._width < 0) || (this._xDelta > 0 && this._x > canvas.width)) {
// //             this.deleteMe = true;
// //         }

       
// //         data.rabbits.forEach((rabbit) => {
// //             if(intersect(this.getBoundingBox(), rabbit.getBoundingBox())) {
// //                 rabbit.die();
// //                 this._stabAudio.currentTime = 0;
// //                 this._stabAudio.play();
// //                 this.deleteMe = true
// //             }
// //         })

// //     }

// //     render() {
// //         context.drawImage(this._img, this._x, this._y, this._width, this._height);
// //     }

// //     goRight = () => {
// //         this._xDelta = this._speed;
// //     };

// //     goLeft = () => {
// //         this._xDelta = this._speed * -1;
// //     };

// //     stop = () => {
// //         this._xDelta = 0;
// //     }
// // }

    
// let data = {
//     // hero: new Hero(10, 140, 100, 100),
//     // bullets: [],
//     rabbits: []
// }


// function intersect(rect1, rect2) {
//     const x = Math.max(rect1.x, rect2.x),
//     num1 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width),
//     y = Math.max(rect1.y, rect2.y),
//     num2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
    
//     return (num1 >= x && num2 >= y)
// }

// function update() {
//     // data.hero.update()
//     // data.bullets.forEach((bullet) => { bullet.update() })
//     data.rabbits.forEach((rabbit) => { rabbit.update() })
//     ///??///  class Rabbit-ի մեջի update ֆունկցիայի մեջի
//     ///??///  if((this._xDelta < 0 && this._x + this._width < 0) || (this._xDelta > 0 && this._x > canvas.width)) {
//     ///??///      this.deleteMe = true;
//     ///??///  }
   
//     // data.bullets = data.bullets.filter((bullet) => bullet.deleteMe !== true)
//     data.rabbits = data.rabbits.filter((rabbit) => rabbit.deleteMe !== true)
    
//     if(data.rabbits.length === 0) {
//         const rabbit = new Rabbit(canvas.width, 140, 100, 100);
//         rabbit.goLeft();
//         data.rabbits.push(rabbit);
//     }

//         // կա //     data.rabbits = data.rabbits.filter((rabbit) => rabbit.deleteMe !== true)
        
//         // կա //     data.rabbits.forEach((rabbit) => {
//         // կա //         rabbit.x += rabbit.xDelta
//         // կա //     })
        
//         // կա //    if(data.rabbits.length === 0) {
//         // կա //        data.rabbits.push({
//         // կա //            xDelta: -1,
//         // կա //            x: canvas.width - 100,
//         // կա //            y: data.hero.y,
//         // կա //            width: 100,
//         // կա //            height: 100
//         // կա //        })
//         // կա //    }
// }
    
// function render() {
//     // context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
    
//     // data.hero.render();
//     // data.bullets.forEach((bullet) => bullet.render())
//     data.rabbits.forEach((rabbit) => rabbit.render())

//     // կա //    data.rabbits.forEach(function(rabbit) {
//     // կա //        context.drawImage(rabbitImg, rabbit.x, rabbit.y, rabbit.width, rabbit.height)
//     // կա //    })
// }
    
// function loop() {
//     requestAnimationFrame(loop)

//     update()
//     render()
// }
// loop()


// document.addEventListener("keydown", function(evt) {
//     if(evt.code === "ArrowRight") {
//         data.hero.goRight()
//     } else if(evt.code === "ArrowLeft") {
//         data.hero.goLeft()
//     } else {
//         data.hero.fire()
//     }
// })
    
// document.addEventListener("keyup", (evt) => {
//     data.hero.stop();
// });



// // .1. 3
// // EXTENDS անելով
// // որպեսզի գտնենք ավելացած կոդը

// // ավելացած կոդ չկա
// // անցնում գնումա հակարակորդը

// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// class GameObj {
//     constructor(x, y, width, height) {
//         this._x = x;
//         this._y = y;
//         this._width = width;
//         this._height = height;

//         this._speed = 1;
//         this._xDelta = 0;
//         this._yDelta = 0;

//         this._img = document.createElement("img");
//         this._img.src = "";

//     }

//     getBoundingBox() {
//         return {
//             x: this._x,
//             y: this._y,
//             width: this._width,
//             height: this._height
//         };
//     }

//     update() {
//         this._x += this._xDelta;
//         this._y += this._yDelta;
//     }
//     render() {
//         context.drawImage(this._img, this._x, this._y, this._width, this._height)
//     }

//     goRight() {
//         this._xDelta = this._speed;
//     }
//     goLeft() {
//         this._xDelta = this._speed * -1;
//     }
//     stop() {
//         this._xDelta = 0;
//     }
// }


// class Rabbit extends GameObj {
//     constructor(x, y, width, height) {
//         super(x, y, width, height);

//         this._img = document.createElement("img");
//         this._img.src = "data:image/jpeg;base64,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";
//     }

//     update() {
//         super.update();

//         if((this._xDelta < 0 && this._x + this,this._width < 0) || (this._xDelta > 0 && this._x > canvas.width)) {
//             this.deleteMe = true;
//         }
//     }

//     die() {
//         this.deleteMe = true;
//     }
// }


// let data = {
//     rabbits: []
// }

// function intersect(rect1, rect2) {
//     const x = Math.max(rect1.x, rect2.x),
//     num1 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width),
//     y = Math.max(rect1.y, rect2.y),
//     num2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
    
//     return (num1 >= x && num2 >= y)
// }

// function update() {
//     data.rabbits.forEach( (rabbit) => rabbit.update() )
   
//     data.rabbits = data.rabbits.filter((rabbit) => rabbit.deleteMe !== true)
    
//     if(data.rabbits.length === 0) {
//         const rabbit = new Rabbit(canvas.width, 140, 100, 100);
//         rabbit.goLeft();
//         data.rabbits.push(rabbit);
//     }
// }
    
// function render() {
//     data.rabbits.forEach((rabbit) => rabbit.render())
// }
    
// function loop() {
//     requestAnimationFrame(loop)

//     update()
//     render()
// }
// loop()







// // .2.
// // canvas-ը encapsulation կոնցեպտով

// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// function Hero(x, y, width, height) {

//     const heroImg = document.createElement("img");
//     heroImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwx3cRyk0JKQEKJAHw9OglG6QpBa0Hqps4qQ&usqp=CAU"

//     let xDelta = 0;
//     let yDelta = 0;

//     this.update = () => {
//         x += xDelta;
//         y += yDelta;
//     };

//     this.render = () => {
//         context.drawImage(heroImg, x, y, width, height);
//     };

//     this.goRight = () => {
//         xDelta = 1;
//     };
//     this.goLeft = () => {
//         xDelta = -1;
//     };
//     this.stop = () => {
//         xDelta = 0;
//     }
// }

// let data = {
//     hero: new Hero(20, 20, 40, 40)
// };

// function update() {
//     data.hero.update()
// }

// function render() {
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     data.hero.render()
// }


// function loop() {
//     requestAnimationFrame(loop);
//     update();
//     render();
// }

// loop();

// document.addEventListener("keydown", (evt) => {
//     if(evt.code === "ArrowRight") {
//         data.hero.goRight();
//     } else if (evt.code === "ArrowLeft") {
//         data.hero.goLeft();
//     }
// })

// document.addEventListener("keyup", (evt) => {
//     data.hero.stop();
// });



// // .3.
// // canvas-ը Դասական ժառանգություն(Classical Inheritance)-ով 
// // առանց extends անելու

// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// const backgroundImg = document.createElement("img")
// backgroundImg.src = "data:image/jpeg;base64,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"


// class Hero {
//     constructor(x, y, width, height) {
//         this._x = x;
//         this._y = y;
//         this._width = width;
//         this._height = height;

//         this._speed = 1;
//         this._xDelta = 0;
//         this._yDelta = 0;

//         this._img = document.createElement("img");
//         this._img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwx3cRyk0JKQEKJAHw9OglG6QpBa0Hqps4qQ&usqp=CAU"

//         this._audio = document.createElement("audio");
//         this._audio.src = "http://novastar-main.co.hays.tx.us/NovaStar5/sounds/laser.wav";
//     }

//     getBoundingBox() {
//         return {
//             x: this._x,
//             y: this._y,
//             width: this._width,
//             height: this._height
//         };
//     }

//     update() {
//         this._x += this._xDelta;
//         this._y += this._yDelta;
//     }

//     render() {
//         context.drawImage(this._img, this._x, this._y, this._width, this._height);
//     }

//     goRight() {
//         this._xDelta = this._speed;
//     };

//     goLeft() {
//         this._xDelta = this._speed * -1;
//     };

//     stop() {
//         this._xDelta = 0;
//     }
    
//     fire() {
//         const x = this._x + this._width,
//         y = this._y + this._height/2,
//         width = 20,
//         height = 20;

//         const bullet = new Bullet(x, y, width, height);
//         bullet.goRight();
//         data.bullets.push(bullet);

//         this._audio.currentTime = 0;
//         this._audio.play();
//     }
// }


// class Rabbit {
//     constructor(x, y, width, height) {
//         this._x = x;
//         this._y = y;
//         this._width = width;
//         this._height = height;

//         this._speed = 1;
//         this._xDelta = 0;
//         this._yDelta = 0;

//         this._img = document.createElement("img");
//         this._img.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIgAiAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBQYHBAj/xAA6EAABAwMABwQIBQQDAQAAAAABAAIDBAURBhIhMUFRkRNhcrEHIjM0UnHB0RQjMoGhFUKS8ENi4ST/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAeEQEBAAIDAQADAAAAAAAAAAAAAQIREiExQQNRYf/aAAwDAQACEQMRAD8A7WiKklxdqsAzjO3ggqRRqTc4+hTs5vij6FBKKOzm+KPoU7Ob4mdCglFHZzfEzoU7Ob4mdCglFHZzfEzoU7Ob4o+hQSijs5viZ0KdnN8TOhQSijs5vij6FOzm+KPoUEoo1JucfQqASHFrwAQM7NxQVIiICiP258H1UqI/bnwfVBeREQFKhWqypio6aSoqHakUbS5zjwCCKurgooHz1UrIomDLnOOAFp1X6RqWKfVpaCWeIHGu6TUz8hgrTtLNJZrvUGSVxjpWH8mLO4cz3polopdNJY21zpG0Nsd7KRzNaSbva3g3kTv4Ajatak9Y3b46zY7vT3qgbV0oeG6xa5rxgtcN4XvXis1sp7Rb46KkDuzZ/c45c4neT3rxXjSe12hxjqJjJMP+GIazv34D91Gt69ZpFocnpHhD/wAq2vczO90oB6YKz9g0pt97JjhLoqkDJhkxkjmOaaJZWdREUUCsP94PgHmVfCsP94PgHmUFSIiAoj9ufB9VKiP258H1QXkREErn3pRujo2U9ua7DXDtpe8ZwPIldAXI/SzSOqb4xkdQGB9K1r8bS0hzt3zz/C1j6xn41Sz2iXSqvcJJRSWandmsrJXarWt4taT/AHEZ+W88AehV2n8LRHbtFKJ9VqNDI3tiJAaNg1WjbjvK5pNZ6aobE2qfPOYQBGZJM6g/6t/S3cNwCptc160Sun9TstXJM12BNBKcslaP7XAfwRtHVao2m63LShtR/wDfFd2yHcGxvA/bV2Kq1aHaRXxxe+P+m0529tVtJe49zMg9cfuumaKaS0Ok9rbWULi17fVmgefWidyP0PFZtZ5VeMcYr/RnpXTnWorhQVreR1oXdDkfylk0R01huNO6SggpxFI13bvqWkDB2kBpJK7OinKrqA3IiKKKw/3g+AeZV9WH+8HwDzKCpERAUR+3Pg+qlRH7c+D6oLrjhpPILzUE3bQ+t+oE56r1LDQy/gri+J59Rxx1VjN6e6618NsoJ6ypP5cTckczwC4Jfb7U1xr7s2CWpZE/NQ+Fus2LO4E8Atz9PVdV01nttPTucyKpqHNkc08QNg81yrRPSGS00FfQxwQFs7XwyP1TrmN2dh24I2kjI2ErU8S93tNnvNyv93p7ZaKJ0tRO7VbrSYA5k7NgA2rO6UCo0VrBR3CenqZuzMkjKdxcYwMfq2bN6w1guTNHbi242uNzKlocAXYI2gg7P3Vi/wB4qLmKiSdtPEZQBIYYGMdJjdrOA1nbhvJV1TpntG7+62V7L1Zn5DdlRBnAlZxB+h4FfQFpuVLd7dT19C/XgnZrNPEcweRB2EL5Lt0z7fUUoB2yAse3O8LuHoMqp5KG7UxGaWKZj4znc5wOsMcNjWn91MieuoIiLDbyVlY2mnpoz/zSann9l6+G1az2/wDUtK444zmKkYXOxz4f73rZlQVh/vB8A8yr6sP94PgHmVBUiIgKI/bnwfVSoj9ufB9UF5Ym/UuvEJ2g5bsdjkssVS9rXsLHAFpGCDySdJY0XTS3zaWaBVtHBF21xpnNfG0by9pByO8tJx81wGotN4ppNSvtdfBO3Z2wpXjPz2bV2i/6UP0fu01JZpIqitA7OXXGtHG3OxzgCMuG3YDxIWC0k00vrq+qqrXXTUofA2IMOHAAb3BpyGuO3nyyVub+JevXKJHVzXFrHsdg4Pq4LT3g7ldbE4AOlk13/E7cPkvVSQNqpJpXyPfUveXOe92S8naSTz2/ysrDTQQaucSzHnuH2+a0jC01vnqJw9jXF52Ne76BbHDDHa2spqSQCrn2OlztPM/LfsVJqRFG40wbJINjpXHDG93/AIFl/RnY7XpPNf2XztZKinhjlgqWPcwxD1s4A2bwDg703pPW72D0gQ2e3QUt7afw1PG2NtS05cGtGAXA7zzI6LdLxeIYbM2rp5A4VMYMLhxBGdYft9F831dwpqmqZBVhsjWxhxB3Enu/3etv0euV1qZo5H0FfX2h0+HMjBe6MZ1nNjG/VxwHyCxZJ23ju9OuaIUJp6A1UoImqjrnPBvD7rPKAAAABgcApWVFYf7wfAPMq+rD/eD4B5lBUiIgKI/bnwfVSoj9ufB9UF5CiFBx70kf0qyyOs9npGS19VK2pMMWS9p3EnYS4kDYN/HctBqa2oeXOlpZGxfhjL2jRrNABIOSNg28127RvRGW26T3W+3SaGpqalxMD2g5jaTtG3uDR8hwWA0gvtuttHcLdo610f4qRz56gP2NJ/UGA7hsxsx3K4TXifk431y292mgtNwZQ2a5S1kzYh+MmLcNE3FrW/8AXcdp27M7DjzxUFS7PaSSgAet+SdvzOV7GwB9Q19PA8PLg8nX2P25JcDw4Z3leczVj530jZZmua313vOQxu3PHaSSPkreXxvG4a7USwxauH1DnkbmggNH7DOFunoXuFBT3O92yvqIoY66CMRiaYM1yC8Oa3O84cOi1N9NKWhs2q/Gx7mvdH8s43g81VSW+BssbjRgu7T1mTASNI3YcPhP+4Ukv0tx+Op1Whdh0T0SuVLTxy3CsuurBE+d4MkjzsjDSAMAZzsVs6J6XaN0VJVWe9Or30seJKWSIZxvLW7y4d2w8jwV30dR2eaopoxG+kno+0dT0TpzLFl2MvjLvW3D9JzjPFdLUs/aTLXjXtENKINI6V3qdhWRbJqcnOO8cx5blsKx1HZLdR3KpuNPTMbV1H65Omccs4yeZWRQv8FYf7wfAPMq+rD/AHg+AeZRFSIiAoj9ufB9VKiP258H1QXkRCcILVVF29NLCHFvaMLdYcMjGV8+3ulrbdVOoK+nEU7OL/0uHxN5hfQMkuAuZ+lmhfpNa2Npa2FgodadtO5uHTOwW4B3g4zs7+jnMfThy7cuuF5p7fF2McgdUP3nft5u5DuXrs0MUMMrp3h8kwy92c5BWs01luck8TobPNLqvDtSeIta7Bzh2cbDx2hfQ8MGhwpoYRZbcGRj1WfhGnVPTmt3LTPFyG2MrZ7fJWupZ/w1PKYvxep+W7uz596PaAGmmfgcGk7W+E8u5d2jvttjiEMYa2IDVEYZhoHLC576TbXQV1kLtGKGkir+2a6UxtMb3s25DTuznG/eMqcjixOgD31umVvpqiphjdGTOBnVc/V4fPJGzlld3XzDoVotWVt2M1VK+1Gic2oE8zCHueDkamdhdkZ6L6Mt9wbNEGiUTOYAHSAYDu/ltWcspy01MbrbJIrbZMq4EAKw/wB4PgHmVfCsP94PgHmUFSIiAoj9ufB9VKpIIdrMIBxjbxQX0VjXm5x/4n7prTc4+h+6C6WNO8Kkwg8SqNabnH0P3TWm5x9D90EOpGFU/go+Q6KvWm5x9D901pucfQ/dBR+Bi+Ef4qRRxjh/Cq1pucfQ/dNabnH0P3QG0zRuyFWIWhUa03OPofumtNzj6H7oLwYApwrGtNzj6H7prTc4+h+6D0Lzv94PgHmVOvNzj6H7qADrFzzlx5DACCpERAREQEREBERAREQEREBERAREQEREBERB/9k="
//     }

//     getBoundingBox() {
//         return {
//             x: this._x,
//             y: this._y,
//             width: this._width,
//             height: this._height
//         };
//     }

//     update() {
//         this._x += this._xDelta;
//         this._y += this._yDelta;

//         if((this._xDelta < 0 && this._x + this._width < 0) || (this._xDelta > 0 && this._x > canvas.width)) {
//             this.deleteMe = true;
//         }
//     }

//     render() {
//         context.drawImage(this._img, this._x, this._y, this._width, this._height);
//     }

//     goRight() {
//         this._xDelta = this._speed;
//     };

//     goLeft() {
//         this._xDelta = this._speed * -1;
//     };

//     stop() {
//         this._xDelta = 0;
//     }
    
//     die() {
//         this.deleteMe = true;
//     }
// }


// class Bullet {
//     constructor(x, y, width, height) {
//         this._x = x;
//         this._y = y;
//         this._width = width;
//         this._height = height;

//         this._speed = 5;
//         this._xDelta = 0;
//         this._yDelta = 0;

//         this._img = document.createElement("img");
//         this._img.src = "data:image/jpeg;base64,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"

//         this._stabAudio = document.createElement("audio");
//         this._stabAudio.src = "http://sistemas7.sead.ufscar.br:8080/jspui/bitstream/123456789/2261/2/duck.wav"
//     }

//     getBoundingBox() {
//         return {
//             x: this._x,
//             y: this._y,
//             width: this._width,
//             height: this._height
//         };
//     }

//     update() {
//         this._x += this._xDelta;
//         this._y += this._yDelta;

//         if((this._xDelta < 0 && this._x + this._width < 0) || (this._xDelta > 0 && this._x > canvas.width)) {
//             this.deleteMe = true;
//         }

       
//         data.rabbits.forEach((rabbit) => {
//             if(intersect(this.getBoundingBox(), rabbit.getBoundingBox())) {
//                 rabbit.die();
//                 this._stabAudio.currentTime = 0;
//                 this._stabAudio.play();
//                 this.deleteMe = true
//             }
//         })

//     }

//     render() {
//         context.drawImage(this._img, this._x, this._y, this._width, this._height);
//     }

//     goRight = () => {
//         this._xDelta = this._speed;
//     };

//     goLeft = () => {
//         this._xDelta = this._speed * -1;
//     };

//     stop = () => {
//         this._xDelta = 0;
//     }
// }

    
// let data = {
//     hero: new Hero(10, 140, 100, 100),
//     bullets: [],
//     rabbits: []
// }


// function intersect(rect1, rect2) {
//     const x = Math.max(rect1.x, rect2.x),
//     num1 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width),
//     y = Math.max(rect1.y, rect2.y),
//     num2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
    
//     return (num1 >= x && num2 >= y)
// }

// function update() {
//     data.hero.update()
//     data.bullets.forEach((bullet) => { bullet.update() })
//     data.rabbits.forEach((rabbit) => { rabbit.update() })
    
//     data.bullets = data.bullets.filter((bullet) => bullet.deleteMe !== true)
//     data.rabbits = data.rabbits.filter((rabbit) => rabbit.deleteMe !== true)
    
//     if(data.rabbits.length === 0) {
//         const rabbit = new Rabbit(canvas.width, 140, 100, 100);
//         rabbit.goLeft();
//         data.rabbits.push(rabbit);
//     }
// }
    
// function render() {
//     context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
    
//     data.hero.render();
//     data.bullets.forEach((bullet) => bullet.render())
//     data.rabbits.forEach((rabbit) => rabbit.render())
// }
    
// function loop() {
//     requestAnimationFrame(loop)

//     update()
//     render()
// }
// loop()



// document.addEventListener("keydown", function(evt) {
//     if(evt.code === "ArrowRight") {
//         data.hero.goRight()
//     } else if(evt.code === "ArrowLeft") {
//         data.hero.goLeft()
//     } else {
//         data.hero.fire()
//     }
// })
    
    
// document.addEventListener("keyup", (evt) => {
//     data.hero.stop();
// });



// // ․4.
// // canvas-ը Դասական ժառանգություն(Classical Inheritance)-ով 
// // extends անելով

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const backgroundImg = document.createElement("img");
backgroundImg.src = "data:image/jpeg;base64,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";

class GameObj {
    constructor(x, y, width, height) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;

        this._speed = 1;
        this._xDelta = 0;
        this._yDelta = 0;

        this._img = document.createElement("img");
        this._img.src = "";

    }

    getBoundingBox() {
        return {
            x: this._x,
            y: this._y,
            width: this._width,
            height: this._height
        };
    }

    update() {
        this._x += this._xDelta;
        this._y += this._yDelta;
    }
    render() {
        context.drawImage(this._img, this._x, this._y, this._width, this._height)
    }

    goRight() {
        this._xDelta = this._speed;
    }
    goLeft() {
        this._xDelta = this._speed * -1;
    }
    stop() {
        this._xDelta = 0;
    }
}


class Hero extends GameObj {
    constructor(x, y, width, height) {
        super(x, y, width, height);

        this._img = document.createElement("img");
        this._img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwx3cRyk0JKQEKJAHw9OglG6QpBa0Hqps4qQ&usqp=CAU"

        this._audio = document.createElement("audio");
        this._audio.src = "http://novastar-main.co.hays.tx.us/NovaStar5/sounds/laser.wav";
    }

    fire() {
        const x = this._x + this._width,
        y = this._y + this._height / 2,
        width = 20,
        height = 20;

        const bullet = new Bullet(x, y, width, height);
        bullet.goRight();
        data.bullets.push(bullet);

        this._audio.currentTime = 0;
        this._audio.play();
    }
}

class Rabbit extends GameObj {
    constructor(x, y, width, height) {
        super(x, y, width, height);

        this._img = document.createElement("img");
        this._img.src = "data:image/jpeg;base64,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";
    }

    update() {
        super.update();

        if((this._xDelta < 0 && this._x + this,this._width < 0) || (this._xDelta > 0 && this._x > canvas.width)) {
            this.deleteMe = true;
        }
    }

    die() {
        this.deleteMe = true;
    }
}


class Bullet extends GameObj {
    constructor(x, y, width, height) {
        super(x, y, width, height);
    
        this._speed = 5;

        this._img = document.createElement("img");
        this._img.src = "data:image/jpeg;base64,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"

        this._stabAudio = document.createElement("audio");
        this._stabAudio.src = "http://sistemas7.sead.ufscar.br:8080/jspui/bitstream/123456789/2261/2/duck.wav"
    }

    update() {
        super.update();

        if((this._xDelta < 0 && this._x + this._width < 0) || (this._xDelta > 0 && this._x > canvas.width)) {
            this.deleteMe = true;
        }

        data.rabbits.forEach((rabbit) => {
            if(intersect(this.getBoundingBox(), rabbit.getBoundingBox())) {
                rabbit.die();
                this._stabAudio.currentTime = 0;
                this._stabAudio.play();
                this.deleteMe = true
            }
        });
    }
}


let data = {
    hero: new Hero(10, 140, 100, 100),
    bullets: [],
    rabbits: []
}

function intersect(rect1, rect2) {
    const x = Math.max(rect1.x, rect2.x),
    num1 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width),
    y = Math.max(rect1.y, rect2.y),
    num2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
    
    return (num1 >= x && num2 >= y)
}

function update() {
    data.hero.update()
    data.bullets.forEach( (bullet) => bullet.update() )
    data.rabbits.forEach( (rabbit) => rabbit.update() )
   
    data.bullets = data.bullets.filter((bullet) => bullet.deleteMe !== true)
    data.rabbits = data.rabbits.filter((rabbit) => rabbit.deleteMe !== true)
    
    if(data.rabbits.length === 0) {
        const rabbit = new Rabbit(canvas.width, 140, 100, 100);
        rabbit.goLeft();
        data.rabbits.push(rabbit);
    }
}
    
function render() {
    context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
    
    data.hero.render();
    data.bullets.forEach((bullet) => bullet.render())
    data.rabbits.forEach((rabbit) => rabbit.render())
}
    
function loop() {
    requestAnimationFrame(loop)

    update()
    render()
}
loop()


document.addEventListener("keydown", function(evt) {
    if(evt.code === "ArrowRight") {
        data.hero.goRight()
    } else if(evt.code === "ArrowLeft") {
        data.hero.goLeft()
    } else {
        data.hero.fire()
    }
})
    
document.addEventListener("keyup", (evt) => {
    data.hero.stop();
});



// // 10.
// // կա երկու տիպի ժառանգություն 
// // .1. կա Նախատիպային ժառանգություն(Prototypal Inheritance),երբ որ object-ները ժառանգում են անմիջապես իրարից
// // .2. և կա Դասական ժառանգություն (Classical Inheritance), որտեղ որ կան class-եր, այսինքն շաբլոններ որոնք որ ժառանգում են իրարից որը օգտագործելով մենք կարող ենք ստեղծենք object-ներ

// // Դասական ժառանգություն (Classical Inheritance)-ը շատ տարածված է, օգտագործվում է Java-ում, C#(C-Sharp)-ում, C++ -ում և որոշ չափի javascript-ում

// // ամպայման մի գաղտնիք պետք է ձեզ ասեմ որ իրականում չնայած կան class-եր javascript-ի մեջ, ինքը տակից սուս-փուս առանց ոչ մեկի ասելու իրականում օգտագործում է Նախատիպային ժառանգություն(Prototypal Inheritance), դա տակից բայց մենք դրան ուշադրություն չենք դարձնում, կոնցեպտն է կարևոր, կոնցեպտը նա է որ կան class էր այսինքն շաբլոններ որը օգտագործելով մենք կարող ենք ստեղծենք object-ներ և այդ շաբլոնները կարողանում են իրարից ժառանգել




    