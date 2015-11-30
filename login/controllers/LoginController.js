'use strict';

app.controller('LoginController', function ($scope, LoginService) {
    $scope.services = [];
    $scope.IsHide = true;
    //$scope.totalRecordsCount = 10;
    function ShowPassword() {
        var key_attr = $('#key').attr('type');
        if (key_attr != 'text') {
            $('.checkbox').addClass('show');
            $('#key').attr('type', 'text');
        } else {
            $('.checkbox').removeClass('show');
            $('#key').attr('type', 'password');
        }
    }

    $scope.private = {
        ShowPassword: ShowPassword
    };
    function init() {
        // getAllServices();
    }
    init();
});