"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Añadir clase active a la sección activa   
    window.addEventListener("scroll", () => {
        let currentSection = "";

        // Revisa qué sección está en el viewport
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        // Actualiza los enlaces del menú según la sección visible
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });

    // Add fixed menu when scrolling
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".header");
        const navLinks = document.querySelectorAll(".nav-link");

        if(window.scrollY > 200) {
            navbar.classList.add("fixed");
            navLinks.forEach(link => {
                link.classList.add("menuFixed");
            })
        }else{
            navbar.classList.remove("fixed");
            navLinks.forEach(link => {
                link.classList.remove("menuFixed");
                link.classList.remove("active");
            })
        }
    });

    // Typed.JS
    const typed = new Typed('#title', {
        strings: ["Entrenador Personal", "Preparador Físico", "Entrenador Personal", "Preparador Físico"],
        typeSpeed: 80,
        backSpeed: 100,
        loop: true,
        showCursor: false
    });
      

    // Menu hamburguesa

    const menuIcon = document.querySelector(".icon-menu");
    const navBar = document.querySelector(".navbar");
    const overlay = document.querySelector("#overlay");

    menuIcon.addEventListener("click", () => {
        const isMenuOpen = navBar.style.display === "block";
        const navLinks = document.querySelectorAll(".nav-link");
        const checkInput = document.querySelector(".check-icon");
        
        // Ocultar el Menú cuando se hace clic en un enlace y resetear el menú hamburguesa
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navBar.style.display = "none";
                overlay.style.display = "none";
                overlay.classList.remove("active");
                navBar.classList.remove("active");
                checkInput.checked = false;
            });
        });

        // Ocultar el menú cuando se hace clic en el overlay
        overlay.addEventListener("click", () => {
            navBar.style.display = "none";
            overlay.style.display = "none";
            overlay.classList.remove("active");
            navBar.classList.remove("active");
            checkInput.checked = false;
        });

        // Ocultar/Mostrar el menú
        navBar.style.display = isMenuOpen ? "none" : "block";
        overlay.style.display = isMenuOpen ? "none" : "block";

        // Alterna la clase 'active' para activar/desactivar las transiciones
        overlay.classList.toggle("active");
        navBar.classList.toggle("active");
    });

    // Activar animaciones de Animate.css cuando se hace visible la sección

    const animatables = document.querySelectorAll('.animatable');

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('animate__animated');
                entry.target.classList.add('animate__fadeInLeftBig');

                // Deja de observar el elemento una vez que la animación se ha activado
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0 
    });
    
    // Aplica el observador a cada elemento
    animatables.forEach((el) => observer.observe(el));
    
});