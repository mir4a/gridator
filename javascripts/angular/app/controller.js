function MyCtrl ($scope) {
	$scope.row = 3;
	$scope.cell = 12;
	$scope.$watch( function(){
 	var rows = $scope.row;
 	var row = [];
 	for(var i=0;i<rows;i++) {
  		row.push(i+1);
	}
	$scope.rows = row;
	var cells = $scope.cell;
	var cell = [];
	for(var i=0;i<cells;i++)
	{
		cell.push(i+1);
	}
 	$scope.cells=cell;
    
      $scope.MyStyle = {'border':'1px solid #000','height':'20px'};
    });
    $scope.selectrow = function(e,i)
    {
    	console.log(e);
    	console.log(i);
    }
	 
}