angular.module('app.search.controllers', [

])


    .config(function config($stateProvider) {
        $stateProvider.state('app.search', {
            url: '/search',
            controller: 'SearchCtrl',
            templateUrl: 'search/search.tpl.html',
            data: { pageTitle: 'Search' }
        });
    })


    .controller('SearchCtrl', function SearchController($scope, $filter, $modal, $log, SearchService, DummyService, ngTableParams) {

        $scope.lostAndFound = 'Lost';
        $scope.searchIn = $scope.lostAndFound === 'Lost'?'Found':'Lost';
        $scope.changeSearchIn = function(value){
            $scope.searchInProgress = true;
            $scope.searchIn = value;
        }
        $scope.reset = function () {
            $scope.category = "";
            $scope.when = null;
            $scope.what = "";
            $scope.country = "";
            $scope.city = "";
        };

        $scope.getCategories = function () {
            return DummyService.getAllCategory();
        }
        $scope.getSubCategory = function () {
            return DummyService.getAllSubCategory($scope.category);
        }
        $scope.getCountries = function () {
            return DummyService.getAllCountries();
        }
        //date picker
        $scope.today = function () {
            $scope.when = new Date();
        };
        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
        };
        // Disable weekend selection
        $scope.disabled = function (date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };

        $scope.toggleMin = function () {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();
        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.clear = function () {
            $scope.when = null;
        };
        $scope.format = 'dd-MMMM-yyyy';

        $scope.tableParams = new ngTableParams({
            page: 1,            // show first page
            count: 10,           // count per page
            sorting: {
                date: 'asc'     // initial sorting
            }
        }, {
            total: $scope.searchResults ? $scope.searchResults.length : 0, // length of data
            getData: function ($defer, params) {
                if ($scope.searchResults) {
                    var orderedData = params.sorting() ? $filter('orderBy')($scope.searchResults, params.orderBy()) : $scope.searchResults;
                    $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                }
            }
        });
        $scope.executeSearch = function () {
            $scope.searchInProgress = true;
            SearchService.searchData().success(function (data) {
                $scope.searchResults = data;
                $scope.searchInProgress = false;
                $scope.tableParams.reload();
            });
        }

        $scope.showResult = function (selectedId) {
            $scope.idSelected = selectedId;
            var modalInstance = $modal.open({
                templateUrl: 'search/searchdetails.tpl.html',
                controller: 'SearchResultsModalCtrl',
                size: 'lg',

                resolve: {
                    details: function () {
                        return $scope.searchResults[selectedId - 1];
                    },
                    isLost: function () {
                        return $scope.searchIn;
                    }

                }
            });

//            modalInstance.result.then(function (selectedItem) {
//                $scope.selected = selectedItem;
//
//            }, function () {
//                $log.info('Modal dismissed at: ' + new Date());
//            });
        }
    })


    .controller('SearchResultsModalCtrl', function ($scope, $modalInstance, details, isLost) {

        $scope.details = details;
        $scope.isLost = isLost;

        $scope.ok = function () {
            $modalInstance.close();
        };

        /*   $scope.cancel = function () {
         $modalInstance.dismiss('cancel');
         };*/
    });




