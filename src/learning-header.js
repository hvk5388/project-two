import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

export class LearningHeader extends SimpleColors {
  static get tag() {
    return 'learning-header';
  }

  constructor() {
    super();
    this.accentColor = 'blue';
    this.dark = false;
    this.title = 'What da dog doin??';
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          background-color: var (--simple-colors-default-theme-accent-1);
          color: var ();
        }
      `,
    ];
  }

  render() {
    return html` <div><slot></slot></div>`;
  }
}
window.customElements.define(LearningHeader.tag, LearningHeader);
