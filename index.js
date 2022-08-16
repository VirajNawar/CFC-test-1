// Responsive Navbar
const navBtn = document.querySelector(".mobile-navbar-btn");
const header =document.querySelector(".header");
const heroSection = document.querySelector(".about-container");

navBtn.addEventListener('click', () => {
  header.classList.toggle("active");
});


// Sticky Navbar
// const observer =  new IntersectionObserver(
//   (entries) => {
// const entry = entries[0];
// !entry.isIntersecting 
// ? document.body.classList.add("sticky")
// :document.body.classList.remove("sticky");
// },
// {
//   root: null, 
//   threshold: 0,
// });

// observer.observe(heroSection);

// slider

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Testimonial slider
new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay:{
    delay:2500,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const myJsmedia = (widthSize) => {
if(widthSize.matches){
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
   
  });
}
else{
  new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
   
  });
}
}


const widthSize = window.matchMedia("(max-width: 780px)");
// Call Listener function at run time
myJsmedia(widthSize);
// Attach listener function on state change
widthSize.addEventListener("change", myJsmedia);



const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    // console.log(entry);

    // if (entry.isIntersecting == false)
    if (!entry.isIntersecting) return;

    // animate number counter

    const counterNum = document.querySelectorAll(".counter-numbers");

    const speed = 200;

    counterNum.forEach((curElem) => {
      const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);

        const incrementNumber = Math.trunc(targetNumber / speed);
        // console.log(incrementNumber);

        if (initialNum < targetNumber) {
          curElem.innerText = `${initialNum + incrementNumber}+`;
          setTimeout(updateNumber, 10);
        }
      };

      updateNumber();
    });

    observer.unobserve(workSection);
  },
  {
    root: null,
    threshold: 0,
  }
);

workObserver.observe(workSection);





  

