async function userAction() {
  // 이름과 학번 들고오기
  const Name = document.getElementById("name").value;
  const id = document.getElementById("id").value;
  //validation
  if (/^[가-힣| ]+$/.test(Name) === false || /^[0-9]{10}$/.test(id) === false) {
    const img = document.getElementById("result_img");
    img.setAttribute("src", "./images/developer1.png");
    const htmlData =
      "<ul>" +
      "<li>" +
      "이름과 학번을 <br> 정확하게 입력해주세요!" +
      "</li>" +
      "</ul>";
    $(".result.active .show").append(htmlData);
    return;
  }
  // API호출
  const response = await fetch(
    `https://locker.raipen.com/api/v2/student/checkDues/?number=${id}&name=${Name}`
  );
  // json저장
  const myJson = await response.json();
  if(myJson.isStudent === false){
    const img = document.getElementById("result_img");
    img.setAttribute("src", "./images/developer1.png");
    const htmlData =
      "<ul>" +
      "<li>" +
      "일치하는 학생이 없습니다." +
      "</li>" +
      "<li>" +
      "재정부장에게 문의하세요." +
      "</li>" +
      "</ul>";
    $(".result.active .show").append(htmlData);
    return;
  }
  if (myJson.dues && myJson.isStudent) {
    const img = document.getElementById("result_img");
    img.setAttribute("src", "./images/developer2.png");
    const htmlData =
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
    return;
  }
  const img = document.getElementById("result_img");
  img.setAttribute("src", "./images/developer3.png");
  const htmlData =
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
};
