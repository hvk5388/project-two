import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

export class LearningSubHeader extends SimpleColors {
  static get tag() {
    return 'learning-sub-header';
  }

  constructor() {
    super();
    this.accentColor = 'pink';
    this.dark = false;
    this.title = 'Stuff';
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
          color: var (--simple-colors-default-theme-accent-1);
          font-size: 30pt;
          padding-left: var(--learning-card-width, 100px);
        }
      `,
    ];
  }

  render() {
    return html` <div><slot></slot></div>`;
  }
}
window.customElements.define(LearningSubHeader.tag, LearningSubHeader);
