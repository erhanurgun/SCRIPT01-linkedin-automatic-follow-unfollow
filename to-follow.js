// Let's write the clickFollowButtons() function using async/await
async function clickFollowButtons() {
    // Select all buttons with the specified CSS class
    let buttons = document.querySelectorAll('.artdeco-button:not(.artdeco-button--muted)');
    // Use a loop to click the buttons
    for (let i = 0; i < buttons.length; i++) {
        // Use a hold function to wait for a button click
        await wait(1000); // 1000ms = 1s delay
        // Click button
        buttons[i].click();
        // Log the clicked button
        console.log(`Clicked Button #${i + 1}`);
    }
    // After clicking all buttons, reload the page
    setTimeout(() => {
        location.reload();
    }, 3000); // Wait 5 seconds (3000ms) before reloading the page
}

// A function to wait for a specified time
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Call the function
clickFollowButtons();
