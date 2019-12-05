var turnosController = function($scope, $mdToast, turnoApi) {

  $scope.turnos = [];

  let listar = function() {
      turnoApi.listar(nome)
        .then(function(response) {
          $scope.turnos = response.data;
        })
        .catch(function(error) {

        });
  };

  $scope.pesquisar = function(nome) {
    if (nome.length >= 3) {
      turnoApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.turnos = response.data;
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

app.controller('TurnosController', turnosController);
