// // 1.
// // երբ որ instal եք node իրա հետ գալիսա npm ծրագիրը և npx ծրագիրը

// // 2.
// // node -v  _ սա կտա version-ը , այսինքն որ երրորդ տարբերակնա node-ի
// // դուք նաև կարող եք անենք
// // npm -v  _ և տեսնել իր version-ը 
// // npx -v  _ և տեսնել իր version-ը 


// // 3.
// // node-ը դա մի ծրագիր է որը հնարաորություն է տալիս մեզ աշխատացնել javascript կոդ
// // npm(Node Package Manager(Հանգույցի փաթեթի կառավարիչ)) - դա մի ծրագիր է որ հնարաորություն է տալիս մեզ քաշել proekt-ներ, որոնք որ մենք ապագայում կկիրառենք
// // npx(Node Package Executes(Հանգույցի փաթեթը կատարում է)) - դա մի ծրագիր է, որը երբ որ մեզ պետքա մի հատ պրոեկտ ուղղակի ոնցոր մի անգամ օգտագործել և վերջ, անիմաստ է քաշել instal անել և այլն և իրեն աշխատացնել, npx անում է հետևյալը ինքը քաշում է պրոեկտը աշխատացնում է իրեն և ջնջում է 


// // 4.
// // և մենք կօգտագօրծենք npx-ը որպեսզի մենք աշխատացնենք են ծրագիրը որը մեզ համար կստեղծի react պրոեկտը
// // գրում ենք npx ու ծրագրի անունը, ծրագրի անունը հետևյալն է create-react-app, դրանից հետո գրում են մեր պրոեկտի անունը(directory(գրացուցակ)-ի անունը) որը թող լինի օրինակ hello
// // և սխմում ենք enter և ինքը սկսում է աշխատել
// // հիմա ասում մեզ պետք է մտնել hello-ի մեջ cd անել hello-ի մեջ և գրել yarn start 

// // և բացում է բրաուզերը(localhost(տեղական հյուրընկալող):3000 այսինքն դա server է աշխատացնում իմ computer-ի մեջ) և ահա մեր npx ծրագիրը ինքը ոնցոր երբ որ էտ պրոեկտը ստեղծում է ինքը իր մեջ դնում է մի հատ շատ պարզ ծրագիր որպես օրինակ որը իհարկե մենք կջնջենք և կգրենք մերը

// // 03 : 35
// // 5.
// // իսկ հիմա եկեք ուսումնասիրենք մեր ստեղծած proekt-ը visual studio code-ով

// function App() {
//     const container = document.createElement("div");
//     container.innerHTML = "hello world";
//     return container;
// }

// const root = document.getElementById("root");

// root.appendChild(App());


// // 6.
// // ինչպես կարելիա ստեղծել react-ի էլեմենտ 

// function App() {
//     const container = document.createElement("div");
//     container.innerHTML = "hello world";
//     return container;
// }

// const root = document.getElementById("root");

// root.appendChild(App());

// // ||
// // \/

// function App() {
//     return React.createElement("div", {}) // մեջը դնում ենք div այսինքն մենք ստեղծում ենք մի հատ div, div-ի պարամետրները object({})-ի մեջ որի մասին հետո կարող ենք խոսանք և էն ինչ որ ուզում ենք մտնի div-ի մեջ այս դեպքում օրինակ "hello world" ենք ուզում որ div-ի մեջ լինի
// }

// ReactDOM.render(App(), document.getElementById("root"));

// // այսինքն հիմա եթե մենք կանչենք App ինքը մեզ կվերադարձնի react-ի Էլեմենտ 
// // բայց react-ի էլեմենտը մենք չենք կարող dom-ին կպցնենք որովհետև դա սովորական dom-ի էլեմենտ չի հետևաբար մենք ինչ պետքա անենք, մենք պետք է ասենք 
// // 08 : 20









