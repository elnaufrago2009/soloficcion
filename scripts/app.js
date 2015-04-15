angular.module("soloficcion", ["ngRoute","ui.bootstrap"])
.config(function($routeProvider){
        $routeProvider
            .when("/", {                
                controller: "mainController",
                templateUrl: "pages/main.html"
            })
            .when("/view", {
                controller: "viewController",                
                templateUrl: "pages/view.html"
            })
            .when("/help", {
                controller: "helpController",                
                templateUrl: "pages/help.html"
            })
            .when("/admin", {
                controller: "adminController",                
                templateUrl: "pages/admin.html"
            })
            .otherwise({
		        redirectTo: '/'
		     });
    });