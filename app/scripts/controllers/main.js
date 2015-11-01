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
  	$scope.getRandomVideo = function () {
  		var randomIndex = Math.floor(Math.random()*50) +1;
  		var embedCode = '<iframe ng-if="currentVideo" width="500" height="315" src="https://www.youtube.com/embed/' + $scope.videos.items[randomIndex].id.videoId + '" frameborder="0" allowfullscreen></iframe>';
  		$scope.currentVideo = $sce.trustAsHtml(embedCode);
      var createNew = document.createElement("li");
      createNew.innerHTML = $sce.trustAsHtml(embedCode);
      document.getElementById("previousVideo").appendChild(createNew);
  		console.log("set current video to: " + $scope.currentVideo);

  	};
    
  });
