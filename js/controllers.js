app.controller('mainCtrl', ['$log', '$scope', '$css', function($log, $scope, $css) {
  $log.info('Loaded! main');
  $css.bind({ 
    href: 'css/home.css'
  }, $scope);
}]);

app.controller('aboutUsCtrl', ['$log', '$scope', '$css', function($log, $scope, $css) {
  $log.info('Loaded! about us');
  $css.bind({ 
    href: 'css/about-us.css'
  }, $scope);
  
}]);

app.controller('questionCtrl', ['$log', '$scope', '$css', 'QuestionsArray', function($log, $scope, $css, QuestionsArray) {
  $log.info('Loaded! Questoins');
  var qC = this;
  var cssStyles = [{href: 'css/question.css'}, {href: 'css/angular-carousel.css'}];
  $css.bind(cssStyles, $scope);
  qC.data = QuestionsArray;
  qC.currentQuestion = 1;
  $log.info(qC.data);
  
}]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  	
	var homeState = {
    name: 'home',
    url: '/home',
    templateUrl: 'pages/main.html',
    controller: 'mainCtrl as mC',
  }
    
	var questionState = {
    name: 'question',
    url: '/question',
    templateUrl: 'pages/question.html',
    controller: 'questionCtrl as qC',
  }
    
	var aboutusState = {
    name: 'about-us',
    url: '/about-us',
    templateUrl: 'pages/about-us.html',
    controller: 'aboutUsCtrl as auC',

  }
  
  $stateProvider.state(homeState);
  $stateProvider.state(questionState);
  $stateProvider.state(aboutusState);
}]);
