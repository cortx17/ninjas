var myNinjaApp = angular.module("myNinjaApp", []);

myNinjaApp.controller("NinjaController", [
   "$scope",
   "depen",
   function($scope, depen) {
      $scope.ninjas = [
         {
            name: "Yoshi",
            belt: "green"
         },
         {
            name: "Crystal",
            belt: "yellow"
         },
         {
            name: "Ryu",
            belt: "orange"
         },
         {
            name: "Shaun",
            belt: "black"
         }
      ];
   }
]);
