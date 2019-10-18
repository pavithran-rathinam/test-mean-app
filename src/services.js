(function () {
    'use strict';

    angular.module('services', ['ngResource'])
        .factory('dataService', dataService);

    function dataService($resource) {
        const getApi = $resource('/getData');
        const saveApi = $resource('/saveData');

        return {
            getData: getData,
            saveData: saveData
        }

        /**
         * Get Data
         * - API integration for GET.
         */
        function getData() {
            return getApi.get().$promise;
        }

        /**
         * Save Data
         * - API integration for POST.
         * @param {*} data 
         */
        function saveData(data) {
            return saveApi.save(data).$promise;
        }
    }
})();