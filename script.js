let menu = document.querySelector('#menu-bars');

let navbar = document.querySelector('#nav');

// menu.addEventListener('click',Toggle);

// function Toggle(e)
// {
//     if(menu.classList.contains('fa-bars'))
//         {
      


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
   navbar.classList.toggle('navbar');
   
    

}

let searchform = document.querySelector('#searching');
document.querySelector('#search-icon').onclick = () =>{
    searchform.classList.toggle('search-form');
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
   
    loop:true,
    breakpoints:{
      0: {
        slidesPerView:1,
      },
      640: {
        slidesPerView:2,
      },
      768: {
        slidesPerView:2,
      },
      1024: {
        slidesPerView:3,
      },
    },
  });
