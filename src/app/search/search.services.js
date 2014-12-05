angular.module('app.search.services', [])

    .service('SearchService', function($q, $http) {

        return {
            search: function () {
                var searchResult = [];
                searchResult.push({category:"mobile1"});
                searchResult.push({category:"mobile1"});
                searchResult.push({category:"mobile1"});
                searchResult.push({category:"mobile2"});
                searchResult.push({category:"mobile2"});
                searchResult.push({category:"mobile2"});
                searchResult.push({category:"mobile3"});
                searchResult.push({category:"mobile3"});
                searchResult.push({category:"mobile3"});
                searchResult.push({category:"mobile4"});
                searchResult.push({category:"mobile4"});
                searchResult.push({category:"mobile4"});

                searchResult.push({category:"mobile5"});
                searchResult.push({category:"mobile5"});
                searchResult.push({category:"mobile5"});
                searchResult.push({category:"mobile6"});
                searchResult.push({category:"mobile6"});
                searchResult.push({category:"mobile6"});
                searchResult.push({category:"mobile7"});
                searchResult.push({category:"mobile7"});
                searchResult.push({category:"mobile8"});
                searchResult.push({category:"mobile8"});
                searchResult.push({category:"mobile8"});
                searchResult.push({category:"mobile9"});
                searchResult.push({category:"mobile9"});
                searchResult.push({category:"mobile10"});
                searchResult.push({category:"mobile10"});
                searchResult.push({category:"mobile11"});
                searchResult.push({category:"mobile11"});
                searchResult.push({category:"mobile12"});
                searchResult.push({category:"mobile12"});
                searchResult.push({category:"mobile12"});
                searchResult.push({category:"mobile12"});



                return searchResult;
            },
            searchData: function () {
                return $http({
                    method: 'GET',
                    url: "http://localhost:8080/lost-and-found-server/rest/searchservice/listings",
                    headers: {'Content-Type': 'application/json'}
                });
            },
            compare: function(a,b){
                if (b.queryInfo.date > a.queryInfo.date){
                    return 1;
                }
                if (b.queryInfo.date < a.queryInfo.date){
                    return -1;
                }
                return 0;
            }
        };



    }



);
