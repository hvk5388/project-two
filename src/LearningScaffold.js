import { LitElement, html, css } from 'lit';

export class LearningScaffold extends LitElement {
  static get tag() {
    return 'card-scaffold';
  }

  constructor() {
    super();
    this.type = 'math';

    /*
    Saw this on another repo and wondering what this does
    its appending subContent to the shadow Root but why and how? 
    var subContent = this.childNodes;
    console.log(subContent);
    for(var i = 0; i<subContent.length; i++){
      this.shadowRoot.appendChild(subContent[i]);
    }
*/
  }

  static get properties() {
    return {
      type: { type: String, reflect: true },
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'science') {
        this.myIcon = 'beaker';
      }
    });
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        border-color: black;
        border-style: solid;
        border-width: 1px;
        height: auto;
        width: inherit;
      }
    `;
  }

  render() {
    return html`
      <div class="body-content">
        <slot></slot>
      </div>
    `;
  }
}
