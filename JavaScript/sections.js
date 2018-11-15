function aboutMe(){
	document.getElementById("about-me").style.display = "block";

	var x = document.getElementById("top-nav");
	if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    } 
}