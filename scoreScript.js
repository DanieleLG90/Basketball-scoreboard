let home = document.getElementById("homePoint")
let guest = document.getElementById("guestPoint")

let homeBtnOne = document.getElementById("homePoint1")
let homeBtnTwo = document.getElementById("homePoint2")
let homeBtnThree = document.getElementById("homePoint3")

let guestBtnOne = document.getElementById("guestPoint1")
let guestBtnTwo = document.getElementById("guestPoint2")
let guestBtnThree = document.getElementById("guestPoint3")


let homeScore = 0
let guestScore = 0

function homeScoreOne (){
    homeScore += 1
    home.textContent = homeScore
}
function homeScoreTwo (){
    homeScore += 2
    home.textContent = homeScore
}
function homeScoreThree (){
    homeScore += 3
    home.textContent = homeScore
}

function guestScoreOne (){
    guestScore += 1
    guest.textContent = guestScore
}
function guestScoreTwo (){
    guestScore += 2
    guest.textContent = guestScore
}
function guestScoreThree (){
    guestScore += 3
    guest.textContent = guestScore
}

function resetScore (){
    homeScore = 0
    guestScore = 0
    home.textContent = homeScore
    guest.textContent = guestScore
}