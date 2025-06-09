const images = [
    /*
    "url('kim98_web_site/kim98_images/banner_images/baseball_banner_img_1.jpg')",
    */
    "url('kim98_web_site/kim98_images/banner_images/baseball_banner_img_2.jpg')",
    "url('kim98_web_site/kim98_images/banner_images/baseball_banner_img_3.jpg')",
    "url('kim98_web_site/kim98_images/banner_images/baseball_banner_img_4.jpg')",
];
/*
let index = 0;

const bannerImage = document.getElementsByClassName("banner_img");

function rotateBanner() {
    bannerImage.style.backgroundImage = images[index];
index = (index+1) % images.length;
}
setInterval(rotateBanner, 3000);
*/
const imageBox = document.getElementById("imageBox");
let index = 0;

function changeImage() {
  imageBox.style.backgroundImage = images[index];
  index = (index + 1) % images.length;
}

function changeImage() {
  // 1단계: fade out
  imageBox.style.opacity = 0;

  // 2단계: 이미지 교체 + fade in (약간의 시간 차 줌)
  setTimeout(() => {
    imageBox.style.backgroundImage = images[index];
    imageBox.style.opacity = 1;
    index = (index + 1) % images.length;
  }, 1500); // fade-out 시간과 동일하게 맞추기 (1s)
}

changeImage(); // 첫 이미지 설정
setInterval(changeImage, 10000); // 10초마다 이미지 변경