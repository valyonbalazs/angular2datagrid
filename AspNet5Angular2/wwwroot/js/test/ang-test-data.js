// These tests are based on the test data

describe('Angular 2 Grid Creation Tests', function () {
    browser.get('http://localhost:1124/index.html');
    it('Header row of the table', function () {
        var item = element.all(by.repeater('col of columns')).get(0);
        console.log(item);
        // expect(element.all(by.repeater('col of columns')).get(0)).getTagName().toEqual('tr');
    });
});