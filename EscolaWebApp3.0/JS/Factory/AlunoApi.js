var alunoFactory = function($http){

    var baseUrl = "http://127.0.0.1:5000";

    var _cadastrar = function(aluno){
      return $http.post(baseUrl + "/aluno", aluno)
    };

    var _atualizar = function(aluno){
      return $http.put(baseUrl + "/aluno/" + encodeURI(id), aluno)
    };

    var _buscarPorId = function(id){
      return $http.get(baseUrl + "/alunos/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/alunos")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("alunoApi", alunoFactory);
