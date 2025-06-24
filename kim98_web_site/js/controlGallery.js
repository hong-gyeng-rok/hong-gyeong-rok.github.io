const profile = document.querySelector(".profile");
const links = document.querySelector(".links");

export function intoGalley(galleryTarget){
    galleryTarget.into.addEventListener("click", () =>{
        galleryTarget.show.style.display = "flex";
        if (profile) profile.style.display = "none";
        if (links) links.style.display = "none";
        classAddStyleGrid(galleryTarget);
    });
}

export function exitGallery(galleryTarget){
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

function classAddStyleGrid(galleryTarget){
    galleryTarget.container.classList.add("grid_gallery");
    galleryTarget.wrapper.classList.remove("slider_gallery");

    const items = galleryTarget.container.querySelectorAll("div");
    items.forEach(div => {
        div.classList.add("single_img", "show");
        div.classList.remove("slide_item");
    });
}

function classAddStyleSlider(galleryTarget){
    galleryTarget.container.classList.remove("grid_gallery");
    galleryTarget.wrapper.classList.add("slider_gallery");

    // 각 자식 div에 slide_item 클래스 적용
    const items = galleryTarget.container.querySelectorAll("div");
    items.forEach(div => {
        div.classList.add("slide_item", "show"); // show도 같이 줘야 opacity: 1로 보임
        div.classList.remove("single_img"); // grid 전용 클래스 제거
    });
}