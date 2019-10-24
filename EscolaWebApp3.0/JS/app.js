//Inicializando Módulos.
let nomeApp = "EscolaWebApp3";
let modulos = ["ngMessages"];
var app = angular.module(nomeApp, modulos);

//Estrutura básica de uma função para um controller.
var indexController = function($scope){
  $scope.nome = "";

  $scope.welcome = function(){
    let nome = $scope.nome;
    $scope.mensagem = "Olá, " + nome + "!";
  }
}

app.controller('IndexController', indexController);

var alunoController = function($scope){
  $scope.nome = "";
  $scope.matricula = "";
  $scope.cpf = "";
  $scope.nascimento = "";
}

app.controller('AlunoController', alunoController);

var campusController = function($scope){
  $scope.sigla = "";
  $scope.cidade = "";
}

app.controller('CampusController', campusController);

var cursoController = function($scope){
  $scope.nome = "";
  $scope.turno = "";
}

app.controller('CursoController', cursoController);

var disciplinaController = function($scope){
  $scope.nome = "";
}

app.controller('DisciplinaController', disciplinaController);

var enderecoController = function($scope){
  $scope.logradouro = "";
  $scope.complemento = "";
  $scope.bairro = "";
  $scope.cep = "";
  $scope.numero = "";
}

app.controller('EnderecoController', enderecoController);

var escolaController = function($scope){
  $scope.nome = "";
}

app.controller('EscolaController', escolaController);

var professorController = function($scope){
  $scope.nome = "";
}

app.controller('ProfessorController', professorController);

var turmaController = function($scope){
  $scope.nome = "";
}

app.controller('TurmaController', turmaController);

var turnoController = function($scope){
  $scope.nome = "";
}

app.controller('TurnoController', turnoController);
