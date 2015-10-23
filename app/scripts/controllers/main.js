'use strict';

/**
 * @ngdoc function
 * @name loremipsumApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the loremipsumApp
 */
angular.module('loremipsumApp')
  .controller('MainCtrl', function ($scope, $http) {
    var vm = $scope;

    vm.title = "This is Proof We Are Talking to the Controller";

    vm.getLoremIpsum = function() {
        $http.get('./loremipsum.json').success(function(data) {
            console.log(data[10]);
            getRandomWords(data, 10);

        });
    };

    vm.getRandom = function() {

    };
        
    function getRandomWords(data, numberOf) {
        var arrayOfWords =[];
        for (var i = 0; i < numberOf; i++) {
            var wordIndex = Math.floor(Math.random() * data.length) + 1;
            arrayOfWords.push(data[wordIndex]);
        }

        console.log(arrayOfWords);
    }

    function createSentence(arrayOfWords) {
        var sentence = '';
        for (var i = 0; i < arrayOfWords.length; i++) {
            if (i === 0)
                capitalize(arrayOfWords[i]);

        }
    }
    //Capitalize first letter only.
    function capitalize(word) {

    }
   
  });
