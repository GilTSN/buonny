app.service('PaisService', function ($http) {
    /**
     * Consulta os pais
     * @returns {*}
     */
    var get = function () {
        return $http.get('data/pais.json');
    };

    return {
        get: get
    }
});