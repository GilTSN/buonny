app.controller('IndexController', function ($scope, AvosService, PaisService, FilhosService) {
    $scope.avos = [];
    $scope.pais = [];
    $scope.filhos = [];
    $scope.idAvo = null;
    $scope.idPais = [];

    /**
     * Consulta todos os avós
     */
    AvosService.get().then(function (response) {
        $scope.avos = response.data;
    });

    /**
     * Ao selecionar avô
     */
    $scope.$watch('idAvo', function () {
        $scope.idPais = [];

        if ($scope.idAvo) {
            PaisService.get().then(function (response) {
                $scope.pais = response.data.filter(function (item) {
                    return item.avo_id == $scope.idAvo;
                });
            });
        }
    });

    /**
     * Ao marcar/desmarcar pais
     */
    $scope.changePais = function () {
        listarFilhos();
    };

    /**
     * Listar filhos
     */
    var listarFilhos = function () {
        // filtra os pais selecionados
        var paisSelecionados = $scope.idPais.filter(function (item) {
            return item != false;
        });

        // consulta os filhos dos pais selecionados
        FilhosService.get().then(function (response) {
            if (paisSelecionados.length == 2) {
                var somaIds = paisSelecionados.reduce(function (a, b) {
                    return a + b;
                }, 0);

                $scope.filhos = response.data.filter(function (item) {
                    return item.id == somaIds;
                });

            } else {
                $scope.filhos = [];
            }
        });
    }
});