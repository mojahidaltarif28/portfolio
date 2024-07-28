let home = document.querySelector(".n-home");
let about = document.querySelector(".n-about");
let service = document.querySelector(".n-service");
let project = document.querySelector(".n-project");
let contact = document.querySelector(".n-contact");
const el = document.createElement('i');
const el1 = document.createElement('i');
const el2 = document.createElement('i');
const el3 = document.createElement('i');
const el4 = document.createElement('i');
const size = window.innerWidth;

function changeicon() {
    home.innerText = "";
    about.innerText = "";
    service.innerText = "";
    project.innerText = "";
    contact.innerText = "";
    home.append(el)
    about.append(el1);
    service.append(el2);
    project.append(el3);
    contact.append(el4);

    const hi = document.querySelector(".n-home i");
    const ai = document.querySelector(".n-about i");
    const si = document.querySelector(".n-service i");
    const pi = document.querySelector(".n-project i");
    const ci = document.querySelector(".n-contact i");

    hi.classList.add("fa-solid", "fa-house");
    ai.classList.add("fa-solid", "fa-user");
    si.classList.add("fa-brands", "fa-servicestack");
    pi.classList.add("fa-solid", "fa-briefcase");
    ci.classList.add("fa-regular", "fa-envelope");
}
function removeicon() {
    home.innerText = "Home";
    about.innerText = "About";
    service.innerText = "Services";
    project.innerText = "Projects";
    contact.innerText = "Contact Me";
    
    
}
if (size < 750) {
    changeicon();
}
else
    {
        removeicon();
    }

window.addEventListener('resize', () => {
    if (window.innerWidth < 750) {
        changeicon();
    }
    else
    {
        removeicon();
    }
});