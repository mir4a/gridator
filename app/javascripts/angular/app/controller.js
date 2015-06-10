function MyCtrl($scope) {

  $scope.bgRepeat = '';
  $scope.row = 3;
  $scope.cell = 12;

//	$scope.MyStyle = {'border':'1px solid #000','height':'20px'};
  $scope.$watch('row', function () {

    var rows = $scope.row;   //СТРОКИ
    var cells = $scope.cell; //КОЛОНКИ
    var result = new Object;
    result.colums = [];
    for (var j = 0; j < rows; j++) {
      var cell = [];
      for (var i = 0; i < cells; i++) {
        cell[i] = {'cell': 1, 'check': 0, 'class1': 'not-checked', 'index': parseInt(i), 'cellhtml': ' '};
      }
      result.colums[j] = {'row': parseInt(j), 'cell': cell};

    }

    $scope.rows = result;

  });

  function Selectcell() {
    this.xXx = [];
    this.posX = null;
    this.posY = null;
    this.row = null;
  }

  Selectcell.prototype.newRow = function (curRow) {
    if (curRow != this.row) {
      // console.warn('New row!!!');
    } else {
      // console.warn('The same row!!!');
    }
    this.row = curRow;
  }

  Selectcell.prototype.xPos = function () {
    var arrayLength = this.xXx.length;
    if (arrayLength > 1) {
      var arraySorted = this.xXx.sort();
      var xMin = arraySorted[0];
      var xMax = arraySorted[arrayLength - 1];
      var xDiff = xMax - xMin;
      this.posX = Math.ceil(xMin + xDiff/2);
      // console.log(this.xXx);
      // console.log(" position for button =  "+this.posX);
    } else {
      var firstEl = this.xXx[0];
      this.posX = firstEl;
      // console.log('only one el in array ' + this.xXx);
      // console.log(' position for button when only one = ' + this.posX);
    }
    return this.posX;
  }

  Selectcell.prototype.yPos = function (y,yInner,gap) {
    return this.posY = y - yInner - gap;
  }

  var select = new Selectcell();

  $scope.selectrow = function (cell, row, $event) {
    // console.dir($scope);
    var _x = $event.x;
    var _y = $event.y;
    var _layerY = $event.layerY;
    select.yPos(_y,_layerY,15);
//    // console.info(select);
    alert('Cell = ' + cell + '; row = ' + row);
    var active = $scope.rows.colums[row].cell[cell];
    // console.warn(active);

    if (active.check == 0) {
      active.class1 = 'checked';
      active.check = 1;		// отмечает что ячейка выделена
      $scope.select = 1;
      $scope.editcell = 1;  // показываем элементы добавление html
      $scope.activecell = [row,cell]; // записываем текущую позицию
      $scope.cellcontent = active.cellhtml; // загружаем текст ячейки в редактируемое поле
    } else {
      active.class1 = 'not-checked';
      active.check = 0;
    }
    // первый клик
    if (select.row == null) {
      select.xXx = [_x];
//      // console.log('this row = ' + row);
    } else if (select.row != row) {
      select.xXx = [_x];
//      // console.log('new row = ' + row);
      $scope.colearselect();
      active.class1 = 'checked';
      active.check = 1;
      $scope.select = 1;
    } else {
      select.xXx.push(_x);
    }
    select.row = row;
    select.startcell = cell;
    select.xPos();

    //<editor-fold desc="future feature">
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
    //</editor-fold>

    // console.log(active);

    // console.warn('top' + select.posY + 'px, left' + select.posX + 'px');
    $scope.EditorPosition = {'top': select.posY + 'px', 'left': select.posX + 'px'};
  }


  $scope.gethtmlElement = function () {
    var pos = $scope.activecell;

    $scope.editcell = 0;
    var active = $scope.rows.colums[pos[0]].cell[pos[1]];
    // console.log(active);

    active.cellhtml = $scope.cellcontent;
  }


  $scope.colearselect = function () {
    for (j in $scope.rows.colums) {
      for (i in $scope.rows.colums[j].cell) {
        $scope.rows.colums[j].cell[i].check = 0;
        $scope.rows.colums[j].cell[i].class1 = 'not-checked'
      }
    }

    //<editor-fold desc="Future feature">
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
    //</editor-fold>

  }
  $scope.summElement = function () {

    //<editor-fold desc="Future feature">
    /*
     var rows = Object.keys( $scope.rows.colums).length;
     // console.log(rows);

     for(var j=0;j<rows;j++) {
     var select=0;
     var mainelement = null;
     var cells = Object.keys($scope.rows.colums['row'+j].cell).length;
     for(var i=0;i<cells;i++)
     {
     var active = $scope.rows.colums['row'+j].cell['elemnt'+i];
     // console.log(active);
     // console.log(j+' cell '+i);
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
    //</editor-fold>
    console.dir($scope.rows.colums);
    for (j in $scope.rows.colums) {
      var selected = 0;
      var mainelement = null;
      var wat = $scope.rows.colums[j];
      var watCell = wat.cell;
      var watCellLen = watCell.length;

      console.log('wat?????============ length=' + watCellLen);
      console.dir(watCell[0].cell);
      console.log('end!!!!!!!wat?????============ + watCell = ' + watCell);

      for (var i= 0; i <  watCellLen; i++) {

        var active = watCell[i];
        console.error(active);
        if (active.check == 1 && selected > 0) {
          selected++;
          var cellSize = watCell[mainelement].cell;
          var cellContent = watCell[mainelement].cellhtml;
          watCell[mainelement].cell = cellSize + active.cell;
          console.log('watCell[mainelement].cellhtml = ' + watCell[mainelement].cellhtml);
          watCell[mainelement].cellhtml = cellContent + active.cellhtml;
          console.log('watCell[mainelement].cellhtml = ' + watCell[mainelement].cellhtml);
          console.log('\'ffffffffffffffff!!!!!!!!!!!!!!\'');
          console.dir(wat.cell[i]);
          console.log('end!!!!!!!!\'ffffffffffffffff!!!!!!!!!!!!!!\'');
          console.log('index bro, gimme f*king index!!!! ' + i);
          watCell.splice(i,1);
        }
        if (active.check == 1 && selected == 0) {
          selected++;
          //active.cell ++;
          mainelement = i;
        }
      }
    console.log('cell____+=++_!@__#!_@$_#@_%_$+^');
    console.dir(watCell);
    console.log('end!!!!!!!!cell____+=++_!@__#!_@$_#@_%_$+^');
    }

    $scope.editcell = 0;
    $scope.colearselect();
  }

  $scope.generateHTML = function () {
    var gridatorBg = $('.gridator').css('background');
    var gridatorTransform = $('.gridator').css('transform');
    var gridatorTransformWebkit = $('.gridator').css('-webkit-transform');
    var result = '';
    result += '<div class="html_wrap" style="background: ' + gridatorBg + ';transform: ' + gridatorTransform + ';-webkit-transform: ' + gridatorTransformWebkit + '">\n';
    for (j in $scope.rows.colums) {
      result += '  <div class="row">\n';
      for (i in $scope.rows.colums[j].cell) {

        var active = $scope.rows.colums[j].cell[i];
        result += '    <div class="columns large-' + (active.cell) + '">' + active.cellhtml + '</div>\n';
      }
      result += '  </div>\n';
    }
    result += '</div>\n';
    $scope.reshtml = result;
    // console.dir($scope);
  }

  $scope.selectHtml = function($event) {
    $event.target.focus();
    $event.target.select();
  }

  $scope.$watch(function () {
    $scope.setAngle = {

    }
  });

}
