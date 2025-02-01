// Navbar Start
const scrollOffset = 90;
let button = document.getElementById("toggleButton");
let offNav = document.getElementById("offCanvas");
const navLink = offNav.children;
button.addEventListener("click", function(){
    if(offNav.style.width === "0px") {
        offNav.style.height = "150%";
        offNav.style.width = "100%";
        button.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z'/></svg>"
        document.getElementById('navContainer').style.backgroundColor = '#FFFFFF00';
        draweWasOpen = true;
    } else {
        offNav.style.width = "0";
        document.getElementById("navContainer").style.backgroundColor = "#FFFFFF00"
        button.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z'/></svg>"
        document.getElementById('navContainer').style.backgroundColor = '#FFFFFF';
    }
});
for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function() {
        offNav.style.width = "0";
        document.getElementById("navContainer").style.backgroundColor = "#FFFFFF00"
        button.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z'/></svg>"
        document.getElementById('navContainer').style.backgroundColor = '#FFFFFF';
    })
}

document.addEventListener('DOMContentLoaded', () => {
    // FLYING BIRD
    const bird = document.querySelector('.flying');
    const birdy = document.getElementById('birdy');
    const birdyEnd = document.getElementById('birdyend');

    let lastScrollY = window.scrollY;
    const updateBirdPosition = () => {
        const birdyTop = birdy.getBoundingClientRect().top + window.scrollY+500;
        const birdyEndTop = birdyEnd.getBoundingClientRect().top + window.scrollY+500;

        const scrollY = window.scrollY + window.innerHeight;
        const scrollPercent = Math.min(Math.max((scrollY - birdyTop) / (birdyEndTop - birdyTop), -0.3), 1);
        const birdPosition = scrollPercent * 100;
        bird.style.right = `${birdPosition}vw`;
        if (window.scrollY > lastScrollY) {
            bird.style.transform = 'scaleX(1)';
        } else {
            bird.style.transform = 'scaleX(-1)';
        }

        lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', updateBirdPosition);
    updateBirdPosition();

    // BUTTONS SWITCHER
    const buyButton = document.getElementById('buy');
    const sellButton = document.getElementById('sell');

    const buySrc = buyButton.src;
    const sellSrc = sellButton.src;
    const swapImages = () => {
        buyButton.src = sellSrc;
        sellButton.src = buySrc;
    };
    const resetImages = () => {
        buyButton.src = buySrc;
        sellButton.src = sellSrc;
    };
    sellButton.addEventListener('mouseenter', swapImages);
    sellButton.addEventListener('mouseleave', resetImages);

    const plockingImage = document.getElementById('plocking');
    const buttons = document.querySelectorAll('.button');

    let resetTimeout;
    const changeImageSrc = () => {
        clearTimeout(resetTimeout);
        plockingImage.src = './images/Looking.gif';
    };
    const resetImageSrc = () => {
        resetTimeout = setTimeout(() => {
            plockingImage.src = './images/Peckering.gif';
        }, 500);
    };
    buttons.forEach(button => {
        button.addEventListener('mouseenter', changeImageSrc);
        button.addEventListener('mouseleave', resetImageSrc);
    });

    // CAIRON 1
    function scrollWords() {
        let scrollContainer = document.getElementById('textContainerCairon1');
        let textElement = document.getElementById('cairontext1');
        let containerWidth = scrollContainer.offsetWidth;
        let textWidth = textElement.offsetWidth;
        let currentMarginLeft = 0;
        function animateScroll() {
            currentMarginLeft -= 0.5;
            textElement.style.marginLeft = currentMarginLeft + 'px';
            if (Math.abs(currentMarginLeft) >= textWidth - containerWidth) {
                currentMarginLeft = 0;
            }
            window.requestAnimationFrame(animateScroll);
        }
        animateScroll();
    }
    scrollWords();
    // CAIRON 2
    function scrollWords2() {
        let scrollContainer = document.getElementById('textContainerCairon2');
        let textElement = document.getElementById('cairontext2');
        let containerWidth = scrollContainer.offsetWidth;
        let textWidth = textElement.offsetWidth;
        let currentMarginLeft = 0;
        function animateScroll() {
            currentMarginLeft -= 0.5;
            textElement.style.marginLeft = currentMarginLeft + 'px';
            if (Math.abs(currentMarginLeft) >= textWidth - containerWidth) {
                currentMarginLeft = 0;
            }
            window.requestAnimationFrame(animateScroll);
        }
        animateScroll();
    }
    scrollWords2();

        // SLIDE NAVIGATION
        const slides = ['slide1', 'slide2', 'slide3'];
        let currentSlideIndex = 0;

        const showSlide = (index) => {
            slides.forEach((slideId, i) => {
                const slide = document.getElementById(slideId);
                if (i === index) {
                    slide.style.display = 'flex'; // Show current slide
                } else {
                    slide.style.display = 'none'; // Hide other slides
                }
            });
        };

        const nextSlide = () => {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            showSlide(currentSlideIndex);
        };

        const prevSlide = () => {
            currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
            showSlide(currentSlideIndex);
        };

        // Initialize by showing the first slide
        showSlide(currentSlideIndex);

        // Attach event listeners to the arrows
        document.getElementById('arrowRight').addEventListener('click', nextSlide);
        document.getElementById('arrowLeft').addEventListener('click', prevSlide);
});