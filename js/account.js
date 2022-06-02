window.onload = function accountBook() {
  google.charts.load("current", { packages: ["corechart"] }).then(function () {
    const query = new google.visualization.Query(
      "http://spreadsheets.google.com/tq?key=1Pm331YyP9HLklx7Rod2fjC4cJemYe6uhd3qhjRUMYAA&pub=1"
    );
    query.send(function (response) {
      const dataTable = response.getDataTable();
      let jsonData = dataTable.toJSON();
      jsonData = JSON.parse(jsonData);
      const htmlData =
        "<tr>" +
        "<th>" +
        jsonData.cols[1].label +
        "</th >" +
        "<th>" +
        jsonData.cols[2].label +
        "</th >" +
        "</tr>";
      $(".result .show table thead").empty();
      $(".result .show table thead").append(htmlData);
      $(".result .show table tbody").empty();
      for (var i = 0; i < jsonData.rows.length - 1; i++) {
        // console.log(jsonData.rows[i].c[1], jsonData.rows[i].c[2].f);
        var temp = jsonData.rows[i].c[1].v;
        temp = temp.replace(/\n/g, "<br/>");
        // console.log(temp);
        let htmlData = "";
        htmlData += "<tr>";
        htmlData += "<td>" + temp + "</td>";
        htmlData +=
          "<td>" +
          jsonData.rows[i].c[jsonData.rows[i].c.length - 1].f +
          "</td>";
        htmlData += "</tr>";
        $(".result .show table tbody").append(htmlData);
      }
      // total 넣기
      let t =
        "<tr>" +
        "<td>" +
        jsonData.rows[jsonData.rows.length - 1].c[0].v +
        "</td>" +
        "<td>" +
        jsonData.rows[jsonData.rows.length - 1].c[2].f +
        "</td>" +
        "</tr>";
      $(".result .show table tbody").append(t);
    });
  });
};
