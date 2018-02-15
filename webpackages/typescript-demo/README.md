## typescript-demo
Webpackage containing components to show the use of typescript to code cubbles logic
### Webpackage Artifacts
| Name | Type | Description | Links |
|---|---|---|---|
| **docs** | Application | Generated webpackage documentation. | [docs](https://cubbles.world/sandbox/typescript-demo@1.0.0-SNAPSHOT/docs/index.html) |
| **hello-typescript** | Elementary Component | Elementary to show how typescript can be used within the Cubbles platform | [demo](https://cubbles.world/sandbox/typescript-demo@1.0.0-SNAPSHOT/hello-typescript/demo/index.html) [docs](https://cubbles.world/sandbox/typescript-demo@1.0.0-SNAPSHOT/hello-typescript/docs/index.html) |
### Use of components
The html file should contain the desire component using its tag, e.g. the `<hello-typescript>`, as follows:
```html
<hello-typescript cubx-webpackage-id="typescript-demo@1.0.0-SNAPSHOT"></hello-typescript>
```
Note that the `webpackageId` should be provided as attribute, which in this case is: `typescript-demo@1.0.0-SNAPSHOT`.

Additionally, this component can be initialized using the `<cubx-core-slot-init>` tag (available from _cubx.core.rte@1.9.0_).
For example, lets initialize the `name` slot to get the basic package of ckeditor:

```html
<hello-typescript cubx-webpackage-id="typescript-demo@1.0.0-SNAPSHOT">
    <!--Initilization-->
    <cubx-core-init style="display:none">
        <cubx-core-slot-init slot="name">"John Doe"</cubx-core-slot-init>
    </cubx-core-init>
</hello-typescript>
```

Or it can be initialized and later manipulated from Javascript as follows:

```javascript
var component= document.querySelector('hello-typescript');
// Wait until CIF is ready
document.addEventListener('cifReady', function() {
  // Manipulate slots
  component.setName("John Doe");
});
```

[Want to get to know the Cubbles Platform?](https://cubbles.github.io)