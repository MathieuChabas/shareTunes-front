/**
 * Created by mathieu on 10/02/16.
 */
(function() {
    'use strict';

    angular
        .module('sharetunes.listByGenre')
        .service('requestedTrack',['$rootScope',RequestedTrack]);


    function RequestedTrack($rootScope){
        return {
            setTrack: function(value){
                $rootScope.trackId = value;
            }
        };
    }
})();