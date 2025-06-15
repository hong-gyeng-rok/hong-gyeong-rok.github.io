/*
preloader 기능 구현하기
1. 이미지 랜더링 후 페이지 시작
2. 이미지 랜더링 도중엔 로딩화면 보여주기
    2-1. 로딩페이지의 경우 단일 html 파일에서 div 또는, section으로 분리해서 표현하기
        2-1-1. 단계별 동작 예상
                1. loding.style = opacity: 1; //초기값
                2. main.style = opacity: 0; //초기
                3. 이미지 랜더링 중 => 랜더링 완료
                4. loding.style.opacity = 0;
                5. maon.style.opacity = 1;
                    *display가 아닌 opacity로 조절해야하는 이유 기존 css 스타일인 flex와 충돌 발생 우려
3. 이미지 랜더링 방식
    3-1. 첫 이미지 3개 먼저 랜더링 후 페이지 시작
        3-1-1. 이미지가 많아질 경우 전체 이미지 랜더링 후 main 페이지 시작 시 초기 로딩 시간이 길어질 가능성 존재.
    3-2. 이후 이미지는 순차적으로 랜더링
4. 예외처리
    4-1. 이미지 1개라도 랜더링 불가할 경우 onerror 처리 후 페이지 실행
5. fade 효과 추가해 페이지 부드럽게 전환하기
*/
// 0. 초기 값 loding.style.opacity = 1;, main.style.oacity = 0;
// 1. 이미지 array length 추출
// 2. onload 기능 이용해서 미리 이미지 로드
// 3. 로드될 때마다 카운트 추가 최종적으로 카운트 값과 length값 비교 후 같을 경우 이후 코드 실행
// 4. 조건문과 if 함수 이용해서 array 내 이미지 랜더링 다 되었는지 확인
// 5. loading 스타일 변경, main 스타일 변경 (opacity 값 조정)
//      5-1. 최종값 loding.style.opacity = 0, main.style.oacity = 1;
loader.style.opacity = 1;
main.style.opacity = 0;

export function preloadImage(urls, indexRef, totalToLoad, loader, main) {
  urls.forEach((url) => {
    const img = new Image();
    img.onload = () => handleLoad(indexRef, totalToLoad, loader, main);
    img.onerror = () => handleLoad(indexRef, totalToLoad, loader, main);
    img.src = url;
  });
}


export function handleLoad(indexRef, totalToLoad, loader, main){
    const count = indexRef.count++;
    if(count === totalToLoad){
        loader.style.opacity = 0;
        main.style.opacity = 1;
    }
}