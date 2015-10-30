'use strict';

describe('Service: JiffVid', function () {

  // load the service's module
  beforeEach(module('jiffApp'));

  // instantiate service
  var JiffVid;
  beforeEach(inject(function (_JiffVid_) {
    JiffVid = _JiffVid_;
  }));

  it('should do something', function () {
    expect(!!JiffVid).toBe(true);
  });

});
