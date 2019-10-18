(function () {
    'use strict';

    angular.module('controllers', [])
        .controller('homeViewController', homeViewController)
        .controller('addInputViewController', addInputViewController);

    /**
     * Home View Controller
     * @param {*} dataService 
     */
    function homeViewController(dataService) {
        var home = this;

        getDataOnLoad();

        function getDataOnLoad() {
            dataService.getData().then(res => {
                if (res.success) {  
                    home.lastSavedData = res.data;
                } else {
                    alert('Unable to get last saved inputs.');
                }
            });
        }
    }

    /**
     * Add Input View Controller
     * @param {*} dataService 
     */
    function addInputViewController(dataService) {
        var addInput = this;
        addInput.saveData = saveData;
        addInput.getValues = getValues;

        /**
         * Get Values
         * - Will return values as array 
         */
        function getValues() {
            return [addInput.input1, addInput.input2]
        }

        /**
         * Save Data
         * - Will save inputs with result to DB
         * @param {*} val 
         * @param {*} result 
         */
        function saveData(val, result) {
            var payload = {};
            if (result) {
                val.forEach((element, index) => {
                    payload['input' + (index + 1)] = Number(element);
                });
                payload.result = result;
            }
            addInput.result = result;
            dataService.saveData(payload).then(res => {
                if (res.success) {
                    alert('Inputs saved successfully.');
                } else {
                    alert('Unable to save inputs. Please try after sometime');
                }
            });
        }
    }
})();