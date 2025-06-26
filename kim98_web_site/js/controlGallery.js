/** 
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

 */




export function intoGalley(galleryTarget, profile, links){
    galleryTarget.into.addEventListener("click", () =>{
        galleryTarget.show.style.display = "flex";
        galleryTarget.container.style.display = "grid";
        if(profile) profile.style.display = "none";
        if (links) links.style.display = "none";
        classAddStyleGrid(galleryTarget);
    });
}

export function exitGallery(galleryTarget, profile, links){
    galleryTarget.exit.addEventListener("click", () =>{
       galleryTarget.show.style.display = "none";
        if (profile) profile.style.display = "block";
        if (links) links.style.display = "flex";
        galleryTarget.container.style.display = "none";
    });
}

export function changeStyleGrid(galleryTarget){
    galleryTarget.grid.addEventListener("click", () =>{
        classAddStyleGrid(galleryTarget);
    })
}

export function changeStyleSlider(galleryTarget){
    galleryTarget.slider.addEventListener("click", () =>{
        classAddStyleSlider(galleryTarget);
    })
}

export function classAddStyleGrid(galleryTarget){
    galleryTarget.container.classList.add("grid_gallery");
    galleryTarget.wrapper.classList.remove("slider_gallery");

    const items = galleryTarget.container.querySelectorAll("div");
    items.forEach(div => {
        div.classList.add("single_img", "show");//이미지 전체 스타일 클래스
        div.classList.remove("slide_item");//slide ui 조작용 클래스
    });
}

function classAddStyleSlider(galleryTarget){
    galleryTarget.container.classList.remove("grid_gallery");
    galleryTarget.wrapper.classList.add("slider_gallery");

    // 각 자식 div에 slide_item 클래스 적용
    const items = galleryTarget.container.querySelectorAll("div");
    items.forEach(div => {
        div.classList.add("slide_item", "show"); // show도 같이 줘야 opacity: 1로 보임
    });
}