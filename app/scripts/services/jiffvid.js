'use strict';

/**
 * @ngdoc service
 * @name jiffApp.JiffVid
 * @description
 * # JiffVid
 * Factory in the jiffApp.
 */
angular.module('jiffApp')
  .factory('JiffVid', function ($resource) {
    // Service logic
    // ...
    // Public API here
//    return $resource('https://www.googleapis.com/youtube/v3/search?part=snippet&q=jiff+the+dog&type=video&key=AIzaSyDZqbprMDMRgEyeJV3ink9cCfqzwpvs8xY', {}, {
      return $resource('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&channelId=UCaHuy8vHUcLU4O68JNgcNiA&order=date&key=AIzaSyDZqbprMDMRgEyeJV3ink9cCfqzwpvs8xY', {}, {
      query: {
        method:'GET',
        params:{
        },
        isArray:false
      }
    });
   
  });
