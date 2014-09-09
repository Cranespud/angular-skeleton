define(['example'], function(exampleFunc) {

   describe('This should include example.js via RequireJS', function() {
      it('Should return true if argument is equal to 3', function() {
            expect(exampleFunc(3)).toBeTruthy();
            expect(exampleFunc(4)).toBeFalsy();
      });
   });
});