ar turnoController = function($scope, $mdToast, turnoApi){

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
