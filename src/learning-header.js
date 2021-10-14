//git import {LitElements, html, css} from "lit";
import {SimpleColors} from "@lrnwebcomponents/simple-colors/simple-colors.js"
export class LearningHeader extends SimpleColors{

    static get tag(){
        return 'learning-header';
    }
    constructor(){
        super();
        this.accentColor = "pink";
        this.dark = false;
        this.title= "Stuff";
    }
    static get properties(){
        return {
            ...super.properties,
            title: {type: String}
        }
    }

    static get styles(){
        return[ ...super.styles,
            css`
            :host{
                display: block;
                background-color: var (--simple-colors-default-theme-accent-1);
                color: "black";
            }`
        ];
    }
    render() {
        return html` <div>This is my header<slot></slot></div>`;
    }

}
window.customElements.define(LearningHeader.tag, LearningHeader);
