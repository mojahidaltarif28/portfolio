//about section 

const info_btn = document.querySelector("#info-btn");
const edu_btn = document.querySelector('#edu-btn');
const info_table = document.querySelector('.information-table');
const edu_table = document.querySelector('.education-table');

const addHoverEffect = (button) => {
    button.addEventListener('mouseover', () => {
        if (button.classList.contains("btn-bg"))
            button.style.backgroundColor = '#0f101014';
    });
    button.addEventListener('mouseout', () => {
        if (button.classList.contains("btn-bg")) {
            button.style.backgroundColor = 'rgb(251, 253, 252)';
            button.style.color = 'black';
        }
        else {
            button.style.backgroundColor = '#037171';
            button.style.color = 'white';
        }
    });
};

info_btn.addEventListener('click', () => {
    info_table.style.display = 'flex';
    edu_table.style.display = 'none';
    info_btn.style.backgroundColor = '#037171';
    info_btn.style.color = 'white';
    edu_btn.style.backgroundColor = 'rgb(251, 253, 252)';
    edu_btn.style.color = 'black';

    edu_btn.classList.add("btn-bg");
    info_btn.classList.remove("btn-bg");

});
edu_btn.addEventListener('click', () => {
    info_table.style.display = 'none';
    edu_table.style.display = 'flex';
    edu_btn.style.backgroundColor = '#037171';
    edu_btn.style.color = 'white';
    info_btn.style.backgroundColor = 'rgb(251, 253, 252)';
    info_btn.style.color = 'black';

    info_btn.classList.add("btn-bg");
    edu_btn.classList.remove("btn-bg");


});
addHoverEffect(edu_btn);
addHoverEffect(info_btn);