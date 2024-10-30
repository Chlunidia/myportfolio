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
});

const achievements = [
    {
        "title": "Certified Participant of Bangkit Academy 2024",
        "description": "Successfully completed the Bangkit Academy program, a career readiness initiative supported by Google, Tokopedia, GoTo, and Traveloka, focusing on Mobile Development. The program included over 900 hours of intensive training in technical skills, soft skills, and English language proficiency.",
        "img": "assets/pictures/achievements/achievement5.jpg"
    },
    {
        "title": "Certified Participant of MSIB (Magang dan Studi Independen Bersertifikat)",
        "description": "Successfully completed the MSIB program under Kampus Merdeka, focusing on gaining practical experience and industry skills through internships and independent studies. The program included hands-on learning in a real-world professional environment, enhancing employability and career readiness.",
        "img": "assets/pictures/achievements/achievement4.jpg"
    },    
    {
        title: "Gold Medal PKMM AST-PTMA",
        description: "Achieved the gold medal at the PKM Muhammadiyah 2023 (Program Kreativitas Mahasiswa) competition in the PKM-KC category (Program Kreativitas Mahasiswa Karsa Cipta) with the project titled 'Trashify: Ekosistem Masyarakat Sadar Pemilahan Sampah Menggunakan Aplikasi Berbasis Android dengan Menggunakan Algoritma Machine Learning'. I participated in this competition as part of a team with my two friends.",
        img: "assets/pictures/achievements/achievement3.jpg"
    },
    {
        title: "Bronze Medal PKMM AST-PTMA",
        description: "Achieved the bronze medal at the PKM Muhammadiyah 2023 (Program Kreativitas Mahasiswa) competition in the PKM-KC category (Program Kreativitas Mahasiswa Karsa Cipta) with the project titled 'Monitoring dan Pencatatan Konsultasi Dokter dan Pasien Berbasis Speech Recognition Untuk Mencegah Terjadinya Malapraktik'. I participated in this competition as part of a team with my two friends.",
        img: "assets/pictures/achievements/achievement2.jpg"
    },
    {
        title: "Participant of INVFEST 7.0 Competition",
        description: "Received this certificate for participating in the INVFEST 7.0 software development competition. This was my first competition, and I participated as part of a team with two friends.",
        img: "assets/pictures/achievements/achievement1.jpg"
    }
];

const certificates = [
    {
        title: "Belajar Pengembangan Aplikasi Android Intermediate",
        description: "Completed the Intermediate Android Application Development course, enhancing my skills in creating robust Android applications. This certification is part of the Bangkit Academy 2024 Batch 1, a prestigious program led by Google, GoTo, Tokopedia, and Traveloka.",
        url: "https://www.dicoding.com/certificates/L4PQ1EW94XO1",
        img: "assets/pictures/certificates/certificate10.jpg"
    },
    {
        title: "Belajar Penerapan Machine Learning untuk Android",
        description: "This certificate was awarded upon successful completion of a course focused on implementing machine learning in Android applications. The course is part of the Bangkit Academy 2024 Batch 1, led by Google, GoTo, Tokopedia, and Traveloka.",
        url: "https://www.dicoding.com/certificates/53XEO01KKZRN",
        img: "assets/pictures/certificates/certificate9.jpg"
    },
    {
        title: "Belajar Dasar AI",
        description: "Completed the Basic AI course, which provided a strong foundation in artificial intelligence concepts and applications. This certification is part of the Bangkit Academy 2024 Batch 1, led by Google, GoTo, Tokopedia, and Traveloka.",
        url: "https://www.dicoding.com/certificates/QLZ9451JEP5D",
        img: "assets/pictures/certificates/certificate8.jpg"
    },
    {
        title: "Belajar Prinsip Pemrograman SOLID",
        description: "Learned and applied the SOLID principles in programming, enhancing my ability to write maintainable and scalable code. This certification is part of the Bangkit Academy 2024 Batch 1, led by Google, GoTo, Tokopedia, and Traveloka.",
        url: "https://www.dicoding.com/certificates/GRX5Q8KEYZ0M",
        img: "assets/pictures/certificates/certificate7.jpg"
    },
    {
        title: "Belajar Fundamental Aplikasi Android",
        description: "Completed the Fundamental Android Application Development course, acquiring essential skills for Android development. This certification is part of the Bangkit Academy 2024 Batch 1, led by Google, GoTo, Tokopedia, and Traveloka.",
        url: "https://www.dicoding.com/certificates/JLX12NV85Z72",
        img: "assets/pictures/certificates/certificate6.jpg"
    },
    {
        title: "Belajar Membuat Aplikasi Android untuk Pemula",
        description: "Completed the course on creating Android applications for beginners, which introduced the basics of Android development. This certification is part of the Bangkit Academy 2024 Batch 1, led by Google, GoTo, Tokopedia, and Traveloka.",
        url: "https://www.dicoding.com/certificates/4EXGKRMREZRL",
        img: "assets/pictures/certificates/certificate5.jpg"
    },
    {
        title: "Memulai Pemrograman dengan Kotlin",
        description: "Received this certificate upon completing the IDCamp 2023 Android Developer path, focusing on beginning programming with Kotlin.",
        url: "https://www.dicoding.com/certificates/6RPNVN6Q4Z2M",
        img: "assets/pictures/certificates/certificate4.jpg"
    },
    {
        title: "Belajar Dasar Git dengan GitHub",
        description: "Learned the basics of Git and GitHub, improving my version control skills and collaboration in software development. This certification is part of the Bangkit Academy 2024 Batch 1, led by Google, GoTo, Tokopedia, and Traveloka.",
        url: "https://www.dicoding.com/certificates/81P2V0OLQPOY",
        img: "assets/pictures/certificates/certificate3.jpg"
    },
    {
        title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
        description: "Completed the Programming Logic 101 course, providing a solid understanding of programming logic and problem-solving techniques. This certification is part of the Bangkit Academy 2024 Batch 1, led by Google, GoTo, Tokopedia, and Traveloka.",
        url: "https://www.dicoding.com/certificates/1RXY1GW29PVM",
        img: "assets/pictures/certificates/certificate2.jpg"
    },
    {
        title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
        description: "Completed the course on Basic Programming for Aspiring Software Developers, laying the groundwork for a career in software development. This certification is part of the Bangkit Academy 2024 Batch 1, led by Google, GoTo, Tokopedia, and Traveloka.",
        url: "https://www.dicoding.com/certificates/2VX3O9343ZYQ",
        img: "assets/pictures/certificates/certificate1.jpg"
    }
];

