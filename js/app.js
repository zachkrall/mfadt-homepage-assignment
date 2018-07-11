// document.getElementById('themeToggle').onclick = function(){
//
//   let currentTheme = document.documentElement.attributes["data-theme"].nodeValue;
//
//   if ( currentTheme != 'dark' ){
//     document.documentElement.setAttribute('data-theme', 'dark');
//   } else {
//     document.documentElement.setAttribute('data-theme', 'light');
//   }
//
// }


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {

    scrollPosition = window.scrollY;
    scrollElement = document.getElementsByTagName('nav')[0];

    if (scrollPosition >= 500) {
        scrollElement.classList.remove('fadeOut');
        scrollElement.classList.add('fadeIn');
    } else {
        scrollElement.classList.remove('fadeIn');
        scrollElement.classList.add('fadeOut');
    }

});
