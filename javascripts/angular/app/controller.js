function MyCtrl ($scope) {
 
    $scope.$watch( function(){
      $scope.MyStyle = {'width':$scope.bgsd+'px','border':'1px solid #000','height':$scope.bg+'px'};
    });
    
	 
}