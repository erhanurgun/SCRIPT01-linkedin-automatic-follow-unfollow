// Let's write the clickUnfollowButtons() function using async/await
async function clickUnfollowButtons() {
    // Select all buttons with the specified CSS class
    const followButtons = document.querySelectorAll(
        'button.artdeco-button.artdeco-button--muted.artdeco-button--2.artdeco-button--secondary.ember-view'
    );
    for (let i = 0; i < followButtons.length; i++) {
        const button = followButtons[i];
        console.log(`Clicked Button #${i + 1}`);
        button.click();
        // To set the waiting time, you can make a wait here if necessary
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Check for the presence of the second button
        const stopFollowingButton = document.querySelector(
            'button.artdeco-modal__confirm-dialog-btn.artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view'
        );
        if (stopFollowingButton) {
            console.log('Found the 2nd button to click, clicking...');
            stopFollowingButton.click();
            await new Promise((resolve) => setTimeout(resolve, 1000));
        } else {
            console.log('2. Buton bulunamadı, işlem devam ediyor');
        }

        // Scroll the page a little after each click
        window.scrollBy(0, 33); // Can shift 33 pixels, adjust as needed
        await new Promise((resolve) => setTimeout(resolve, 200));
    }
    // After completing the process, you can reload the page
    location.reload();
}

// Call the function
clickUnfollowButtons();