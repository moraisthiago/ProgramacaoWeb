var enderecosController = function($scope, $mdToast, enderecoApi) {

  $scope.enderecos = [];

  let listar = function() {
      enderecoApi.listar(nome)
        .then(function(response) {
          $scope.enderecos = response.data;
        })
        .catch(function(error) {

        });
  };

  $scope.pesquisar = function(nome) {
    if (nome.length >= 3) {
      enderecoApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.enderecos = response.data;
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

app.controller('EnderecosController', enderecosController);
