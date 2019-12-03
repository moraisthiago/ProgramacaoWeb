var escolaFactory = function($http){

    var baseUrl = "http://127.0.0.1:5000";

    var _cadastrar = function(escola){
      return $http.post(baseUrl + "/escola", escola)
    };

    var _atualizar = function(escola){
      return $http.put(baseUrl + "/escola/" + encodeURI(id), escola)
    };

    var _buscarPorId = function(id){
      return $http.get(baseUrl + "/escolas/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/escolas")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("escolaApi", escolaFactory);
