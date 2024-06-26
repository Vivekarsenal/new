 
   
   /*var swiper2 = new Swiper2(".swiper-mySwiper2", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    },
  });*/

  /*
  window.addEventListener('scroll', function() {
    var aboutSection = document.getElementById('about');
    var aboutPosition = aboutSection.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (aboutPosition < screenHeight && aboutPosition > 0) {
        aboutSection.classList.add('animate-up');
    } else {
        aboutSection.classList.remove('animate-up');
    }
});
*/



  const wrapper= document.querySelector('.wrapper');
  const registerLink=document.querySelector('.register-link');
  const loginLink=document.querySelector('.login-link');
  const btnPopup=document.querySelector('.btnLogin-popup');
  const iconClose=document.querySelector('.icon-close');


  registerLink.onclick=()=>{
    wrapper.classList.add('active');
  };

  loginLink.onclick=()=>{
    wrapper.classList.remove('active');
  };

  btnPopup.onclick=()=>{
    wrapper.classList.add('active-popup');
  };

  iconClose.onclick=()=>{
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
  };


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
      var aboutSection = document.getElementById('about');
      var sectionPosition = aboutSection.getBoundingClientRect().top;
      var screenHeight = window.innerHeight;
  
      if (sectionPosition < screenHeight / 1.5) {
        aboutSection.classList.add('animate-up');
      }
    });
  });
  
  let valueDisplays=document.querySelectorAll(".num");
  let interval=4000;

  valueDisplays.forEach((valueDisplay) => {
    let startValues=0;
    let endValues=parseInt(valueDisplay.getAttribute("data-val"));
   
    let duration = Math.floor(interval / endValues);
    let counter= setInterval(function() {
      startValues+=1;
      valueDisplay.textContent=startValues;
      if(startValues== endValues){
        clearInterval(counter);
      }
    },duration);
  });
 

  // JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  const countingSection = document.querySelector(".counting");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              countingSection.classList.add("animate");
          }
      });
  });

  observer.observe(countingSection);
});
