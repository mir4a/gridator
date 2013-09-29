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
			cell['elemnt'+i] = {'cell':1,'check':0,'class1':'not-checked','index':i};
		}
		result.colums['row'+j] = {'row' :j,'cell':cell};
  		
	}
	console.log(result);
	$scope.rows = result;
	
	$scope.$watch( 'rows', function(){
 	
	
      $scope.MyStyle = {'border':'1px solid #000','height':'20px'};
    });
    var select = new Object;
    $scope.selectrow = function(cell,row)
    {	
    	
    	 var active = $scope.rows.colums['row'+row].cell['elemnt'+cell];
    	 if(active.check == 0)
    	 {
    	 	active.class1 = 'checked';
    	 	active.check = 1;
    	 	$scope.select = 1;
    	 }else{
    	 	active.class1 = 'not-checked';
    	 	active.check = 0;
    	 }
    	  if (select.row == null) {
    	 	select.row = row;
    	 	select.startcell = cell;
    	 }else {
    	 	active.cell++;
    	 	delete $scope.rows.colums['row'+row].cell['elemnt'+cell+1];
    	 }
    	 select[active.$$hashKey]=1;
    	 /*
    	 if (select.row == null) {
    	 	select.row = row;
    	 	select.startcell = cell;
    	 }else {
    	 	if (select.startcell > cell) {
    	 		select.colums = select.colums+( select.startcell-cell);
    	 		select.startcell
    	 	}else {
    	 		select.colums = select.colums+( cell- select.startcell);
    	 	}
    	 }
    	 */
    	 console.log(select);
    	
    }
    $scope.resuldata = function()
    {

    }
	 
}