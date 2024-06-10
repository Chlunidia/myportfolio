function toggleMenu() {
    const menu = document.getElementById('menu-links');
    const menuToggle = document.querySelector('.menu-toggle');

    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');

    if (menu.classList.contains('active')) {
        menu.style.display = 'flex';
        setTimeout(function () {
            menu.style.opacity = '1';
            menu.style.transform = 'translateY(0)';
        }, 50);
    } else {
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(-20px)';
        setTimeout(function () {
            menu.style.display = 'none';
        }, 400);
    }
}

document.getElementById('menu-toggle').addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const checkbox = document.getElementById('menu-toggle');
        checkbox.checked = false;
        toggleMenu();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let skills = [
        { id: 'number1', percentage: 80 },
        { id: 'number2', percentage: 75 },
        { id: 'number3', percentage: 50 },
        { id: 'number4', percentage: 30 },
        { id: 'number5', percentage: 40 },
        { id: 'number6', percentage: 20 },
        { id: 'number7', percentage: 30 }
    ];
    skills.forEach(skill => {
        let counter = 0;
        let interval = setInterval(() => {
            if (counter == skill.percentage) {
                clearInterval(interval);
            } else {
                counter += 1;
                document.getElementById(skill.id).innerHTML = `${counter}%`;
            }
        }, 30);
    });
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
    const checkbox = document.getElementById('menu-toggle');
    if (checkbox.checked) {
        checkbox.checked = false;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    showSection('home');
    loadAchievements();
    loadCertificates();
    loadAbout();
    loadPortfolio();
    loadContact();
    setupModals();
});

const achievements = [
    {
        title: "Gold Medal PKMM AST-PTMA",
        description: "I received this certificate after winning a gold medal in the PKMM...",
        img: "assets/pictures/achievements/achievement3.jpg"
    },
    {
        title: "Bronze Medal PKMM AST-PTMA",
        description: "I received this certificate after winning a bronze medal in the PKMM...",
        img: "assets/pictures/achievements/achievement2.jpg"
    },
    {
        title: "Participants of INVFEST 7.0 Competition",
        description: "I received this certificate for participating in a software development competition...",
        img: "assets/pictures/achievements/achievement1.jpg"
    }
];

const certificates = [
    {
        title: "Belajar Penerapan Machine Learning untuk Android",
        description: "I received this certificate upon completing the IDCamp 2023 Android Developer path...",
        img: "assets/pictures/certificates/certificate9.jpg"
    },
    {
        title: "Belajar Dasar AI",
        description: "Description for certificate 2...",
        img: "assets/pictures/certificates/certificate8.jpg"
    },
    {
        title: "Belajar Prinsip Pemrograman SOLID",
        description: "Description for certificate 3...",
        img: "assets/pictures/certificates/certificate7.jpg"
    },
    {
        title: "Belajar Fundamental Aplikasi Android",
        description: "Description for certificate 2...",
        img: "assets/pictures/certificates/certificate6.jpg"
    },
    {
        title: "Belajar Membuat Aplikasi Android untuk Pemula",
        description: "Description for certificate 3...",
        img: "assets/pictures/certificates/certificate5.jpg"
    },
    {
        title: "Memulai Pemrograman dengan Kotlin",
        description: "Description for certificate 2...",
        img: "assets/pictures/certificates/certificate4.jpg"
    },
    {
        title: "Belajar Dasar Git dengan GitHub",
        description: "Description for certificate 3...",
        img: "assets/pictures/certificates/certificate3.jpg"
    },
    {
        title: "Pengenalan ke Logika Pemrograman (Programming Logic 101",
        description: "Description for certificate 2...",
        img: "assets/pictures/certificates/certificate2.jpg"
    },
    {
        title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
        description: "Description for certificate 3...",
        img: "assets/pictures/certificates/certificate1.jpg"
    }
];

const aboutContent = {
    skills: [
        { title: "Kotlin", percentage: 80 },
        { title: "SQL", percentage: 75 },
        { title: "HTML, CSS, JavaScript", percentage: 50 },
        { title: "Flutter", percentage: 30 },
        { title: "C#", percentage: 40 },
        { title: "Java", percentage: 20 },
        { title: "Laravel", percentage: 30 }
    ],
    experience: [
        { title: "Mobile Development Cohort At Bangkit Academy 2024", place: "Bangkit Academy", date: "February 2024 - Present" },
        { title: "Database Implementation Course Assistant Lecturer", place: "Universitas Muhammadiyah Yogyakarta", date: "September 2023 - February 2024" },
        { title: "Mobile Development Competition", place: "", date: "2022 - 2023" }
    ],
    education: [
        { title: "Universitas Muhammadiyah Yogyakarta", details: "I am currently studying for a bachelor's degree in information technology...", date: "2021 - 2025 (Expected)" },
        { title: "SMA Negeri Kebakkramat", details: "I completed my high school education at SMA Negeri Kebakkramat...", date: "2018 - 2021" },
        { title: "SMP Negeri 1 Kebakkramat", details: "I completed my junior high school education at SMP Negeri 1 Kebakkramat...", date: "2015 - 2018" }
    ]
};

