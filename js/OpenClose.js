
let submitButton = document.getElementById("acceptBtnForm");

let closeButton = document.getElementById("closeButton");

let openButton = document.getElementById("openButton");

let form = document.getElementById("QAforma");

let complFormButton = document.getElementById("closeBtnForm");

closeButton.addEventListener('click', closeForm);

openButton.addEventListener('click', openForm);

form.addEventListener('submit', checkFormTel);

complFormButton.addEventListener('click', completeForm);


var regularTel = /^[\d\+][\d\(\)\ -]{4,14}\d$/; //Регулярное выражение, проверяющее написание телефонного номера
var regName = /^[\u0400-\u04FF ]+$/; //Регулярное выражение на проверку имени

function closeForm() {
    document.getElementById("fomPage").style.display = "none";
    document.getElementById("openButton").style.display = "block";
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

function openForm() {
    document.getElementById("fomPage").style.display = "block";
    document.getElementById("openButton").style.display = "none";
    if (document.getElementById("formBox").style.display == "none") {
        document.getElementById("formBox").style.display = "flex";
        document.getElementById("completeBox").style.display = "none";
    }
    if (closeButton.style.display = "none")
        closeButton.style.display = "block";
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
}

function checkFormTel(event) {
    event.preventDefault();
    let userName = document.getElementById("nameForm").value;
    let validationName = regName.test(userName);

    let userTel = document.getElementById("telForma").value;
    let validationTel = regularTel.test(userTel);

    if (validationTel && validationName) {
        thanksWindow(event);
    }
    else {
        alert("Введен неверный номер телефона или имя")
    }
}

function thanksWindow(event) {
    event.preventDefault();
    document.getElementById("completeBox").style.display = "flex"; //Появление благодарственной страницы
    document.getElementById("formBox").style.display = "none"; //Скрытие формы
    closeButton.style.display = "none";
}

function completeForm() {
    document.forms.QAforma.submit(); //Отправка результатов формы
}

$(document).click(function (e) {
    if ($(e.target).is('.formBack')) {
        closeForm();
    }
});