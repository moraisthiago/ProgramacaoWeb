var cursoController = function($scope, $mdToast, cursoApi){

  $scope.curso = {};

  $scope.cadastrar = function() {
    // Criar uma cópia do curso do $scope.
    let curso = angular.copy($scope.curso);

    cursoApi.cadastrar(curso)
      .then(function(response) {
        var toast = $mdToast.simple()
            .textContent('Curso cadastrado com sucesso!')
            .position('bottom left')
            .action('Entendi')
            .hideDelay(6000);
        $mdToast.show(toast);

        limparFormulario();
      })
      .catch(function(error) {
        var toast = $mdToast.simple()
            .textContent('Algum problema ocorreu no envio dos dados.')
            .position('bottom left')
            .action('Entendi')
            .hideDelay(6000);
        $mdToast.show(toast);
      });
  };

  let limparFormulario = function () {

        // Reinicializa a variável curso.
        angular.copy({}, $scope.curso);

        // Reinicializa o estado do campo para os eventos e validação.
        // É necessário indicar o atributo name no formulário <form>
        $scope.cursoForm.$setPristine();
        $scope.cursoForm.$setUntouched();
        $scope.cursoForm.$setValidity();
    }
}

app.controller('CursoController', cursoController);
