import { LitElement, html, css } from 'lit';

export class LearningScaffold extends LitElement {
  static get tag() {
    return 'card-scaffold';
  }

  constructor() {
    super();
    this.type = 'math';
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
  // Unused slot for body content here?
  // Can I uset this to pass a button in?

  render() {
    return html`
      <div class="body-content">
        <slot></slot>
      </div>
    `;
  }
}
