//function anglesController($scope) {
//  $scope.$watch( function () {
//
//    console.log($scope.CellSel);
//  })
//}

//function bgPosCtrl($scope) {
//  $scope.$watch(  function () {
//    $scope.bgRepeat= {
//      'background-repeat': $scope.bgRepeat
//    }
//    console.log($scope.CellSel);
//  })
//}

function MyCtrl($scope) {

	$scope.bgRepeat = '';
	$scope.row = 3;
	$scope.cell = 12;
	
//	$scope.MyStyle = {'border':'1px solid #000','height':'20px'};
	$scope.$watch( 'row', function(){
 	
	var rows = $scope.row;   //СТРОКИ
 	var cells = $scope.cell; //КОЛОНКИ
 	var result = new Object;
 	result.colums = new Object;
 	for(var j=0;j<rows;j++) {
 		var cell =new Object;
 		for(var i=0;i<cells;i++)
		{
			cell['elemnt'+i] = {'cell':1,'check':0,'class1':'not-checked','index':parseInt(i),'cellhtml':'&nbsp;'};
		}
		result.colums['row'+j] = {'row' :parseInt(j),'cell':cell};
  		
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
    	 console.log(active);
    	
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
        for (j in $scope.rows.colums)
        {

            for(i in $scope.rows.colums[j].cell)
            {
                
                $scope.rows.colums[j].cell[i].check = 0;
                $scope.rows.colums[j].cell[i].class1 = 'not-checked'
            }
        }
        /*
    	var rows = $scope.row;   //СТРОКИ
 		var cells = $scope.cell; //КОЛОНКИ
    	for(var j=0;j<rows;j++) {
	 		for(var i=0;i<cells;i++)
			{
				$scope.rows.colums['row'+j].cell['elemnt'+i].check = 0;
				$scope.rows.colums['row'+j].cell['elemnt'+i].class1 = 'not-checked';
			}
		}
        */
    }
    $scope.summElement = function()
    {
        /*
    	 var rows = Object.keys( $scope.rows.colums).length;
         console.log(rows);
         
    	for(var j=0;j<rows;j++) {
    		var select=0;
    		var mainelement = null;
            var cells = Object.keys($scope.rows.colums['row'+j].cell).length;
	 		for(var i=0;i<cells;i++)
			{
				var active = $scope.rows.colums['row'+j].cell['elemnt'+i];
				console.log(active);
                console.log(j+' cell '+i);
				if (active.check == 1 && select > 0) {
					select++;
					$scope.rows.colums['row'+j].cell['elemnt'+mainelement].cell = $scope.rows.colums['row'+j].cell['elemnt'+mainelement].cell+ active.cell;
					delete  $scope.rows.colums['row'+j].cell['elemnt'+i];
				};
				if (active.check == 1 && select ==0) {
					select++;
					//active.cell ++;
					mainelement = i;
				};
			}
		}	
        */
        for (j in $scope.rows.colums)
        {
            var select=0;
                var mainelement = null;
            for(i in $scope.rows.colums[j].cell)
            {
                
                var active = $scope.rows.colums[j].cell[i];
                if (active.check == 1 && select > 0) {
                    select++;
                    $scope.rows.colums[j].cell[mainelement].cell = $scope.rows.colums[j].cell[mainelement].cell+ active.cell;
                    $scope.rows.colums[j].cell[mainelement].cellhtml = $scope.rows.colums[j].cell[mainelement].cellhtml+ active.cellhtml;
                    delete  $scope.rows.colums[j].cell[i];
                    console.log($scope.rows.colums[j].cell[i]);
                };
                if (active.check == 1 && select ==0) {
                    select++;
                    //active.cell ++;
                    mainelement = i;
                };
            }
        }
		$scope.editcell = 0;
        $scope.colearselect ();
    }

    $scope.generateHTML = function()
    {
      var gridatorBg = $('.gridator').css('background');
        var result = '';
        for (j in $scope.rows.colums)
        {
          result += '<div class="row" style="background: '+gridatorBg+';">';
            for(i in $scope.rows.colums[j].cell)
            {
                
                var active =  $scope.rows.colums[j].cell[i];
                result += '<div class="columns large-'+(active.cell)+'">'+active.cellhtml+'</div>';
            }
          result += '</div>';
        }
        $scope.reshtml = result;
    }

  $scope.$watch( function(){
    $scope.setAngle = {

    }
  });
	 
}

