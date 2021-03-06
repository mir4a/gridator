function anglesController($scope) {
  $scope.$watch( function () {
    $scope.setAngle = {
      'transform': 'rotate(' + $scope.angleVal + 'deg)',
      '-ms-transform': 'rotate(' + $scope.angleVal + 'deg)',
      '-webkit-transform': 'rotate(' + $scope.angleVal + 'deg)',
      'background-repeat': $scope.bgRepeat
    }
    console.log($scope.CellSel);
  })
}


function MyCtrl($scope, $log) {
  $scope.row = 3;
  $scope.cell = 12;
  $scope.$watch(function () {
    var rows = $scope.row;
    var row = [];
    for (var i = 0; i < rows; i++) {
      row.push(i + 1);
    }
    $scope.rows = row;
    var cells = $scope.cell;
    var cell = [];
    for (var i = 0; i < cells; i++) {
      cell.push(i + 1);
    }
    $scope.cells = cell;

  });

  $scope.$log = $log;
  $scope.message = $scope;

  $scope.$watch('CellSel', function() {

  });
}
