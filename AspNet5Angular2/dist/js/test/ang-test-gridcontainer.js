describe('Angular 2 Grid Creation Tests', function () {

    browser.get('http://localhost:1124/index.html');
    it('Title of the page is present', function () {
        expect(browser.getTitle()).toEqual('Angular 2 with ASP.NET 5');
    });

    it('GridContainer is created with tag-name: grid-container', function () {
        expect(element(by.tagName('grid-container')).isPresent()).toBe(true);
    });

    it('Grid is created with tag-name: grid', function () {
        expect(element(by.tagName('grid')).isPresent()).toBe(true);
    });

    it('Table is created with id: gridTable', function () {
        expect(element(by.id('gridTable')).isPresent()).toBe(true);
    });

    it('Table has a thead element', function () {
        expect(element(by.id('gridThead')).isPresent()).toBe(true);
    });

    it('Table has a tbody element', function () {
        expect(element(by.id('gridTbody')).isPresent()).toBe(true);
    });
});