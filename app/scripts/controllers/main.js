'use strict';

/**
 * @ngdoc function
 * @name jiffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jiffApp
 */
angular.module('jiffApp')
  .controller('MainCtrl', function ($scope, JiffVid, $sce) {
  	$scope.videos = JiffVid.query();
  	//console.log($scope.videos.pageInfo.totalResults);
  	$scope.getRandomVideo = function () {
  		var randomIndex = Math.floor(Math.random()*50) +1;
  		var embedCode = '<iframe ng-if="currentVideo" width="560" height="315" src="https://www.youtube.com/embed/' + $scope.videos.items[randomIndex].id.videoId + '" frameborder="0" allowfullscreen></iframe>';
  		$scope.currentVideo = $sce.trustAsHtml(embedCode);
      //$scope.previousVideo = $sce.trustAsHtml(embedCode);
  		console.log("set current video to: " + $scope.currentVideo);

  	};
    
  });
