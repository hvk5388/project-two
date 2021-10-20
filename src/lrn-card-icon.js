import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

export class LrnCardIcon extends SimpleColors {
  static get tag() {
    return 'lrn-card-icon';
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          background-color: var(--simple-colors-default-accent);
          border: 2px solid black;
        }
      `,
    ];
  }

  render() {
    return html`<div>Icon Image<slot></slot></div>`;
  }
}
window.customElements.define(LrnCardIcon.tag, LrnCardIcon);
