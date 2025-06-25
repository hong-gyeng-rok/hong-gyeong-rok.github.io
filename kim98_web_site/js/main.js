import { images, galleryImages } from "./imageData.js";
import { initialImage, changeImage } from "./banner_images.js";
import { oppenPopup, closePopup } from "./popup.js";
import { preloadImage, handleLoad } from "./loader.js";
import { initGallery} from "./insert_gallery_img.js";
import { intoGalley, exitGallery, changeStyleGrid, changeStyleSlider } from "./controlGallery.js";

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

//controlGallery 기본 값 세팅
const goToGallery = document.querySelector(".gallery_icon");//매인 페이지 갤러리 진입 버튼
const changeGalleryStyleGrid = document.querySelector("#gallery_style_grid");// 그리드 버튼
const changeGalleryStyleSlider = document.querySelector("#gallery_style_slider"); // 슬라이더 버튼
const galleryExit = document.querySelector("#gallery_exit"); // exit 버튼
const showGallery = document.querySelector(".gallery_section"); // 갤러리 색션 
const galleryContainer = document.querySelector(".gallery_container"); // 갤러리 이미지 컨테이너
const galleryWrapper = document.querySelector("#gallery"); // 부모 => 갤러리 이미지 컨테이너

//갤러리 argument dict 구조화
const galleryTarget = {
  into: goToGallery, //매인 페이지 갤러리 진입 버튼 
  grid:changeGalleryStyleGrid, // 그리드 버튼
  slider:changeGalleryStyleSlider, // 슬라이더 버튼
  exit: galleryExit, // exit 버튼
  show: showGallery, // 갤러리 색션 
  container: galleryContainer, // 갤러리 이미지 컨테이너 (자식)
  wrapper :galleryWrapper //갤러리 이미지 컨테이너 부모
};

//loder 함수
const preloadUrls = keys.map((key) => images[key]); // 딕셔너리 => URL 배열
preloadImage(preloadUrls, indexRef, totalToLoad, loader, main); // 인자 통합 방식으로
handleLoad(indexRef, totalToLoad, loader, main);

//갤러리 이미지 삽입, div, class 삽입 함수 form gallery_grid_style.js
initGallery();

intoGalley(galleryTarget);
exitGallery(galleryTarget);
changeStyleGrid(galleryTarget);
changeStyleSlider(galleryTarget);

// 첫 이미지 보여주기
initialImage(imageBox, indexRef, keys);

// 주기적으로 이미지 변경
setInterval(() => {
  changeImage(imageBox, indexRef, keys);
}, 10000);


//popupBox 컨트롤 함수
oppenPopup(popupTarget); // popupBox open
closePopup(popupTarget); // popupBox close


