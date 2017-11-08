angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller('TestController', ["$document", "$rootScope", "$scope", "$filter", function ($document, $rootScope, $scope, $filter) {
    $scope.words1 =[];
    $scope.contentLoad = false;
    console.log("oi");
    /*  $scope.changePage = function (evt) {
     alert(evt);
     };*/
    $scope.showModal = false;

    $scope.selectedLine = 0;
    $scope.selectedWord = 0;

    $scope.splitTabs = function (tabind, parag) {

    };

    String.prototype.replaceAll = function(search, replacement) {
      var target = this;
      return target.replace(new RegExp(search, 'g'), replacement);
    };

    $scope.onclickedd = function (evt,tab,par,word) {
      console.dir(evt);
      console.log(tab+" "+par+" "+word)
      var word = $scope.tabs[tab][par][word];
      console.log(word);
      alert("Définition du mot " + word);
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
    var maxTab = 5;

    $scope.next = function next(app) {
      $scope.selectedTab++;

      if ($scope.selectedTab >= maxTab) {
        $scope.selectedTab--;
        $scope.selectedLine--;

      } else {
        $scope.selectedLine=0;
      }
      if(app)
      $scope.$apply();
    };


    $scope.previous = function previous(app) {

      var prev = ($scope.selectedTab - 1);

      if (prev < 0) {
        prev = 0;
      }
      $scope.selectedTab = prev;
      var size = $scope.tabs[$scope.selectedTab].length-1;
      var size2 = $scope.tabs[$scope.selectedTab][$scope.selectedLine].length-1;

      $scope.selectedLine = size;
      $scope.selectedWord = size2;
      if(app)
      $scope.$apply();
    };

    $scope.showModalF = function (e) {
      $scope.showModal = true;
    };

    $scope.dumb = function (e) {
      e.preventDefault();
    };

    $document.bind('keyup', function (e) {
      //console.log(e.keyCode);
      // droite
      if (e.keyCode === 34) {
       // $scope.showModalF(e);
        $scope.next(e.keyCode);
      }      else if (e.keyCode === 13) {
        $scope.onclickedd(1,$scope.selectedTab,$scope.selectedLine,$scope.selectedWord);
      }
      //gauche
      else if (e.keyCode === 33) {
        $scope.previous(e.keyCode);
      } else if(e.keyCode === 40){

        console.log("down");
        $scope.nextLine();

      }else if(e.keyCode === 38){
        console.log("up");
        $scope.prevLine();

      }else if (e.keyCode === 37) {
        console.log("prevW");
        $scope.previousWord();
      } else if(e.keyCode === 39){
        console.log("nextW");
        $scope.nextWord();
      }
      else {
        console.log('oi');
        console.log(e.keyCode);
      }

    });

    $scope.previousWord = function () {

      if($scope.selectedWord==0){
        $scope.prevLine();

      } else{
        $scope.selectedWord--;
        $scope.$apply();
      }
    };

    $scope.nextWord = function () {
      var size = $scope.tabs[$scope.selectedTab][$scope.selectedLine].length-1;


      if($scope.selectedWord==size){
        $scope.nextLine();
        $scope.selectedWord=0;
      } else{
        $scope.selectedWord++;
        $scope.$apply();
      }
    };


    $scope.classWord = function (line,ind) {
      if(line==$scope.selectedLine&&ind==$scope.selectedWord){
        //console.log("classW" +line+ind);

        return "classWord";
      }
      return "";
    };

    $scope.classLine = function (e,h) {

      if(e==$scope.selectedLine){
        return "firstW"
      }
      return ""
    };

    $scope.nextLine = function () {
      $scope.selectedLine++;
      var size = $scope.tabs[$scope.selectedTab].length;
      $scope.selectedWord=0;
      if($scope.selectedLine>=size){
        $scope.next(1);
      }else{
        $scope.$apply();
      }
    };
    $scope.prevLine = function () {
      $scope.selectedLine--;
      if($scope.selectedLine<0){
        if($scope.selectedTab>0){
          $scope.previous(1);
        }
        else {
          $scope.selectedLine=0;
          $scope.selectedWord=0;
          $scope.$apply;
        }
      }
      else{
        var size2 = $scope.tabs[$scope.selectedTab][$scope.selectedLine].length-1;
        $scope.selectedWord = size2;
        $scope.$apply();

      }
    };

    var text1 =" Rincevent mit un genou à terre, la meilleure position pour prendre l’image, et appuya sur le levier enchanté."+"<br>"+
"« Te fatigue pas. J’suis à court de rose », fit la boîte."+"<br>"+
"      Une porte que le mage n’avait pas remarquée jusque-là s’ouvrit sous son nez. Une petite silhouette humanoïde verte et affreusement verruqueuse se pencha au-dehors, désigna la palette encroûtée de couleurs que tenait sa main griffue et se mit à brailler. « Pas de rose ! Tu vois ? s’époumona l’homoncule. Ça sert à rien de t’exciter sur le levier si y a plus de rose, hein ? Si tu voulais du rose, fallait pas prendre toutes ces images de jeunes dames, tu comprends ? À partir de maintenant, c’est du monochrome, l’ami. Vu ?"+"<br>"+
"— D’accord. Ouais, bien sûr », répondit Rincevent. Dans un coin sombre de la petite boîte, il crut reconnaître un chevalet et un tout petit lit défait. Il espéra avoir fait erreur."+"<br>"+
"« Bon, du moment que t’as compris », dit le diablotin qui referma la porte. Rincevent crut entendre, étouffés, des grommellements et le raclement d’un tabouret qu’on traînait sur le plancher."+"<br>"+
"      La Mort, pour autant qu’un visage dépourvu de traits en soit capable, parut surpris."+"<br>"+
"« RINCEVENT ? dit-il d’une voix aussi grave et pesante que le claquement de portes de plomb, loin sous terre."+"<br>"+
"— Euh… fit le mage en tâchant d’échapper à ce regard fixe sans yeux."+"<br>"+
"— MAIS QU’EST-CE QUE TU FICHES ICI ? (Boum, boum, firent les dalles de cryptes dans des places-fortes vermoulues sous des montagnes ancestrales…)"+"<br>"+
"    — Euh, pourquoi pas ? Bon, je suis sûr que vous avez des tas de choses à faire, alors si vous voulez b…"+"<br>"+
"    — J’AI ÉTÉ SURPRIS QUAND TU M’AS BOUSCULE, RINCEVENT, PARCE QUE J’AI RENDEZ-VOUS AVEC TOI CE SOIR MÊME."+"<br>"+
"— Oh, non, pas…";
    var text2=
"    — ÉVIDEMMENT, LE PLUS FRUSTRANT DANS CETTE HISTOIRE, C’EST QUE JE M’ATTENDAIS À TE RETROUVER À PSEUDOPOLIS."+"<br>"+
"— Mais c’est à huit cents kilomètres d’ici !"+"<br>"+
"— PAS BESOIN DE ME LE RAPPELER, TOUT LE SYSTÈME EST ENCORE EN TRAIN DE SE DÉGLINGUER, JE LE VOIS BIEN. ÉCOUTE, TU NE POURRAIS PAS, DES FOIS… ? »"+"<br>"+
"Rincevent recula, les mains tendues devant lui pour se protéger. Le marchand de poisson séché d’un étal voisin observa ce cinglé avec intérêt."+"<br>"+
"« Pas question !"+"<br>"+
"— JE POURRAIS TE PRÊTER UN CHEVAL TRÈS RAPIDE."+"<br>"+
"— Non !"+"<br>"+
"— ÇA NE TE FERA PAS MAL DU TOUT."+"<br>"+
"— Non ! » Rincevent pivota et prit ses jambes à son cou. La Mort le regarda partir et haussa les épaules avec amertume."+"<br>"+
"« VA TE FAIRE FOUTRE, ALORS », lâcha-t-il.";

    var text3 = "Longtemps, je me suis couché de bonne heure. Parfois, à peine ma bougie éteinte, mes yeux se fermaient si vite que je n’avais pas le temps de me dire : « Je m’endors. » Et, une demi-heure après, la pensée qu’il était temps de chercher le sommeil m’éveillait ; je voulais poser le volume que je croyais avoir encore dans les mains et souffler ma lumière ; je n’avais pas cessé en dormant de faire des réflexions sur ce que je venais de lire, mais ces réflexions avaient pris un tour un peu particulier ; il me semblait que j’étais moi-même ce dont parlait l’ouvrage : une église, un quatuor, la rivalité de François Ier et de Charles-Quint. Cette croyance survivait pendant quelques secondes à mon réveil ; elle ne choquait pas ma raison, mais pesait comme des écailles sur mes yeux et les empêchait de se rendre compte que le bougeoir n’était pas allumé. Puis elle commençait à me devenir inintelligible, comme après la métempsycose les pensées d’une existence antérieure ; le sujet du livre se détachait de moi, j’étais libre de m’y appliquer ou non ; aussitôt je recouvrais la vue et j’étais bien étonné de trouver autour de moi une obscurité, douce et reposante pour mes yeux, mais peut-être plus encore pour mon esprit, à qui elle apparaissait comme une chose sans cause, incompréhensible, comme une chose vraiment obscure. Je me demandais quelle heure il pouvait être ; j’entendais le sifflement des trains qui, plus ou moins éloigné, comme le chant d’un oiseau dans une forêt, relevant les distances, me décrivait l’étendue de la campagne déserte où le voyageur se hâte vers la station prochaine ; et le petit chemin qu’il suit va être gravé dans son souvenir par l’excitation qu’il doit à des lieux nouveaux, à des actes inaccoutumés, à la causerie récente et aux adieux sous la lampe étrangère qui le suivent encore dans le silence de la nuit, à la douceur prochaine du retour.";

      https://fr.wikisource.org/wiki/Du_c%C3%B4t%C3%A9_de_chez_Swann/Texte_entier

    var text4="   Je n'suis pas d'une beauté suprême"+"<br>"+
    "Mais faut pas s'fier à ce qu'on voit"+"<br>"+
    "Je veux bien me manger moi-même"+"<br>"+
    "Si vous trouvez plus malin qu'moi."+"<br>"+
    "Les hauts-d'forme, les chapeaux splendides"+"<br>"+
    "Font pâl'figure auprès de moi"+"<br>"+
    "Car à Pouddlard, quand je décide,"+"<br>"+
    "Chacun se soumet à mon choix."+"<br>"+
    "Rien ne m'échapp' rien ne m'arrête"+"<br>"+
    "Le Choixpeau a toujours raison"+"<br>"+
    "Mettez moi donc sur votre tête"+"<br>"+
    "Pour connaître votre maison."+"<br>"+
    "Si vous allez à Gryffondor"+"<br>"+
    "Vous rejoindrez les courageux,"+"<br>"+
    "Les plus hardis, les plus forts"+"<br>"+
    "Sont rassemblés en ce haut-lieu."+"<br>"+
    "Si à Pousouffle vous allez,"+"<br>"+
    "Comme eux vous s'rez juste et loyal"+"<br>"+
    "Ceux de Pousouffle aiment travailler";
    var text5 = "Et leur patience est proverbiale."+"<br>"+
    "Si vous êtes sages et réfléchi"+"<br>"+
    "Serdaigle vous accueillera peut-être"+"<br>"+
    "Là-bas, ce sont des érudits"+"<br>"+
    "Qui ont envie de tout connaître."+"<br>"+
    "Vous finirez à Serpentard"+"<br>"+
    "Si vous êtes plutôt malin,"+"<br>"+
    "Car ceux-là sont de vrai roublards"+"<br>"+
    "Qui parviennent toujours à leurs fins."+"<br>"+
    "Sur ta tête pose-moi un instant"+"<br>"+
    "Et n'aie pas peur, reste serein"+"<br>"+
    "Tu seras en de bonnes mains"+"<br>"+
    "Car je suis un chapeau pensant !";





    $scope.tabs = [];


    splitter(text1);
    splitter(text2);
    splitter(text3);
    splitter(text4);
    splitter(text5);

    $scope.contentLoad = true;



    function splitter(text) {
      var lines = text.split("<br>");

      var lines2 = [];
     for(var i in lines) {

       words = lines[i].trim().split(" ");
       lines2.push(words);
     }
      var tab ={p:lines2,
        startp:0,
        ind:0,
        endp:2
      };
     $scope.tabs.push(lines2);
    }

    $scope.nextPageV = function (ind) {

    }

  }]);
angular.module('MyApp').controller('modalController', ['$scope', function ($scope) {

}]);
