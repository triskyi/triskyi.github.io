const nameElement = document.querySelector("#name span");
const cursorElement = document.querySelector("#cursor");
const name = " Ishimwe Tresor Bertrand";

function displayLetters() {
  let delay = 0;
  for (let i = 0; i < name.length; i++) {
    setTimeout(() => {
      nameElement.textContent += name[i];
      if (i !== name.length - 1) {
        cursorElement.style.visibility = "hidden";
      } else {
        cursorElement.style.visibility = "visible";
      }
    }, delay);
    delay += 100; // Adjust the delay between each letter appearance
  }
}

displayLetters();

function animateCardsOnScroll() {
  var animateCards = document.querySelectorAll(".animate-card");

  function checkVisibility() {
    for (var i = 0; i < animateCards.length; i++) {
      var card = animateCards[i];
      var cardPosition = card.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (cardPosition < windowHeight - 50) {
        card.classList.add("animate-card-visible");
      }
    }
  }

  checkVisibility();

  window.addEventListener("scroll", function () {
    checkVisibility();
  });
}

animateCardsOnScroll();

window.addEventListener("load", function () {
  var loadingOverlay = document.getElementById("loading-overlay");
  setTimeout(function () {
    loadingOverlay.style.display = "none";
  }, 2000); // Adjust the delay time as needed (in milliseconds)
});
