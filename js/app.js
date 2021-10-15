// Global Variables
const navbar = document.querySelector("#navbarList"),
    sections = document.querySelectorAll('section'),
    ftr = document.querySelector('footer');
    
// build the nav
function addListElements() {
    let listElement = '';
    sections.forEach(section => {
        let sectionId = section.id;
        listElement += `<li><a data-sec="${section.id}" class="${section.id}">${section.id}</a></li>`;
    });
    navbar.innerHTML = listElement;
    sections.forEach((section) => {
        let theLink = document.querySelector(`a[data-sec="${section.id}"]`);
        if (theLink) {
            theLink.addEventListener("click", ()=> {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest"
                });
            });
        }
    });
}
addListElements();

// show/hide the navigation bar while scrolling
let ScrollingY = window.scrollY;
window.addEventListener("scroll", () => {
    if (ScrollingY < window.scrollY) {
        navbar.style.top = "-20vh";
    } else {
        navbar.style.top = "0";
    }
    ScrollingY = window.scrollY;
});

// add/reomve active class to Nav
window.addEventListener('scroll', () => {
    let current = '';
    let navAnchors = document.querySelectorAll('ul li a');
    sections.forEach(section => {
        let secTop = section.offsetTop;
        let secHeight = section.offsetHeight;
        if (pageYOffset > (secTop - secHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    navAnchors.forEach(a => {
        a.classList.remove('activeLink');
        if (a.classList.contains(current)) {
            a.classList.add('activeLink');
        }
    });
});

// add/reomve active class to sections
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let secTop = section.offsetTop;
        let secHeight = section.offsetHeight;
        if (pageYOffset > (secTop - secHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    sections.forEach(section => {
        section.classList.remove(`activeSec`);
        if (section.classList.contains(current)) {
            section.classList.add(`activeSec`);
        }
    });
});

// start creating Go 2 top Btn 
let arrowSVG = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" class="svg-inline--fa fa-arrow-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>`;
ftr.insertAdjacentHTML("beforeend", `<button id="scroll2top">${arrowSVG}</button>`);
let scroll2TopBtn = document.querySelector('#scroll2top');
window.onscroll = function scrollFunc() {
  if (document.body.scrollTop > 300) {
    scroll2TopBtn.style.display = "block";
  } else {
    scroll2TopBtn.style.display = "none";
  }
};
function scroll2Top() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
scroll2TopBtn.addEventListener('click', scroll2Top);
