var turmaFactory = function($http){

    var baseUrl = "http://127.0.0.1:5000";

    var _cadastrar = function(turma){
      return $http.post(baseUrl + "/turma", turma)
    };

    var _atualizar = function(turma){
      return $http.put(baseUrl + "/turma/" + encodeURI(id), turma)
    };

    var _buscarPorId = function(id){
      return $http.get(baseUrl + "/turmas/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/turmas")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("turmaApi", turmaFactory);
