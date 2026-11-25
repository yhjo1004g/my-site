const headers = ["과목코드", "과목명", "학점", "요일", "시간", "정원", "신청"];

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

function sumCredits(list) {
  let total = 0;

  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }

  return total;
}

function renderTable() {
  let tableHtml = '<table class="course-table">';

  tableHtml += '<caption>개설 과목</caption>';

  tableHtml += "<thead><tr>";

  for (let i = 0; i < headers.length; i++) {
    tableHtml += "<th>" + headers[i] + "</th>";
  }

  tableHtml += "</tr></thead>";

  tableHtml += "<tbody>";

  for (let i = 0; i < codes.length; i++) {
    tableHtml += "<tr>";
    tableHtml += "<td>" + codes[i] + "</td>";
    tableHtml += "<td>" + names[i] + "</td>";
    tableHtml += '<td class="num">' + credits[i] + "</td>";
    tableHtml += "<td>" + days[i] + "</td>";

    if (i % 2 === 0) {
      tableHtml += '<td rowspan="2">' + times[i] + "</td>";
    }

    tableHtml += '<td class="num">' + capacities[i] + "</td>";
    tableHtml += "</tr>";
  }

  tableHtml += "</tbody>";

  tableHtml += "<tfoot><tr>";
  tableHtml += '<th colspan="2">총 학점</th>';
  tableHtml += '<td class="num">' + sumCredits(credits) + "</td>";
  tableHtml += '<td colspan="3"></td>';
  tableHtml += "</tr></tfoot>";

  tableHtml += "</table>";

  document.querySelector("#area").innerHTML = tableHtml;
}

renderTable();
