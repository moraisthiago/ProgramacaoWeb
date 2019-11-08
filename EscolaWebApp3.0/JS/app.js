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

// Aluno - Controller
var alunoController = function($scope, $mdToast, alunoApi){

  $scope.aluno = {};

  $scope.cadastrar = function(){
    alunoApi.cadastrar($scope.aluno)
      .then(function(response) {
        console.log("Requisição enviada com sucesso!");
        console.log(response);
      })
      .catch(function(error) {
        var toast = $mdToast.simple()
          .textContent('Algum problema ocorreu no envio dos dados.')
          .position('bottom center')
          .action('Entendi')
          .hideDelay(5000);
        $mdToast.show(toast);
      });
  }
}

app.controller('AlunoController', alunoController);

// Aluno - Factory
var alunoFactory = function($http){

    var baseUrl = "localhost:5000";

    var _cadastrar = function(aluno){
      return $http.post(baseUrl + "/aluno", aluno)
    };

    var _atualizar = function(aluno){
      return $http.put(baseUrl + "/aluno/" + encodeURI(id), aluno)
    };

    var _buscarPorId = function(id){
      return $http.get(baseUrl + "/alunos/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/alunos")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("alunoApi", alunoFactory);

// Campus - Controller
var campusController = function($scope, $mdToast, campusApi){

  $scope.campus = {};

  $scope.cadastrar = function(){
    campusApi.cadastrar($scope.campus)
      .then(function(response) {
        console.log("Requisição enviada com sucesso!");
        console.log(response);
      })
      .catch(function(error) {
        var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu no envio dos dados.')
                    .position('bottom center')
                    .action('Entendi')
                    .hideDelay(5000);
        $mdToast.show(toast);
      });
  }
}

app.controller('CampusController', campusController);

// Campus - Factory
var campusFactory = function($http){

    var baseUrl = "localhost:5000";

    var _cadastrar = function(campus){
      return $http.post(baseUrl + "/campus")
    };

    var _atualizar = function(campus){
      return $http.put(baseUrl + "/campus")
    };

    var _buscarPorId = function(id){
      return $http.get(baseUrl + "/campi/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/campi")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("campusApi", campusFactory);

// Curso - Controller
var cursoController = function($scope, $mdToast, cursoApi){

  $scope.curso = {};

  $scope.cadastrar = function(){
    cursoApi.cadastrar($scope.curso)
      .then(function(response) {
        console.log("Requisição enviada com sucesso!");
        console.log(response);
      })
      .catch(function(error) {
        var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu no envio dos dados.')
                    .position('bottom center')
                    .action('Entendi')
                    .hideDelay(5000);
        $mdToast.show(toast);
      });
  }
}

app.controller('CursoController', cursoController);

// Curso - Factory
var cursoFactory = function($http){

    var baseUrl = "localhost:5000";

    var _cadastrar = function(curso){
      return $http.post(baseUrl + "/curso", campus)
    };

    var _atualizar = function(curso){
      return $http.put(baseUrl + "/curso/" + encodeURI(id), campus)
    };

    var _buscarPorId = function(id){
      return $http.get(baseUrl + "/cursos/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/cursos")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("cursoApi", cursoFactory);

// Disciplina - Controller
var disciplinaController = function($scope, $mdToast, disciplinaApi){

  $scope.disciplina = {};

  $scope.cadastrar = function(){
    disciplinaApi.cadastrar($scope.disciplina)
      .then(function(response) {
        console.log("Requisição enviada com sucesso!");
        console.log(response);
      })
      .catch(function(error) {
        var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu no envio dos dados.')
                    .position('bottom center')
                    .action('Entendi')
                    .hideDelay(5000);
        $mdToast.show(toast);
      });
  }
}

app.controller('DisciplinaController', disciplinaController);

// Disciplina - Factory
var disciplinaFactory = function($http){

    var baseUrl = "localhost:5000";

    var _cadastrar = function(disciplina){
      return $http.post(baseUrl + "/disciplina", disciplina)
    };

    var _atualizar = function(disciplina){
      return $http.put(baseUrl + "/disciplina/" + encodeURI(id), disciplinas)
    };

    var _buscarPorId = function(id){
      return $http.get(baseUrl + "/disciplinas/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/disciplinas")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("disciplinaApi", disciplinaFactory);

// Endereço - Controller
var enderecoController = function($scope, $mdToast, enderecoApi){

  $scope.endereco = {};

  $scope.cadastrar = function(){
    enderecoApi.cadastrar($scope.endereco)
      .then(function(response) {
        console.log("Requisição enviada com sucesso!");
        console.log(response);
      })
      .catch(function(error) {
        var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu no envio dos dados.')
                    .position('bottom center')
                    .action('Entendi')
                    .hideDelay(5000);
        $mdToast.show(toast);
      });
  }
}

app.controller('EnderecoController', enderecoController);

// Endereço - Factory
var enderecoFactory = function($http){

    var baseUrl = "localhost:5000";

    var _cadastrar = function(endereco){
      return $http.post(baseUrl + "/endereco", endereco)
    };

    var _atualizar = function(endereco){
      return $http.put(baseUrl + "/endereco/" + encodeURI(id), endereco)
    };

    var _buscarPorId = function(id){
      return $http.get(baseUrl + "/enderecos/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/enderecos")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("enderecoApi", enderecoFactory);

// Escola - Controller
var escolaController = function($scope, $mdToast, escolaApi){

  $scope.escola = {};

  $scope.cadastrar = function(){
    escolaApi.cadastrar($scope.escola)
      .then(function(response) {
        console.log("Requisição enviada com sucesso!");
        console.log(response);
      })
      .catch(function(error) {
        var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu no envio dos dados.')
                    .position('bottom center')
                    .action('Entendi')
                    .hideDelay(5000);
        $mdToast.show(toast);
      });
  }
}

app.controller('EscolaController', escolaController);

// Escola - Factory
var escolaFactory = function($http){

    var baseUrl = "localhost:5000";

    var _cadastrar = function(escola){
      return $http.post(baseUrl + "/escola", escola)
    };

    var _atualizar = function(escola){
      return $http.put(baseUrl + "/escola/" + encodeURI(id), escola)
    };

    var _buscarPorId = function(id){
      return $http.get(baseUrl + "/escolas/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/escolas")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("escolaApi", escolaFactory);

// Professor - Controller
var professorController = function($scope, $mdToast, professorApi){

  $scope.professor = {};

  $scope.cadastrar = function(){
    professorApi.cadastrar($scope.professor)
      .then(function(response) {
        console.log("Requisição enviada com sucesso!");
        console.log(response);
      })
      .catch(function(error) {
        var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu no envio dos dados.')
                    .position('bottom center')
                    .action('Entendi')
                    .hideDelay(5000);
        $mdToast.show(toast);
      });
  }
}

app.controller('ProfessorController', professorController);

// Professor - Factory
var professorFactory = function($http){

    var baseUrl = "localhost:5000";

    var _cadastrar = function(professor){
      return $http.post(baseUrl + "/professor", professor)
    };

    var _atualizar = function(professor){
      return $http.put(baseUrl + "/professor/" + encodeURI(id), professor)
    };

    var _buscarPorId = function(id){
      return $http.get(baseUrl + "/professores/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/professores")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("professorApi", professorFactory);

// Turma - Controller
var turmaController = function($scope, $mdToast, turmaApi){

  $scope.turma = {};

  $scope.cadastrar = function(){
    turmaApi.cadastrar($scope.turma)
      .then(function(response) {
        console.log("Requisição enviada com sucesso!");
        console.log(response);
      })
      .catch(function(error) {
        var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu no envio dos dados.')
                    .position('bottom center')
                    .action('Entendi')
                    .hideDelay(5000);
        $mdToast.show(toast);
      });
  }
}

app.controller('TurmaController', turmaController);

// Tuma - Factory
var turmaFactory = function($http){

    var baseUrl = "localhost:5000";

    var _cadastrar = function(turma){
      return $http.post(baseUrl + "/turma", turma)
    };

    var _atualizar = function(turma){
      return $http.put(baseUrl + "/turma/" + encodeURI(id), turma)
    };

    var _buscarPorId = function(id){
      return $http.get(baseUrl + "/turmas/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/turmas")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("turmaApi", turmaFactory);

// Turno - Controller
var turnoController = function($scope, $mdToast, turnoApi){

  $scope.turno = {};

  $scope.cadastrar = function(){
    turnoApi.cadastrar($scope.turno)
      .then(function(response) {
        console.log("Requisição enviada com sucesso!");
        console.log(response);
      })
      .catch(function(error) {
        var toast = $mdToast.simple()
                    .textContent('Algum problema ocorreu no envio dos dados.')
                    .position('bottom center')
                    .action('Entendi')
                    .hideDelay(5000);
        $mdToast.show(toast);
      });
  }
}

app.controller('TurnoController', turnoController);

// Turno - Factory
var turnoFactory = function($http){

    var baseUrl = "localhost:5000";

    var _cadastrar = function(turno){
      return $http.post(baseUrl + "/turno", turno)
    };

    var _atualizar = function(turno){
      return $http.put(baseUrl + "/turno/" + encodeURI(id), turno)
    };

    var _buscarPorId = function(id){
      return $http.get(baseUrl + "/turnos/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/turnos")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("turnoApi", turnoFactory);
