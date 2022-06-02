function checking() {
  google.charts.load("current", { packages: ["corechart"] }).then(function () {
    const query = new google.visualization.Query(
      "http://spreadsheets.google.com/tq?key=${ID넣는곳}&pub=1"
    );
    query.send(function (response) {
      const dataTable = response.getDataTable();
      let jsonData = dataTable.toJSON();
      jsonData = JSON.parse(jsonData);
      console.log(jsonData);
    });
  });
}
