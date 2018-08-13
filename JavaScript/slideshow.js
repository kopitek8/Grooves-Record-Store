// Declaring variables and creating function for the slideshow in home page

var firstImg = document.getElementById("slidepic");

var imgArray = ["../Images/slideshow/dark.jpg", "../Images/slideshow/abbey.jpg", "../Images/slideshow/led.jpg", "../Images/slideshow/imagine.jpg", "../Images/slideshow/wild.jpg"]

var imgIndex = 0;

var changeImg = function () {
	slidepic.setAttribute("src", imgArray [imgIndex]);
	imgIndex++;
	
	if (imgIndex >= imgArray.length) {
		imgIndex = 0;
	}
}

var inter = setInterval(changeImg, 4000);