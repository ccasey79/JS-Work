console.log('JS loaded!');

// Get modal element
var modal = document.getElementById('simpleModal');

// Get the Modal Open Button
var modalBtn = document.getElementById('modalBtn');

// Get the Modal Close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);

// Listen for close Click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click (window)
window.addEventListener('click', clickOutside);


// Function to open modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close modalBtn
function closeModal() {
  modal.style.display = 'none';
}

// Function to close modal clicking outside (window)
function clickOutside(e) {
  if(e.target == modal ) {
      modal.style.display = 'none';
  }
}