const portfolioContent = [
    {
        title: "Omotrash",
        description: "This app streamlines recycling by allowing users to log in securely...",
        img: "assets/portfolio/omotrash.png"
    },
    {
        title: "AppSel",
        description: "AppSel is a user interface (UI) application developed with the Flutter framework...",
        img: "assets/portfolio/appsel.png"
    },
    {
        title: "Pokedex",
        description: "The Flutter Pokédex UI App presents a visually appealing and responsive user interface...",
        img: "assets/portfolio/pokedex.png"
    },
    {
        title: "Scoreboard",
        description: "A simple Flutter application, the Scoreboard, has been crafted to efficiently calculate...",
        img: "assets/portfolio/scoreboard.png"
    },
    {
        title: "Personal Website",
        description: "I've created my own portfolio website with a visually appealing design...",
        img: "assets/portfolio/web.png"
    }
];

function loadAchievements() {
    const container = document.getElementById('home');
    const section = document.createElement('section');
    section.classList.add('section-2');
    section.innerHTML = '<h1 class="section-title">Achievements</h1>';
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('achievement-slider-container');
    const slider = document.createElement('div');
    slider.classList.add('achievement-slider');
    achievements.forEach(achievement => {
        const card = document.createElement('div');
        card.classList.add('achievement-card');
        card.innerHTML = `
            <div class="achievement-img-container">
                <img class="achievement-img" src="${achievement.img}" alt="${achievement.title}">
            </div>
            <div class="achievement-details">
                <h3 class="achievement-title">${achievement.title}</h3>
                <p class="achievement-description">${achievement.description}</p>
            </div>`;
        slider.appendChild(card);
    });
    sliderContainer.appendChild(slider);
    section.appendChild(sliderContainer);
    container.appendChild(section);
}

function loadCertificates() {
    const container = document.getElementById('home');
    const section = document.createElement('section');
    section.classList.add('section-3');
    section.innerHTML = '<h1 class="section-title">Certificates</h1>';
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('certificate-slider-container');
    const slider = document.createElement('div');
    slider.classList.add('certificate-slider');
    certificates.forEach(certificate => {
        const card = document.createElement('div');
        card.classList.add('certificate-card');
        card.innerHTML = `
            <div class="certificate-img-container">
                <img class="certificate-img" src="${certificate.img}" alt="${certificate.title}">
            </div>
            <div class="certificate-details">
                <h3 class="certificate-title">${certificate.title}</h3>
                <p class="certificate-description">${certificate.description}</p>
            </div>`;
        slider.appendChild(card);
    });
    sliderContainer.appendChild(slider);
    section.appendChild(sliderContainer);
    container.appendChild(section);
}

function loadAbout() {
    const container = document.getElementById('about');
    const skillsContainer = document.createElement('div');
    skillsContainer.classList.add('skills-section');
    skillsContainer.innerHTML = '<h2 class="section-title">Skills</h2>';
    const skillsInnerContainer = document.createElement('div');
    skillsInnerContainer.classList.add('skills-container');
    aboutContent.skills.forEach((skill, index) => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill');
        skillElement.innerHTML = `
            <h2 class="skill-title">${skill.title}</h2>
            <div class="outer">
                <div class="inner">
                    <div class="percentage" id="number-${index + 1}">${skill.percentage}%</div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#25B418" />
                                <stop offset="100%" stop-color="#269B1B" />
                            </linearGradient>
                        </defs>
                        <circle class="circle${index + 1}" cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                </div>
            </div>`;
        skillsInnerContainer.appendChild(skillElement);
    });
    skillsContainer.appendChild(skillsInnerContainer);
    container.appendChild(skillsContainer);
    const experienceContainer = document.createElement('div');
    experienceContainer.classList.add('experience-section');
    experienceContainer.innerHTML = '<h2 class="section-title">Experience</h2>';
    const experienceInnerContainer = document.createElement('div');
    experienceInnerContainer.classList.add('experience-container');
    const experienceList = document.createElement('ul');
    aboutContent.experience.forEach(exp => {
        const expElement = document.createElement('li');
        expElement.innerHTML = `
            <h3 class="experience-title">${exp.title}</h3>
            <p>${exp.place}</p>
            <span class="experience-circle"></span>
            <span class="experience-date">${exp.date}</span>`;
        experienceList.appendChild(expElement);
    });
    experienceInnerContainer.appendChild(experienceList);
    experienceContainer.appendChild(experienceInnerContainer);
    container.appendChild(experienceContainer);
    const educationContainer = document.createElement('div');
    educationContainer.classList.add('education-section');
    educationContainer.innerHTML = '<h2 class="section-title">Education</h2>';
    const educationInnerContainer = document.createElement('div');
    educationInnerContainer.classList.add('edu-container');
    const educationList = document.createElement('ul');
    aboutContent.education.forEach(edu => {
        const eduElement = document.createElement('li');
        eduElement.innerHTML = `
            <h3 class="edu-title">${edu.title}</h3>
            <p>${edu.details}</p>
            <span class="edu-circle"></span>
            <span class="edu-date">${edu.date}</span>`;
        educationList.appendChild(eduElement);
    });
    educationInnerContainer.appendChild(educationList);
    educationContainer.appendChild(educationInnerContainer);
    container.appendChild(educationContainer);
}

