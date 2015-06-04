angular.module('Room8.directives.ngConfirmBoxClick', [
    'mobile-angular-ui.components.scrollable'
])

.directive('ngConfirmBoxClick', function () {
    return {
    link: function (scope, element, attr) {
      var msg = attr.ngConfirmBoxClick|| "Are you sure?";
      var clickAction = attr.ngClick;
      element.bind('click',function (e) {
        if (window.confirm(msg)){
			scope.$eval(clickAction)
		}
        //e.stopImmediatePropagation();
        //e.preventDefault();
      });
     }
    };
});
