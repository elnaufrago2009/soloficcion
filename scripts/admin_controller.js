angular.module("soloficcion").controller("adminController", function($scope, $modal){
	$scope.nombre = "moises linares";
	$scope.videos = [
		{ id: "1", titulo: "Primer Video", resumen: "", contenido: "", img_resumen: "", img_contenido: "", trailer: ""},
		{ id: "2", titulo: "Segundo Video", resumen: "", contenido: "", img_resumen: "", img_contenido: "", trailer: ""},
		{ id: "3", titulo: "Tercero Video", resumen: "", contenido: "", img_resumen: "", img_contenido: "", trailer: ""},
		{ id: "4", titulo: "Cuarto Video", resumen: "", contenido: "", img_resumen: "", img_contenido: "", trailer: ""},
		{ id: "5", titulo: "Quinto Video", resumen: "", contenido: "", img_resumen: "", img_contenido: "", trailer: ""},
		{ id: "6", titulo: "Secto Video", resumen: "", contenido: "", img_resumen: "", img_contenido: "", trailer: ""},
		{ id: "7", titulo: "Octavo Video", resumen: "", contenido: "", img_resumen: "", img_contenido: "", trailer: ""}		
	];

	

	$scope.open = function (size) {

		var modalInstance = $modal.open({
		  templateUrl: 'pages/modals/add_video.html',
		  controller: 'addVideoController',
		  size: size		  
		});

		// resultado del item
		modalInstance.result.then(function (selectedItem) {
		  $scope.videos.push(selectedItem); 
		});


	};

});


angular.module('soloficcion').controller('addVideoController', function ($scope, $modalInstance) {

  $scope.ok = function () {
    $modalInstance.close($scope.nuevoVideo);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});