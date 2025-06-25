/*
목적: 24S/S, 24F/W, 25S/S 시즌별 이미지 출력
- HTML의 select 요소에서 "24year-24S/S" 형태의 value를 선택
- 선택된 값을 "-" 기준으로 split하여 year, season 추출
- galleryImages[year][season] 구조로 이미지 배열 접근

동작 방식:
- 각 이미지 데이터는 { id, url, size } 형태로 구성
- size 값에 따라 single/double 스타일 분기 ==> 지금은 싱글이미지만 있으니 single 기준으로 코드 작성 및 구현
- createElement 및 classList API로 동적 DOM 조작하여 div 생성
- 각 이미지에 시즌별 스타일 클래스 자동 삽입
- 최종적으로 #gallery-container 요소에 이미지 append

확장 계획:
- 시즌 전환 시 fade 효과 고현
- 선택된 시즌 상태 저장(localStorage 등) 추후 확장 가능
- double과 같은 사이즈 다른 이미지 삽입 및 스타일 분기 설정하기

// 본 파일은 ChatGPT의 도움을 받아 자동 생성된 코드로,
// 주요 로직은 AI 기반 초안이며, 이후 리팩토링 필요.
*/

import { galleryImages } from "./imageData.js";

function renderSeason(seasonData, containerId, seasonStyle) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // 기존 이미지 초기화

  seasonData.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("single_img", seasonStyle); // 공통 + 시즌별 클래스
    div.style.backgroundImage = `url('${item.url}')`;
    container.appendChild(div);
  });
  
  const singleImg = document.querySelectorAll(".single_img");
    singleImg.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add("show");
      }, index * 100); // 순차적으로 페이드 인
});

}

function handleSeasonChange() {
  const val = document.getElementById("seasonSelect").value;
  const [year, season] = val.split("-");
  const seasonData = galleryImages[year][season];
  const seasonStyle = season.includes("S/S") ? "ss-style" : "fw-style";
  renderSeason(seasonData, "gallery_container", seasonStyle);
}




export function initGallery() {
  const select = document.getElementById("seasonSelect");
  select.value = "25year-25S/S"; 
  handleSeasonChange();
  select.addEventListener("change", handleSeasonChange);
}

