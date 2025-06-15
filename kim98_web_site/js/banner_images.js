import { images } from "./imageData.js";

// 첫 이미지 보여주기
export function initialImage(imageBox, indexRef, keys) {
  if (!keys.length || !imageBox) {
    console.warn("이미지 key 배열 또는 imageBox가 유효하지 않음");
    return;
  }

  const key = keys[indexRef.value];
  const imageUrl = images[key];

  if (!imageUrl) {
    console.warn(`첫 이미지 로드 실패: key=${key}`);
    return;
  }

  imageBox.style.backgroundImage = `url('${imageUrl}')`;
}

// 이미지 전환 함수 (fade 효과 포함)
export function changeImage(imageBox, indexRef, keys) {
  if (!keys.length || !imageBox) {
    console.warn("이미지 key 배열 또는 imageBox가 유효하지 않음");
    return;
  }

  indexRef.value = (indexRef.value + 1) % keys.length;
  const key = keys[indexRef.value];
  const imageUrl = images[key];

  if (!imageUrl) {
    console.warn(`이미지 전환 실패: key=${key}`);
    return;
  }

  imageBox.style.opacity = 0;
  setTimeout(() => {
    imageBox.style.backgroundImage = `url('${imageUrl}')`;
    imageBox.style.opacity = 1;
  }, 1500);
}
