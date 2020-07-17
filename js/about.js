
function scrollAppear() {
    let contact = document.querySelector(".form-wrapper");
    let skill = document.querySelector(".skill-wrapper");
    let contactSession = contact.getBoundingClientRect().top;
    let skillSession = skill.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.2;

    if (screenPosition > contactSession) {
        contact.classList.add("itemAppear");
    }
    if (screenPosition > skillSession) {
        skill.classList.add("itemAppear");
    }
}

window.addEventListener("scroll", scrollAppear);