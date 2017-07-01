/**
 * Created by PAVANI on 6/28/2017.
 */
myApp.controller('messageController',function($scope, $http, $window, $rootScope){
    $scope.name = "Messages";
    // $http.get("http://localhost:4000/api/orders/rejects")
    //     .then(function(response) {
    //         console.log(response);
    //          $scope.reject = response.data;
    //
    //     });
    var request = {
        method: 'POST',
        url: 'http://localhost:4000/api/orders/request',
        headers: {
            'Content-Type': 'application/json'
        },
        data: { requestId: "",
            orderId: "",
            vendor: "",
            requireDate: "",
            status: ""
        }
    };

    var message = {
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

    var updateOrder = {
        method: 'PUT',
        url: 'http://localhost:4000/api/orders/{:id}',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            status: ""
        }
    };
    $scope.sendEmail = function () {
        console.log('works');
        alert('works');

        $http(request).then(function(){

            $window.location.href = '#!/requestList';
        });

        $http(message).then(function(){

            $window.location.href = '#!/requestList';
        });

        $http(updateOrder).then(function(){

            $window.location.href = '#!/requestList';
        });
    }


});