/**
 * Created by mathieu on 10/02/16.
 */
(function() {
    'use strict';

    angular
        .module('sharetunes.layout')
        .service('requestedGenre',['$rootScope',RequestedGenre]);


    function RequestedGenre($rootScope){
        return {
            setGenre: function(value){
                $rootScope.genre = value;
            }
        };
    }
})();