/**
 * Created by PAVANI on 6/28/2017.
 */
myApp.controller('rejectOrderController',function($scope, $http){
    $scope.name = "Reject";
    $http.get("http://localhost:4000/api/orders/rejects")
        .then(function(response) {
            console.log(response);
             $scope.reject = response.data;

        });

    var order = {
        method: 'PUT',
        url: 'http://localhost:4000/api/orders/{:id}',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            status: ""
        }
    };

    var reject = {
        method: 'PUT',
        url: 'http://localhost:4000/api/reject/{:id}',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            status: ""
        }
    };
});
