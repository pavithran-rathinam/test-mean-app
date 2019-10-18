describe('Services module', function() {
    var GET_API_URL = '/getData';
    var POST_API_URL = '/saveData';
    var httpBackend, dataService;
    var getDataRes = { "success": true, "data": { "_id": "5da8e33df32d1923ecb7c2a1", "input1": 10, "input2": 5, "result": 50, "createdAt": "2019-10-17T21:55:09.481Z", "updatedAt": "2019-10-17T21:55:09.481Z", "__v": 0 } }
    var saveDataRes = { "success": true, "data": { "_id": "5da9cf7d30ca19175c3f6db2", "input1": 10, "input2": 10, "result": 100, "createdAt": "2019-10-18T14:43:09.674Z", "updatedAt": "2019-10-18T14:43:09.674Z", "__v": 0 } };

    beforeEach(module('services'));

    beforeEach(inject(function($rootScope, $controller, $injector, _dataService_) {
        $scope = $rootScope.$new();
        httpBackend = $injector.get('$httpBackend');
        dataService = _dataService_;
      }));

      afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
      });

      it("should be a resource", function() {
        expect(typeof dataService.getData).toBe('function');
        expect(typeof dataService.saveData).toBe('function');
      });

      it('getData should return a object', function () {
        httpBackend.when('GET', GET_API_URL).respond(getDataRes);
        httpBackend.when('POST', POST_API_URL).respond(saveDataRes);
        dataService.getData();
        dataService.saveData();
        httpBackend.flush();
      });
});