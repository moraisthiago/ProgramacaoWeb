var professorController = function($scope, $mdToast, professorApi, $state){

  $scope.professor = {};

  $scope.cadastrar = function() {
    // Criar uma cópia do professor do $scope.
    let professor = angular.copy($scope.professor);

    // Limpar formulário.
    limparFormulario();

    // Redirecionamento de página.
    $state.transitionTo('professores', {reload: true, inherit: false, notify: true});

    professorApi.cadastrar(professor)
      .then(function(response) {
        console.log(response)
        var toast = $mdToast.simple()
            .textContent('Professor cadastrado com sucesso!')
            .position('bottom left')
            .action('Entendi')
            .hideDelay(6000);
        $mdToast.show(toast);

      })
      .catch(function(error) {
        console.log(error)
        var toast = $mdToast.simple()
            .textContent('Algum problema ocorreu no envio dos dados.')
            .position('bottom left')
            .action('Entendi')
            .hideDelay(6000);
        $mdToast.show(toast);
      });
  };

  let limparFormulario = function () {

        // Reinicializa a variável professor.
        angular.copy({}, $scope.professor);

        // Reinicializa o estado do campo para os eventos e validação.
        // É necessário indicar o atributo name no formulário <form>
        $scope.professorForm.$setPristine();
        $scope.professorForm.$setUntouched();
        $scope.professorForm.$setValidity();
    }
}

app.controller('ProfessorController', professorController);
