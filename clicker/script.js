// Variables
let score = 0
let revenu = 0
let price = 5

// Elements
const cookie = document.getElementById("cookie")
const scoreElement = document.getElementById("score")
const reset = document.getElementById("reset-button")
const upgrade = document.getElementById("upgrade-button")

// Event listener for clicking the cookie
cookie.addEventListener("click", () => {
    // Increase the score by 1
    score++

    // Desscrease the size of the cookie
    const currentSize = parseFloat(window.getComputedStyle(cookie).width)
    const newSize = currentSize * 0.9 // Reduce the size by 10%

    // Update the size of the cookie
    cookie.style.width = newSize + "px"
    cookie.style.height = newSize + "px"

    // Update the score display
    scoreElement.textContent = score

    setTimeout(() => {
        cookie.style.transform = "rotate(0deg)"
        cookie.style.width = "150px"
        cookie.style.height = "150px"
    }, 10)
})

upgrade.addEventListener("click", () => {
    if (score >= price) {
        score += -price
        price += 5
        revenu += 1
        scoreElement.textContent = score
    }
})

reset.addEventListener("click", () => {
    score = 0
    revenu = 0
    price = 0
    scoreElement.textContent = score
})

setInterval(() => {
    score += revenu
    scoreElement.textContent = score;
  }, 1000);
