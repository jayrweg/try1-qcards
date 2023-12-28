document.getElementById('loginButton').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
  
    
    if (password === '12345'|| password === 12345)  {
      window.location.href = 'page2.html';
    } else {
      alert('Incorrect password. Please try again.');
    }

     // Clear the password input field
  passwordInput.value = '';
  });
  