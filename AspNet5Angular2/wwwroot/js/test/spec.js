describe('Protractor Demo App', function () {
    it('should have a title', function () {
        browser.get('http://localhost:1124/index.html');

        expect(browser.getTitle()).toEqual('Angular 2 with ASP.NET 5');
    });
});