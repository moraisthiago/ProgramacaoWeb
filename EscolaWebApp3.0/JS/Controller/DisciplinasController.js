var disciplinasController = function($scope, $mdToast, disciplinaApi) {

  $scope.disciplinas = [];

  let listar = function() {
      disciplinaApi.listar(nome)
        .then(function(response) {
          $scope.disciplinas = response.data;
        })
        .catch(function(error) {

        });
  };

  $scope.pesquisar = function(nome) {
    if (nome.length >= 3) {
      disciplinaApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.disciplinas = response.data;
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

app.controller('DisciplinaController', disciplinasController);
