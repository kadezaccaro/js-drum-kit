window.addEventListener("keydown", playSound);

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.code}"]`);
  const key = document.querySelector(`.key[data-key="${event.code}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
  setTimeout(() => {
    key.classList.remove("playing");
  }, 100);
}
