// // 1
// // let
// // let-ով ստեղծված փոփոխականին կարողեք օգտագործել միայն իրան ստեղծելու պահից հետո և միայն իրան կարելիյա օգտագործել նույն block scope-ի մեջ այսինքն իրա սահմանում 

// let a = 5;
// a = 4;

// alert(a);

// // 2
// // const
// // let-ը և const-ը ամենինչով նույն են, 
// // const-ով ստեղծված փոփոխականին կարողեք օգտագործել միայն իրան ստեղծելու պահից հետո և միայն իրան կարողեք օգտագործել նույն block scope-ի մեջ այսինքն իրա սահմանում, 
// // բացի նրանից որ let-ի արժեքը կարելի է փոխել իսկ const-ի արժեքը ոչ 


// // եթե մենք գիտենք որ ինչ որ փոփոխական իր արժեքը երբեք չի փոխելու այսինքն մեր կոդի մեջ տենց լոգիկա չկա որը կուզենա մեր փոփոխականին որևէ ժամանակ փոխի էտ ժամանակ մենք կարող ենք իրեն հայտարարել որպես const
// // let-ը և const-ը ամենինչով նույն են բացի նրանից որ let-ի արժեքը կարելի է փոխել իսկ const-ի արժեքը ոչ

// // ինչու է մեզ պետք const-ը ինչի համար ուրեմն կոդը երբ որ մենք կարդում ենք իրեն հասկանալը շատ ավելի հեշտա երբ որ փոփոխականները(անունները) արժեքների ստեղծված են const քան թե let ինչու
// // որովհետև երբ որ մենք տեսնում ենք որ նա const է մենք գիտենք որ նա չի փոխվի և մենք կարող ենք ասել օրինակ a-ը 5-ա և մենք միշտ գիտենք որ եթե մենք տեսնենք a դա նշանակումա 5 հետևաբար այդ կոդը հասկանալը շատ ավելի հեշտ է 

// // իսկ եթե մենք տեսնում ենք let a դա նշանակումա ցանկացած տեղ a-ի արժեքը կարողա փոխվի հետևաբար մենք չենք կարող ուղղակի նայենք ու տեսնենք միշտ որ a լինի իմանանք որ 5-ա, մենք որ a տեսնենք մենք պետքա լոգիկան ուսումնասիրենք ու տեսնենք 5 արժեքով սկսելա բայց միգուցե փոխվելա արժեքը


// // հիշեք որ մենք ունենք մի հատ կարևոր նպատակ կոդ գրելուց որ մեր կոդը պետքա լինի պարզ մի տարբերակը պարզացնելու մեր կոդը դա նա է որ մենք մաքսիմում փորձենք մեր անունները արժեքների ստեղծենք որպես const ոչ թե որպես let, let միայն օգտագործեք են ժամանակ երբ որ հաստատ գիտեք փոփոխականի արժեքը պետքա փոխվի և ուրիշ ավելի լավ տարբերակ չեք կարող հորինեք որ նա չփոխվի
// // այսինքն սովորություն ստեղծեք միշտ երբ որ ստեղծում էք անուն ինչ որ արժեքի ստեղծեք որպես const, և միայն ստեղծեք let-ով են ժամանակ երբ որ հաստատ գիտեք որ նա պետք է փոխվի



// // 3
// // var
// // var-ով ստեղծված փոփոխականին կարողեք օգտագործել ամեն տեղ իրա սահմանում ,սահմանը var-ով ստեղծված փոփոխականների դա ֆունկցիան է որի մեջ նա ստեղծվել է, 
// //var-ի ժամանակ երբ որ մենք աշխատացնում ենք կոդը,տակից այն կոդի մասը որը աշխատացնում է մեր կոդը վերցնումա և քցումա վերև բայց որտեղ վերև, վերև միչև ամենամոտ ֆունկցիան որ նա ստեղծվել է 


const f = function() {
alert(b)
    let a = 5;
    if(a > 0) {
       var b = 7;
        alert(a + b);
    }
    alert(b)
};

f()


// // մի տարբերություն կա var-ի և let-ի,let-ով ստեղծված փոփոխականին կարելիյա օգտագործել միայն իրան ստեղծելու պահից հետո և միայն իրան կարելիյա օգտագործել նույն block scope-ի մեջ այսինքն իրա սահմանում իսկ var-ի ժամանակ երբ որ մենք աշխատացնում ենք կոդը,տակից այն կոդի մասը որը աշխատացնում է մեր կոդը վերցնումա և քցումա վերև բայց որտեղ վերև, վերև միչև ամենամոտ ֆունկցիան որ նա ստեղծվել է այսինքն սահմանը var-ով ստեղծված փոփոխականների դա ֆունկցիան է որի մեջ նա ստեղծվել է և նա հասանելի է ամեն տեղ ետ ֆունկցիայի մեջ

// // let-ը և const-ը ի տարբերություն var-ի բլոկի մեջ են երևում որի մեջ նրանք ստեղծվել են դրա համար let-ն ու const-ը block scope-ի օրենքներին են ենթարկվում իսկ var-ը  function scope-ի օրենքներին է ենթարկվում

// // var-ը հասանելի է ամեն տեղ են սահմանում որտեղ որ նա ստեղծվել է