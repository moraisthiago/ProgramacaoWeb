var turmaController = function($scope, $mdToast, turmaApi, $state){

  $scope.turma = {};

  $scope.cadastrar = function() {
    // Criar uma cópia do turma do $scope.
    let turma = angular.copy($scope.turma);

    // Limpar formulário.
    limparFormulario();

    // Redirecionamento de página.
    $state.transitionTo('turmas', {reload: true, inherit: false, notify: true});

    turmaApi.cadastrar(turma)
      .then(function(response) {
        console.log(response)
        var toast = $mdToast.simple()
            .textContent('Turma cadastrada com sucesso!')
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

        // Reinicializa a variável turma.
        angular.copy({}, $scope.turma);

        // Reinicializa o estado do campo para os eventos e validação.
        // É necessário indicar o atributo name no formulário <form>
        $scope.turmaForm.$setPristine();
        $scope.turmaForm.$setUntouched();
        $scope.turmaForm.$setValidity();
    }
}

app.controller('TurmaController', turmaController);
