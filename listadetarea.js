var app = angular.module('controlador',[]);
app.controller('ControladorTareas',function($scope) {
	// body...
	
$scope.tarea = [{texto:'Queremos Ganar en Dolares', hecho: true}, 
			    {texto:'Esperando el ultimo Capitulo de Westworld', hecho: false}];

$scope.agregarTarea=function (){
$scope.tarea.push ({texto:$scope.textoNuevaTarea, hecho:false});
$scope.textoNuevaTarea='';
			}  ;  

$scope.restantes=function (){
var cuenta=0;
angular.forEach($scope.tarea, function(tareas) {
cuenta += tareas.hecho? 0:1;
});
return cuenta;
};

$scope.eliminar= function () {
	
	var tareasViejas= $scope.tarea;
	$scope.tarea=[];
	angular.forEach(tareasViejas, function(tareas) {
if (!tareas.hecho) $scope.tarea.push (tareas);


});
}
});

