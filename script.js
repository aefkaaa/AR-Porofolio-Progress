document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('splash').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
    }, 3000);
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById(`${sectionId}-section`).classList.remove('hidden');
}

document.querySelectorAll('.button-container button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('dashboard').classList.remove('hidden');
    });
});
