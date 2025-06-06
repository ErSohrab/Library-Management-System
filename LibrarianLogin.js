document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const librarian = document.getElementById('Librarian').value;
    const password = document.getElementById('password').value;

    if (librarian === 'ManjurAlam' && password === 'manjur@1234') {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';

        window.location.href = "LibraryMainPage.html";

    } else if (librarian === 'sohrab' && password === 'sohrab@1234') {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';

        window.location.href = "LibraryMainPage.html";

    } else if (librarian === 'sushen' && password === 'sushen@1234') {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';

        window.location.href = "LibraryMainPage.html";

    } else if (librarian === 'Admin' && password === 'Admin@1234') {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';

        window.location.href = "LibraryMainPage.html";
  }
   else {
        document.getElementById('message').textContent = 'Invalid Librarian ID or password.';
    }
});