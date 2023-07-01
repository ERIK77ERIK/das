// // //1
// function max( arr) {
//   
// };
// max([7, 8, 20]);

// menq grum enq mi hat functia asenq te maqs vory petq e yndni inch vor arjeqner asenq te tver ev petq e irenc amenamecs tivy yntri , erku varyant ka karoxa mer max-y ynduni zangvacs asenq karox enq stex zangvacs stananq ev max-y kanchenq inch vor mi zangvacsov asenq chgitem 6-ov ayspes  u hima es zangvacsic menq kgtnenq kpordsenq pttvel ev gtnenq uremn amena mecs arjeqy
// bajc patkeracreq menq uzum enq mer functian nenc grenq vorpeszi voch te mez tan zangvacs ajl arandsin uxxaki arjeqner asenq 7, 8, ev 20 ha orinak 

// function max( arr) {
//   
// };
// max(7, 8, 20);

// de ete tan 7, 8 ev 20  mez petqa stex hamapatasxan popoxakanner unenanq orinak x, y ev z vorpeszi 7-y gna mtni x-i mej 8-y gna mtni y-i mej , 20-y gna mtni z-i mej ev menq uremn irancov pttvenq 
// bajc xndiry inchuma vor ete menq chgitenq qani hat arjeq e stex mtnelu menq chenq karox stex anverjakan tenc popoxakanneri sharq senc stexcsenq en huysov vor mi masy karox e kirarvi mi masy che che mi hat xndira stex arajanum inchpes da kareli e lucsel
//  nayeq menq karox enq senc anenq ...val kam inch vor popoxakani anun stex

// function max(...val) {
// 
// }
// max(7, 8, 20)

// mitqy inchuma vor uremn 7-y 8-y ev 20-y erb vor gan mtnen stex ev handipen ay es tipi bani spread-i iranq uremn kveracsven zangvacsi ev kveragrven es val popoxakanin
// ajsinqn inch e stacvum vor stex erb vor menq alert anenq val duq ktesneq vor val-y irakanum zangvacs e vori mej ka 7, 8 ev 20 nayeq stex tesnum eq 7, 8 ev 20 

// function max(...val) {
// alert(val)
// }
// max(7, 8, 20);
// ktpi 7, 8, 20

//menq nayev karox enq ogtagorcsenq ajspes nayeq asenq x, y ayspes
// sa inche linum de ekeq sa mi qich erkaracnenq 40, 50 ev 7 ,8 ev 20


// function max(x, y, ...val) {
//     alert(val)
// }
// max(40, 50, 7, 8, 20);
// ktpi 7, 8, 20

// inch e stacvum stex 40-y kgna kmtni x-i mej, 50-y kgna kmtni y-i mej isk mnacacsy vorpes zangvacs kgnan kmtnen val-i mej ajsinqn ete menq alert anenq val nayeq inch ka mejy 7, 8 ev 20 bayc ete menq alert anenq asenq x-i mej inch e ktesneq vor es 40-y gnac ev mtav ajstex xndrem 40 

// okey sa bavakanin hetaqrqir bana menq naev karox enq hakaraky anenq ajsinqn ete menq stex unenq mi hat zangvacs (let a) vori mej kan es arjeqnery menq karox enq es anenq ...a

// function max(x, y, ...val) {
//     alert(val)
// }
// let a = [40, 50, 7, 8, 20]
// max(...a);  // max(40, 50, 7, 8, 20)
// ktpi 7, 8, 20

// sa inche nshanakum sa nshanakum e vor menq uzum enq es zangvacsi andamnery hanenq arandsin vorpes uxaki arjeqner voch te zangvacsi mej yndgrkvacs arjeqner ajl henc bun arjeqnery arandsin sa kochvuma spread apreydr(operator), spread nshanakuma taracsvel(sprtvel), arandsnacnel ajsinqn inch e stacvum vor menq ira arjeqnery vercnum enq ev arandsnacnum enq, hanum enq durs ajsinqn sa nuyn e inchpes vor menq kancheynq max-y arandsin arjeqnerov ajspes

