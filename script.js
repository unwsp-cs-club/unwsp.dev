const content = document.getElementsByClassName("content")[0];

window.onresize = () => {
    if(window.innerWidth < 900) {
        content.style.display = 'block'
    } else {
        content.style.display = 'grid'
    }
}