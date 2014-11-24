'use strict';

/*
 FirstName, MiddleName, LastName, BirthDate, EmailAddress, and Age.
 FirstName, MiddleName, LastName, BirthDate, EmailAddress should come from the database.
 Age should be calculated based on the person’s birthdate.
 The calculation should be done on the server without doing an entire page postback.
 */
angular.module('core').controller('HomeController', ['$scope', '$http', 'Authentication',
	function($scope, $http, Authentication)
    {
		// This provides Authentication context.
		$scope.authentication = Authentication;
        $http.get('/people')
        .success(function(data, status, headers, config)
        {
            $scope.persons = data;
        })
        .error(function(data, status, headers, config)
        {
            console.log('Oops. Failed to retrieve people.');
        });
        // Handle when a person is selected from the list
        $scope.selection = function()
        {
            //console.log($scope.selectedPerson);
            // $scope.selectedPerson has the person record already, but here is how I would retrieve it if I need to do that:
            $http.get('/people/' + $scope.selectedPerson._id)
            .success(function(data, status, headers, config)
            {
                $scope.person = data;
                console.log(data);
            })
            .error(function(data, status, headers, config)
            {
                console.log('Oops. Failed to retrieve person.');
            });
        };
        $scope.addPerson = function()
        {
            // add person to mongo ...
        };
	}
]);