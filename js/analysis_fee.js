const userAction = async () => {
  let data = document.getElementById("info").value;
  if (data == "") {
    $(".result.active .show ul").append("<li>입력된 값이 없습니다.</li>");
    return;
  }
  data = data.split("\n");
  for (var i = 0; i < data.length; i++) {
    data[i] = data[i].split("\t");
  }
  let check = false;
  for (var i = 0; i < data.length; i++) {
    // API호출
    const response = await fetch(
      `https://raipen.gabia.io/API/checkDues/?number=${data[i][0]}&name=${data[i][1]}`
    );
    // json저장
    const myJson = await response.json();
    if (!myJson.dues) {
      check = true;
      const htmlData = "<li>" + data[i][0] + " " + data[i][1] + "</li>";
      $(".result.active .show ul").append(htmlData);
    }
  }
  if (!check) {
    $(".result.active .show ul").append("<li>모두 납부하였습니다.</li>");
  }
};
