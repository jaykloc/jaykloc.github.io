window.onload = function() {

	var header = document.querySelector("header");
	var footer = document.querySelector("footer");
	var link = document.querySelectorAll(".wrklink");
	var main = document.getElementById("main")


		header.style.height = "70vh";
		footer.style.display = "block";
		main.style.display = "block";
		main.style.opacity = "1";

	for(i = 0; i < link.length; i++) {
		link[i].addEventListener("click", activeBTN); 
	}

	function activeBTN() {
		var active = document.getElementsByClassName("active");
		active[0].className = active[0].className.replace(" active", "");
		this.className += " active";
	}


}
	
	var tabBtn = document.querySelectorAll(".wrklink");


	function openTab(tabCon) {
		var i;
		var x = document.getElementsByClassName("work");
		for(i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		document.getElementById(tabCon).style.display = "block";
		document.getElementById(tabCon).style.width = "100%";
	}


