console.log("test");
(function(){
    "use strict";
    
    angular.module("app",[]);
})();

(function(){
    "use strict";
    
    angular
        .module("app")
        .controller("Main",main);
    
    function main(){
        var vm = this;
        vm.food = "pizza";
    }
})();