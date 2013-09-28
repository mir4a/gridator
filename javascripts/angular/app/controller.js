function anglesController($scope) {
  $scope.$watch('angleVal', function () {
  console.log($scope.angleVal);
    $scope.setAngle = {
      'transform': 'rotate(' + $scope.angleVal + 'deg)',
      '-ms-transform': 'rotate(' + $scope.angleVal + 'deg)',
      '-webkit-transform': 'rotate(' + $scope.angleVal + 'deg)'
    }
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

    $scope.MyStyle = {'border': '1px solid #000', 'height': '20px'};
  });

  $scope.$log = $log;
  $scope.message = $scope;
}

function CellSel($scope) {
  console.log('aaa');
}
