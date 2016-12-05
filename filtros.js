var app = angular.module('filtros',[]);
app.controller('ControladorFiltros',function($scope) {

	$scope.empleados=
						[

							{
								nombre:'Ana', paterno:'Guzman', materno:'Guzman', primerDia: new Date (),
								salario:12000, telefono:'041409347855', bono:1.4522343
							},
							{
								nombre:'Andrea', paterno:'Montoya', materno:'Moros', primerDia: new Date (),
								salario:12000, telefono:'041609347855', bono:45.4555656
							},
							{
								nombre:'Jorge', paterno:'Romero', materno:'Mata', primerDia: new Date (),
								salario:14000, telefono:'041209337845', bono:7.453332
							},
							{	
								nombre:'Martin', paterno:'Salazar', materno:'Tineo', primerDia: new Date (),
								salario:16000, telefono:'041409347855', bono:15.4543434
							},
							{	
								nombre:'Thais', paterno:'Rodriguez', materno:'Guzman', primerDia: new Date (),
								salario:32000, telefono:'031439347855', bono:9.53434
							},
							{	
								nombre:'Francisco', paterno:'Guzman', materno:'Perez', primerDia: new Date (),
								salario:5000, telefono:'061409347855', bono:10.45343
							}

						];
						$scope.ordenarPor=function(orden) {
							$scope.ordenSeleccionado=orden;
						};
});