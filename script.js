let lightThemeButton = document.querySelector('.theme-button-light');
let darkThemeButton = document.querySelector('.theme-button-dark');

let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');

let blogArticles = document.querySelectorAll('.blog-article');
let moreButtons = document.querySelectorAll('.blog-article.short .more');

let cardViewButtonGrid = document.querySelector('.card-view-button-grid');
let cardViewButtonList = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

let activePhoto = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list li a');

for (let i = 0; i < moreButtons.length; i++){
    moreButtons[i].onclick = function () {
        blogArticles[i].classList.remove('short');
    };
}

for (let preview of previews){
    preview.onclick = function (evt) {
        evt.preventDefault();
        document.querySelector('.active-item').classList.remove('active-item');
        preview.classList.add('active-item');
        activePhoto.src = preview.href;
    };
}

lightThemeButton.onclick = function () {
    document.body.classList.remove('dark');
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');
};

darkThemeButton.onclick =  function () {
    document.body.classList.add('dark');
    darkThemeButton.classList.add('active');
    lightThemeButton.classList.remove('active')
};

serifFontButton.onclick = function () {
    document.body.classList.add('serif');
    serifFontButton.classList.add('active');
    sansSerifFontButton.classList.remove('active')
};

sansSerifFontButton.onclick = function () {
    document.body.classList.remove('serif');
    sansSerifFontButton.classList.add('active');
    serifFontButton.classList.remove('active')
};

cardViewButtonGrid.onclick = function () {
    cards.classList.remove('list');
    cardViewButtonGrid.classList.add('active');
    cardViewButtonList.classList.remove('active');
};

cardViewButtonList.onclick = function () {
    cards.classList.add('list');
    cardViewButtonGrid.classList.remove('active');
    cardViewButtonList.classList.add('active');
};

