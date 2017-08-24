(function(){
    var myApp = angular.module("myApp",['ngRoute']);

    myApp.config(function($routeProvider){
        $routeProvider

        .when('/home',{
            templateUrl:'pages/home.html',
            controller:"homeController"
        })

        .when('/product',{
            templateUrl:'pages/product/index.html',
            controller:"product1",
             controller:"product"
             
        })

        .when('/aboutUs',{
            templateUrl:'pages/about/aboutUs.html',
            controller:"aboutUsController"
        })

        .when('/photos',{
            templateUrl:'pages/photos.html',
            controller:"aboutUsController"
        })

        .when('/GTB488',{
            templateUrl:'pages/product/AllModle/488GTB.html'
        })

        .when('/Sperfast812',{
            templateUrl:'pages/product/AllModle/Super.html'
        })

        .when('/California T',{
            templateUrl:'pages/product/AllModle/california.html'
        })

        .when('/GTC4Lusso',{
            templateUrl:'pages/product/AllModle/GTC4Lusso.html'
        })

        .when('/LaFerrari',{
            templateUrl:'pages/product/AllModle/LaFerrari.html'
        })
        .otherwise({redirectTo:'/home'});
    });

    myApp.controller("product",['$http',product]);

        function product($http){
            var vm=this;
            $http.get("pages/product/data/data.json").success(function(pdata){
            vm.empl = pdata;
        });   
    }      
       
    
     myApp.controller("product1",['$http',product1]);
    function product1(vm){
            var vm=this;
            vm.IsVisible = false;
            vm.ShowHide = function () {
           vm.IsVisible = vm.IsVisible ? false : true;
            }
        };
})();