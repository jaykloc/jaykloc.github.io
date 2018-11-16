window.onload = function() {

var navBtn = document.getElementsByClassName("navBTN");
var sidenav = document.querySelector("#sidenav");
var topnav = document.querySelector("#top_nav");
var main = document.getElementById("main");
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg")
var img = document.querySelectorAll(".thumbnail");
var closeButton = document.getElementById("modalClose");

//Event Listeners
document.getElementById("sideOpen").addEventListener ("click", sideOpen);
document.getElementById("sideClose").addEventListener("click", sideClose);
document.getElementById("topOpen").addEventListener("click", function() {
	topnav.style.height = "90vh";
	main.style.opacity = "0.2";
});

for(i = 0; i < navBtn.length; i++) {
	navBtn[i].addEventListener("click", sideClose);
	navBtn[i].addEventListener("click", topClose);
}

document.getElementById("topClose").addEventListener("click", topClose)
	function topClose() {
	topnav.style.height = "0";
	main.style.opacity = "1";
};
closeButton.addEventListener("click", close);

for(i = 0; i < img.length; i++) {
	img[i].addEventListener("click", modalImage);
}

	function sideOpen() {
			sidenav.style.width = "15%";
			main.style.opacity = "0.2";
	};

	function sideClose() {
			sidenav.style.width = "0";
			main.style.opacity = "1";
	};

	function modalImage() {
		modal.style.display = "block";
		modalImg.src = this.src;
		console.log(img[i])

	}

	function close() {
		modal.style.display = "none";
	}

}
