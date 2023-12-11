// navbar

fetch('./navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => console.error('Error fetching navbar:', error));

// navbar icon

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});

// modal

document.addEventListener('DOMContentLoaded', function () {
    const certificateCards = document.querySelectorAll('.certificate-card');
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay'); 
    const modalContent = document.querySelector('.modal-content');
    const closeModal = document.querySelector('.close-modal');
    const modalImage = document.querySelector('.modal-img');

    certificateCards.forEach(card => {
        card.addEventListener('click', function () {
            const imgSrc = card.querySelector('.certificate-img').src;
            modalImage.src = imgSrc;
            modal.style.display = 'flex';
            overlay.style.display = 'block'; 
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
        overlay.style.display = 'none'; 
    });

    window.addEventListener('click', function (event) {
        if (event.target === overlay) {
            modal.style.display = 'none';
            overlay.style.display = 'none'; 
        }
    });
});

// footer

document.addEventListener('DOMContentLoaded', function () {
    const footerContainer = document.getElementById('footer-container');
    const footerRequest = new XMLHttpRequest();
    footerRequest.onload = function () {
        if (footerRequest.status >= 200 && footerRequest.status < 400) {
            footerContainer.innerHTML = footerRequest.responseText;
        }
    };
    footerRequest.open('GET', 'footer.html', true);
    footerRequest.send();
});

let number = document.getElementById('number');
let counter = 0;

setInterval(() => {
    if (counter == 65) {
        clearInterval;
    } else {
        counter += 1;
        number.innerHTML = `${counter}%`
    }
}, 30 );