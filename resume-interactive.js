
function fadenamein() {
    document.getElementById('obi').classList.add("animate__animated", ".animate__fadeIn")

}

function hide() {
    document.getElementById('hide').classList.add("animate__animated", "animate__fadeInUp")

}

function gone() {
    document.getElementById('picture').classList.add("animate__animated", "animate__fadeOut")
}

function mouseout() {
    document.getElementById('picture').classList.remove("animate__fadeOut")
    document.getElementById('picture').classList.add("animate__animated", "animate__fadeIn")
}
