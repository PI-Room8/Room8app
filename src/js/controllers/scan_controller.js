angular.module('Room8.controllers.Scan', [
	'mobile-angular-ui.components.scrollable',
	'Room8.directives.Scan'
    ])

.controller('ScanController', function($scope,$http, $rootScope, $location){

		$scope.myPictures = [];
		$scope.$watch('myPicture', function(value) {
   			if(value) {
     		myPictures.push(value);
   			}
		}, true);


	var pictureSource;   // source de l'image
    var destinationType; // définit le format de la valeur retournée

    // Attendre que PhoneGap soit prêt
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // PhoneGap est prêt
    //
    $scope.onDeviceReady=function() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Appelé lorsqu'une photo est bien récupérée
    //
    $scope.onPhotoDataSuccess=function(imageData) {
      // Décommentez pour voir le flux image encodé en Base64
      // console.log(imageData);

      // Récupérer l'élément image du DOM
      //
      var smallImage = document.getElementById('smallImage');

      // Rendre visible l'élément image
      //
      smallImage.style.display = 'block';

      // Injecter la photo dans l'élément image
      // Les règles CSS servent à redimensionner l'image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Appelé lorsqu'une photo est bien récupérée
    //
    $scope.onPhotoURISuccess=function(imageURI) {
      // Décommentez pour voir l'URI du fichier image
      // console.log(imageURI);

      // Récupérer l'élément image du DOM
      //
      var largeImage = document.getElementById('largeImage');

      // Rendre visible l'élément image
      //
      largeImage.style.display = 'block';

      // Injecter la photo dans l'élément image
      // Les règles CSS servent à redimensionner l'image
      //
      largeImage.src = imageURI;
    }

    // Un bouton déclenchera l'appel de cette fonction
    //
    $scope.capturePhoto=function() {
    	console.log("coucou photo")
      // Prendre une photo avec l'appareil photo du mobile et récupérer l'image sous forme de flux encodé en Base64
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
    }

    // Un bouton déclenchera l'appel de cette fonction
    //
    $scope.capturePhotoEdit=function() {
      // Prendre une photo avec l'appareil photo du mobile, autoriser son édition, et récupérer l'image sous forme de flux encodé en Base64
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true }); 
    }

    // Un bouton déclenchera l'appel de cette fonction
    //
    $scope.getPhoto=function(source) {
      // Récupérer l'URI d'un fichier image à partir de la source spécifiée
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Appelé lorsque quelque chose ne tourne pas rond
    // 
     $scope.onFail=function(message) {
      alert('Echec car : ' + message);
    }

});
