const darkMode = document.getElementById('dark-mode'); 
darkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark');
}) //add class "dark" to "body" when click
