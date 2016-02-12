/**
 * Created by mathieu on 10/02/16.
 */
(function() {
    'use strict';

    angular
        .module('topnav')
        .controller('HomeController',HomeController);


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