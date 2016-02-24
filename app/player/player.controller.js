/**
 * Created by mathieu on 10/02/16.
 */
(function() {
    'use strict';

    angular
        .module('sharetunes.player')
        .controller('PlayerController',['$scope',PlayerController]);


    function PlayerController($scope){
        $scope.$watch('trackId',function(currentTrackId){
            var player = plyr.setup()[0];
            var streamUrl = "http://api.soundcloud.com/tracks/" + currentTrackId + "/stream?client_id=f125bda01c6b43aaff1b3a6e236576f7";
            player.source({
                sources:[{
                    src: streamUrl,
                    type: 'audio/mp3'
                }]
            });
            player.play();
        });

    }
})();