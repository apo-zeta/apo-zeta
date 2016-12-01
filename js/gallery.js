var galleryApp = angular.module('myGallery', [])

galleryApp.controller('ImageController', ["$scope", function($scope) {
	$scope.images = [
	{num: '01', img: 'img/gallery/01.jpg'},
	{num: '02', img: 'img/gallery/02.jpg'},
	{num: '03', img: 'img/gallery/03.jpg'},
	{num: '04', img: 'img/gallery/04.jpg'},
	{num: '05', img: 'img/gallery/05.jpg'},
	{num: '06', img: 'img/gallery/06.jpg'},
	{num: '07', img: 'img/gallery/07.jpg'},
	{num: '08', img: 'img/gallery/08.jpg'},
	{num: '09', img: 'img/gallery/09.jpg'},
	{num: '10', img: 'img/gallery/10.jpg'},
	{num: '11', img: 'img/gallery/11.jpg'},
	{num: '12', img: 'img/gallery/12.jpg'}
	];

	$scope.propertyName = 'num';
}]);