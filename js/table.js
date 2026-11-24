const headers = [
  "과목코드", "과목명", "학점",
  "요일", "시간", "정원"
];
const codes = ["CS101", "CS102", "DB201", "CS103"];
const names = [
  "웹 프로그래밍 기초", "자바 입문",
  "데이터베이스", "알고리즘 기초"
];
const credits = [3, 3, 2, 2];
const days = ["월", "화", "수", "목"];
const times = ["09:00-12:00", "13:00-15:00"];
const capacities = [30, 30, 25, 25];

let tableHtml = '<table class="course-table">';
tableHtml = tableHtml + "<caption>개설 과목</caption>";

tableHtml = tableHtml + "<thead><tr>";
for (let i = 0; i < headers.length; i++) {
  tableHtml = tableHtml + "<th>" + headers[i] + "</th>";
}
tableHtml = tableHtml + "</tr></thead>";

let total = 0;
tableHtml = tableHtml + "<tbody>";
for (let i = 0; i < codes.length; i++) {
  tableHtml = tableHtml + "<tr>";
  tableHtml = tableHtml + "<td>" + codes[i] + "</td>";
  tableHtml = tableHtml + "<td>" + names[i] + "</td>";
  tableHtml = tableHtml + '<td class="num">' + credits[i] + "</td>";
  tableHtml = tableHtml + "<td>" + days[i] + "</td>";

  if (i % 2 === 0) {
    tableHtml = tableHtml + '<td rowspan="2">' + times[i / 2] + "</td>";
  }

  tableHtml = tableHtml + '<td class="num">' + capacities[i] + "</td>";
  tableHtml = tableHtml + "</tr>";
  total = total + credits[i];
}
tableHtml = tableHtml + "</tbody>";

tableHtml = tableHtml + '<tfoot><tr><th colspan="2">총 학점</th>';
tableHtml = tableHtml + '<td class="num">' + total + "</td>";
tableHtml = tableHtml + '<td colspan="3"></td></tr></tfoot>';

tableHtml = tableHtml + "</table>";
document.querySelector("#area").innerHTML = tableHtml;
