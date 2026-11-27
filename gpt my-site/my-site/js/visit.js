// 방문 횟수를 localStorage에 저장하고 footer에 보여준다
const visitCount = Number(localStorage.getItem("mySiteVisits")) + 1;
localStorage.setItem("mySiteVisits", visitCount);
document.querySelector("#visit").innerHTML = `방문 ${visitCount}번째`;
