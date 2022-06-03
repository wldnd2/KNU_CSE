async function userAction() {
  // 이름과 학번 들고오기
  const Name = document.getElementById("name").value;
  const id = document.getElementById("id").value;
  // API호출
  const response = await fetch(
    `https://raipen.gabia.io/API/checkDues/?number=${id}&name=${Name}`
  );
  // json저장
  const myJson = await response.json();
  // console.log(myJson.isStudent);
  // console.log(myJson);
  // 이름과 학번중 비어있는 경우
  if (Name == "" || id == "" || !myJson.isStudent) {
    const img = document.getElementById("result_img");
    img.setAttribute("src", "./images/developer1.png");
    const htmlData =
      "<ul>" +
      "<li>" +
      "이름과 학번을 <br> 정확하게 입력해주세요!" +
      "</li>" +
      "</ul>";
    $(".result.active .show").append(htmlData);
    return false;
  }
  if (myJson.dues && myJson.isStudent) {
    const img = document.getElementById("result_img");
    img.setAttribute("src", "./images/developer2.png");
    let htmlData =
      "<ul>" +
      "<li> 학번: " +
      id +
      "</li>" +
      "<li> 이름: " +
      Name +
      "</li>" +
      "<li>" +
      "학생회비 납부자입니다." +
      "</li>" +
      "</ul>";
    $(".result.active .show").append(htmlData);
  } else {
    const img = document.getElementById("result_img");
    img.setAttribute("src", "./images/developer3.png");
    let htmlData =
      "<ul>" +
      "<li> 학번: " +
      id +
      "</li>" +
      "<li> 이름: " +
      Name +
      "</li>" +
      "<li>" +
      "학생회비 미납부자입니다." +
      "</li>" +
      "</ul>";
    $(".result.active .show").append(htmlData);
  }
};
