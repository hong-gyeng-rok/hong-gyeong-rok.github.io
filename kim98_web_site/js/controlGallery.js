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
