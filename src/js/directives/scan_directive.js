angular.module('Room8.directives.Scan', [
    'mobile-angular-ui.components.scrollable'
])

.directive('camera', function() {
   return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {

         elm.on('click', function() {
            navigator.camera.getPicture(function (imageURI) {
               scope.$apply(function() {
                  ctrl.$setViewValue(imageURI);
               });
            }, function (err) {
               ctrl.$setValidity('error', false);
            }, { 
                quality : 50,
                destinationType : Camera.DestinationType.FILE_URI,
                sourceType : Camera.PictureSourceType.CAMERA,
                allowEdit : true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 1000,
                targetHeight: 1000,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false 
            })




         });  
      }
   };
});


/*navigator.camera.getPicture (onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI }) ;

function onSuccess(imageURI) {var image = document.getElementById('myImage') ;
    image.SRC = imageURI ;
} function onFail(message) {alert ( 'a échoué car: '+ message);}

/////////////////////////

var pictureSource; // picture source
var destinationType; // sets the format of returned value
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // alert("ready-----")
  pictureSource = navigator.camera.PictureSourceType;
  destinationType = navigator.camera.DestinationType;
}

function capturePhoto() {
  alert(navigator.camera);
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
    quality: 20,
    destinationType: destinationType.FILE_URI,
    targetWidth: 200,
    targetHeight: 200,
    saveToPhotoAlbum: true,
    sourceType: pictureSource.CAMERA
  });
}

function onPhotoDataSuccess(imageURI) {
  // alert("success--");
  var smallImage = document.getElementById('smallImage');
  smallImage.style.display = 'block';
  smallImage.src = imageURI;
  // smallImage.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
  alert('Failed because: ' + message);
}*/