var scroll_button = document.querySelector('down-button-1');
var info_section = document.querySelector('.contact');
var gallery_section = document.querySelector('.gallery');

var need_div = document.getElementById('need-box');

var top_wrapper = document.querySelector('.top-wrapper');

var scroll_height = 0;
var last_scroll = 0;

function on_scroll()
{
    scroll_height = window.scrollY;
    scroll_step = scroll_height - last_scroll;
    
    if(scroll_step > 0)
    {
        top_wrapper.classList.remove('fade-in');
        top_wrapper.classList.add('fade-out');
    }
    if(scroll_step < 0)
    {
        top_wrapper.classList.add('fade-in');
        top_wrapper.classList.remove('fade-out');
    }
    last_scroll = window.scrollY;

    need_div.style.opacity = 1 - (window.scrollY / window.innerHeight * 2.5);
    
    if(window.scrollY > need_div.getBoundingClientRect().bottom){
        need_div.style = 'visibility: hidden';
    }
    else if(window.scrollY < need_div.getBoundingClientRect().top)
    {
        need_div.style = 'visibility: unset';
    }
}

function scroll_to_top()
{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

function scroll_to_info()
{
    window.scrollTo({
        top:info_section.offsetTop,
        behavior:"smooth"
    });
}

function scroll_to_gallery()
{
    window.scrollTo({
        top:gallery_section.offsetTop - 100,
        behavior:"smooth"
    });
}

addEventListener('scroll', (event) => {on_scroll()});
