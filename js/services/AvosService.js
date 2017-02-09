app.service('AvosService', function ($http) {
    /**
     * Consulta os avós
     * @returns {*}
     */
    var get = function () {
        return $http.get('data/avos.json');
    };

    return {
        get: get
    }
});