function MyCtrl ($scope) {

	$scope.row = 3;
	$scope.cell = 12;
	var rows = $scope.row;   //СТРОКИ
 	var cells = $scope.cell; //КОЛОНКИ
 	var result = new Object;
 	result.colums = new Object;
 	for(var j=0;j<rows;j++) {
 		var cell =new Object;
 		for(var i=0;i<cells;i++)
		{
			cell['elemnt'+i] = {'cell':1};
		}
		result.colums['row'+j] = {'row' :j,'cell':cell};
  		
	}
	console.log(result);
	$scope.rows = result;
	
	$scope.$watch( function(){
 	
	
      $scope.MyStyle = {'border':'1px solid #000','height':'20px'};
    });
    var select = {cell:null,row:null};
    $scope.selectrow = function($index,row)
    {	
    	console.log($index);
    	console.log(row);
    }
	 
}