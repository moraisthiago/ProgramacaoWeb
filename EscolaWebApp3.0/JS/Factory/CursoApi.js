var cursoFactory = function($http){

    var baseUrl = "localhost:5000";

    var _cadastrar = function(curso){
      return $http.post(baseUrl + "/curso", campus)
    };

    var _atualizar = function(curso){
      return $http.put(baseUrl + "/curso/" + encodeURI(id), campus)
    };

    var _buscarPorId = function(id){
      return $http.get(baseUrl + "/cursos/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/cursos")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("cursoApi", cursoFactory);
