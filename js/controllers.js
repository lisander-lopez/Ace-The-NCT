var app = angular.module('aceTheNCT', ['ui.router']);

app.controller('mainCtrl', ['$log', function($log) {
    $log.info('Loaded! main');
}]);

app.controller('aboutUsCtrl', ['$log', function($log) {
    $log.info('Loaded! about us');
}]);

app.controller('questionCtrl', ['$log', function($log) {
    $log.info('Loaded! about us');
}]);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  	$urlRouterProvider.otherwise('/');
  	
  	var homeState = {
      name: 'home',
      url: '/',
      templateUrl: 'pages/main.html',
      controller: 'mainCtrl as mC' 
    }
    
  	var questionState = {
      name: 'question',
      url: '/question',
      templateUrl: 'pages/question.html',
      controller: 'questionCtrl as qC' 
    }
    
  	var aboutusState = {
      name: 'about-us',
      url: '/about-us',
      templateUrl: 'pages/about-us.html',
      controller: 'aboutUsCtrl as auC' 
    }
    
    $stateProvider.state(homeState);
    $stateProvider.state(questionState);
    $stateProvider.state(aboutusState);
  
	/*
	$routeProvider
		.when('/', {
			templateUrl: 'main.html',
			
		})
		.when('/about-us', {
			templateUrl: 'about-us.html',
			controller: 'aboutUsCtrl as aUC'
		})
		.when('/question', {
		    templateUrl: 'question.html',
		    controller: 'questionCtrl as qC'
		})
		.otherwise({
			redirectTo: '/'
		});
	$locationProvider.html5Mode(true);
	*/

}]);