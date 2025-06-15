export function oppenPopup(popupTarget){
  popupTarget.open.addEventListener("click", () =>{
      popupTarget.box.style.display = "block";
      popupTarget.box.style.opacity = 1;
  });
}

export function closePopup(popupTarget){
  popupTarget.close.addEventListener("click", () => {
      popupTarget.box.style.display = "none";
      popupTarget.box.style.opacity = 0;
  });
}
