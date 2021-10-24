import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

export class LearningHeader extends SimpleColors {
  static get tag() {
    return 'learning-header';
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: inline-block;
          background-color: var (--simple-colors-default-theme-accent-1);
          color: var (--simple-colors-default-theme-accent-1);
          font-size: 40pt;
        }
        .banner-wrapper {
          background-color: var(--simple-colors-default-theme-accent-6);
        }
      `,
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      icon: { type: String },
    };
  }

  constructor() {
    super();
    this.accentColor = 'pink';
    this.dark = false;
    this.type = 'objective';
    this.icon = 'lightbulb';
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'objective') {
        this.icon = 'lightbulb';
        this.accentColor = 'orange';
      }
      if (propName === 'type' && this[propName] === 'science') {
        this.icon = 'beaker';
        this.accentColor = 'green';
      }
      if (propName === 'type' && this[propName] === 'question') {
        this.icon = 'question';
        this.accentColor = 'blue';
      }
    });
  }

  render() {
    return html`
      <div class="banner-wrapper" style="display: flex;">
        <card-icon type="${this.icon}" style="width: 100px"></card-icon>
        <div class="header-wrapper">
          <slot name="header"></slot>
          <slot name="subheader"></slot>
        </div>
      </div>
    `;
  }
}
window.customElements.define(LearningHeader.tag, LearningHeader);
