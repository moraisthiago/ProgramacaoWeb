// Inicializando Módulos.
let nomeApp = "EscolaWebApp3";
let modulos = ['ngMaterial', 'ngMessages'];

var app = angular.module(nomeApp, modulos);

// Estrutura básica de uma função para um controller.
var indexController = function($scope){
  $scope.nome = "";

  $scope.welcome = function(){
    let nome = $scope.nome;
    $scope.mensagem = "Olá, " + nome + "!";
  }
}
app.controller('IndexController', indexController);
