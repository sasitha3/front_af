/**
 * Created by PAVANI on 6/28/2017.
 */
myApp.controller('deliverOrderController',function($scope, $http){
    $scope.name = "Sasitha";

    $http.get("http://localhost:4000/api/orders/delivers")
        .then(function(response) {
            console.log(response);
           $scope.deliver = response.data;

        });

    var deliver = {
        method: 'PUT',
        url: 'http://localhost:4000/api/orders/messages/{:id}',
        headers: {
            'Content-Type': 'application/json'
        },
        data: { to: "",
            from: "",
            messageSubject: "",
            messageBody: "",
            drugs: {
                name: "",
                requireDate: ""
            },
        }
    };

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
        method: 'POST',
        url: 'http://localhost:4000/api/orders/{:id}',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            status: ""
        }
    };
});
