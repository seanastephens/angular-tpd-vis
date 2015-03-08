'use strict';
var myModule = angular.module('angularTpdVisApp');

myModule.controller('TableCtrl', ['$scope', '$http', function ($scope, $http) {

    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
    	var index = $scope.things.indexOf(row);
    	if (index !== -1) {
    		$scope.things.splice(index, 1);
    	}
    }
    $scope.tableHeaders = [	
    ['ADDRESS_PUBLIC', 'Public Address'], 
    ['DATE_REPT', 'Date Rported'], 
    ['HOUR_REPT', 'Hour Reported'], 
    ['DATE_OCCU', 'Date Occcured'], 
    ['HOUR_OCCU', 'Hour Occured'], 
    ['NatureCodeDesc', 'Code Description'], 
    ['CSDISPDESC', 'Description of Disp. Code'], 
    ['ACTDATE', 'Actual Date'], 
    ['ACTTIME', 'Actual Time'], 
    ['ADD_NS', 'North South Address'], 
    ['ADD_DIR_NS', 'N/S Address Number'], 
    ['ADD_EW', 'East West Address'], 
    ['ADD_DIR_EW', 'E/W Address Number'], 
    ['NHA_NAME', 'Neigborhood Name'], ];
    $scope.things = [];

    $http.get('/api/incidents?limit=10000&all=true')
    .success(function(data, status, headers, config){
    	$scope.things = data.data;

    	console.log($scope.things);
    })
    .error(function(data, status, headers, config){
    	alert(status);
    });

}]);

