const title = document.getElementById("title")
const hamburger = document.getElementById("hamburger")
const navContent = document.getElementById("nav-content")

function animate() {
    setTimeout(() => {
        // animate unwsp.dev title
        if(title.innerText == "unwsp.dev") {
            title.innerText = "unwsp.dev_"
        } else {
            title.innerText = "unwsp.dev"
        }

        // animate arrow

        animate();
    }, 500);
}

animate();

// When the Hamburger menu is clicked, toggle the hidden navigation menu content.
hamburger.addEventListener('click', event => {
    if(navContent.style.display == 'none') {
        navContent.style.display = 'block';
    } else {
        navContent.style.display = 'none';
    }
})
navContent.style.display = 'none';