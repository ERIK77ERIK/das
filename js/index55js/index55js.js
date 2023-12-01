// // 1.
// // Abstraction(Աբստրակցիա)-ն object oriented programming(օբյեկտ կողմնորոշված ծրագրավորում)-ի չորս կարևոր կոնցեպտներից մեկն է
// // աբստրակցիա նշանակում է թաքցնել
// // այսինքն ինչ նկատի ունենք թաքցնել երբ որ մենք խոսում ենք OOP-ի մասին 

// // պատկերացրեք ինչ որ ուրիշ ծրագրաորող թիմում ստեղծում է ինչ որ մի ֆունկցիա որը ենթադրում է որ պետք է աշխատի ուսանողների հետ
// // այսինքն ինչ է ստացվում որ այդ ֆունկցիան ենթադրում է որ իրեն կտաք որպես object մի ուսանող և ինքը այդ ուսանողի հետ կաշխատի, և իրեն ինչա պետք էտ ուսանողից էս պարագայում պետք է ուսանողի թիվը(student.getStudentId();) և պետք են կուրսերը որ էս ուսանողը սովորում է որպեսզի էտ կուրսերից քաղի բոլոր անունները քցի մի հատ զանգվածի մեջ և alert անի այն ուսանողը որը որ ունի այս թիվը(ուսանող՝ ID-ով + id) սովորում է և ցույց տա կուրսերի անունները և կասի կուրսեր վերջում("is studying " + courseNames.join(", ") + " courses");

// // են մասնագետը որ funcForStudent ֆունկցիան գրել է ենթադրում է որ այս object-ը կունենա այն ֆունկցիաները իր մեջ որը կապ ունեն ուսանողի հետ
// // բայց մենք իրեն փոխանցում ենք person որի մեջ կան այս բոլոր ֆունկցիաները մի մասը օրինակ getSalary ընդհանրապես ոչ մի կապ չունի ուսանողի հետ(funcForStudent ֆունկցիայի հետ) բա ինչի ենք փոխանցում էտ ինֆորմացիան ինչի ենք ավելորդ ինֆորմացիա փոխանցում այս funcForStudent ֆունկցիային եթե իրեն պետք չէ այդ ավելորդ ինֆորմացիան 
// // այսինքն
// // Abstraction(Աբստրակցիա)-ի ամբողջ գլխաոր գաղափարը նա է որ ավելորդ ինֆորմացիա ցույց չտան(թաքցնեն)

// class Person {
//     constructor(name, lastName, passportId, studentId, salary) {
//         this._name = name;
//         this._lastName = lastName;
//         this._passportId = passportId;
//         this._studentId = studentId;
//         this._salary = salary;
//         this._courses = [];
//     }

//     getName() {
//         return this._name;
//     }

//     setName(name) {
//         this._name = name;
//     }

//     getFullName() {
//         return this.name() + " " + this.getSurname();
//     }

//     getPassportId() {
//         return this._passportId;
//     }

//     getStudentId() {
//         return this._studentId;
//     }

//     getSalary(salary) {
//         this._salary = salary;
//     }

//     getCourses() {
//         return this._courses;
//     }

//     addCourse(course) {
//         this._courses.push(course);
//     }

//     removeCourse(courseId) {
//         this._courses = this._courses.filter(c => c.id !== courseId);
//     }

//     clearCourses() {
//         this._courses = [];
//     }

// }

// const person = new Person("Mesrop", "Ademyan", "A3243432", "UNI7265376", 450000);

// person.addCourse({
//     name: "Introducton to Computer Science",
//     id: "CS110"
// });
// person.addCourse({
//     name: "Introduction to Biology",
//     id: "BI0101"
// });

// function funcForStudent(student) {
//     const id = student.getStudentId();
//     const courseNames = student.getCourses().map((course) => course.name);
//     alert("Student with the id of " + id + ", is studying " + courseNames.join(", ") + " courses");
// }

// funcForStudent(person);
// // կտպի Student with the id of UNI7265376, is studying Introducton to Computer Science, Introduction to Biology courses



// // 2.
// // այսինքն ինչ կստացվի որ մենք այս նույնը կարող էինք անեինք այսպես որպես ուղղակի մի տարբերակ
// // մենք կարող ենք փոխանցենք մի հատ ուրիշ object որը կունենա միայն են ֆունկցիաները որը ինքը ուզում է

// // ինչ ֆունկցիա է ուզում, ինքը ուզում է getStudentId որը երբ որ ինքը կանչի մենք տակից կկանչենք person.getStudentId() ինքը նաև տակից օգտագործելու է getCourses() և return կանենք person.getCourses(), ուրիշ ոչ մի ֆունկցիա ինքը չի օգտագործելու

