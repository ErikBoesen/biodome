var bg = document.getElementById('bg');

window.onscroll = function() {
	bg.style.transform = 'translateY(' + document.body.scrollTop * -0.5 + 'px)';

}
