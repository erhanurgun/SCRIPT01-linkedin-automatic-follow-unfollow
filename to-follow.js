function clickFollowButtons() {
  // Select all buttons with the specified CSS class
  var butonlar = document.querySelectorAll('.artdeco-button:not(.artdeco-button--muted)');

  // Click a button every second
  var indeks = 0;
  var interval = setInterval(function() {
    // Clear range after clicking all buttons
    if (indeks >= butonlar.length) {
      clearInterval(interval);
      return;
    }

    // Click button
    butonlar[indeks].click();
    indeks++;
  }, 1000); // 1000ms = 1s
}

// Call the function
clickFollowButtons();
