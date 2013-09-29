function MyCtrl($scope) {

	$scope.row = 3;
	$scope.cell = 12;
	
	$scope.MyStyle = {'border':'1px solid #000','height':'20px'};
	$scope.$watch( 'row', function(){
 	
	var rows = $scope.row;   //СТРОКИ
 	var cells = $scope.cell; //КОЛОНКИ
 	var result = new Object;
 	result.colums = new Object;
 	for(var j=0;j<rows;j++) {
 		var cell =new Object;
 		for(var i=0;i<cells;i++)
		{
			cell['elemnt'+i] = {'cell':1,'check':0,'class1':'not-checked','index':i,'cellhtml':'&nbsp;'};
		}
		result.colums['row'+j] = {'row' :j,'cell':cell};
  		
	}

	$scope.rows = result;
      
    });
    var select = new Object;
    $scope.selectrow = function(cell,row)
    {	
    	
    	 var active = $scope.rows.colums['row'+row].cell['elemnt'+cell];

    	 if(active.check == 0)
    	 {
    	 	active.class1 = 'checked';
    	 	active.check = 1;		// отмечает что ячейка выделена
    	 	$scope.select = 1;
    	 	$scope.editcell = 1;  // показываем элементы добавление html
    	 	$scope.activecell = row+','+cell; // записываем текущую позицию
    	 	$scope.cellcontent = active.cellhtml; // загружаем текст ячейки в редактируемое поле
    	 }else{
    	 	active.class1 = 'not-checked';
    	 	active.check = 0;
    	 }
    	 // первый клик
    	  if (select.row == null) {
    	 	select.row = row;
    	 	select.startcell = cell;
    	 }else {
    	 	if (select.row != row) {
    	 		$scope.colearselect ();
    	 		select.row = row;
    	 		select.startcell = cell;
    	 		active.class1 = 'checked';
    	 		active.check = 1;
    	 		$scope.select = 1;
    	 	};
    	 }

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
    $scope.gethtmlElement = function()
    {
    	var pos = $scope.activecell.split(",");

    	$scope.editcell = 0;
    	var active = $scope.rows.colums['row'+pos[0]].cell['elemnt'+pos[1]];
    	console.log(active);

    	active.cellhtml = $scope.cellcontent;
    }



    $scope.colearselect = function()
    {
    	var rows = $scope.row;   //СТРОКИ
 		var cells = $scope.cell; //КОЛОНКИ
    	for(var j=0;j<rows;j++) {
	 		for(var i=0;i<cells;i++)
			{
				$scope.rows.colums['row'+j].cell['elemnt'+i].check = 0;
				$scope.rows.colums['row'+j].cell['elemnt'+i].class1 = 'not-checked';
			}
		}
    }
    $scope.summElement = function()
    {
    	 var = rows = $scope.rows.length;

    	for(var j=0;j<rows;j++) {
    		var select=0;
    		var mainelement = null;
	 		for(var i=0;i<cells;i++)
	 
			{
				var active = $scope.rows.colums['row'+j].cell['elemnt'+i];
				
				if (active.check == 1 && select > 0) {
					select++;
					$scope.rows.colums['row'+j].cell['elemnt'+mainelement].cell ++;
					delete  $scope.rows.colums['row'+j].cell['elemnt'+i];
				};
				if (active.check == 1 && select ==0) {
					select++;
					//active.cell ++;
					mainelement = i;
				};
			}
		}	
		$scope.editcell = 0;
    }
	 
}

