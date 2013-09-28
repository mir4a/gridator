function MyCtrl ($scope) {
	$scope.$watch( function(){
 	var rows = $scope.bgsd;
 	var row = [];
 	for(var i=0;i<rows;i++) {
  		row.push(i+1);
	}
	$scope.rows = row;
	var cells = $scope.bg;
	var cell = [];
	for(var i=0;i<cells;i++)
	{
		cell.push(i+1);
	}
 	$scope.cells=cell;
    
      $scope.MyStyle = {'border':'1px solid #000','height':'20px'};
    });
    
	 
}