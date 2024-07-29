const select = document.querySelector('select');
const allLang = ['EN', 'UA'];
const langArr = {
    "header": {
        "EN": "Vasyl Lukaniuk",
        "UA": "Василь Луканюк"
    },
    "subheader": {
        "EN": "Musician, artist, director",
        "UA": "Музикант, художник, режисер"
    },
    "tour": {
        "EN": "Tour",
        "UA": "Тур"
    },
    "videos": {
        "EN": "Videos",
        "UA": "Відео"
    },
    "news": {
        "EN": "News",
        "UA": "Новини"
    }
};

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage(){
    let hash = window.location.hash.substr(1);
    if (!allLang.includes(hash)){
        location.href = window.location.pathname + '#EN';
        location.reload();
    }
    select.value = hash;
    for (let key in langArr) {
        let elements = document.querySelectorAll('.lng-' + key);
        elements.forEach((element) => {
            element.innerHTML = langArr[key][hash];
        });
    }
}

// Викликати зміну мови під час завантаження сторінки
changeLanguage();
