(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://hidden-mesa-55188.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
