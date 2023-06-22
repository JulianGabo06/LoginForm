window.onload = function() {
    // Recuperamos los datos del LocalStorage
    let username = localStorage.getItem('username');
    let password = localStorage.getItem('password');
  
    // Los mostramos en la página
    document.getElementById("usernameDisplay").innerText = username;
    document.getElementById("passwordDisplay").innerText = password;
  };
  