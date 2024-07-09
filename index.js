
let countHome = 0
let countGuest = 0
let scoreHome =document.getElementById("score-h")
let scoreGuest =document.getElementById("score-g")

function add1h(){
    countHome+=1
    scoreHome.textContent = countHome
    console.log(scoreHome)
    
}
function add2h(){
    countHome+=2
    scoreHome.textContent = countHome
    console.log(scoreHome)
    
}
function add3h(){
    countHome+=1
    scoreHome.textContent = countHome
    console.log(scoreHome)
    
}

function add1g(){
    countGuest+=1
    scoreGuest.textContent = countGuest
    console.log(scoreGuest)
    
}
function add2g(){
    countGuest+=2
    scoreGuest.textContent = countGuest
    console.log(scoreGuest)
    
}
function add3g(){
    countGuest+=1
    scoreGuest.textContent = countGuest
    console.log(scoreGuest)
    
}
