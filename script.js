document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const messageDiv = document.getElementById("message");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil data dari form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Contoh data login (ganti dengan data yang sesuai)
    const users = [
      { username: "admin", password: "111" },
      { username: "user", password: "222" },
    ];

    // Cek apakah data login benar
    let loggedIn = false;
    for (const user of users) {
      if (user.username === username && user.password === password) {
        loggedIn = true;
        break;
      }
    }

    if (loggedIn) {
      // Redirect ke halaman setelah login berhasil
      window.location.href = "ingames.html";
    } else {
      messageDiv.textContent = "Login gagal. Silakan coba lagi.";
    }
  });
});
