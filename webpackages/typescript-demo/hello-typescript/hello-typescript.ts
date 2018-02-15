declare let CubxPolymer: any;

class HelloTypescript {
    readonly is: string;
    constructor(is: string) {
        this.is = is;
    }
    /**
     *  Observe the Cubbles-Component-Model: If value for slot 'name' has changed ...
     */
    modelNameChanged: (newValue: string) => void;
    modelMessageChanged: (newValue: string) => void;
}

function updateHtmlOfElement (id: string, html: string) {
    document.getElementById(id).innerHTML = html;
}

let helloTypescriptComp = new HelloTypescript('hello-typescript');
helloTypescriptComp.modelNameChanged = function(newName) {
    updateHtmlOfElement('name', newName);
};
helloTypescriptComp.modelMessageChanged = function(newMessage) {
    updateHtmlOfElement('message', newMessage);
};
CubxPolymer(helloTypescriptComp);
