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
