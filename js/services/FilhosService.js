app.service('FilhosService', function ($http) {
    /**
     * Consulta os filhos
     * @returns {*}
     */
    var get = function () {
        return $http.get('data/filhos.json');
    };

    return {
        get: get
    }
});