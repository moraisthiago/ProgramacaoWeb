var cursoFactory = function($http){

    var baseUrl = "http://127.0.0.1:5000";

    var _cadastrar = function(curso){
      return $http.post(baseUrl + "/curso", curso)
    };

    var _atualizar = function(curso){
      return $http.put(baseUrl + "/curso/" + encodeURI(id), curso)
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
