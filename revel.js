var imgs = document.querySelectorAll('.gal_img');

function reveal_em()
{
    for (let i = 0; i < imgs.length; i++) {
        if(imgs[i].getBoundingClientRect().top < (window.innerHeight))
        imgs[i].classList.add('reveal');
        else {
            imgs[i].classList.remove('reveal');
        }
    }
    window.requestAnimationFrame(reveal_em);
}
window.requestAnimationFrame(reveal_em);
