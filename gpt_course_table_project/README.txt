새 GPT 수강 과목 표 프로젝트

파일 구성
- gpt.html : 웹페이지 기본 구조
- gpt.css  : 표와 페이지 디자인
- gpt.js   : 과목 배열, sumCredits(), renderTable()

실행 방법
1. 이 폴더를 VS Code에서 엽니다.
2. gpt.html을 엽니다.
3. Live Server 확장 프로그램으로 실행합니다.
4. 브라우저에서 수강 과목 표가 표시되는지 확인합니다.

구현 내용
- 과목 4개 출력
- headers 배열을 반복문으로 표 머리글에 출력
- 같은 시간대의 시간 셀을 rowspan="2"로 병합
- sumCredits(credits)로 총 학점 10 계산
- renderTable()로 표 HTML 생성
- document.querySelector("#area").innerHTML에 표 삽입
