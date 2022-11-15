const burgerMenu = document.querySelector('.header__burger');
const pageBody = document.querySelector('.page-body');
if (burgerMenu) {
   const headerNav = document.querySelector('.header__nav');
   const burgerMenuClose = document.querySelector('.header__burger-close');
   burgerMenu.addEventListener("click", function (e) {
      burgerMenu.classList.add('active');
      headerNav.classList.add('active');
      pageBody.classList.add('lock');
   })
   burgerMenuClose.addEventListener("click", function (e) {
      burgerMenu.classList.remove('active');
      headerNav.classList.remove('active');
      pageBody.classList.remove('lock');
   })
};

// const popupBurgerclose = document.querySelector('.pop-up__burger-close');
// const formButton = document.querySelector('.form__btn');
// const popUp = document.querySelector('.pop-up');
// if (formButton) {
//    formButton.addEventListener("click", function (e) {
//       event.preventDefault();
//       popUp.classList.add('.open');
//    })
//    popupBurgerclose.addEventListener("click", function (e) {
//       popUp.classList.remove('.open');
//    })
// };

// ! globalVideo
let srcGlobalVideo = "https://www.youtube.com/embed/YSnspZ0GGU0";

// ! VideoDesc
const videoPlay = document.querySelector('.desc__link');
const videoMovie = document.querySelector('.desc__frame');

if (videoPlay) {
   const desc = document.querySelector('.desc__video');
   videoPlay.addEventListener('click', function (e) {
      desc.classList.add('active');
      if (window.innerWidth < 768) {
         if (document.fullscreenEnabled) {
            videoMovie.requestFullscreen();
         }
      }
      videoMovie.setAttribute("src", `${srcGlobalVideo}?rel=0&autoplay=1`);
   })
}

// ! VideoGuide1
const videoPlayGuide1 = document.querySelector('.guide__link1');
const videoMovieGuide1 = document.querySelector('.guide__frame1');

if (videoPlayGuide1) {
   const guide1 = document.querySelector('.guide__item1');
   videoPlayGuide1.addEventListener('click', function (e) {
      guide1.classList.add('active');
      if (window.innerWidth < 768) {
         if (document.fullscreenEnabled) {
            videoMovieGuide1.requestFullscreen();
         }
      }
      videoMovieGuide1.setAttribute("src", `${srcGlobalVideo}?rel=0&autoplay=1`);
   })
}

// ! VideoGuide2
const videoPlayGuide2 = document.querySelector('.guide__link2');
const videoMovieGuide2 = document.querySelector('.guide__frame2');

if (videoPlayGuide2) {
   const guide2 = document.querySelector('.guide__item2');
   videoPlayGuide2.addEventListener('click', function (e) {
      guide2.classList.add('active');
      if (window.innerWidth < 768) {
         if (document.fullscreenEnabled) {
            videoMovieGuide2.requestFullscreen();
         }
      }
      videoMovieGuide2.setAttribute("src", `${srcGlobalVideo}?rel=0&autoplay=1`);
   })
}

// ! VideoGuide3
const videoPlayGuide3 = document.querySelector('.guide__link3');
const videoMovieGuide3 = document.querySelector('.guide__frame3');

if (videoPlayGuide3) {
   const guide3 = document.querySelector('.guide__item3');
   videoPlayGuide3.addEventListener('click', function (e) {
      guide3.classList.add('active');
      if (window.innerWidth < 768) {
         if (document.fullscreenEnabled) {
            videoMovieGuide3.requestFullscreen();
         }
      }
      videoMovieGuide3.setAttribute("src", `${srcGlobalVideo}?rel=0&autoplay=1`);
   })
}

// ! VideoGuide4
const videoPlayGuide4 = document.querySelector('.guide__link4');
const videoMovieGuide4 = document.querySelector('.guide__frame4');

if (videoPlayGuide4) {
   const guide4 = document.querySelector('.guide__item4');
   videoPlayGuide4.addEventListener('click', function (e) {
      guide4.classList.add('active');
      if (window.innerWidth < 768) {
         if (document.fullscreenEnabled) {
            videoMovieGuide4.requestFullscreen();
         }
      }
      videoMovieGuide4.setAttribute("src", `${srcGlobalVideo}?rel=0&autoplay=1`);
   })
}

// ! VideoGuide5
const videoPlayGuide5 = document.querySelector('.guide__link5');
const videoMovieGuide5 = document.querySelector('.guide__frame5');

if (videoPlayGuide5) {
   const guide5 = document.querySelector('.guide__item5');
   videoPlayGuide5.addEventListener('click', function (e) {
      guide5.classList.add('active');
      if (window.innerWidth < 768) {
         if (document.fullscreenEnabled) {
            videoMovieGuide5.requestFullscreen();
         }
      }
      videoMovieGuide5.setAttribute("src", `${srcGlobalVideo}?rel=0&autoplay=1`);
   })
}