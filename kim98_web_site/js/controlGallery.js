const profile = document.querySelector(".profile");
const links = document.querySelector(".links");

export function intoGalley(galleryTarget){
    galleryTarget.into.addEventListener("click", () =>{
        galleryTarget.show.style.display = "flex";
        if (profile) profile.style.display = "none";
        if (links) links.style.display = "none";
        galleryTarget.grid.style.display = "block";
        galleryTarget.slider.style.display = "none";
    });
}

export function exitGallery(galleryTarget){
    galleryTarget.exit.addEventListener("click", () =>{
       galleryTarget.show.style.display = "none";
        if (profile) profile.style.display = "block";
        if (links) links.style.display = "block";
        galleryTarget.grid.style.display = "none";
        galleryTarget.slider.style.display = "none"; 
    })
}


/**
const galleryTarget = {
  into: goToGallery, //매인 페이지 갤러리 진입 버튼 
  Grid:changeGalleryStyleGrid, // 그리드 버튼
  slider:changeGalleryStyleSlider, // 슬라이더 버튼
  exit: galleryExit, // exit 버튼
  show: showGallery, // 갤러리 색션 
  grid: galleryStyleGrid, // 갤러리 그리드 색션
  slider: galleryStyleSlider // 갤러리 슬라이더 색션
}; 
 */