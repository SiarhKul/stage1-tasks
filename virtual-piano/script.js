const piano = document.querySelector('.piano')
const btnLetters = document.querySelector('.btn-letters')
const btnNotes = document.querySelector('.btn-notes')
const pianoKey = document.querySelectorAll('.piano-key')
let isPressed = false

//------------------------------------------------mouse
piano.addEventListener('mousedown', (e) => {
  const audio = document.querySelector(`audio[data-note="${e.target.dataset.note}"]`);
  e.target.classList.add('piano-key-active')
  audio.currentTime = 0;
  audio.play();

})

piano.addEventListener('mouseup', (e) => {
  e.target.classList.remove('piano-key-active')

})

window.document.onmousedown = function (e) {
  isPressed = true

  if (isPressed) {
    piano.addEventListener('mouseover', () => {
      const audio = document.querySelector(`audio[data-note="${e.target.dataset.note}"]`);
      e.target.classList.add('piano-key-active')
      audio.currentTime = 0;
      audio.play();
    })

    piano.addEventListener('mouseout', () => {
      e.target.classList.remove('piano-key-active')
    })
    console.log('Pressed');
  }
}

window.document.onmouseup = function (e) {
  isPressed = false
  console.log('NO Pressed');
}

//------------------------------------------------keyboard
window.addEventListener("keydown", (e) => {
  const key = document.querySelector(`.piano-key[data-letter="${e.key.toUpperCase()}"]`);
  if (key === null) return;
  const audio = document.querySelector(`audio[data-note="${key.dataset.note}"]`);
  // const keyNote = key.getAttribute("data-note");
  // key.classList.add("playing");
  // note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
});

//------------------------------------------------button change letters

btnLetters.addEventListener('click', () => {
  btnNotes.classList.remove('btn-active')
  btnLetters.classList.add('btn-active')
  pianoKey.forEach(k => k.classList.add('letter'))
})

btnNotes.addEventListener('click', () => {
  btnLetters.classList.remove('btn-active')
  btnNotes.classList.add('btn-active')
  pianoKey.forEach(k => k.classList.remove('letter'))
})
//------------------------------------------------fullscreen

document.querySelector('.fullscreen').addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      turnOffFullscreen()
    }
  }
})

const turnOffFullscreen = () => {
  document.addEventListener("keypress", function (e) {
    if (e.key === 'Escape') {
      toggleFullScreen();
    }
  }, false);
}

