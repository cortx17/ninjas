var myNinjaApp = angular.module("myNinjaApp", []);

myNinjaApp.controller("NinjaController", [
   "$scope",
   "depen",
   function($scope, depen) {
      $scope.message = "hello all";
      $scope.ninjas = ["yoshi", "crystal", "ryu", "mark"];
   }
]);
