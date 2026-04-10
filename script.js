// Inicializar AOS
AOS.init({ duration: 800, once: true, offset: 50 });

// ========== IMAGEN DE PERFIL CON HOVER ==========
const profileImage = document.getElementById('profileImage');
const profileCircle = document.getElementById('profileCircle');

const originalImage = "perfil.png";
const hoverImage = "perfil.png";

// Función para verificar si la imagen existe
function checkImageExists(url, callback) {
    const img = new Image();
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
    img.src = url;
}

// Verificar y cargar imagen original
if (profileImage) {
    checkImageExists(originalImage, (exists) => {
        if (!exists) {
            console.warn("Imagen no encontrada, usando placeholder");
            profileImage.src = "perfil.png";
        }
    });
}

// Función para cambiar a la imagen de hover
function changeToHoverImage() {
    if (!profileImage) return;
    profileImage.style.opacity = '0.7';
    setTimeout(() => {
        profileImage.src = hoverImage;
        profileImage.style.opacity = '1';
    }, 150);
}

// Función para volver a la imagen original
function changeToOriginalImage() {
    if (!profileImage) return;
    profileImage.style.opacity = '0.7';
    setTimeout(() => {
        profileImage.src = originalImage;
        profileImage.style.opacity = '1';
    }, 150);
}

// Agregar event listeners para hover
if (profileCircle) {
    profileCircle.addEventListener('mouseenter', changeToHoverImage);
    profileCircle.addEventListener('mouseleave', changeToOriginalImage);
    
    
}

// Smooth scroll para navbar
document.querySelectorAll('.nav-links a, .btn-primary, .btn-outline').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ========== PROYECTOS CON IMÁGENES AGREGADAS ==========
const projects = [
    {   
        name: "Lentitud de Computadora PC-Laptop",
        icon: "📋",
        image: "IMG_20260315_115642.jpg" ,
        desc: "Provoca pérdida de datos, lentitud, bloqueos del sistema o errores de disco no encontrado", 
        tech: ["Windows 11", "Windows 10", "PC Escritorio","Laptop"],
        fullDesc: "Mantenimientos preventivos, correctivos y predictivos" 
    },
    { 
        name: "Instalaciones de Sistema Operativo Win 11- Win 10- Linux", 
        image: "win.jpg", 
        desc: "Sistemas operativos originales, no instalamos pirateria somos la mejor solucion para ti", 
        tech: ["Instalacion limpia", "USB boteable", "Windows 11", "No utilizamos parches"],

    },
    { 
        name: "MS-Office 365 en Español / English ", 
        image: "office.jpg", 
        desc: "Instalacion sin parches Office 365, instalaciones limpias, sin virus, con garantia.", 
        tech: ["Office 365 Español", "Office 365 English"]

    },
    { 
        name: "Paginas Web | para tu negocio", 
        image: "portada-paginas-web.webp", 
        desc: "-No sigas Apuntando en hoja de papel los Items que se van consumiendo, te gustaria que esos items te llegaran por correo o por whatsapp la lista de articulos que se estan consumiendo.", 
        tech: ["Sistemas de ventas", " Paginas Web Promocionales ", "Tu propio Hosting no pagues mensualidades", "Aplicaciones Web automatizadas"],
        fullDesc: "Ven platicanos tu caso, lo analizamos y te damos una solución, 'nos ajustamos a tu preosupuesto'",
       
    },
    { 
        name: "Software Maliciosos", 
        image: "errores-tecnologicos-empresa-costos-soluciones.webp", 
        desc: "Nosotros te ayudamos a mejorar la vida util de tu computador", 
        tech: ["Script Seguridad", "Desframentacion Script", "Seguridad en tu Firewall", "Antivirus Mcafee"],
        fullDesc: "Nosotros vamos a tu domicilio, Evita los fraudes, somos serios en nuestro trabajo, no gastes de mas.....  " ,
    },
    { 
        name: "Programación ", 
        image: "Programacion.png", 
        desc: "Programación en Diferentes entornos de desarrollo IDE ", 
        tech: ["C# 2022", ".Net ", "SQL Server 2019", "Android Studio panda","Laragon","Visual Studio Code","Java","Kotlin","NetBeans","Laragon","SQL Workbench","HTML, CSS, JS"]
    
    }
];

const experiences = [
    { role: "Ingenieria De Desarrollo De Software", company: "Software Solution | freelancers ", period: "2024 - 2026", desc: "  Soy ingeniero de software freelance especializado en soluciones web y móviles para PYMEs mexicanas y proyectos internacionales. Combino experiencia técnica con metodologías de mejora continua para entregar resultados escalables, confiables y fáciles de usar. actualmente me encuentro en la comunidad Frelancers ayudando a miles de cibernautas en problemas básicos, avanzados en desarrollos web, moviles, y problemas comunes con sus computadores." },
    { role: "Desarrollador De Ingenieria De Software", company: "Unadm-Freelance", period: "2022 - Actualidad -Ultimo Semestres", desc: "Desarrollo de aplicaciones web y soluciones tecnológicas para pequeños negocios. Implementación de sistemas de gestión y automatización de procesos. Actualmente se esta aprendiendo aplicaciones moviles, Desarrolle proyectos web de los cuales participe en instituciones secundaria como padre de la patria, actualmente me encuentro como freelancers apoyando en comunidades con problemas en diferentes entorno de programas." },
     { role: "Frelancers", company: "Software Solution | Freelance", period: "2026 - Actualidad ", desc: "Actualmente nos encontramos actualizando Software, mejorando el rendimiento de sus paginas Web Moviles, aportando nuestro granito dia con dia, aveces solo hace falta perder el miedo para poder hacer cosas grandes, estamos trabajando con aplicaciones moviles que se lanzaran a plataforma play store, con la finalidad de aprender cada dia mas y que nuestras aplicaciones comiencen su recorido para el publico" }
];