function loadPortfolio() {
    const container = document.getElementById('portfolio');
    const portfolioContainer = document.createElement('div');
    portfolioContainer.classList.add('portfolio-container');
    portfolioContent.forEach(portfolio => {
        const card = document.createElement('div');
        card.classList.add('portfolio-card');
        card.innerHTML = `
            <div class="portfolio-img-container">
                <img class="portfolio-img" src="${portfolio.img}" alt="${portfolio.title}">
            </div>
            <div class="portfolio-details">
                <h3 class="project-title">${portfolio.title}</h3>
                <p class="project-description">${portfolio.description}</p>
            </div>`;
        portfolioContainer.appendChild(card);
    });
    container.appendChild(portfolioContainer);
}

document.addEventListener('DOMContentLoaded', function () {
    setupModals();
});

function setupModals() {
    setupCertificateModal();
    setupAchievementModal();
    setupPortfolioModal();
}

function setupCertificateModal() {
    const certificateCards = document.querySelectorAll('.certificate-card');
    const modalContainer = document.getElementById('certificate-modal-container');
    const overlay = document.getElementById('overlay');
    const modalTitle = modalContainer.querySelector('.modal-title');
    const modalDescription = modalContainer.querySelector('.modal-description');
    const modalImg = modalContainer.querySelector('.modal-img');

    certificateCards.forEach(function (card, index) {
        card.addEventListener('click', function () {
            const certificate = certificates[index];

            modalTitle.textContent = certificate.title;
            modalDescription.textContent = certificate.description;
            modalImg.src = certificate.img;

            modalContainer.style.display = 'flex';
            overlay.style.display = 'block';
        });
    });

    window.closeCertificateModal = function () {
        modalContainer.style.display = 'none';
        overlay.style.display = 'none';
    };

    overlay.addEventListener('click', function () {
        closeCertificateModal();
    });
}

function setupAchievementModal() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    const modalContainer = document.getElementById('achievement-modal-container');
    const overlay = document.getElementById('overlay');
    const modalTitle = modalContainer.querySelector('.modal-title');
    const modalDescription = modalContainer.querySelector('.modal-description');
    const modalImg = modalContainer.querySelector('.modal-img');

    achievementCards.forEach(function (card, index) {
        card.addEventListener('click', function () {
            const achievement = achievements[index];

            modalTitle.textContent = achievement.title;
            modalDescription.textContent = achievement.description;
            modalImg.src = achievement.img;

            modalContainer.style.display = 'flex';
            overlay.style.display = 'block';
        });
    });

    window.closeAchievementModal = function () {
        modalContainer.style.display = 'none';
        overlay.style.display = 'none';
    };

    overlay.addEventListener('click', function () {
        closeAchievementModal();
    });
}

function setupPortfolioModal() {
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    const modalContainer = document.getElementById('portfolio-modal-container');
    const overlay = document.getElementById('overlay');
    const modalTitle = modalContainer.querySelector('.portfolio-modal-title');
    const modalDescription = modalContainer.querySelector('.portfolio-card-description');
    const modalImg = modalContainer.querySelector('.portfolio-modal-img');

    portfolioCards.forEach(function (card, index) {
        card.addEventListener('click', function () {
            const portfolio = portfolioContent[index];

            modalTitle.textContent = portfolio.title;
            modalDescription.textContent = portfolio.description;
            modalImg.src = portfolio.img;

            modalContainer.style.display = 'flex';
            overlay.style.display = 'block';
        });
    });

    window.closePortfolioModal = function () {
        modalContainer.style.display = 'none';
        overlay.style.display = 'none';
    };

    overlay.addEventListener('click', function () {
        closePortfolioModal();
    });
}