const aboutContent = {
    aboutme: {
        name: "Chlunidia Putri Kieswendha",
        title: "IT Student",
        description: "I am an IT student at Universitas Muhammadiyah Yogyakarta. I am currently on 7th semester. My goal is to use my skills and experiences to help with advanced development projects. I am excited to use my knowledge to solve real-world problems and work with other professionals to drive innovation."
    },
    skills: [
        { 
            title: "Kotlin", 
            percentage: 80 
        },
        { 
            title: "SQL", 
            percentage: 75 
        },
        { 
            title: "HTML, CSS, JavaScript", 
            percentage: 50 
        },
        { 
            title: "Flutter", 
            percentage: 30 
        },
        { 
            title: "C#", 
            percentage: 40 
        },
        { 
            title: "Java", 
            percentage: 20 
        },
        { 
            title: "Laravel", 
            percentage: 30 
        }
    ],
    experience: [
        { 
            title: "Mobile Development Cohort At Bangkit Academy 2024", 
            place: "This program includes over 900 hours of rigorous training, covering essential technical skills, soft skills, and industry-relevant practices.", 
            date: "February 2024 - Present" 
        },
        { 
            title: "Database Implementation Course Assistant Lecturer", 
            place: "I facilitated interactive learning sessions for over 40 students, significantly improving their engagement and participation.", 
            date: "September 2023 - February 2024" 
        },
        { 
            title: "Mobile Development Competition", 
            place: "During 2022 and 2023, I actively participated in national-level mobile development competitions.", 
            date: "2022 - 2023" 
        }
    ],
    education: [
        { 
            title: "Universitas Muhammadiyah Yogyakarta", 
            details: " I am currently a dedicated 7th-semester student at Universitas Muhammadiyah Yogyakarta, specializing in mobile development with a particular focus on Kotlin.", 
            date: "2021 - 2025 (Expected)" 
        },
        { title: "SMA Negeri Kebakkramat", 
            details: "I completed my high school education at SMA Negeri 1 Kebakkramat, where I laid a solid foundation for my future academic and professional pursuits.", 
            date: "2018 - 2021" 
        }
    ]
};

