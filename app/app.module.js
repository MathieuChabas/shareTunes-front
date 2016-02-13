(function() {
    'use strict';

angular.module('sharetunes', [
    'ngMaterial',
    'sharetunes.layout'
])
    .config(['$mdThemingProvider',function($mdThemingProvider){
        $mdThemingProvider.theme('default')
            .primaryPalette('brown');
        $mdThemingProvider.setDefaultTheme('default');
    }])
;

})();