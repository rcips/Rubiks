/** @format */

let scores = [
    { name: "Player 1", time: 300 },
    { name: "Player 2", time: 300 },
    { name: "Player 3", time: 300 },
    { name: "Player 4", time: 300 },
    { name: "Player 5", time: 300 },
]

function updateLeaderboardView() {
    let leaderboard = document.getElementById("leaderboard")
    leaderboard.innerHTML = ""

    scores.sort(function (a, b) {
        return b.time - a.time
    })
    let elements = [] // we'll need created elements to update colors later on
    // create elements for each player
    for (let i = 0; i < scores.length; i++) {
        let name = document.createElement("div")
        let score = document.createElement("div")
        name.classList.add("name")
        score.classList.add("time")
        name.innerText = scores[i].name
        score.innerText = scores[i].score

        let scoreRow = document.createElement("div")
        scoreRow.classList.add("row")
        scoreRow.appendChild(name)
        scoreRow.appendChild(score)
        leaderboard.appendChild(scoreRow)

        elements.push(scoreRow)
    }

    let colors = ["gold", "silver", "#cd7f32"]
    for (let i = 0; i < 3; i++) {
        elements[i].style.color = colors[i]
    }
}

updateLeaderboardView()
function randomize() {
    for (var i = 0; i < scores.length; i++) {
        scores[i].score = Math.floor(Math.random() * (600 - 300 + 1)) + 10
    }
    // when your data changes, call updateLeaderboardView
    updateLeaderboardView()
}
