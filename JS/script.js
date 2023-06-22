document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Guardamos los datos en LocalStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redirigimos a la siguiente página
    window.location.href = '/html/nextPage.html';
});
