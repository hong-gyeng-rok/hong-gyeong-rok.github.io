const popupBox = document.querySelector(".popup_box");
const popupOpen = document.querySelector(".popup_open");
const popupClose = document.querySelector(".popup_close");

/*
popupBtn.addEventListener("click", () => {
  popupBox.classList.toggle("active");
});
*/

popupOpen.addEventListener("click", () =>{
    popupBox.style.display = "block";
    popupBox.style.opacity = 1;
});

popupClose.addEventListener("click", () => {
    popupBox.style.display = "none";
    popupBox.style.opacity = 0;
});