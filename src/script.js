/*Dark Mode*/

const switchElement = document.querySelector('.switch');

switchElement.addEventListener('click', () => {
  document.body.classList.toggle('dark')
});

/*Ημερομηνία και Ώρα*/

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

/*Κουμπί Βιογραφικού*/

document.addEventListener('DOMContentLoaded', function() {
    const downloadCvLink = document.getElementById('download-cv');
    
    downloadCvLink.addEventListener('click', function(e) {
        e.preventDefault(); 
        downloadPdf(); 
    });
});

function downloadPdf() {
    window.open('src/pdf/Βιογραφικό Σημείωμα + Περιγραφή της Πρακτικής Άσκησης.pdf', '_blank');
}



const header = document.querySelector('header');
const hero = document.querySelector('.hero');
const headerHeight = header.clientHeight;

/* Nav Menu */

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

/* Anchor Button */

document.addEventListener("DOMContentLoaded", function () {
    const scrollToHeroButton = document.getElementById("scrollToHeroButton");
    const heroSection = document.querySelector(".hero");
    
    window.addEventListener("scroll", function () {
        const heroBottom = heroSection.offsetHeight;
        if (window.scrollY > heroBottom) {
            scrollToHeroButton.classList.add("visible");
        } else {
            scrollToHeroButton.classList.remove("visible"); 
        }
    });

    scrollToHeroButton.addEventListener("click", function () {
        heroSection.scrollIntoView({ behavior: "smooth" });
    });
});


/*Font Size*/

function changeFontSize(value) {
    let elements = document.getElementsByClassName("font-text");
    
    for (let i = 0; i < elements.length; i++) {
        let currentSize = window.getComputedStyle(elements[i]).fontSize;
        let newSize = parseFloat(currentSize) + value;
        elements[i].style.fontSize = newSize + "px";
    }
}








