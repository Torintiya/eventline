let reviewsbtn = document.querySelectorAll(".reviews_link")
let reviewswindow = document.querySelector("#reviews_window")
let reviewsbox = document.querySelector("#reviews_wrap")
let closeButtonReviews = document.querySelector("#closebuttonreviews")
let review_modal_text = document.querySelector(".reviews_modal_text")
let review_modal_name = document.querySelector("#reviews_modal_name")
let review_modal_logo = document.querySelector("#reviews_modal_logo")
let results
const div = document
for (results of reviewsbtn) {
    results.addEventListener("click", openReviwes)

}

function openReviwes(event) {
    reviewswindow.classList.add("reviews_window")
    reviewsbox.classList.add("reviews_wrap")

    /*добавили текст*/
    reviewsbox.querySelector('#reviews_wrap > p').textContent =
        event.target.parentElement.querySelector('.reviews_text').textContent;

    /*добавили имя*/
    reviewsbox.querySelector('.reviews_modal_name > h3').textContent =
        event.target.parentElement.querySelector('.reviews__name').textContent;

    /*Добавляем лого*/

    reviewsbox.querySelector('img.reviews_modal_logo').src = event.target.parentElement.querySelector("div.reviews_name img").src;

    /*если открыто модальное окно показать элементы*/
    if (reviewswindow.classList.contains("reviews_window")) {
        review_modal_text.style.display = "block"
        review_modal_name.style.display = "block"
        review_modal_logo.style.display = "flex"
        closeButtonReviews.style.display = "block"
        const body = document.body;
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}`;
        $(document).click(function (e) {
            if ($(e.target).is('')) {
                closebox();
            }
        });
    }

}


closeButtonReviews.addEventListener("click", closebox)

function closebox(event) {
    reviewswindow.classList.remove("reviews_window")
    reviewsbox.classList.remove("reviews_wrap")
    review_modal_text.style.display = "none"
    review_modal_name.style.display = "none"
    review_modal_logo.style.display = "none"
    closeButtonReviews.style.display = "none"
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    $("html, body").scrollTop($("#reviews_window").offset().top);

}


/*function openReviwes(event) {

    reviewsbox.querySelector('#reviews_wrap > p').textContent =
        event.target.parentElement.querySelector('.reviews_text').textContent;
}*/
$(document).click(function (e) {
    if ($(e.target).is('.reviews_window')) {
        closebox();
    }
});




