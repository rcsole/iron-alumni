angular
  .module('ironalumni')
  .config(['$routeProvider', 'AuthProvider', function($routeProvider, AuthProvider) {
    'use strict';

    $routeProvider.when('/signup', {
      controller: 'MemberCtrl',
      templateUrl: '../templates/signup.html'
    }).when('/signin', {
      controller: 'MemberCtrl',
      templateUrl: '../templates/signin.html'
    }).when('/members/:id', {
      controller: 'MemberDetailCtrl',
      templateUrl: '../templates/memberDetailTpl.html'
    }).when('/members', {
      controller: 'MemberListCtrl',
      templateUrl: '../templates/memberListTpl.html'
    }).otherwise({
      redirectTo: '/signup'
    });

    AuthProvider.loginPath('/members/sign_in.json');
    AuthProvider.logoutPath('/members/sign_out.json');
    AuthProvider.registerPath('/members.json');
  }]);