// function max(x, y, ...val) {
//     alert(val)
// }
// let a = [40, 50, 7, 8, 20]
// max(...a);  // max(40, 50, 7, 8, 20)
// ktpi 7, 8, 20

// sa nuyn e inchpes vor sa 

// ajsinqn es a-@ es zangvacsn e che

// function max(x, y, ...val) {
//     alert(val)
// }
// let a = [40, 50, 7, 8, 20]
// max(...[40, 50, 7, 8, 20]);  // max(40, 50, 7, 8, 20)
// ktpi 7, 8, 20

// ajsinq es spread-y inche anum arandsin es arjeqnery vercnum a ev irenc e pas talis vorpes arandsin arjeqner   ajsinqn nun e ichpes vor sa liner 

// uremn inche stacvum vor ete sa nuyn e inchpes vor sa liner nshanakuma 40-y ajsinqn arajin arjeqy es zangvacsi galisa mtnuma x-i mej erkrordy galisa mtnuma y-i mej ev ayln ev ayln (mnacsacsy vorpes zangvacs galisa mtnuma val-i mej)


// function max(x, y, ...val) {
//     alert(val)
// }
// let a = [40, 50, 7, 8, 20]
// max(...a);  // max(40, 50, 7, 8, 20)
// ktpi 7, 8, 20

// menq karox enq kombinacianer anel ste karox enq pas tanq asenq te 50 ekeq 50 che 100 , 20 asenq te ev spread aracs a 

// function max(x, y, ...val) {
//     alert(val)
// }
// let a = [40, 50, 7, 8, 20]
// max(100, 20, ...a);  // max(40, 50, 7, 8, 20)
// ktpi 40, 50, 7, 8, 20

// sa inche nshanakum vor menq poxancum enq uremn 100 heto 20 heto nor 40, 50, 7, 8, ev 20 ev inch kstacvi ete menq ajspes kancheinq es funkcian, 100-y kgna kmtni x-i mej, 20-y kgna kmtni y-i mej, ev mnacsacs bolor arjeqnery ajsinqn 40, 50, 7, 8 ev 20 kgnan kmtnen es val-i mej vorpes zangvacs ajsinqn ete menq stex alert anenq val menq ktesnenq vor kstananq bolor ajs arjeqnery


// sa shat harmare en shamanak eli em asum ete menq unenq mi hat funkcia vory uzuma ynduni inch vor anhayt qanaki arjeqner okey,    min ev max-y orinakner en es tipi funkcianeri voronc karelia tal kap chuni inchqan tiv uzum eq karox eq taq ev inqy et amoxj tveri amenamecsy kam amena poqry kveradardsni ev da grvacsa ayspes spread operatorov,
// de eli asum duq moraceq en pasty vor spread operatory konkret funkcian kanchelu hamar e, spread operatory yndameny nshanakuma vor arjeqnery inch vor zangvacsi hanum enq dus vorpes arandsin zangvacs

// let a = [6, 4, 20];
// let b = [3, 100, ...a, 400];  // [3, 100, 6, 4, 20, 400]



// /// // // /2
// husovem es masy parzer aysinqn zangvacsi arjeqnery menq spread-ov karox enq hanenq 
// menq nuyny karox enq anenq objectnerov 

// patkeracreq menq unenq mi hat object vor mej kan inch vor  name: "joe", phone: "938482" inch vor mi xary tiv inch vor senc mi ban hima menq unenq mi hat erkrod object b vori mej menq kdnenq lastname: "jackson" ev spread kanenq a-n
// isk spread anel a-@ incha nshanakum de hisheq vor spread anely nshanakuma zangvacsi kam objecti nerqin arjeqnery hanel durs isk a-i nerqin arjeqnery inch en sranq en  ajsinqn da nuyna inchpes vor menq aneynq senc

