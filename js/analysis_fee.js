const userAction = async () => {
  let id = document.getElementById("all_id").value;
  if (!id) {
    $(".result.active .show ul").append("<li>입력된 값이 없습니다.</li>");
  }
  id = id.split("\n");
  var check = false;
  for (var i = 0; i < id.length; i++) {
    // API호출
    const response = await fetch(
      `https://raipen.gabia.io/API/checkDues/?number=${id[i]}`
    );
    // json저장
    const myJson = await response.json();
    // console.log(myJson);
    if (!myJson.dues) {
      check = true;
      const htmlData = "<li>" + id[i] + "</li>";
      $(".result.active .show ul").append(htmlData);
    }
  }
  if (!check) {
    $(".result.active .show ul").append("<li>모두 납부하였습니다.</li>");
  }
};
