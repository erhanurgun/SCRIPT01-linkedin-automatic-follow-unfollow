// Scroll to bottom of page
let scrolling = true;

const scrollToBottom = async () => {
  while (scrolling) {
    await new Promise(resolve => {
      window.requestAnimationFrame(resolve); // Using requestAnimationFrame for asynchronous operation
    });
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
  }
};

// Call the function
scrollToBottom();

// Stop scrolling when the Escape key is pressed
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    scrolling = false;
  }
});
