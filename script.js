const title = document.getElementById("title")


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