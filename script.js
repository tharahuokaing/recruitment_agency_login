// State Management
let currentLang = 'km';

// DOM Elements
const openLoginBtn = document.getElementById('open-login-btn');
const heroLoginBtn = document.getElementById('hero-login-btn');
const closeLoginBtn = document.getElementById('close-login-btn');
const loginModal = document.getElementById('login-modal');

const loginForm = document.getElementById('login-form');
const loginIdentity = document.getElementById('login-identity');
const loginPassword = document.getElementById('login-password');
const togglePasswordBtn = document.getElementById('toggle-password-btn');

const langToggleBtn = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');

// Open / Close Modal Logic
function openModal() {
    loginModal.classList.add('active');
}

function closeModal() {
    loginModal.classList.remove('active');
    loginForm.reset();
}

openLoginBtn.addEventListener('click', openModal);
heroLoginBtn.addEventListener('click', openModal);
closeLoginBtn.addEventListener('click', closeModal);

// Close Modal when clicking outside the card
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        closeModal();
    }
});

// Show / Hide Password Toggle
togglePasswordBtn.addEventListener('click', () => {
    const isPassword = loginPassword.type === 'password';
    loginPassword.type = isPassword ? 'text' : 'password';
    togglePasswordBtn.textContent = isPassword ? '🙈' : '👁️';
});

// Language Switcher Function
langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'km' ? 'en' : 'km';
    langText.textContent = currentLang === 'km' ? 'English' : 'ភាសាខ្មែរ';
    
    updateTranslations();
});

function updateTranslations() {
    document.querySelectorAll('[data-km]').forEach(elem => {
        const text = elem.getAttribute(`data-${currentLang}`);
        if (text) elem.innerHTML = text;
    });
}

// Form Submission Handler
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const identity = loginIdentity.value.trim();
    const password = loginPassword.value;

    if (!identity || !password) {
        alert(currentLang === 'km' ? 'សូមបញ្ចូលព័ត៌មានឱ្យបានគ្រប់ជ្រុងជ្រោយ!' : 'Please enter all required fields!');
        return;
    }

    // Simulated Authentication Response
    alert(currentLang === 'km' 
        ? `ស្វាគមន៍មកវិញ! ចូលប្រើប្រាស់ដោយជោគជ័យជាមួយ៖ ${identity}` 
        : `Welcome back! Login successful for: ${identity}`);

    closeModal();
});

// Initial Setup
updateTranslations();
