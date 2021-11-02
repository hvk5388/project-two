import { css, html } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningIcon extends SimpleColors {
  static get tag() {
    return 'learning-icon';
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'science') {
        this.myIcon = beaker;
      }
      if (propName === 'type' && this[propName] === 'objective') {
        this.myIcon = lightbulb;
      }
      if (propName === 'type' && this[propName] === 'fact') {
        this.myIcon = question;
      }
      if (propName === 'iconHeight') {
        this.style.setProperty('--icon-height', this.iconHeight);
      }
      this.style.setProperty('--icon-width', this.iconWidth);
    });
  }

  constructor() {
    super();
    this.type = null;
    this.iconHeight = 'inherit';
    this.iconWidth = 'inherit';
    this.myIcon = null;
    this.dark = false;
    this.accentColor = 'blue';
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
      myIcon: { type: String },
      iconHeight: { type: String, attribute: 'icon-height', reflect: true },
      iconWidth: { type: String, attribute: 'icon-width', reflect: true },
    };
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.style.setProperty('--icon-height', this.iconHeight);
    this.style.setProperty('--icon-width', this.iconWidth);
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          height: var(--icon-height, inherit);
          width: var(--icon-width, inherit);
        }
        img {
          display: inline-flex;
          height: var(--lrn-card-height, 150px);
          width: var(--lrn-card-width, 150px);
          background-color: transparent;
        }
        #banner {
          display: flex;
          flex-direction: row;
        }
        #icon {
          width: inherit;
          height: inherit;
        }
      `,
    ];
  }

  render() {
    return html`
      <div id="learning-icon">
        <img
          part="icon"
          id="learning-icon"
          .src="${this.myIcon}"
          alt="learning card ${this.type} icon"
        />
      </div>
    `;
  }
}
