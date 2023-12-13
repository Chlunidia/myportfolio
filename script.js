// navbar

function toggleMenu() {
    var menu = document.getElementById('menu-links');
    var menuToggle = document.querySelector('.menu-toggle');
    
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  
    if (menu.classList.contains('active')) {
      menu.style.display = 'block';
      setTimeout(function() {
        menu.style.opacity = '1';
        menu.style.transform = 'translateY(0)';
      }, 50); // Adding a slight delay for transition effect
    } else {
      menu.style.opacity = '0';
      menu.style.transform = 'translateY(-20px)';
      setTimeout(function() {
        menu.style.display = 'none';
      }, 400); // Hiding the menu after transition ends
    }
  }
  
  
  
  
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
  
  document.addEventListener('DOMContentLoaded', function () {
      const certificateSlider = document.querySelector('.certificate-slider');
      const certificateCards = document.querySelectorAll('.certificate-card');
      const modalContainer = document.querySelector('.modal-container');
      const overlay = document.querySelector('.overlay');
      const modalTitle = document.querySelector('.modal-title');
      const modalDescription = document.querySelector('.modal-description');
      const modalImg = document.querySelector('.modal-img');
  
      // Set width of slider based on the number of cards
      const sliderWidth = certificateCards.length * (300 + 20 * 2); // Card width + margin
  
      certificateSlider.style.width = `${sliderWidth}px`;
  
      certificateCards.forEach(function (card, index) {
          card.addEventListener('click', function () {
              // Set modal content based on the clicked card
              const certificateTitle = card.querySelector('.certificate-title').textContent;
              const certificateDescription = card.querySelector('.certificate-description').textContent;
              const certificateImgSrc = card.querySelector('.certificate-img').getAttribute('src');
  
              modalTitle.textContent = certificateTitle;
              modalDescription.textContent = certificateDescription;
              modalImg.src = certificateImgSrc;
  
              // Display the modal and overlay
              modalContainer.style.display = 'flex';
              overlay.style.display = 'block';
          });
      });
  
      // Function to close the modal and overlay
      window.closeCertificateModal = function () {
          modalContainer.style.display = 'none';
          overlay.style.display = 'none';
      };
  
      // Close modal and overlay when clicking outside the modal content
      window.addEventListener('click', function (event) {
          if (event.target === overlay) {
              closeCertificateModal();
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
  
  document.addEventListener('DOMContentLoaded', function () {
      const portfolioCards = document.querySelectorAll('.portfolio-card');
      const modalContainer = document.querySelector('.portfolio-modal-container');
      const overlay = document.querySelector('.portfolio-overlay');
      const modalTitle = document.querySelector('.portfolio-modal-title');
      const modalDescription = document.querySelector('.portfolio-card-description');
      const modalImg = document.querySelector('.portfolio-modal-img');
  
      portfolioCards.forEach(function (card, index) {
          card.addEventListener('click', function () {
              // Set modal content based on the clicked card
              const projectTitle = card.querySelector('.project-title').textContent;
              const projectDescription = card.querySelector('.project-description').textContent;
              const projectImgSrc = card.querySelector('.portfolio-img').getAttribute('src');
  
              modalTitle.textContent = projectTitle;
              modalDescription.textContent = projectDescription;
              modalImg.src = projectImgSrc;
  
              // Display the modal and overlay
              modalContainer.style.display = 'flex';
              overlay.style.display = 'block';
          });
      });
  
      // Function to close the modal and overlay
      window.closePortfolioModal = function () {
          modalContainer.style.display = 'none';
          overlay.style.display = 'none';
      };
  
      // Close modal and overlay when clicking outside the modal content
      window.addEventListener('click', function (event) {
          if (event.target === overlay) {
              closePortfolioModal();
          }
      });
  });
  