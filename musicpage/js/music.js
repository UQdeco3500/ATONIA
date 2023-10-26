// script.js

// Get all song elements containing music
const songElements = document.querySelectorAll('.song');

// Iterate over each song element
songElements.forEach(songElement => {
  // Get the audio element, play button, and current time display element
  const audio = songElement.querySelector('audio');
  const playButton = songElement.querySelector('.playButton');
  const currentTimeDisplay = songElement.querySelector('.currentTime');

  // Event handler for play button click
  playButton.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();  // If audio is paused, play the audio
      playButton.innerHTML = '<i class="fas fa-pause"></i>'; // Switch to pause icon
    } else {
      audio.pause();  // If audio is playing, pause the audio
      playButton.innerHTML = '<i class="fas fa-play"></i>'; // Switch to play icon
    }
  });

  // Event handler for audio time update
  audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    currentTimeDisplay.textContent = formattedTime; // Update the displayed current time
  });
});

// Function to toggle the visibility of the popup
function togglePopup() {
  const popup = document.getElementById('popup');
  // Toggle the display property of the popup element
  popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
}

const checkboxes = document.querySelectorAll('.checkbox');
const showMessageButton = document.getElementById('showMessageButton');
const message = document.getElementById('message');
const closeMessageButton = document.getElementById('closeMessageButton');

// Event handler when the state of any checkbox changes
function handleCheckboxChange() {
  let atLeastOneChecked = false;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      atLeastOneChecked = true;
    }
  });

  // Show or hide the "Show Message" button based on checkbox state
  if (atLeastOneChecked) {
    showMessageButton.classList.remove('hidden');
  } else {
    showMessageButton.classList.add('hidden');
    message.classList.add('hidden');
  }
}

// Add event listeners for checkbox state changes
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', handleCheckboxChange);
});

// Show the message when the "Show Message" button is clicked
showMessageButton.addEventListener('click', function () {
  message.classList.remove('hidden');
});

// Close the message when the "Close Message" button is clicked
closeMessageButton.addEventListener('click', function () {
  message.classList.add('hidden');
});

// Hide the message after a certain time interval
setTimeout(function () {
  message.classList.add('hidden');
}, 5000);