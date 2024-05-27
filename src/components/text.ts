import { Component } from "../component"
export class TextComponent extends Component {
    static cid = "component.id"

    constructor(parent: Component, text: string, font: string) {
        super(parent);
        (this.attributes as any).text = text;
        (this.attributes as any).font = font;
    }

    public render(): HTMLElement {
        const text = (this.attributes as any).text;
        const font = (this.attributes as any).font;
        // don't render children as TextComponents aren't supposed to have children anyway
        const element = document.createElement("p")
        element.style.fontFamily = font ?? "Arial, sans-serif"
        element.textContent = text ?? "[ℹ] You may want to fill out the text attribute";

        return element
    }
}