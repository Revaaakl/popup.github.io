let playOnce = true;

window.addEventListener('scroll', () => {
    if(window.scrollY > 120) {
        navbar.style.height = "50px";
    } else {
        navbar.style.height = "90px";
    }

    // Connaître la valeur du niveau de scroll peu importe la taille de l'écran
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

    if (scrollValue > 0.45) {
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = "none";
        imgImprovise.style.transition = 10;
    }

    if(scrollValue > 0.85 && playOnce) {
        popup.style.opacity = 1;
        popup.style.transform = "none";
        playOnce = false;
    }
});

closeBtn.addEventListener('click', () => {
    popup.style.opacity = 0;
    popup.style.transform = "500px";
});