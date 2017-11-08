angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller('TestController', ["$document", "$rootScope", "$scope", "$filter", function ($document, $rootScope, $scope, $filter) {
    $scope.words1 =[];
    $scope.contentLoad = false;
    console.log("oi");
    /*  $scope.changePage = function (evt) {
     alert(evt);
     };*/
    $scope.showModal = false;



    $scope.splitTabs = function (tabind, parag) {

    };

    String.prototype.replaceAll = function(search, replacement) {
      var target = this;
      return target.replace(new RegExp(search, 'g'), replacement);
    };

    $scope.onclickedd = function (evt,tab,par) {
      console.dir(evt);
      console.log(tab+" "+par)

      //console.log(getSelectionText());
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
       // $scope.showModalF(e);
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


    var text1 = "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim rutrum enim, vel tempor sapien arcu a tellus. Vivamus convallis sodales ante varius gravida. Curabitur a purus vel augue ultrices ultricies id a nisl. Nullam malesuada consequat diam, a facilisis tortor volutpat et. Sed urna dolor, aliquet vitae posuere vulputate, euismod ac lorem. Sed felis risus, pulvinar at interdum quis, vehicula sed odio. Phasellus in enim venenatis, iaculis tortor eu, bibendum ante. Donec ac tellus dictum neque volutpat blandit. Praesent efficitur faucibus risus, ac auctor purus porttitor vitae. Phasellus ornare dui nec orci posuere, nec luctus mauris semper. </p>"+
      "<p>Morbi viverra, ante vel aliquet tincidunt, leo dolor pharetra quam, at semper massa orci nec magna. Donec posuere nec sapien sed laoreet. Etiam cursus nunc in condimentum facilisis. Etiam in tempor tortor. Vivamus faucibus egestas enim, at convallis diam pulvinar vel. Cras ac orci eget nisi maximus cursus. Nunc urna libero, viverra sit amet nisl at, hendrerit tempor turpis. Maecenas facilisis convallis mi vel tempor. Nullam vitae nunc leo. Cras sed nisl consectetur, rhoncus sapien sit amet, tempus sapien.</p>"+
      "<p>Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum tellus. Curabitur posuere molestie dictum. Morbi eget congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat, at posuere mi. Cras eu fermentum nunc. Sed id ante eu orci commodo volutpat non ac est. Praesent ligula diam, congue eu enim scelerisque, finibus commodo lectus.</p>";

    var paragraphs = splitter(text1);

    $scope.tabs = [];

    var tab ={p:paragraphs,
      startp:0,
      ind:0,
      endp:2
    };


    $scope.tabs.push(tab);

    $scope.contentLoad = true;

/*    $scope.rowClass = function (o,e) {
      if(e==0){
        return "firstW"
      }
      return ""
    };*/

    function splitter(text) {
      var txt2 = text.replaceAll("</p>","<br>");
      var txt3 = txt2.replaceAll("<p>","    ");
/*      var parz = txt2.split("<p>");
      var result = [];
      for(var par in parz){
        if(parz[par]!=""){

          var spt = parz[par].split(" ");
          result.push(spt);
        }
      }*/
      return result;
    }

    $scope.nextPageV = function (ind) {

    }

  }]);
angular.module('MyApp').controller('modalController', ['$scope', function ($scope) {

}]);
