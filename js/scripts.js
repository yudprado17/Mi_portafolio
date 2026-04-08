// Idioma
const translations = {
    es: {},
    en: {
        // Navegación
        nav_inicio: "Home",
        nav_sobre: "About",
        nav_proyectos: "Projects",
        nav_certificados: "Certificates",
        nav_comentarios: "Testimonials",
        nav_contacto: "Contact",

        // Hero
        hero_tagline: "BackOffice Analyst &nbsp;·&nbsp; Cloud Specialist &nbsp;·&nbsp; QC at Golbant",
        hero_badge_edu: "Systems Engineering — graduating soon",
        hero_btn_proyectos: "View my projects",
        hero_btn_contacto: "Go to contact",

        // Sobre mí
        sobre_titulo: "About Me",
        sobre_subtitulo: "Technology + Administration + Results",
        sobre_text1: "I am a technologist in training, about to graduate as a Systems Engineer from UdeCataluña, with a Technical Degree in Systems from CESDE that strengthened my practical foundations. Currently I apply this knowledge in the real world as QC at Golbant, where I verify processes and ensure quality standards in technological environments.",
        sobre_text2: "I specialize in cloud architectures (AWS, Azure, GCP) and combine this technical focus with solid administrative experience. My profile merges technical with human — I analyze, execute, and communicate.",

        // Formación
        formacion_titulo: "Education & Experience",
        formacion_sub: "My academic and professional path",
        exp1_titulo: "QC — Golbant",
        exp1_desc: "Professional internship as Quality Control, verifying processes and ensuring quality standards in technological environments.",
        exp1_badge: "✦ Ongoing · Internship",
        edu1_titulo: "Systems Engineering — UdeCataluña",
        edu1_desc: "About to graduate. Specialization in cloud architectures and software development.",
        edu1_badge: "✦ Graduating soon",
        edu2_titulo: "Technical Assistant in Systems — CESDE",
        edu2_desc: "Strengthening technical skills in support and systems administration.",
        edu2_badge: "✦ In progress",

        // Habilidades blandas
        soft_titulo: "Soft Skills",
        soft_sub: "Human competencies that define me",
        soft1: "Adaptability",
        soft2: "Critical Analysis",
        soft3: "Team Management",
        soft4: "Problem Solving",
        soft5: "Attention to Detail",
        soft6: "Quality Control",

        // Habilidades técnicas
        tech_titulo: "Technical Skills",
        tech_sub: "Tools and technologies I master",
        skill1_nombre: "Cloud Architectures (AWS, Azure, GCP)",
        skill1_ctx: "Core specialization · UdeCataluña",
        skill2_nombre: "Web Development (HTML, CSS, Bootstrap)",
        skill2_ctx: "Demonstrated in this portfolio",
        skill3_nombre: "Programming (Python & JS)",
        skill3_ctx: "NumPy and Pandas · academic projects",
        skill4_nombre: "Data Analysis & BI",
        skill4_ctx: "Pandas for reports and rankings",
        skill5_nombre: "Quality Control (QC)",
        skill5_ctx: "Active practice at Golbant",

        // Proyectos
        proy_titulo: "My Projects",
        proy_sub: "Projects developed during my academic training",
        proy1_tit: "Parking Management System",
        proy1_desc: "Python system with NumPy to manage an 8-floor parking lot with 5 spaces per floor. Real-time occupancy control.",
        proy2_tit: "Group Manager — Soccer World Cup",
        proy2_desc: "Python platform with Pandas to manage results of a World Cup group. Registers matches and queries standings.",
        proy3_tit: "Console Bingo Game",
        proy3_desc: "Interactive console Bingo. The participant fills a board with ten numbers and random balls are drawn until a winner is found.",
        github_btn: "View on GitHub",

        // Testimonios
        test_titulo: "What they say about my work",
        test_sub: "Opinions from colleagues, teachers and peers",
        test1_txt: '"Yudnaris is an exceptional professional with great organizational and leadership skills. Her technical approach and resilience make her an invaluable asset."',
        test1_autor: "Nicol Alba",
        test1_rol: "Work and study colleague",
        test2_txt: '"I highly highlight her critical thinking and problem-solving skills. Yudnaris\'s command of digital tools is outstanding."',
        test2_autor: "Wilmar del Valle",
        test2_rol: "Work and study colleague",
        test3_txt: '"Yudnaris demonstrated during her training at CESDE an outstanding analytical ability and an unwavering commitment to code quality. She is a professional who not only solves problems but always seeks efficiency and innovation in every project."',
        test3_autor: "Jorge Pérez",
        test3_rol: "Software Development Instructor - CESDE",
        test4_txt: '"Working with Yudnaris is an enriching experience. Her commitment to quality and her discipline to learn something new every day make her stand out in any team."',
        test4_autor: "Hector Camacho",
        test4_rol: "Mentor",
        test5_txt: '"Yudnaris has an incredible ability to understand processes and propose improvements. Her time as QC at Golbant has been remarkable — she always finds the detail others overlook."',
        test5_autor: "Andrea Tibocha",
        test5_rol: "Work and study colleague",
        test6_txt: '"What I admire most about Yudnaris is her perseverance. She combines her technical training with a positive and collaborative attitude that elevates the whole team around her."',
        test6_autor: "Karol Ahumada",
        test6_rol: "Work and study colleague",

        // Contacto
        contacto_titulo: "Contact Me",
        contacto_sub: "Let's work together!",
        contacto_text: "Do you have a project in mind, want to add talent to your team or just want to say hello? I'd love to talk with you.",
        btn_cv: "Download CV",

        // Formulario
        form_nombre: "Full Name",
        form_email: "Email Address",
        form_asunto: "Subject",
        form_mensaje: "Message",
        form_btn: "Send Message",

        // Certificaciones
        cert_titulo: "Certifications",
        cert_sub: "My academic achievements and validations",

        // QR Section
        qr_titulo: "Share my portfolio",
        qr_descripcion: "Scan this QR code to access my portfolio from any device.",
        qr_descargar: "Download QR",
        qr_compartir: "Share",
        qr_nota: "The QR contains the link to this portfolio"
    }
};

