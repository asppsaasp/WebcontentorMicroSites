/**
*
**/
'use strict';
(function(angular){
angular.module('overview').controller('OverviewCtrl',
	[
	    
		'$scope',
		'$state',
		'Restangular',
		'OverviewApiSrv',
		'CommonSrv',
		function($scope,$state, Restangular, OverviewApiSrv,CommonSrv){
			$scope.subheader = $scope.$parent.subheader;
			$scope.subheader.title = 'Overview';
			//$scope.subheader.breadcrumb = ['home','overview'];
			 console.log('Subheader Data ---------------- ',$scope.subheader);
			$scope.isHidden = false;   
			$scope.templates = [];
			$scope.templateType = ''; 
			$scope.templateData = [];
			$scope.categories = [];
			//$scope.selectedTemplate = {};
			
			$scope.filter = {
				size : 3, 
				orderBy : 'createdDate',
				page : 1,
				sortBy : 'ASC'
			};
		}
	]);
})(angular);



	