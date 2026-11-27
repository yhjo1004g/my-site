// 배우고 싶은 기술 목록을 배열 + map으로 그린다
const skills = ["JavaScript", "React", "Java", "Spring Boot", "Oracle"];

document.querySelector("#skills").innerHTML =
  skills.map((skill) => `<li>${skill}</li>`).join("");
