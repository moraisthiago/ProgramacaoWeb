var professoresController = function($scope, $mdToast, professorApi) {

  $scope.professores = [];

  let listar = function() {
      professorApi.listar(nome)
        .then(function(response) {
          $scope.professores = response.data;
        })
        .catch(function(error) {

        });
  };

  $scope.pesquisar = function(nome) {
    if (nome.length >= 3) {
      professorApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.professores = response.data;
        })
        .catch(function(error) {

        });
    }
  };

  $scope.limparBusca = function() {
    $scope.nome = "";
    $scope.apresentacoes = [];
  };

}

app.controller('ProfessorController', professoresController);
