/**
 * Created by PAVANI on 5/21/2017.
 */
myApp.controller('requestOrderController',function($scope, $http){
    $scope.name = "Sasitha";
    $http.get("http://localhost:4000/api/orders/request")
        .then(function(response) {
            console.log(response);
             $scope.request = response.data;

        });

    var deliver = {
        method: 'POST',
        url: 'http://localhost:4000/api/orders/messages',
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

    var request = {
        method: 'PUT',
        url: 'http://localhost:4000/api/orders/{:id}',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            status: ""
        }
    };


    $scope.confirm = function () {
        console.log('confirm');
    }

    $scope.remove = function () {
        console.log('remove');
    }
});