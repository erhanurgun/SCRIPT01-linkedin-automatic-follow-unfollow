// This script will filter out users that do not contain any of the keywords
const keywords = ["php", "laravel", "backend", "back-end", "back end", "nodejs", "node.js"];

// Let's write the filterItems() function using async/await
const filterItems = () => {
    // Select all items
    const items = document.querySelectorAll('.bbxqAqilZpWnGiGMbgXjsmdtdiOQbzOc');
    // Keep track of how many items we've deleted
    let deletedCount = 0;
    let stayedCount = 0;
    // Loop through all items
    items.forEach((item) => {
        // Select the subtitle element
        const subtitleElement = item.querySelector('.entity-result__primary-subtitle.t-14.t-black.t-normal');
        // Check if the subtitle element exists
        if (subtitleElement) {
            // Get the subtitle text and convert it to lowercase
            const subtitleText = subtitleElement.textContent.toLowerCase();
            // Check if the subtitle text contains any of the keywords
            const containsKeyword = keywords.some(keyword => subtitleText.includes(keyword));
            // If the subtitle text does not contain any of the keywords, delete the item
            if (!containsKeyword) {
                item.remove();
                deletedCount++;
            } else {
                stayedCount++;
            }
        }
    });
    // Log the number of deleted and stayed items
    console.log(`Deleted ${deletedCount} items`);
    console.log(`Stayed ${stayedCount} items`);
}

// Call the function
filterItems();
