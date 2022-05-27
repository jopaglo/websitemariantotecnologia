window.onload = function(){
	document.querySelector(".menuMobile").addEventListener("click", function(){
		if(document.querySelector(".menu nav ul").style.display == 'flex') {
      document.querySelector(".menu nav ul").style.display = 'none';
			document.querySelector(".menuMobile").style.display = 'flex';
			document.querySelector(".menuMobileClose").style.display = 'none';
		} else {
      document.querySelector(".menu nav ul").style.display = 'flex';
			document.querySelector(".menuMobile").style.display = 'none';
			document.querySelector(".menuMobileClose").style.display = 'flex';

		}
	});

	document.querySelector(".menuMobileClose").addEventListener("click", function(){
		if(document.querySelector(".menu nav ul").style.display == 'flex') {
      document.querySelector(".menu nav ul").style.display = 'none';
			document.querySelector(".menuMobile").style.display = 'flex';
			document.querySelector(".menuMobileClose").style.display = 'none';
		} else {
      document.querySelector(".menu nav ul").style.display = 'flex';
			document.querySelector(".menuMobile").style.display = 'none';
			document.querySelector(".menuMobileClose").style.display = 'flex';

		}
	});
};