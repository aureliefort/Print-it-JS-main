const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const text = document.querySelector("#banner p");
const img = document.querySelector(".banner-img");

let currentSlide = 0;

for (let index = 0; index < slides.length; index++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dots.appendChild(dot);
    dot.addEventListener("click", () => goToSlide(index));
}

const allDot = document.getElementsByClassName('dot');
allDot[currentSlide].classList.add('dot_selected');



arrowRight.addEventListener("click", NextSlide);
arrowLeft.addEventListener("click", PrevSlide);

function NextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    changeSlide();
}

function PrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide();
}

function changeSlide() {
    img.src = slides[currentSlide].image;
    text.innerHTML = slides[currentSlide].tagLine;
    changeDot();
}

function changeDot() {
    for (let index = 0; index < allDot.length; index++) {
        allDot[index].classList.remove('dot_selected');
    }
    allDot[currentSlide].classList.add('dot_selected');
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    changeSlide();
}

changeSlide();

/*function onButtonClick (event) {
	console.log(event.currentTarget)
	alert('bonjour')
	
}*/
