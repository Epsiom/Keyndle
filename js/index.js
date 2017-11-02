angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller('TestController', ["$document", "$rootScope", "$scope", "$filter", function ($document, $rootScope, $scope, $filter) {


    console.log("oi");
    /*  $scope.changePage = function (evt) {
     alert(evt);
     };*/
    $scope.showModal = false;

    $scope.onclickedd = function (evt) {
      console.log("clic" + evt);
      console.log(JSON.stringify(evt));
      console.dir(evt);
      console.log(getSelectionText());
    };

    function getSelectionText()  {
      var text = "";
      if (window.getSelection) {
        text = window.getSelection().toString();
      } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
      }
      return text;
    };

    $scope.selectedTab = 0;
    var maxTab = 2;

    function next() {
      $scope.selectedTab++;
      if ($scope.selectedTab > maxTab) {
        $scope.selectedTab = maxTab;
      }
      $scope.$apply();
    }

    function previous() {
      var prev = ($scope.selectedTab - 1);
      if (prev < 0) {
        prev = 0;
      }
      $scope.selectedTab = prev;
      $scope.$apply();
    }
    $scope.showModalF = function (e) {
      $scope.showModal = true;
    };
    $document.bind('keyup', function (e) {
      //console.log(e.keyCode);


      // droite
      if (e.keyCode === 39) {
        $scope.showModalF(e);
        next();
      }
      //gauche
      else if (e.keyCode === 37) {
        previous();
      } else {
        console.log('oi');

        console.log(e.keyCode);
      }

    });


    //Ouverture de la fenêtre

  }]);
angular.module('MyApp').controller('modalController', ['$scope', function ($scope) {

}]);
