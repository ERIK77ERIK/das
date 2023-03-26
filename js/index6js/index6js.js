let points = 0;

let resp0 = prompt("What is the capital of Armenia?");
if(resp0 === "Yerevan"){
    points = points +1;
}

let resp1 = prompt("What is the capital of Russia?");
if(resp1==="Moscow"){
    points=points+1;
}

let resp2 =prompt("what is the capital of France?");
if(resp2 === "Paris"){
    points = points +1;
}

alert("You received " + points +" out of 3")