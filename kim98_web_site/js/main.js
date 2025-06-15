import { images } from "./imageData.js";
import { initialImage, changeImage } from "./banner_images.js";
import { oppenPopup, closePopup } from "./popup.js";
import { preloadImage, handleLoad } from "./loader.js";

// 전역 변수
let indexRef = { value: 0, count: 0 };


// 이미지 전환 기본 값 세팅
const imageBox = document.getElementById("imageBox");
const keys = Object.keys(images);

// 팝업 박스 기본 값 세팅
const popupBox = document.querySelector(".popup_box");
const popupOpen = document.querySelector(".popup_open");
const popupClose = document.querySelector(".popup_close");

// 팝업 박스 argument dict 구조화
const popupTarget = { open:popupOpen, close:popupClose, box:popupBox};

//preloder 기본값 세팅
const loader = document.getElementById("loader");
const main = document.getElementById("main");
const totalToLoad = keys.length;

// 첫 이미지 보여주기
initialImage(imageBox, indexRef, keys);

// 주기적으로 이미지 변경
setInterval(() => {
  changeImage(imageBox, indexRef, keys);
}, 10000);


//popupBox 컨트롤 함수
oppenPopup(popupTarget); // popupBox open
closePopup(popupTarget); // popupBox close

//loder 함수
const preloadUrls = keys.map((key) => images[key]); // 딕셔너리 → URL 배열
preloadImage(preloadUrls, indexRef, totalToLoad, loader, main); // 인자 통합 방식으로
handleLoad(indexRef, totalToLoad, loader, main);