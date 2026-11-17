// Connect to the score displays in the HTML
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

// Variables for scoring functions
let scoreHome = 0
let scoreGuest = 0

// Home team functions: 1 function per button
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

// Guest team functions: 1 function per button
function guestAdd1Point() {
    scoreGuest += 1
    guestScoreEl.textContent = scoreGuest
}

function guestAdd2Point() {
    scoreGuest += 2
    guestScoreEl.textContent = scoreGuest
}

function guestAdd3Point() {
    scoreGuest += 3
    guestScoreEl.textContent = scoreGuest
}
