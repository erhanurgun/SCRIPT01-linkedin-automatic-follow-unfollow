// Let's write the clickUnfollowButtons() function using async/await
async function clickUnfollowButtons() {
    // We select all "Unfollow" buttons
    const unfollowButtons = document.querySelectorAll(
        'button.artdeco-button.artdeco-button--muted.artdeco-button--2.artdeco-button--secondary.ember-view'
    );
    for (let i = 0; i < unfollowButtons.length; i++) {
        const button = unfollowButtons[i];
        console.log(`Clicking on button #${i + 1}...`);
        button.click();
        // After clicking on the button, scroll to where the button is located
        await new Promise((resolve) => {
            setTimeout(() => {
                const buttonPosition = button.getBoundingClientRect();
                const yOffset = buttonPosition.top - (window.innerHeight / 2);
                window.scrollBy(0, yOffset);
                resolve();
            }, 1000);
        });
        // We check the presence of the second button
        const stopFollowingButton = document.querySelector(
            'button.artdeco-modal__confirm-dialog-btn.artdeco-button.artdeco-button--2.artdeco-button--primary.ember-view'
        );
        if (stopFollowingButton) {
            console.log('Second button found, clicked...');
            stopFollowingButton.click();
            await new Promise((resolve) => setTimeout(resolve, 1000));
        } else {
            console.log('Second button not found, operation in progress...');
        }
        await new Promise((resolve) => setTimeout(resolve, 200));
    }
    // We reload the page after the process is finished
    location.reload();
}

// Call the function
clickUnfollowButtons();
