let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let scoreHome = 0
let scoreGuest = 0

function add1Point() {
    scoreHome += 1
    homeScoreEl.textContent = scoreHome
}

function add2Point() {
    scoreHome += 2
    homeScoreEl.textContent = scoreHome
}

function add3Point() {
    scoreHome += 3
    homeScoreEl.textContent = scoreHome
}
