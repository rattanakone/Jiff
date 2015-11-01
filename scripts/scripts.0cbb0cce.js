"use strict";angular.module("jiffApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("jiffApp").controller("MainCtrl",["$scope","JiffVid","$sce",function(a,b,c){a.videos=b.query(),a.getRandomVideo=function(){var b=Math.floor(50*Math.random())+1,d='<iframe ng-if="currentVideo" width="500" height="315" src="https://www.youtube.com/embed/'+a.videos.items[b].id.videoId+'" frameborder="0" allowfullscreen></iframe>';a.currentVideo=c.trustAsHtml(d);var e=document.createElement("li");e.innerHTML=c.trustAsHtml(d),document.getElementById("previousVideo").appendChild(e),console.log("set current video to: "+a.currentVideo)}}]),angular.module("jiffApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("jiffApp").factory("JiffVid",["$resource",function(a){return a("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&channelId=UCaHuy8vHUcLU4O68JNgcNiA&order=date&key=AIzaSyDZqbprMDMRgEyeJV3ink9cCfqzwpvs8xY",{},{query:{method:"GET",params:{},isArray:!1}})}]),angular.module("jiffApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="jumbotron" id="jumbomain"> <h1>Watch Jiff</h1> <br> <div class="embed-responsive embed-responsive-4by3" id="video-wrapper"> <div ng-bind-html="currentVideo"></div> <br> <br> <h2>Click the button for a Jiff YouTube video!</h2> <img src="../images/jiff.979e626a.jpg"> </div> <br> <p><a class="btn btn-lg btn-success" ng-click="getRandomVideo()">Random Jiff<span class="glyphicon glyphicon-ok"></span></a></p> <h4 class="h4">WARNING: <span class="glyphicon glyphicon-heart"></span> Cuteness overload <span class="glyphicon glyphicon-heart"></span></h4> </div> <div id="previousVideo" ng-bind-html="previousVideo" align="center"></div>')}]);