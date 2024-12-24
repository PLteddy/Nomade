
// Popup logic
const popupOverlay = document.querySelector('.popup-overlay');
const btnClosePopup = document.querySelector('.btn-close-popup');
btnClosePopup.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.querySelector("input[name='email']").value;
  const name = document.querySelector("input[name='name']").value;
  const message = document.querySelector("textarea[name='message']").value;

  if (!email || !name || !message) {
      alert("Please fill in all fields.");
      return;
  }

  fetch("send_email.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ name, email, message }).toString()
  })
  .then(response => response.text())
  .then(data => {
      console.log(data); // Affiche la réponse pour déboguer
      const popupText = document.querySelector(".popup-text");
      const popupOverlay = document.querySelector(".popup-overlay");
      popupText.textContent = data;
      popupOverlay.style.display = "flex";
  })
  .catch(error => {
      alert("An error occurred. Please try again later.");
      console.error("Error:", error);
  });
});
