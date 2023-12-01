/*
TIC TAC TOE
A game that allows two players to play tic tac toe
*/

let stringifyBoard = function (board) {
    return  board[0].join("   ") + 
            "\n" + 
            board[1].join("   ") + 
            "\n" + 
            board[2].join("   ");
};

let board = [
    ["_", "_", "_"],                                                 // 1// board is the array in which we have all the information
    ["_", "_", "_"],                                                 // about the game  
    ["_", "_", "_"],
];

let player = "x";                                                   // current x or o   // 2

let didWeWin = function (board, player) {
    let i = 0;
    while (i < 3) {
        if (
            (board[i][0] === player && board[i][1] === player && board[i][2] === player) ||

            (board[0][i] === player && board[1][i] === player && board[2][i] === player) ||

            (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
            (board[0][2] === player && board[1][1] === player && board[2][0] === player)
        ) {
            if (player === "x") {
                let i1 = 0;
                while (i1 < board.length) {
                    let i2 = 0; 
                    while (i2 < board.length) {
                        if (board[i1][i2] === "x") {
                            board[i1][i2] = "X";
                        } else {
                            board[i1][i2] = "_";
                        }
                        player = "X";

                        i2 = i2 + 1;
                    }
                    i1 = i1 + 1;
                }
            } else {
                let i1 = 0;
                while (i1 < 3) {
                    let i2 = 0;
                    while (i2 < board.length) {
                        if (board[i1][i2] === "o") {
                            board[i1][i2] = "O";
                        } else {
                            board[i1][i2] = "_";
                        }
                        player = "O";

                        i2 = i2 + 1;
                    }
                    i1 = i1 + 1;
                }
            }

            return true;
        }

        i = i + 1;
    }
    return false;
};

let isFull = function (board) {
    let i = 0;
    while (i < board.length) {
        let i2 = 0;
        let row = board[i];
        while (i2 < row.length) {
            if (board[i][i2] === "_") {
                return false;
            }
            i2 = i2 + 1;
        }
        i = i + 1;
    }
    return true;
};

while (true) {                                                   // the main loop of the game
                                                                                
    let boardStr = stringifyBoard(board);

    let row = +prompt("dear user, please provider the value for the row \n\n" + boardStr);              // gother information from the user
    let column = +prompt("dear user, please provider the value for the column \n\n" + boardStr);         // 3
                                                                                                        

    if (board[row][column] !== "_") {                                  // place x or o onto the board
        alert("Not a legal move, you lose!");                          // 5
        continue;                                                      
    }

    board[row][column] = player;                                      // check to make sure the move was legal  // 2
    

    let won = didWeWin(board, player);

    if (won) {
        alert("Player " + player + " won the game! \n\n" + stringifyBoard(board));
        break;
    }

    if (isFull(board)) {
        alert("The board is full, nobody won");
        break;
    }

    /*
    if( board[0][0]==="x" && board[0][1]==="x" && board[0][2]==="x" ) 
    if( board[1][0]==="x" && board[1][1]==="x" && board[1][2]==="x" )
    if( board[2][0]==="x" && board[2][1]==="x" && board[2][2]==="x" )
    */

    // ԲՈԼՈՐԸ ԴԱՌՁՆՈՒՄԱ ՄԵԾԱՏԱՌ     բայց խաղը շարունակվումա
    // let i = 0;
    // while(i < 3) {
    //     if( board[i][0]===player && board[i][1]===player && board[i][2]===player ) {

    //         let i1 = 0;
    //         while(i1 < 3) {
    //             let i2 = 0;
    //             while(i2 < 3) {
    //                 if(board[i1][i2]==="x") {
    //                     board[i1][i2]="X";
    //                 };
    //                 if(board[i1][i2]==="o") {
    //                     board[i1][i2]="O";
    //                 };
    //                 if(player==="x"){
    //                     player = "X";
    //                 }
    //                 if(player==="o"){
    //                     player = "O";
    //                 };

    //                 i2 = i2 + 1;
    //             };

    //             i1 = i1 + 1;
    //         };

    //         alert("Player " + player + " won the game! \n\n" + stringifyBoard(board));

    //     };
    //     i = i + 1;

    // };

    // ՕՎ ՈՐ ՀԱՂԹԵՑ ԴԱՐՁՆՈՒՄԱ ՄԵԾԱՏԱՌ ՄՆԱՑԱԾԸ ԳԾԻԿ   բայց խաղը շարունակվումա

    /*
        if( (board[0][0]===player && board[0][1]===player && board[0][2]===player) ||
            (board[1][0]===player && board[1][1]===player && board[1][2]===player) ||
            (board[2][0]===player && board[2][1]===player && board[2][2]===player) ||

            (board[0][0]===player && board[1][0]===player && board[2][0]===player) ||
            (board[0][1]===player && board[1][1]===player && board[2][1]===player) ||
            (board[0][2]===player && board[1][2]===player && board[2][2]===player) ||

            (board[0][0]===player && board[1][1]===player && board[2][2]===player) ||
            (board[0][2]===player && board[1][1]===player && board[2][0]===player) 
            
            ) {
            if(player==="x") {
                let i1 = 0;
                while(i1 < 3) {
                    let i2 = 0;
                    while(i2 < 3) {
                    if(board[i1][i2]==="x") {
                        board[i1][i2]="X";
                    }
                    else{
                        board[i1][i2]="_";
                    };
                        player = "X";
                    

                    i2 = i2 + 1;
                    };
                i1 = i1 + 1;
            };
            } else {
                let i1 = 0;
                while(i1 < 3) {
                    let i2 = 0;
                    while(i2 < 3) {
                    if(board[i1][i2]==="o") {
                        board[i1][i2]="O";
                    }
                    else{
                        board[i1][i2]="_";
                    };
                        player = "O";
                    

                    i2 = i2 + 1;
                    };
                i1 = i1 + 1;
            };
            };

            alert("Player " + player + " won the game! \n\n" + stringifyBoard(board));
            break;
        };
        
    */

    /*
    // ՕՎ ՀԱՂԹԵՑ ԴԱՐՁՆՈՒՄԱ ՄԵԾԱՏԱՌ ՄՆԱՑԱԾԸ ԹՈՂԵԼՈՎ ՆՈՒՅՆԸ   բայց խաղը շարունակվումա
    let  i = 0;                
    while(i<3){
        if( board[i][0]===player && board[i][1]===player && board[i][2]===player) {
            let ia = 0;
            if(player === "x") {
                    while(ia<3) {
                        let ia2 = 0;
                        while(ia2 < 3) {
                            if(board[ia][ia2]==="x") {
                                board[ia][ia2] = "X";       
                            }
                            ia2 = ia2 + 1;
                        }
                        ia = ia + 1;
                    }
                    player = "X";
                    
            }   else{
                    while(ia<3) {
                        let ia2 = 0;
                        while(ia2 < 3) {
                            if(board[ia2][ia]==="o") {
                                board[ia2][ia] = "O";   
                            }
                            ia2 = ia2 + 1;
                        }
                        ia = ia + 1;
                    }
                    player = "O";
                }

            alert("Player " + player + " won the game! \n\n" + stringifyBoard(board));
            
        };
        i = i + 1;
    };
    
    */

    /*
    if( board[0][0]==="x" && board[1][0]==="x" && board[2][0]==="x" )
    if( board[0][1]==="x" && board[1][1]==="x" && board[2][1]==="x" ) 
    if( board[0][2]==="x" && board[1][2]==="x" && board[2][2]==="x" )

    if( board[0][0]==="x" && board[1][1]==="x" && board[2][2]==="x" ) 
    if( board[0][2]==="x" && board[1][1]==="x" && board[2][0]==="x" )
    */




    if (player === "x") {                                    // switch players
        player = "o";                                        // 4
    } else {
        player = "x"; 
    }
};


// Սկզբից մենք պետք է ներկայացնենք թե ոնցա խաղը ընթանալու 
// Հետո հերթականությունը լավ պետք է բացատրենք թե ինչիա սկզբից տախտակը տպում, ոնցա լինում որ index-ի տվյալներով քարը հայտնվումա տախտակի վրա և այլն 
// Մարդու լոգիկան զարգացնելու համար պետքա  նախ առաջինը որ իր միտքը հանգիստ լինի այսինքն եթե մարդը մտածումա թե ոնց գրի այդ կոդը արդեն իսկ նա չի կարող մտածել թե ոնց գրի այդ լոգիկան 
// Կոդը գրելուց լավ պետք է պատկերացնենք թե մեր գրած կոդը ոնց է տպվելու այսինքն եթե մենք լավ գիտենք կոդի իմաստը թե ինչա անում բայց չենք պատկերացնում թե ոնց է տպվելու կամ հակառակը ուզում ենք տպել մեր պատկերացրած ձև բայց չգիտենք ոնց գրենք այդ կոդը որ այդպես տպվի այդ դեպքում մենք չենք կարող կենտրոնանալ 








