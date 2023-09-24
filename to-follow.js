// Let's write the clickFollowButtons() function using async/await
async function clickFollowButtons() {
    // Select all buttons with the specified CSS class
    let buttons = document.querySelectorAll('.artdeco-button:not(.artdeco-button--muted)');
    // Use a loop to click the buttons
    for (let indeks = 0; indeks < buttons.length; indeks++) {
        // Use a hold function to wait for a button click
        await wait(1000); // 1000ms = 1s
        // Click button
        buttons[indeks].click();
        // Log the clicked button
        console.log(`Clicked Button #${indeks + 1}`);
    }
}

// A function to wait for a specified time
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Call the function
clickFollowButtons();
