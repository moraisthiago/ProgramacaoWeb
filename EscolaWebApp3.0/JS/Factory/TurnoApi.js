var turnoFactory = function($http){

    var baseUrl = "localhost:5000";

    var _cadastrar = function(turno){
      return $http.post(baseUrl + "/turno", turno)
    };

    var _atualizar = function(turno){
      return $http.put(baseUrl + "/turno/" + encodeURI(id), turno)
    };

    var _buscarPorId = function(id){
      return $http.get(baseUrl + "/turnos/" + encodeURI(id))
    };

    var _listar = function(){
      return $http.get(baseUrl + "/turnos")
    };

    return{
      cadastrar: _cadastrar,
      atualizar: _atualizar,
      buscarPorId: _buscarPorId,
      listar: _listar
    };

}

app.factory("turnoApi", turnoFactory);
