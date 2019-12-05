var turmasController = function($scope, $mdToast, turmaApi) {

  $scope.turmas = [];

  let listar = function() {
      turmaApi.listar(nome)
        .then(function(response) {
          $scope.turmas = response.data;
        })
        .catch(function(error) {

        });
  };

  $scope.pesquisar = function(nome) {
    if (nome.length >= 3) {
      turmaApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.turmas = response.data;
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

app.controller('TurmasController', turmasController);
