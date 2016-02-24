/**
 * Created by mathieu on 10/02/16.
 */
(function() {
    'use strict';

    angular
        .module('sharetunes.layout')
        .controller('TopnavController',['$scope','$mdSidenav','requestedGenre',NavController]);


    function NavController($scope,$mdSidenav,requestedGenre){
        var self = this;
        self.toggleList = toggleUsersList;
        self.setGenre = setGenre;

        $scope.genres = [
            {
                'name':'electronic'
            },
            {
                'name':'ambient'
            },
            {
                'name':'pop'
            },
            {
                'name':'rock'
            }
        ];

        /**
         * Hide or Show the 'left' sideNav area
         */
        function toggleUsersList() {
            $mdSidenav('left').toggle();
        }

        function setGenre($genre){
            requestedGenre.setGenre($genre);
        }
    }
})();