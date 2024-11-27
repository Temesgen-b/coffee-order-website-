const menuopenbutton = document.querySelector("#menu-open-button") ;
const menuclosebutton = document.querySelector("#menu-close-button") ;
menuopenbutton.addEventListener("click", () => {
    //toogle mobile menu visiablity 
  document.body.classList.toggle("show-mobile-menu");
});

// close menu when the close button is clicked 
menuclosebutton.addEventListener("click", () => menuopenbutton.click
() );





//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,  
  grabcursor: true,
  spacebetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev' ,
  },
  
  //responsive breaking point 

breakingpoints:{
  0:{
    slidespreview:1
  },
  768:{   
    slidespreview:2
  },
  1024:{
    slidespreview:3
  }
}

});