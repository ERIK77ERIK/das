/*

// Գրեք ծրագիր, որը կհարցնի user-ից նրա տարիքը։ Եթե տարիքը փոքր է 10-ից, ցույց տվեք “hi” տեքստով պատուհան(alert): Եթե տարիքը մեծ է կամ հավասար 10, բայց փոքր է 18-ից, ցույց տվեք “hello” տեքստով պատուհան։ Մնացած բոլոր դեպքերում ցույց տվեք “greetings” տեքստով պատուհան 
let x = +prompt("գրեք ձեր տարիքը");

if(x < 10){
    alert("hi");
} else if(x >= 10 && x < 18) {
    alert("Hello")
} else{
    alert("greethings");
}

// Գրեք ծրագիր, որը user-ից կշարունակի խնդրել թիվ մուտքագրել։ Երբ user-ը մուտքագրի “exit”, ցույց տվեք պատուհան (alert), որը կտպի մինչև այդ գրված բոլոր թվերի գումարը և կավարտի ծրագիրը։
let i = 0;
while(true) {
    let response = prompt("write down any number");

    if(response === "exit") {
        alert(i);
        break;
    }

    let num = +response;
    i = i + num;
}


// Գրեք computeTriangleArea անունով ֆունկցիա, որը կվերցնի եռանկյան հիմքը և բարձրությունը և կվերադարձնի եռանկյան մակերեսը։ Օրինակ computeTriangleArea(2, 9). պետք է վերադարձի 9 որպես արդյունք։
let computeTriangleArea = function(a, b) {
    return a * b / 2;
}
alert(computeTriangleArea(15, 4));



// Գրեք reverse անունով ֆունկցիա, որը կվերցնի զանգված և կվերադարձնի մի նոր զանգված, որի արժեքները նույնն են ինչ առաջին զանգվածինը, բայց համակարգված են հակառակ դասավորությամբ։ Օրինակ reverse([1, 2, 3, 4]). պետք է վերադարձնի նոր զանգված նման արժեքներով՝ [4, 3, 2, 1]
let reverse = function(w) {
    let index = 0;

    while(index < w.length/2){
       let c = w[index];

       w[index] = w[w.length-1-index];
       w[w.length-1-index] = c;
       index = index + 1;
    }

    return w;
}
alert(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9]));

let reverse2 = function(arr) {
    let resultarr = [];

    let i1 = 0;
    let i2 = arr.length-1;

    while(i2 >= 0) {
        resultarr[i1] = arr[i2];
        i1 = i1 + 1;
        i2 = i2 - 1;
    }
    return resultarr;
}
alert(reverse2([1, 2, 3, 4, 5, 6]));



// Գրեք average անունով ֆունկցիա, որը կվերցնի թվերի զանգված, և կվերադարձնի այդ թվերի հանրահաշվական միջինը։ Օրինակ average([4, 3, 6, 10, 2]). պետք է վերադարձի 5:
let average = function(n) {
    let i3 = 0;
    let aver = 0;
    while(i3 < n.length) {
        aver = aver + n[i3];
        i3 = i3 + 1;
    }
    return aver/n.length;
}

alert(average([4, 3, 6, 10, 2, 11]));



// Գրեք factorial անունով ֆունկցիա, որը կվերցնի թիվ և կվերադարձնի այդ թվի ֆակտորիալը։ Հիշեք, որ թվի ֆակտորիալը, տրված թվից մինչև 1 բոլոր բնական թվերի արտադրյալն է։ Օրինակ factorial(5). պետք է վերադարձի 120:
let factorial = function(num) {

    let result = 1;

    while(num > 1){
      result = result * num;
      num = num - 1;
    }
    return result;
}

alert(factorial(5)); 

*/