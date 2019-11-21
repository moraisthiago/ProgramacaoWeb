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
