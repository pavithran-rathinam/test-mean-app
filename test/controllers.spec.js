describe('Controllers module', function () {
    var controller;
    var addViewController;
    var scope;
    var dataService = {
        getData: function () { },
        saveData: function () { }
    };
    var window = {
        alert: function () { }
    }
    var getDataRes = { "success": true, "data": { "_id": "5da8e33df32d1923ecb7c2a1", "input1": 10, "input2": 5, "result": 50, "createdAt": "2019-10-17T21:55:09.481Z", "updatedAt": "2019-10-17T21:55:09.481Z", "__v": 0 } }
    var saveDataRes = { "success": true, "data": { "_id": "5da9cf7d30ca19175c3f6db2", "input1": 10, "input2": 10, "result": 100, "createdAt": "2019-10-18T14:43:09.674Z", "updatedAt": "2019-10-18T14:43:09.674Z", "__v": 0 } };

    var func = {
        getValues: function () { }
    }

    beforeEach(module('controllers'));
    beforeEach(module('services'));

    beforeEach(function () {
        inject(function ($controller, $rootScope, $compile) {
            scope = $rootScope.$new();
            spyOn(dataService, 'getData').and.returnValue(Promise.resolve(getDataRes));
            spyOn(dataService, 'saveData').and.returnValue(Promise.resolve(saveDataRes));
            spyOn(window, 'alert');
            spyOn(func, 'getValues').and.returnValue([1, 20]);
            controller = $controller('homeViewController', {
                $scope: scope,
                dataService: dataService
            });
            addViewController = $controller('addInputViewController', {
                $scope: scope,
                dataService: dataService
            });
            spyOn(addViewController, 'getValues').and.callThrough();
            spyOn(addViewController, 'saveData').and.callThrough();
        });
    });

    it('To home view controller', function () {
        expect(dataService.getData).toHaveBeenCalled()
        if (getDataRes.success) {
            scope.lastSavedData = getDataRes;
        } else {
            var failerAlertMsg = 'Unable to get last saved inputs.';
            window.alert(failerAlertMsg);
            expect(window.alert).toHaveBeenCalledWith(failerAlertMsg);
        }
    });

    it('To add input view controller', function () {
        var val = [1, 20];
        var result = 20;
        addViewController.getValues();
        expect(addViewController.getValues).toHaveBeenCalled();
        addViewController.saveData(val, result);
        if (result) {
            val.forEach((num, i) => {
                expect(num).toEqual(val[i]);
            })
        }
        if (saveDataRes.success) {
            var succAlertMsg = 'Inputs saved successfully.';
            window.alert(succAlertMsg);
            expect(window.alert).toHaveBeenCalledWith(succAlertMsg);
        } else {
            var failerAlertMsg = 'Unable to save inputs. Please try after sometime';
            window.alert(failerAlertMsg);
            expect(window.alert).toHaveBeenCalledWith(failerAlertMsg);
        }
    });
});