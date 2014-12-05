angular.module('app', [

    'ui.router',
    'ui.bootstrap',
    'ui.bootstrap.tpls',
    'ngTable',
    'app.templates',
    'app.dummy',
    'app.search'

])
    .config(function myAppConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home/search');


        $stateProvider.state('app', {
            url: '/home',
            controller: 'AppCtrl',
            templateUrl: 'appcontent.tpl.html'
        })
    })

    .controller('AppCtrl', function AppCtrl($scope, DummyService) {
        $scope.selectedTab = 'search';
        $scope.selectTab = function (tab) {
            $scope.selectedTab = tab;
        }
        $scope.date = Date.now();
        $scope.pageTitle = "Lost And Found";
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (angular.isDefined(toState.data) && angular.isDefined(toState.data.pageTitle)) {
                $scope.pageTitle = toState.data.pageTitle + ' | Lost And Found';
            }
        });
        DummyService.loadAllCategory();
        DummyService.loadAllCountries();
    })
;