var enderecoFactory = function($http){

  var baseUrl = "localhost:5000";

  var _cadastrar = function(endereco){
    return $http.post(baseUrl + "/endereco", endereco)
  };

  var _atualizar = function(endereco){
    return $http.put(baseUrl + "/endereco/" + encodeURI(id), endereco)
  };

  var _buscarPorId = function(id){
      return $http.get(baseUrl + "/enderecos/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/enderecos")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("enderecoApi", enderecoFactory);
