define(['app/add'], function (add) {
  describe('add', function () {
    it('should add 2 + 2', function () {
      expect(add(2, 2)).toEqual(4);
    });
  });
});
