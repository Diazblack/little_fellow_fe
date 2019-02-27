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
	    petshow(petData);
	  }).catch(function (error) {
	    return console.log(error);
	  });
	}

	function petshow(petData) {
	  var image = document.getElementById("random-pet");
	  debugger;
	  var downloadingImage = new Image();
	  downloadingImage.onload = function () {
	    image.src = this.src;
	  };
	  downloadingImage.src = petData.img_url;

	  var pronoum = '';
	  var description = '';
	  petData.description == 'null' ? description = "Description is not available" : description = petData.description;
	  petData.sex == 'F' ? pronoum = 'Her name is ' + petData.name : pronoum = 'His name is ' + petData.name;

	  var petInfo = '<div class="pet-info-wrapper"><ul><li>' + pronoum + '</li> <li>' + description + ' </li><li>Location: ' + petData.city + ', ' + petData.state + '</li></ul></div>';
	  $('.pet-info').append(petInfo);
	}

	$(document).on("load", randomPet());

/***/ })
/******/ ]);