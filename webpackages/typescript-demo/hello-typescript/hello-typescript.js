var HelloTypescript = /** @class */ (function () {
    function HelloTypescript(is) {
        this.is = is;
    }
    return HelloTypescript;
}());
function updateHtmlOfElement(id, html) {
    document.getElementById(id).innerHTML = html;
}
var helloTypescriptComp = new HelloTypescript('hello-typescript');
helloTypescriptComp.modelNameChanged = function (newName) {
    updateHtmlOfElement('name', newName);
};
helloTypescriptComp.modelMessageChanged = function (newMessage) {
    updateHtmlOfElement('message', newMessage);
};
CubxPolymer(helloTypescriptComp);
