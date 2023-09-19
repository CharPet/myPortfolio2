const switchElement = document.querySelector('.switch');

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark')
});

function updateDateTime() {
    const dateTimeElement = document.querySelector('.date-time');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const formattedDateTime = now.toLocaleDateString('el-GR', options)
        .replace('στις', '')     
    dateTimeElement.textContent = formattedDateTime;
}


updateDateTime();
setInterval(updateDateTime, 1000);


document.addEventListener('DOMContentLoaded', function() {
    const downloadCvLink = document.getElementById('download-cv');
    
    downloadCvLink.addEventListener('click', function(e) {
        e.preventDefault(); 
        downloadPdf(); 
    });
});

function downloadPdf() {
    window.open('src/Βιογραφικό Σημείωμα.pdf', '_blank');
}

const header = document.querySelector('header');
const hero = document.querySelector('.hero');
const headerHeight = header.clientHeight;



document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });
});

const scrollToHeroButton = document.getElementById('scrollToHeroButton');
const heroSection = document.querySelector('.hero');

scrollToHeroButton.addEventListener('click', () => {
    heroSection.scrollIntoView({ behavior: 'smooth' });
});







