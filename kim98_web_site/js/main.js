import { images, galleryImages } from "./imageData.js";
import { initialImage, changeImage } from "./banner_images.js";
import { oppenPopup, closePopup } from "./popup.js";
import { preloadImage, handleLoad } from "./loader.js";
import { initGallery} from "./insert_gallery_img.js";
import { intoGalley, exitGallery, changeStyleGrid, changeStyleSlider } from "./controlGallery.js";
import { initModal, closeModal, goToGalleryFromModal, goToMerch} from "./popup_modal.js";

// 전역 변수
let indexRef = { value: 0, count: 0 };

const profile = document.querySelector(".profile");
const links = document.querySelector(".links");
const main = document.querySelector("#main");
const skeletonMain = document.querySelector(".skeleton_main");


// 이미지 전환 기본 값 세팅
const imageBox = document.getElementById("imageBox");
const keys = Object.keys(images);

// 팝업 박스 기본 값 세팅
const popupBox = document.querySelector(".popup_box");
const popupOpen = document.querySelector(".popup_open");
const popupClose = document.querySelector(".popup_close");

// 팝업 박스 argument dict 구조화
const popupTarget = { open:popupOpen, close:popupClose, box:popupBox};

// preloder 기본값 세팅
const loader = document.querySelector(".loader");
const totalToLoad = keys.length;

// controlGallery 기본 값 세팅
const goToGallery = document.querySelector(".gallery_icon"); // 메인 페이지 갤러리 진입 버튼
const changeGalleryStyleGrid = document.querySelector("#gallery_style_grid"); // 그리드 버튼
const changeGalleryStyleSlider = document.querySelector("#gallery_style_slider"); // 슬라이더 버튼
const galleryExit = document.querySelector("#gallery_exit"); // exit 버튼
const showGallery = document.querySelector(".gallery_section"); // 갤러리 섹션
const galleryContainer = document.querySelector(".gallery_container"); // 갤러리 이미지 컨테이너
const galleryWrapper = document.querySelector("#gallery"); // 부모 => 갤러리 이미지 컨테이너

// 갤러리 argument dict 구조화
const galleryTarget = {
  into: goToGallery, // 메인 페이지 갤러리 진입 버튼
  grid: changeGalleryStyleGrid, // 그리드 버튼
  slider: changeGalleryStyleSlider, // 슬라이더 버튼
  exit: galleryExit, // exit 버튼
  show: showGallery, // 갤러리 섹션
  container: galleryContainer, // 갤러리 이미지 컨테이너 (자식)
  wrapper: galleryWrapper // 갤러리 이미지 컨테이너 부모
};

const popupModal = document.querySelector(".popup_modal"); // 팝업 모달 전체 섹션
const modalClose = document.querySelector(".modal_close"); // 모달창 닫기 버튼
const galleryIconModal = document.querySelector(".gallery_icon_modal"); // 모달창에서 갤러리 진입 버튼
const merch = document.querySelector(".merch_icon_modal");
const modalSkeleton = document.querySelector(".skeleton_popup_madal");

const modalTarget = {
  popupModal: popupModal, // 팝업 모달 전체 섹션
  close: modalClose, // 모달창 닫기 버튼
  goToGallery: galleryIconModal, // 모달창에서 갤러리 진입 버튼
  merch: merch, //굿즈(merch) 아이콘
  skeleton : modalSkeleton
}

// preload 이미지 로드 및 초기화
const preloadUrls = keys.map((key) => images[key]); // 딕셔너리 => URL 배열
preloadImage(preloadUrls, indexRef, totalToLoad, skeletonMain);
handleLoad(indexRef, totalToLoad, skeletonMain);

initModal(modalTarget);
initGallery();

// 갤러리 이벤트 바인딩
intoGalley(galleryTarget, profile, links);
exitGallery(galleryTarget, profile, links);
changeStyleGrid(galleryTarget);
changeStyleSlider(galleryTarget);

// 배너 이미지 초기화 및 주기적 변경
initialImage(imageBox, indexRef, keys);
setInterval(() => {
  changeImage(imageBox, indexRef, keys);
}, 10000);

// 팝업 관련 함수 호출
oppenPopup(popupTarget);
closePopup(popupTarget);

closeModal(modalTarget);
goToGalleryFromModal (modalTarget, galleryTarget, links, profile);
goToMerch (modalTarget);