// // նույնպես աշխատեց ոչ մի բան չփոխվեց բայց ի տարբերակ մեր հին օրինակի էս անգամ մենք ընդամենը փոխանցում ենք մի object որը իր մեջ ունի միայն և միայն այն ֆունկցիաները որոնք որ պետք են այդ funcForStudent ֆունկցիայի մեջ այդ իրավիճակի մեջ
// // ավելորդ ինֆորմացիա մենք ցույց չենք տալիս և հետևաբար մենք ստանում ենք մի քանի առավելություն

// // .1.
// // առաջինը, են ծրագրաորողը որը գրում է սա եթե հանկարծ debugger-ի մեջ մտնի և սկսի ուսումնասիրել ինքը չի տեսնի մի հատ object որը ունի շատ ինչոր ֆունկցիաներ ու ասի մի րոպե էս ինչ ֆունկցիաներ են, էս ֆունկցիաներից շատերը նույնիսկ ուսանողի հետ կապ չունեն ինչ եք ինձ տալիս ավելորդ ինֆորմացիա, որպեսզի ես հիմա էտ ամբողջ ինֆորմացիով պիտի անցնեմ որպեսզի գտնեմ են ֆունկցիաները որոնք որ կապ ունեն ուսանողի հետ
// // այսինքն անիմաստ ավելորդ ինֆորմացիա է տրվում ֆունկցիաին որի մեջ ծրագրաորողը կարողա խճճվի 
// // .2.
// // երկրորդ պատճառը դա էնա որ մենք միշտ պետք է ցույց տանք միայն են ինչ որ պետքա և ոչ ավել ինչու որովհետև օգտագործողը բացի նրանից որ կարող է խճճվի շատ ինֆորմացիայից, ինքը նաև կարող է ինչ որ ավելորդ բան անի որտեղ ինքը գործ չունի անելու 
// // օրինակ․ 
// // եթե մենք funcForStudent ֆունկցիային փոխանցենք ուսանողի object որի մեջ նաև լինի օրինակ իր աշխատավարձի մասին ինֆորմացիան մի գուցե մենք չենք ուզում են համակարգը որ աշխատում է ուսանողների հետ իմանա էտ ուսանողը տակից իրականում բացի ուսանող լինելուց նաև ինչքան փող է աշխատում դա էտ համակարգի էս մասնիկի կոդի(funcForStudent ֆունկցիայի) գործը չի միգուցե էս կոդը էտ ինֆորմացիան վերցնումա փաթեթաորումա և ուղարկումա դեկանին մեկել դեկանը բացումա ու տեսնումա որ էս ուսանողը բացի էս կուրսը վերցնելուց նաև էսքան աշխատավարձ է ստանում դեկանը գործ չունի դա իր գործը չէ 

// // այսինքն Աբստրակցիա (Abstraction)-ի միտքը ինչում է որ մենք ավելորդ ինֆորմացիա ցույց չենք տալիս մի քանի պատճառով 
// // .1. առաջինը որովհետև երբ որ շատ ինֆորմացիա ենք ցույց տալիս ավելի հեշտ է խճճվել
// // .2. և երկրորդը ավելորդ ինֆորմացիա չենք տալիս որովհետև պետք չի որ էտ ավելորդ ինֆորմացիան էտ ֆունկցիան իմանա որովհետև կոպիտ ասած իր գործը չէ
// // Աբստրակցիա(Abstraction)-ը նշանակումա են մասը որը պետք չի ցույց տալ մենք ցույց չենք տալիս այսինքն թաքցնել են մասը ինֆորմացիայի որը պետք չի և միայն ցուց տալ են մասը որը անհրաժեշտ է   

class Person {
    constructor(name, lastName, passportId, studentId, salary) {
        this._name = name;
        this._lastName = lastName;
        this._passportId = passportId;
        this._studentId = studentId;
        this._salary = salary;
        this._courses = [];
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }

    getFullName() {
        return this.name() + " " + this.getSurname();
    }

    getPassportId() {
        return this._passportId;
    }

    getStudentId() {
        return this._studentId;
    }

    getSalary(salary) {
        this._salary = salary;
    }

    getCourses() {
        return this._courses;
    }

    addCourse(course) {
        this._courses.push(course);
    }

    removeCourse(courseId) {
        this._courses = this._courses.filter(c => c.id !== courseId);
    }

    clearCourses() {
        this._courses = [];
    }

}

const person = new Person("Mesrop", "Ademyan", "A3243432", "UNI7265376", 450000);

person.addCourse({
    name: "Introducton to Computer Science",
    id: "CS110"
});
person.addCourse({
    name: "Introduction to Biology",
    id: "BI0101"
});

function funcForStudent(student) {
    const id = student.getStudentId();
    const courseNames = student.getCourses().map((course) => course.name);
    alert("Student with the id of " + id + ", is studying " + courseNames.join(", ") + " courses");
}

funcForStudent({
    getStudentId() {
        return person.getStudentId();
    },
    getCourses() {
        return person.getCourses()
    }
})
// // կտպի Student with the id of UNI7265376, is studying Introducton to Computer Science, Introduction to Biology courses



