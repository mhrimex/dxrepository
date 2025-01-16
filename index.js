$(function() {
    const dataSource = [
      { id: 1, name: "John Doe", age: 29 },
      { id: 2, name: "Jane Smith", age: 34 },
      { id: 3, name: "Sam Johnson", age: 45 }
    ];
  
    $("#gridContainer").dxDataGrid({
      dataSource: dataSource,
      columns: [
        { dataField: "id", caption: "ID", width: 50 },
        { dataField: "name", caption: "Name" },
        { dataField: "age", caption: "Age", width: 50 }
      ],
      showBorders: true
    });
  });
  $(document).ready(function () {
    $('#gridContainer').dxDataGrid({
      dataSource: 'data.json',
      columns: ['CompanyName', 'City', 'State', 'Phone', 'Fax'],
      showBorders: true,
    });
  });
  