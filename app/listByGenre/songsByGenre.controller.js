/**
 * Created by mathieu on 10/02/16.
 */
(function() {
    'use strict';

    angular
        .module('sharetunes.listByGenre')
        .controller('ListByGenreController',['$scope','requestedTrack',ListController]);


    function ListController($scope,requestedTrack){
        var self = this;
        self.setTrack = setTrack;

        $scope.$watch('genre',function(currentGenre){
            $scope.tracks = [];
            $scope.currentGenre = currentGenre;
            if(currentGenre != undefined){
                SC.get('/tracks', { genres: currentGenre }, function(tracks) {
                    $(tracks).each(function(index, track) {
                        $scope.tracks.push(track);
                    });
                });
            }
        });

        function setTrack($trackId){
            requestedTrack.setTrack($trackId);
        }

    }
})();