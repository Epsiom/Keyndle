angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller( 'TestController', function($document,$scope) {

console.log("oi");
/*  $scope.changePage = function (evt) {
    alert(evt);
  };*/
    $scope.selectedTab = 0;
    var maxTab=2;
  $document.bind('keyup', function (e) {


    // droite
    if(e.keyCode==39){
      console.log('right' + $scope.selectedTab);
      $scope.selectedTab++;
      if($scope.selectedTab>maxTab){
        $scope.selectedTab=maxTab;
      }
      //alert(e.keyCode+" "+$scope.selectedTab);
      console.log('rightA' + $scope.selectedTab);
      $scope.$apply();

    }

    //gauche
    if(e.keyCode==37){
      console.log('left' +$scope.selectedTab);

      var prev = ($scope.selectedTab - 1);
      if(prev<0){
        prev=0;
      }
      $scope.selectedTab = prev;
      console.log('leftA' +$scope.selectedTab);
      $scope.$apply();

    }
  });
});