const skillsData = [
    { category: "Software", icon: "fa-cloud", items: ["Instalacion de Software", "Windows 11", "Windwos 10", "Ubuntu","App movil Android","Macros Excel"] },
    { category: "Hardware", icon: "fa-cloud", items: [ "Reparaciones Criticas ", "Respaldo de SSD y HDD", "App Escritorio", "Mantenimiento a Programas .NET, WEB, Moviles"] },
    { category: ".Net", icon: "fa-tools", items: ["Git", "GitHub", "VS Code", "Docker","Firebase","C#",":NET","reCAHPTCHA"] },
    { category: "App Movil", icon: "fa-users", items: ["Scrum", "CRUD", "Trabajo en equipo", "Resolución de problemas"] }
];

// ========== RENDERIZAR PROYECTOS CON IMÁGENES ==========
const projectsGrid = document.getElementById('projectsGrid');
if (projectsGrid) {
    projectsGrid.innerHTML = projects.map((p, idx) => `
        <div class="project-card" data-aos="fade-up" data-aos-delay="${idx * 55}" data-project-index="${idx}">
            ${p.image ? `
                <div class="project-image-container">
                    <img class="project-img" src="${p.image}" alt="${p.name}" 
                         onerror="this.src='https://placehold.co/350x200/1e293b/3b82f6?text=${encodeURIComponent(p.name)}'">
                </div>
            ` : `<div class="project-icon">${p.icon || '📁'}</div>`}
            <h3>${p.name}</h3>
            <p>${p.desc.substring(0, 100)}${p.desc.length > 100 ? '...' : ''}</p>
            <div class="tech-stack">${p.tech.map(t => `<span class="tech">${t}</span>`).join('')}</div>
            <div class="project-link"><i class="fas fa-arrow-right"></i> Ver caso de estudio</div>
        </div>
    `).join('');
}

// Renderizar experiencia
const timelineContainer = document.getElementById('timelineContainer');
if (timelineContainer) {
    timelineContainer.innerHTML = experiences.map((exp, idx) => `
        <div class="exp-item" data-aos="fade-right" data-aos-delay="${idx * 100}">
            <div style="display: flex; justify-content: space-between; flex-wrap:wrap; margin-bottom: 8px;">
                <h3 style="font-size: 22px;">${exp.role}</h3>
                <span style="color:#3b82f6; background:#1e293b; padding:4px 12px; border-radius:40px; font-size:13px;">${exp.period}</span>
            </div>
            <div style="color:#60a5fa; margin: 8px 0 12px;"><i class="fas fa-building"></i> ${exp.company}</div>
            <p style="color:#94a3b8; line-height:1.6;">${exp.desc}</p>
        </div>
    `).join('');
}

// Renderizar skills
const skillsGrid = document.getElementById('skillsGrid');
if (skillsGrid) {
    skillsGrid.innerHTML = skillsData.map((skill, idx) => `
        <div class="skill-cat" data-aos="zoom-in" data-aos-delay="${idx * 100}">
            <h3><i class="fas ${skill.icon}"></i> ${skill.category}</h3>
            <div class="skill-items">
                ${skill.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Modal para proyectos
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModalBtn');

function openProjectModal(project) {
    if (modalContent) {
        modalContent.innerHTML = `
            <div style="text-align: center;">
                ${project.image ? `
                    <div style="margin-bottom: 20px;">
                        <img src="${project.image}" alt="${project.name}" style="width: 400%; max-width: 300px; border-radius: 20px;">
                    </div>
                ` : `<div style="font-size: 64px; margin-bottom: 20px;">${project.icon}</div>`}
                <h2 style="font-size: 32px; margin-bottom: 16px;">${project.name}</h2>
                <div class="tech-stack" style="justify-content: center; margin-bottom: 24px;">
                    ${project.tech.map(t => `<span class="tech">${t}</span>`).join('')}
                </div>
                <p style="color: #cbd5e1; line-height: 1.6; margin-bottom: 24px;">${project.fullDesc || project.desc}</p>
          
            </div>
        `;
        modal.classList.add('active');
        
        document.getElementById('demoRequestBtn')?.addEventListener('click', () => {
            alert("📧 Envía un correo para agendar una reunión.");
        });
        document.getElementById('closeModalSecondary')?.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }
}

// Eventos de click en tarjetas de proyecto
document.querySelectorAll('.project-card').forEach((card, idx) => {
    card.addEventListener('click', () => {
        openProjectModal(projects[idx]);
    });
});

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// Efecto de scroll en navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10,10,20,0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(10,10,20,0.7)';
        navbar.style.backdropFilter = 'blur(12px)';
    }
});
