/*
TIC TAC TOE
A game that allows two players to play tic tac toe
*/


// board is the array in which we have all the information
// about the game

let board = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"]
]

let player = "X"; // current x or o


// the main loop of the game
while(true){


// stringified version of our board    
let boardStr = board[0].join("   ") +
 "\n"+ 
 board[1].join("   ") + 
  "\n" + 
  board[2].join("   ");

// gother information from the user
let row = +prompt("dear user, please provider the value for the row \n\n" + boardStr);
let column = +prompt("dear user, please provider the value for the column \n\n" + boardStr);

// place x or o onto the board
if(board[row][column] !== "_") {
    alert("Not a legal move, you lose!");
    
}


// check to make sure the move was legal
board[row][column] = player;


// switch players
if(player === "X") {
    player = "O";
} else {
    player = "X";
}

}


// hertakanwutyuny ddemic chem joge te inchia skzbic taxtaky tpum heto popxakan sarqum u indexi tvyaknery mez veradardsnum u heto mnacacsy
// u ytenc xarnelem vory inchi hamara u chem patkeracre vor imanalov lav while - n vonca ashxatum chem patkeracre while -i mej vonca et hertakanutyuny katarvelu ajsinqn vor ete shrqov u syunov erku angam grecinq texy vonca haytnvelu datark texi vra mer gracsy 
//AJSINQN SKZBIC MENQ PETQ E XAXY NERKAJACNENQ TE INCHPESA XAXY YNTANALU
/* menq petq e sarqenq xax ajnpes vor skzbic bacvi patuhan vortex kereva taxtaky (ereeq hat irar koxq gics ereq hat irar tak  vorpes datark tex )(da petq e anenq zangvacsnerov ajsinqn yndhanur taxtaky mi zangvacs e vori mej ka ereq zangvacs voronc mej ka ereq hat teqstayin andam (taki gic)) ev takic lini teqstayin fild (grelu tex ) vorpiszi mez et veradardsni arjeq vortex menq petq e grenq ajn sharqi index-y vory uzum enq poxancel vor sharqum vor uzum enq dnel X-y heto bacum enq erkrord patuhany vrotex erevuma nuyn taxtaky ev takic eli teqstayin fild vortex menq petq e grenq ajn sjuni indexy  vortex menq cankanumenq dnel X-y ev ajd indexnery veragrum enq popoxakani vorpeszi karoxananq ajn popoxakanov vorin veragrvacsa sharqi indexy karoxananq yntrel sharqy ajn popoxakani koxi koxqy dnelov ev yntrelov araji gracs shaqi indexy vorin veragracse cucaky isk syuni indexy veragracs popoxakany menq dnum enq ayn popoxakany vorin veragracse syuni arjeqy dnum enq ayn popoxakani mej vorin veragracse sharqy ev ayd nor popoxakany veragrum enq X vorpeszi araji ciklic heto erb kntri sharqi hscen heto syuni hascen heto ayd indexnerov hasceum vorpes teeqst veragrasc datark gcsiky kpoxenq ev kveragrenq x ev ktpi x */ 

//mardu logikan zargacnelu hamar petqa nax arajiny vor ira mitqy hangist lini aysinqn ete mardy mtacuma te vonc gri ajd kody arden na chi karox mtacel te vonc sarqi ajd logikan
//kody greluc lav petqe patkeracnenq te mer gracs kody vonce tpvelu aysinqn ete tekuz menq gitenq te kodi imasty te inche anum  bayc chgitenq te vonce tpvelu kam hakaraky dzevov chenq patkeracnum ajsinqn uzumenq tpel ajn dzevi vonc vor patkeracnumenq bayc chgitenq vonc grenq ajd kody vor ajdpes tpvi da arden lurj problem e