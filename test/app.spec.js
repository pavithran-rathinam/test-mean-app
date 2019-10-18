
describe('Initiate app', function () {
  var $urlRouterProvider;

  beforeEach(module('ui.router'));
  beforeEach(module('ngMock'));
  beforeEach(module('testApp'));

  beforeEach(module(function (_$urlRouterProvider_) {
    $urlRouterProvider = _$urlRouterProvider_;
    $urlRouterProvider.deferIntercept();
    spyOn($urlRouterProvider, 'otherwise');
  }));

  beforeEach(inject(function () { }));

  it('to set initial route provider', function () {
    expect($urlRouterProvider.otherwise());
  });
});