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


navigator.camera.getPicture (onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI }) ;

function onSuccess(imageURI) {var image = document.getElementById('myImage') ;
    image.SRC = imageURI ;
} function onFail(message) {alert ( 'a échoué car: '+ message);}