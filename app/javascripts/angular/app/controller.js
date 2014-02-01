function GridatorCtrl($scope) {

    var basicColumn = {
        size: 1,
        content: '&nbsp;'
    },
        basicRow = [basicColumn,basicColumn,basicColumn,basicColumn,basicColumn,basicColumn,basicColumn,basicColumn,basicColumn,basicColumn,basicColumn,basicColumn];

  $scope.gridator = {
      options: {
          columns: 12,
          type: 'fluid',
          vendor: 'bootstrap'
      },
      rows: [
          basicRow,
          basicRow
      ]
  }

}
