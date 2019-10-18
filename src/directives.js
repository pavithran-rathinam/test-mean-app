(function () {
    'use strict';

    angular.module('directives', [])
        .directive('appCalculate', appCalculate);

    function appCalculate() {
        return {
            scope: {
                inputs: '&',
                clickValue: '='
            },
            link: link 
        }

        /**
         * Link
         * - Link method for app calculate directive
         * @param {*} scope 
         * @param {*} el 
         */
        function link(scope, el) {
            el.bind('click', listenEve);

            /**
             * Listen Eve
             * - Will listen click event of calculate button
             */
            function listenEve() {
                const val  = scope.inputs();
                if(val && Array.isArray(val)) {
                    scope.clickValue(val, eval(val. join('*')));
                } else{
                    scope.clickValue();
                }
            }
        }
    }
})();