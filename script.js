let messageVisible = false;

function showMessage() {
  const music = document.getElementById('bgMusic');

  // Set volume and try to play music
  music.volume = 0.2;
  music.play().catch(error => {
    console.log("Autoplay blocked — will try again after user interaction.");
  });

  const messageBox = document.getElementById("message");
  const heartContainer = document.getElementById("heartBurst");

  if (!messageVisible) {
    messageBox.innerHTML = "";
    heartContainer.innerHTML = "";

    // 💖 Floating hearts
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement("span");
      heart.classList.add("heart");
      heart.textContent = "💖";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDelay = `${Math.random()}s`;
      heartContainer.appendChild(heart);
    }

    // ⏳ Show message after hearts
    setTimeout(() => {
      heartContainer.innerHTML = "";
      typeMessage(
        "To Bahle 💗\n" +
        "I made this little surprise for you.\n" +
        "I just want to remind you of the person you are.\n" +
        "You're smart, kind, funny and special, especially to me.\n" +
        "I never knew I'd start waking up in the morning and you'd be the first thing on my mind,\n" +
        "I love the feeling and hope it lasts forever.\n" +
        "This is just a small way of saying... you matter to me. A lot.\n" +
        "— Daniel 🌟"
      );
    }, 2000);

    messageVisible = true;
  } else {
    // Hide message and hearts
    messageBox.innerHTML = "";
    heartContainer.innerHTML = "";
    messageVisible = false;
  }
}

// ✍️ Typing effect
function typeMessage(text) {
  const messageBox = document.getElementById("message");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message-box", "fade-in");
  messageBox.appendChild(messageDiv);

  let i = 0;
  function typing() {
    if (i < text.length) {
      messageDiv.innerHTML += text[i] === '\n' ? "<br>" : text[i];
      i++;
      setTimeout(typing, 40); // typing speed
    }
  }

  typing();
}
function stopMusic() {
  const music = document.getElementById('bgMusic');
  music.pause();
  music.currentTime = 0; // Optional: resets to beginning
}