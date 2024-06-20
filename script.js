let countUpTimer;
let countDownTimer;
let paused = false;

function startCounting() {
    countUpTimer = setInterval(countUp, 1000);
    countDownTimer = setInterval(countDown, 1000);
}

function countUp() {
    let countUpDisplay = document.getElementById("countUpDisplay");
    let currentValue = parseInt(countUpDisplay.textContent);
    currentValue = (currentValue + 1) % 60; // Increment and wrap around 0-59
    countUpDisplay.textContent = currentValue < 10 ? `0${currentValue}` : currentValue;
    checkAndDisplayResult();
}

function countDown() {
    if (!paused) {
        let countDownDisplay = document.getElementById("countDownDisplay");
        let currentValue = parseInt(countDownDisplay.textContent);
        currentValue = (currentValue - 1 + 60) % 60; // Decrement and wrap around 59-0
        countDownDisplay.textContent = currentValue < 60 ? `0${currentValue}` : currentValue;
        checkAndDisplayResult();

        // Check if 10 seconds have passed
        let countUpValue = parseInt(document.getElementById("countUpDisplay").textContent);
        if (countUpValue === 60) {
            paused = true;
            setTimeout(() => {
                paused = false;
            }, 60000); // Pause for 60 seconds (1000 ms = 1 second)
        }
    }
}

function checkAndDisplayResult() {
    let countUpValue = parseInt(document.getElementById("countUpDisplay").textContent);
    let countDownValue = parseInt(document.getElementById("countDownDisplay").textContent);

    let resultDisplay = document.getElementById("resultDisplay");
    if (countUpValue === countDownValue) {
        resultDisplay.textContent = "Values Match!";
    } else {
        resultDisplay.textContent = "";
    }
}
