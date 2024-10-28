
let homeScore = 0
let awayScore = 0


function addScore(scoreHome, scoreAway) {
    homeScore += scoreHome
    console.log('added score home', scoreHome, homeScore)
    awayScore += scoreAway
    console.log('added score', scoreAway, awayScore)
    home()
    away()
}

function home() {
    let homeTotal = document.getElementById('total-home-score')
    homeTotal.innerText = homeScore
}

function away() {
    let awayTotal = document.getElementById('total-away-score')
    awayTotal.innerText = awayScore
}

function zeroScores() {
    homeScore = 0
    let homeTotal = document.getElementById('total-home-score')
    homeTotal.innerText = homeScore

    awayScore = 0
    let awayTotal = document.getElementById('total-away-score')
    awayTotal.innerText = awayScore
}