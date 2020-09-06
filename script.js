const topggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image-1');
const image2 = document.getElementById('image-2');
const image3 = document.getElementById('image-3');
const image4 = document.getElementById('image-4');
const image5 = document.getElementById('image-5');
const image6 = document.getElementById('image-6');
const textBox = document.getElementById('text-box');

function imageMode(color) {
    image1.src = `img/undraw_conceptual_idea_${color}.svg`;
    image2.src = `img/undraw_Designer_mindset_re_2w1k_${color}.svg`;
    image3.src = `img/undraw_Domain_names_re_0uun_${color}.svg`;
    image4.src = `img/undraw_feeling_proud_${color}.svg`;
    image5.src = `img/undraw_Freelancer_re_irh4_${color}.svg`;
    image6.src = `img/undraw_proud_coder_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'LightMode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light');
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
}

topggleSwitch.addEventListener("change", switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        topggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}