define(['app/main'], function (main) {
  console.log('test main');
  return describe('my-library', function () {
    describe('sayHello', function () {
      it('should say Hello', function () {
        expect(1).toEqual(2);
      });
    });
  });
});
