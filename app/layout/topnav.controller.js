/**
 * Created by mathieu on 10/02/16.
 */
(function() {
    'use strict';

    angular
        .module('sharetunes.layout')
        .controller('TopnavController',['$scope','$mdSidenav',HomeController]);


    function HomeController($scope,$mdSidenav){
        var self = this;

        self.toggleList = toggleUsersList;

        /**
         * Hide or Show the 'left' sideNav area
         */
        function toggleUsersList() {
            $mdSidenav('left').toggle();
        }
    }
})();