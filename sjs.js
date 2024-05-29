window.addEventListener('scroll', ()=>{
    let slides = document.querySelectorAll(".slide");
    let windowBottom = window.scrollY+window.innerHeight;
    console.log(windowBottom);

    slides.forEach((slide)=>{
        let slidemiddle = slide.offsetTop + slide.offsetHeight/2;
        if (slidemiddle < windowBottom) {
            slide.classList.add('active');
        }else {
            slide.classList.remove('active');
        }
    })
})