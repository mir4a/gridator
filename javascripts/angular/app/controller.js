function MyCtrl ($scope) {
    $scope.bg = '';
    $scope.$watch('bgsd', function(){
      $scope.MyStyle = {'width':$scope.bgsd+'px','border':'1px solid #000','height':'20px'};
    });
    
	 
}