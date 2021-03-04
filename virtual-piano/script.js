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
