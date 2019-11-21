var disciplinaFactory = function($http){

    var baseUrl = "localhost:5000";

    var _cadastrar = function(disciplina){
      return $http.post(baseUrl + "/disciplina", disciplina)
    };

    var _atualizar = function(disciplina){
      return $http.put(baseUrl + "/disciplina/" + encodeURI(id), disciplinas)
    };

    var _buscarPorId = function(id){
      return $http.get(baseUrl + "/disciplinas/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/disciplinas")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("disciplinaApi", disciplinaFactory);
