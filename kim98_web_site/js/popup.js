

export function oppenPopup(popupTarget){
  popupTarget.open.addEventListener("click", () =>{
      popupTarget.box.style.display = "flex";
  });
}

export function closePopup(popupTarget){
  popupTarget.close.addEventListener("click", () => {
      popupTarget.box.style.display = "none";
  });
}
