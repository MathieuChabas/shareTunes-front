(function() {
    'use strict';

angular.module('sharetunes', [
    'ngMaterial',
    'sharetunes.layout',
    'sharetunes.listByGenre',
    'sharetunes.player'
])
    .config(['$mdThemingProvider',function($mdThemingProvider){
        var soundCloudOrange;
        soundCloudOrange = $mdThemingProvider.extendPalette('orange', {
            '400': '#f57200',
            'contrastDefaultColor': 'light'
        });
        $mdThemingProvider.definePalette('soundCloudOrange', soundCloudOrange);

        $mdThemingProvider.theme('default')
            .primaryPalette('soundCloudOrange', {
                'default': '400',
            });
        $mdThemingProvider.setDefaultTheme('default');
    }])
;

})();