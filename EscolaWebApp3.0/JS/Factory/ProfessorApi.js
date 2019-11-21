var professorFactory = function($http){

    var baseUrl = "localhost:5000";

    var _cadastrar = function(professor){
      return $http.post(baseUrl + "/professor", professor)
    };

    var _atualizar = function(professor){
      return $http.put(baseUrl + "/professor/" + encodeURI(id), professor)
    };

    var _buscarPorId = function(id){
      return $http.get(baseUrl + "/professores/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/professores")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("professorApi", professorFactory);
