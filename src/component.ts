export class Component {
    static cid = "component";
    public attributes: object;
    public parent?: Component;
    public children: Component[];

    constructor(parent?: Component) {
        this.attributes = {};
        this.parent = parent;
        this.children = [];

        this.parent?.children.push(this)
    }

    protected _renderChildren(): HTMLElement[] {
        let rendered: HTMLElement[] = [];

        this.children.forEach(torender => {
            rendered.push(torender.render())
        });

        return rendered;
    }

    public render(): HTMLElement {
        console.warn("[⚠️] This component is not meant to be rendered/does not have a proper render function. Rendering nothing...")
        return document.createElement("div")
    }

    //TODO: Make this more efficent and maybe make it so you can disconnect
    public onAttributesChanged(callback: Function) {
        let last = JSON.stringify(this.attributes);
        setTimeout(() => {
            const current = JSON.stringify(this.attributes)
            if (current !== last) {
                callback(this)
                last = current
            }
        }, 1000);
    }
}