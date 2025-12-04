import {classAddStyleGrid} from "./controlGallery.js";


export function initModal (modalTarget){
    main.classList.remove("style_blur");
    popupModal.style.display = "none";
}

export function closeModal (modalTarget){
    modalTarget.close.addEventListener("click", () => {
        modalTarget.popupModal.style.display = "none";
        main.classList.remove("style_blur");
    });
    
}
export function goToGalleryFromModal (modalTarget, galleryTarget, links, profile){
    goToGalleryEvent (modalTarget, galleryTarget, links, profile);
            closeModalEvent(modalTarget);
}
export function goToMerch (modalTarget) {
    modalTarget.merch.addEventListener("click", () => {
         modalTarget.popupModal.style.display = "none";
        main.classList.remove("style_blur");
    })

}
function closeModalEvent (modalTarget){
       modalTarget.close.addEventListener("click", () => {
        modalTarget.popupModal.style.display = "none";
        main.classList.remove("style_blur");
    }); 
}
export function goToGalleryEvent (modalTarget, galleryTarget, links, profile){
   modalTarget.goToGallery.addEventListener("click", () => {
        modalTarget.popupModal.style.display = "none";
        main.classList.remove("style_blur");

        galleryTarget.show.style.display = "flex";
        galleryTarget.container.style.display = "grid";
        if(profile) profile.style.display = "none";
        if (links) links.style.display = "none";
        classAddStyleGrid(galleryTarget);
    }); 
}
