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
    this.icon = null;
    this.dark = false;
    this.accentColor = 'blue';
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String },
      icon: { type: String },
      // iconScale: { type: String, attribute: 'icon-scale', reflect: true },
      // bgColor: { type: String, attribute: 'bg-color', reflect: true },
    };
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'beaker') {
        this.icon = 'beaker';
      }
      if (propName === 'type' && this[propName] === 'lightbulb') {
        this.icon = 'lightbulb';
      }
      if (propName === 'type' && this[propName] === 'question') {
        this.icon = 'question';
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
          --lrn-card-banner-color1: red;
          --lrn-card-banner-color2: white;
          --lrn-card-banner-color3: green;
          // height: var(--icon-scale, inherit);
          // width: var(--icon-scale, inherit);
          // position: absolute;
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
