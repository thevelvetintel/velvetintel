function enterSite() {
  document.getElementById('age-gate').style.display = 'none';
  document.getElementById('main-site').style.display = 'block';
  // Remember for this browser session
  sessionStorage.setItem('ageVerified', 'true');
}

function exitSite() {
  window.location.href = 'https://www.google.com';
}

// Check if already verified in this session
window.onload = function() {
  if (sessionStorage.getItem('ageVerified') === 'true') {
    document.getElementById('age-gate').style.display = 'none';
    document.getElementById('main-site').style.display = 'block';
  }
};
