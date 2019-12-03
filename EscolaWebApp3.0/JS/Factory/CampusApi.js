var campusFactory = function($http){

    var baseUrl = "http://127.0.0.1:5000";

    var _cadastrar = function(campus){
      return $http.post(baseUrl + "/campus")
    };

    var _atualizar = function(campus){
      return $http.put(baseUrl + "/campus")
    };

    var _buscarPorId = function(id){
      return $http.get(baseUrl + "/campi/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/campi")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("campusApi", campusFactory);
