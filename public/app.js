function showPopup(event) {
    event.preventDefault(); // Prevent form submission
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    document.getElementById('requestForm').reset();
}
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  }
  
  