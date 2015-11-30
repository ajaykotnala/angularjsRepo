app.factory('LoginService', function ($http, $q) {

    //need to find a way to automate urls.
    //localization needs to be3 implemented here
    var ServicePluggerUrl = 'https://493nedp085.execute-api.eu-west-1.amazonaws.com/Beta/servicepluggers';

    function getAllServices() {
        var deferred = $q.defer();
        $http.get(ServicePluggerUrl, { cache: true })
            .success(function (response) {
                deferred.resolve(response);
            }).error(function (error) {
                //notify service need to inject here.
                deferred.reject(error);
            });
        return deferred.promise;
    }

    return {
        getAllServices: getAllServices
    };

});