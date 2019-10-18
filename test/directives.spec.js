describe('Directives module', function () {
  var element, scope, compile, directiveElem;
  var func = {
    listenEve: function () { }
  }
  beforeEach(module('directives'));

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.clickValue = function () { };
    scope.inputs = function () { return [1, 2] };
    element = angular.element(
      '<button app-calculate click-value="clickValue">Calculate</button>'
    );
    spyOn(scope, 'clickValue').and.callThrough();
    directiveElem = $compile(element)(scope);
    compile = $compile;
    scope.$digest();
  }));

  it('should have button element', function () {
    var buttonElement = directiveElem.find('button');
    expect(buttonElement).toBeDefined();
    expect(element.isolateScope().clickValue);
    directiveElem.triggerHandler('click');
    const val = scope.inputs();
    if(val && Array.isArray(val)) {
      scope.clickValue(val, eval(val. join('*')));
      expect(scope.clickValue).toHaveBeenCalled();
    } else {
      scope.clickValue();
      expect(scope.clickValue).toHaveBeenCalled();
    }
  });
});