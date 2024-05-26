import { Component } from "./component"
export { Component }

console.log("[ℹ️] Swore Starting!")

let app_component: Component;

export function selectMainComponent(component: Component) {
    app_component = component;
    component.onAttributesChanged((thisC: Component) => {
        thisC.render()
    })
}