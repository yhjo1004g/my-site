// js/courses.js

// 1. 과목 데이터
const headers = ["과목코드", "과목명", "학점", "요일", "시간", "정원"];

const codes = ["CS101", "CS102", "DB201", "CS103"];
const names = [
  "웹 프로그래밍 기초",
  "자바 입문",
  "데이터베이스",
  "알고리즘 기초"
];
const credits = [3,  3, 2, 2];
const days = ["월", "화", "수", "목"];
const times = [
  "09:00-12:00",
  "09:00-12:00",
  "13:00-15:00",
  "13:00-15:00"
];
const capacities = [30, 30, 25, 25];

// 2. 배열의 학점 합계를 계산하는 함수
function sumCredits(list) {
  let total = 0;

  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }

  return total;
}

// 3. 수강 과목 표를 만드는 함수
function renderTable() {
  let tableHtml = '<table class="course-table">';

  // 표 제목
  tableHtml += '<caption>개설 과목</caption>';

  // 머리글 만들기
  tableHtml += "<thead><tr>";

  for (let i = 0; i < headers.length; i++) {
    tableHtml += "<th>" + headers[i] + "</th>";
  }

  tableHtml += "</tr></thead>";

  // 과목 데이터 만들기
  tableHtml += "<tbody>";

  for (let i = 0; i < codes.length; i++) {
    tableHtml += "<tr>";
    tableHtml += "<td>" + codes[i] + "</td>";
    tableHtml += "<td>" + names[i] + "</td>";
    tableHtml += '<td class="num">' + credits[i] + "</td>";
    tableHtml += "<td>" + days[i] + "</td>";

    // 같은 시간대의 두 과목은 시간 셀을 세로로 병합한다.
    // i가 0 또는 2일 때만 rowspan을 출력한다.
    if (i % 2 === 0) {
      tableHtml += '<td rowspan="2">' + times[i] + "</td>";
    }

    tableHtml += '<td class="num">' + capacities[i] + "</td>";
    tableHtml += "</tr>";
  }

  tableHtml += "</tbody>";

  // 총 학점 행
  tableHtml += "<tfoot><tr>";
  tableHtml += '<th colspan="2">총 학점</th>';
  tableHtml += '<td class="num">' + sumCredits(credits) + "</td>";
  tableHtml += '<td colspan="3"></td>';
  tableHtml += "</tr></tfoot>";

  tableHtml += "</table>";

  // 완성한 표를 #area 안에 넣는다.
  document.querySelector("#area").innerHTML = tableHtml;
}

// 4. 페이지가 준비되면 표를 화면에 출력한다.
renderTable();
