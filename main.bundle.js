/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	function randomPet() {
	  var url = 'https://little-fellow-be.herokuapp.com/api/v1/';
	  fetch(url).then(function (response) {
	    return response.json();
	  }).then(function (petData) {
	    petRandom(petData);
	  }).catch(function (error) {
	    return console.log(error);
	  });
	}

	function petRandom(petData) {
	  var image = document.getElementById("random-pet");
	  loadImages(image, petData.img_url);

	  var pronoum = '';
	  var description = '';
	  petData.description == null ? description = "Description is not available" : description = petData.description;
	  var name = '' + petData.name;

	  petData.sex == 'F' ? pronoum = 'Her name is ' + name : pronoum = 'His name is ' + name;

	  var petInfo = '<div class="pet-info-wrapper"><ul><li>' + pronoum + '</li> <li>' + description + ' </li><li>Location: ' + petData.city + ', ' + petData.state + '</li> <li><button type="button" class="button" onclick="petToggle()">Click me for more information</button></li></ul></div>';
	  $('.pet-info').append(petInfo);
	  petShow(petData);
	}

	function petToggle() {
	  $('.pet-info').toggleClass('hidden-display');
	  $('.pet-info-show').toggleClass('hidden-display');
	}

	function petShow(data) {
	  for (var key in data) {
	    if (key !== 'img_url' && key !== 'id' && key !== 'shelter_id') {
	      var contentField = '';
	      data[key] == null ? contentField = 'Information not available' : contentField = data[key];
	      var field = '<li class="field-title">' + key + ': ' + contentField + '</li>';
	      $('.pet-info-list').append(field);
	    }
	  };
	}

	function loadImages(image, url) {
	  var downloadingImage = new Image();
	  downloadingImage.onload = function () {
	    image.src = this.src;
	  };
	  downloadingImage.src = url;
	}

	$("document").on("load", randomPet());

/***/ })
/******/ ]);