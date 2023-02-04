var scroll_button = document.querySelector('down-button-1');
var info_section = document.querySelector('.info');

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
}


function scroll_to_info()
{
    window.scrollTo({
        top:info_section.offsetTop,
        behavior:"smooth"
    });
}

addEventListener('scroll', (event) => {on_scroll()});
