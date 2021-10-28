import { css, html } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors';
/* 
import {fixture, expect } from '@open-wc/testing';
import './src/app.js';
*/

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningIcon extends SimpleColors {
  static get tag() {
    return 'learning-icon';
  }

  constructor() {
    super();
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

  updated(changedProperties) {
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'beaker') {
        this.myIcon = 'beaker';
      }
      if (propName === 'type' && this[propName] === 'lightbulb') {
        this.myIcon = 'lightbulb';
      }
      if (propName === 'type' && this[propName] === 'question') {
        this.myIcon = 'question';
      }
    });
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
      // this.style.setProperty('--icon-scale', this.iconScale);
      // this.style.backgroundColor = 'blue';
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
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
        image {
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
    if (this.icon === 'lightbulb') {
      return html`
        <div id="bannerElement">
          <img part="icon" src="${lightbulb}" alt="" />
        </div>
      `;
    }
    if (this.icon === 'beaker') {
      return html`
        <div id="bannerElement">
          <img part="icon" src="${beaker}" alt="" />
        </div>
      `;
    }
    if (this.icon === 'question') {
      return html`
        <div id="bannerElement">
          <img part="icon" src="${question}" alt="" />
        </div>
      `;
    }
    return null;
  }
}
