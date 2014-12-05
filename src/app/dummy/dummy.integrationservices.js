angular.module('app.dummy.integrationservices', [])

    .service('DummyService', function ($q, $http) {


        var categoryOptions = [];
        var countries = []

        return {
            loadAllCategory: function () {
                $http({
                    method: 'GET',
                    url: "http://localhost:8080/lost-and-found-server/rest/searchservice/categories",
                    headers: {'Content-Type': 'application/json'}

                }).success(function (data) {
                    categoryOptions = data;
                });
            },
            loadAllCountries: function () {
                $http({
                    method: 'GET',
                    url: "http://localhost:8080/lost-and-found-server/rest/searchservice/getallCountries",
                    headers: {'Content-Type': 'application/json'}

                }).success(function (data) {
                    countries = data;
                });

            },
            getAllCategory: function () {
                return categoryOptions;
            },
            getAllSubCategory: function (category) {
                return categoryOptions.length && category > 0?categoryOptions[category-1].subCategories:"";
            },
            getAllCountries: function () {
                return countries;
            }
//            ,
//
//            getCountries: function() {
//
//                var dfd = $q.defer();
//
//                $http.get('http://localhost:8080/lost-and-found-server/rest/searchservice/getallCountries').success(function (data) {
//                    dfd.resolve(data);
//                });
//                return dfd.promise;
//            }
        };

    })

;