let currentLang = 'es';

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        } else if (lang === 'es' && key) {
            el.innerText = el.getAttribute('data-original') || el.innerText;
        }
        if (!el.getAttribute('data-original') && lang === 'es') {
            el.setAttribute('data-original', el.innerText);
        }
    });
    document.querySelector('#langToggle span').innerText = (lang === 'es') ? 'English' : 'Español';
    currentLang = lang;
}

document.getElementById('langToggle').addEventListener('click', () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    applyLanguage(newLang);
});

// Tema claro/oscuro
const themeBtn = document.getElementById('themeToggle');

function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
    localStorage.setItem('portfolio-theme', theme);
    themeBtn.innerHTML = theme === 'light' 
        ? '<i class="fas fa-sun"></i><span>Modo Oscuro</span>' 
        : '<i class="fas fa-moon"></i><span>Modo Claro</span>';
}

themeBtn.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-mode');
    setTheme(isLight ? 'dark' : 'light');
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') setTheme('light');
    else setTheme('dark');

    applyLanguage('es');

    // Carrusel bootstrap
    const carouselEl = document.getElementById('testimoniosCarousel');
    if (carouselEl) {
        new bootstrap.Carousel(carouselEl, {
            interval: 10000,
            ride: 'carousel',
            wrap: true
        });
    }

    // Generar QR con la URL actual
    const currentURL = window.location.href;
    const qrcodeDiv = document.getElementById("qr-code");

    if (qrcodeDiv) {
        qrcodeDiv.innerHTML = "";
        new QRCode(qrcodeDiv, {
            text: currentURL,
            width: 200,
            height: 200,
            colorDark: "#9d4edd",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }

    // Descarga de QR
    const downloadQRBtn = document.getElementById("downloadQR");
    if (downloadQRBtn) {
        downloadQRBtn.addEventListener("click", function () {
            const canvas = qrcodeDiv.querySelector("canvas");
            if (canvas) {
                const link = document.createElement("a");
                link.download = "portafolio-yudnaris-qr.png";
                link.href = canvas.toDataURL("image/png");
                link.click();
            } else {
                alert("Espera un momento para generar el QR");
            }
        });
    }

    // Compartir QR
    const shareQRBtn = document.getElementById("shareQR");
    if (shareQRBtn) {
        shareQRBtn.addEventListener("click", function () {
            const message = encodeURIComponent("✨ Mira mi portafolio profesional: " + currentURL);
            window.open("https://wa.me/?text=" + message, "_blank");
        });
    }

    // Modal de Certificados
    const certModalEl = document.getElementById('certModal');
    if (certModalEl) {
        const modalImg = document.getElementById('modalImage');
        const modalInstance = new bootstrap.Modal(certModalEl);
        
        document.querySelectorAll('.zoomable').forEach(img => {
            img.addEventListener('click', function() {
                const src = this.getAttribute('src');
                modalImg.setAttribute('src', src);
                modalInstance.show();
            });
        });
    }
});

