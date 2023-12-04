// script.js for index.html
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('nameForm');
  form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent the form from submitting in the traditional way
      const name = document.getElementById('name').value.trim();
      if (name) {
          // Redirect to the verse.html page with the name as a URL parameter
          window.location.href = `verse.html?name=${encodeURIComponent(name)}`;
      } else {
          // Inform the user they need to enter their name
          alert('Please enter your name.');
      }
  });
});