const portfolioContent = [
    {
        title: "Attirely",
        description: "Attirely is the capstone project of my team at Bangkit Academy 2024, a program led by Google, GoTo, Tokopedia, and Traveloka under the Kampus Merdeka initiative. This mobile application leverages machine learning to classify clothing items and provide personalized outfit recommendations. The development of Attirely was a collaborative effort among team members specializing in mobile development, machine learning, and cloud computing. This project not only showcases our technical skills but also our ability to work together to create innovative solutions with real-world applications.",
        url: "https://github.com/Attirely",
        img: "assets/portfolio/attirely.png"
    },
    {
        title: "Story Master",
        description: "Story Master is an Android application developed in Kotlin that integrates the Dicoding Story API to manage and share user stories. This app provides a seamless experience for users to create and view stories within a community.",
        url: "https://github.com/Chlunidia/story-master.git",
        img: "assets/portfolio/storymaster.png"
    },
    {
        title: "GitHub User",
        description: "GitHub User is an Android app developed in Kotlin that utilizes the GitHub API to allow users to search for and view details about GitHub users. The app offers a user-friendly interface to explore profiles efficiently.",
        url: "https://github.com/Chlunidia/github-api.git",
        img: "assets/portfolio/github-api.png"
    },
    {
        title: "Omotrash",
        description: "Omotrash is an application developed as a final project for the Multiplatform Programming course in 2023. This app provides a solution for collecting sorted inorganic waste for recycling purposes. Users can input details about the waste and pickup address, and the app integrates Google Maps to locate waste pickup points. The data is displayed on the screen with a button directing the waste collector to the pickup location using Google Maps.",
        url: "https://github.com/Chlunidia/omotrash.git",
        img: "assets/portfolio/omotrash.png"
    },
    {
        title: "Asclepius",
        description: "Aclepius is an cancer detection Android app developed in Kotlin, integrating with machine learning to detect cancer.",
        url: "https://github.com/Chlunidia/asclepius.git",
        img: "assets/portfolio/aclepius.png"
    },
    {
        title: "AppSel",
        description: "AppSel is a user interface (UI) application developed using the Flutter framework. This project was created to practice and enhance skills in Flutter development.",
        url: "https://github.com/Chlunidia/appsel.git",
        img: "assets/portfolio/appsel.png"
    },
    {
        title: "Pokedex",
        description: "Pokédex UI App is designed to provide a visually appealing interface for viewing Pokémon information. This project was developed to learn and practice Flutter development.",
        url: "https://github.com/Chlunidia/pokedex.git",
        img: "assets/portfolio/pokedex.png"
    },
    {
        title: "Scoreboard",
        description: "Scoreboard is a simple Flutter application that calculates and displays scores. The app provides an easy way to keep track of points, developed as a learning project for practicing Flutter development.",
        url: "https://github.com/Chlunidia/scoreboard.git",
        img: "assets/portfolio/scoreboard.png"
    }
];

function loadAchievements() {
    const container = document.getElementById('home');
    const section = document.createElement('section');
    section.classList.add('section-2');
    section.id = 'section-2';
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

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    const descriptionOuterBox = document.createElement('div');
    descriptionOuterBox.classList.add('description-outer-box');
    
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-section');
    descriptionContainer.innerHTML = `
        <div class="description-content">
            <p class="description-name">${aboutContent.aboutme.name}</p>
            <p class="description-title">${aboutContent.aboutme.title}</p>
            <p class="description-text">${aboutContent.aboutme.description}</p>
        </div>
        <div class="description-image">
            <div class="image-card">
                <img src="assets/images/aboutme.jpg" alt="${aboutContent.aboutme.name}">
            </div>
        </div>`;
    descriptionOuterBox.appendChild(descriptionContainer);
    aboutContainer.appendChild(descriptionOuterBox);
    container.appendChild(aboutContainer);
    container.appendChild(aboutContainer);

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
    const modalLink = modalContainer.querySelector('.modal-link');

    certificateCards.forEach(function (card, index) {
        card.addEventListener('click', function () {
            const certificate = certificates[index];

            modalTitle.textContent = certificate.title;
            modalDescription.textContent = certificate.description;
            modalImg.src = certificate.img;
            modalLink.href = certificate.url; 
            modalLink.style.display = 'block'; 

            modalContainer.style.display = 'flex';
            overlay.style.display = 'block';
        });
    });

    window.closeCertificateModal = function () {
        modalContainer.style.display = 'none';
        overlay.style.display = 'none';
        modalLink.style.display = 'none'; 
    };

    overlay.addEventListener('click', function () {
        closeCertificateModal();
    });
}

function setupPortfolioModal() {
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    const modalContainer = document.getElementById('portfolio-modal-container');
    const overlay = document.getElementById('overlay');
    const modalTitle = modalContainer.querySelector('.portfolio-modal-title');
    const modalDescription = modalContainer.querySelector('.portfolio-card-description');
    const modalImg = modalContainer.querySelector('.portfolio-modal-img');
    const modalLink = modalContainer.querySelector('.portfolio-modal-link');

    portfolioCards.forEach(function (card, index) {
        card.addEventListener('click', function () {
            const portfolio = portfolioContent[index];

            modalTitle.textContent = portfolio.title;
            modalDescription.textContent = portfolio.description;
            modalImg.src = portfolio.img;
            modalLink.href = portfolio.url;
            modalLink.style.display = 'block';

            modalContainer.style.display = 'flex';
            overlay.style.display = 'block';
        });
    });

    window.closePortfolioModal = function () {
        modalContainer.style.display = 'none';
        overlay.style.display = 'none';
        modalLink.style.display = 'none';
    };

    overlay.addEventListener('click', function () {
        closePortfolioModal();
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