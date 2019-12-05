var cursosController = function($scope, $mdToast, cursoApi) {

  $scope.cursos = [];

  let listar = function() {
      cursoApi.listar(nome)
        .then(function(response) {
          $scope.cursos = response.data;
        })
        .catch(function(error) {

        });
  };

  $scope.pesquisar = function(nome) {
    if (nome.length >= 3) {
      cursoApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.cursos = response.data;
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

app.controller('CursosController', cursosController);
