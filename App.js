// src/app.js

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll for Buttons and Links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Navbar Dropdown Animation
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("mouseenter", () => {
            const dropdownMenu = toggle.nextElementSibling;
            if (dropdownMenu) {
                dropdownMenu.classList.add("show");
            }
        });

        toggle.addEventListener("mouseleave", () => {
            const dropdownMenu = toggle.nextElementSibling;
            if (dropdownMenu) {
                setTimeout(() => dropdownMenu.classList.remove("show"), 300);
            }
        });
    });

    // Resources Selector Options
document.querySelectorAll('#resourcesDropdown + .dropdown-menu .dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
        alert(`Resource selected: ${item.textContent}`);
    });
});

    // Back to Top Button Visibility
    const backToTopButton = document.createElement("button");
    backToTopButton.textContent = "↑";
    backToTopButton.className = "back-to-top";
    document.body.appendChild(backToTopButton);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Scroll to Top Functionality
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// Language Selector
const languageDropdown = document.getElementById('languageDropdown');

// Default language
let currentLanguage = 'en';

// Function to load translations
async function loadLanguage(lang) {
    try {
        const response = await fetch(`${lang}.json`);
        const translations = await response.json();

        // Update elements with data-i18n attributes
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });

        currentLanguage = lang;
    } catch (error) {
        console.error('Error loading language file:', error);
    }
}

// Event listener for language dropdown
document.querySelectorAll('#languageDropdown + .dropdown-menu .dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
        const selectedLanguage = item.textContent.toLowerCase().slice(0, 2); // e.g., 'English' -> 'en'
        loadLanguage(selectedLanguage);
    });
});

// Load default language on page load
document.addEventListener('DOMContentLoaded', () => {
    loadLanguage(currentLanguage);
});
// Sign-In Button Click
const signInButton = document.querySelector(".btn-primary");
if (signInButton) {
    signInButton.addEventListener("click", () => {
        alert("Sign-In button clicked!");
        // Redirect or open a modal for sign-in
    });
}

// Find a Church Options
document.querySelectorAll('#findChurchDropdown + .dropdown-menu .dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
        alert(`You selected: ${item.textContent}`);
        // Add custom redirection logic here
    });
});

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </Router>
    );
}

export default App;