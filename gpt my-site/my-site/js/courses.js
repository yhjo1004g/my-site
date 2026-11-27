// 머리글 7개 (과목 정보 6칸 + 신청)
const headers = ["과목코드", "과목명", "학점", "요일", "시간", "정원", "신청"];

// 과목 객체 배열
const courses = [
  { code: "CS101", title: "웹 프로그래밍 기초", credit: 3, day: "월", time: "09:00-12:00", capacity: 30 },
  { code: "CS102", title: "자바 입문",         credit: 3, day: "화", time: "09:00-12:00", capacity: 30 },
  { code: "DB201", title: "데이터베이스",       credit: 2, day: "수", time: "13:00-15:00", capacity: 25 },
  { code: "CS103", title: "알고리즘 기초",      credit: 2, day: "목", time: "13:00-15:00", capacity: 25 },
];

// 합계: reduce 한 줄
const sumCredits = (list) => list.reduce((total, c) => total + c.credit, 0);

// 칸 하나를 돌려주는 화살표 함수
const cell = (text) => `<td>${text}</td>`;
const numCell = (text) => `<td class="num">${text}</td>`;

// 머리글 줄
const renderHead = () =>
  `<thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>`;

// 한 줄 (구조분해 + 방 번호 i)
const renderRow = ({ code, title, credit, day, time, capacity }, i) => {
  let rowHtml = `<tr>${cell(code)}${cell(title)}${numCell(credit)}${cell(day)}`;
  if (i % 2 === 0) {
    rowHtml = rowHtml + `<td rowspan="2">${time}</td>`;
  }
  rowHtml = rowHtml + numCell(capacity);
  rowHtml = rowHtml + `<td><a class="apply" href="https://httpbin.org/get?course=${code}">신청</a></td>`;
  return rowHtml + "</tr>";
};

// 표 전체를 만들어 #area에 넣는다 (tableHtml은 이 함수 안에만 있다)
const renderTable = () => {
  let tableHtml = '<table class="course-table">';
  tableHtml = tableHtml + "<caption>개설 과목</caption>";
  tableHtml = tableHtml + renderHead();
  tableHtml = tableHtml + `<tbody>${courses.map(renderRow).join("")}</tbody>`;
  tableHtml = tableHtml +
    `<tfoot><tr><th colspan="2">총 학점</th><td class="num">${sumCredits(courses)}</td><td colspan="4"></td></tr></tfoot>`;
  tableHtml = tableHtml + "</table>";
  document.querySelector("#area").innerHTML = tableHtml;
};

renderTable();
