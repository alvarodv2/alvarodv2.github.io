document.getElementById('menu-btn').addEventListener('click', function () {
    this.classList.toggle('active');
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('menu-btn').classList.remove('active');
});


