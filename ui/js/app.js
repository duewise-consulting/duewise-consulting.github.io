var APP = angular.module('APP', ['ngRoute', 'ngSanitize', 'chieffancypants.loadingBar'])

	.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){

		$routeProvider
			.when('/', {templateUrl: 'ui/tpl/view.html', controller: "init"})

			.when('/:page', {templateUrl: 'ui/tpl/view.html',
				controller: ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams) {
					$rootScope.page = $routeParams.page;
					$scope.pageURL = 'ui/tpl/'+ $rootScope.page +'.html';
				}]
			});

		$httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

	}])

	.controller('init', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams) {
		$scope.minHeight=$(window).height()-3;
		$scope.headerURL = 'ui/tpl/header.html';
		$scope.footerURL = 'ui/tpl/footer.html';

		$scope.menu = [ 'home', 'labs', 'about', 'contact' ];
		$scope.menu_urls = {
			home: '',
			labs: 'labs',
			contact: 'contact',
			about: 'about',
			// resume: 'resume',
		};

		$rootScope.page = 'home';
		$scope.pageURL = 'ui/tpl/home.html';

		var d = new Date();
		d.setDate(d.getDate() - 2);
		$rootScope.lastUpdated = d.toDateString();
	}]);


$( document ).ready( function(){
	// google analytics
	window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZFVQYW4XDK');

	window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 25,
      header = $(".header");
    if (distanceY > shrinkOn) {
      header.addClass("smaller");
    } else if (header.hasClass("smaller")) {
      header.removeClass("smaller");
    }
  });
});