// let a = {
//     name: "Joe",
//     phone: "994244"
// }
// let b = {
//     lastname: "jackson",
//     ...a
// }
// alert(JSON.stringify(b, undefined, 2));

// ktpi 
//     lastname: "jackson",
//     name: "joe",
//     phone: "994244"

// hima nayeq stex a-i mej ka name ev phone menq b-i mej karox enq evs unenal name  orinak name: "jack"
// hima inch kstacsvi de inch kstacvi hisheq vor objecti mej ete hertakanutyunov enq nayum verjiny misht haxtum e, ajsinqn inch e stacvum vor ete menq unenanq lastname: :jackson heto a-y kberi sa ir ners ajspes heto name noric kpoxi es name-y joe-ic depi jack 

// ajsinqn ete menq senc anenq menq kunenanq mi hat object vori mej klini lastname::jackson heto name: "jack" nayeq es name: "joe" -n poxecinq stex ev dardsrecinq jack ev heto nor es phone: "39434"-y mnacs


// let a = {
//     name: "Joe",
//     phone: "994244"
// }
// let b = {
//     lastname: "jackson",
//     ...a,
//     name: "jack",
// }
// alert(JSON.stringify(b, undefined, 2));

// կտպի 
// lastname: "jackson",
// name: "Jack",
// phone: "994244"


// isk ete anenq senc 

// let a = {
//     name: "Joe",
//     phone: "994244"
// }
// let b = {
//     name: "jack",
//     lastname: "jackson",
//     ...a,
// }
// alert(JSON.stringify(b, undefined, 2));

// կտպի 
// name: "Joe",
// lastname: "jackson",
// phone: "994244"


// aysinqn inch e stacvum vor es spread operatorov menq shat hesht karoxanum enq inch vor object-i bolor andamnery vercnenq orinak qcenq mi hat urish objecti mej (aranc pttvelu hat hat ev copi anelu hat hat)  dnenq stex...  miangamic karoxenq spreadov qcenq mekic myus tex
// shat harmar bane spread operatory ev bavakanin shat e ogtagorcsvum csragravorman mej hamenayn deps javascript csragravorman mej



// // Վարժություն
//
// // Ստեղծել max անունով ֆունկցիա, որը կվերադարձնի տրված զանգվածի ամենամեծ թիվը
// 
// // Օրինակ:
// 
// // max([5, 28, 99, 23, 100, 32]); // վերադարձնում է 100

// // 1
// function max(arr) {
//     let maxVal = arr[0];
//     for(let i = 1; i < arr.length; i++) {
//         const val = arr[i];
//         if(val > maxVal) {
//             maxVal = val;
//         }
//     }
//     return maxVal;
// };

// alert(max([5, 28, 99, 23, 100, 32]));

// // կտպի 100

// // 2
// function max(arr) {
//     return arr.reduce(function(aggr, val) {
//         if(val > aggr) {
//             return val;
//         }
//         return aggr;
//     }, arr[0]);
// }

// alert(max([5, 28, 99, 23, 100, 32]));

// // կտպի 100

// // 3
// function max(arr) {
//     return arr.reduce(function(aggr, val) {
//         return Math.max(aggr, val);
//     }, arr[0]);
// }

// alert(max([5, 28, 99, 23, 100, 32]));

// // կտպի 100

// // 4
// function max(arr) {
//         return Math.max(...arr); // 5, 28, 99
// };

// alert(max([5, 28, 99, 23, 100, 32]));

// // կտպի 100



// let a = [5, 6, 7];
// f(...a); // f(5, 6, 7);

// let a = [6, 10, 20];
// let b = [7, ...a, 8, 9]; // [7, 6, 10, 20, 8, 9]

// alert(b); 
// // կտպի 7, 6, 10, 20, 8, 9


// alert(Math.max(...[5, 28, 99, 23, 100, 32]));  // alert(Math.max(5, 28, 99, 23, 100, 32));

