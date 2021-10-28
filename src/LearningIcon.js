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

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'science') {
        this.myIcon = 'beaker';
      }
      if (propName === 'type' && this[propName] === 'question') {
        this.myIcon = 'question';
      }
      if (propName === 'type' && this[propName] === 'lightbulb') {
        this.myIcon = 'lightbulb';
      }
      this.style.setProperty('--icon-height', this.iconHeight);
      this.style.setProperty('--icon-width', this.iconWidth);
    });
  }

  constructor() {
    super();
    this.type = 'math';
    this.iconHeight = 'inherit';
    this.iconWidth = 'inherit';
    this.myIcon = null;
    this.iconValue = new Map();
    this.iconValue.set('math', lightbulb);
    this.iconValue.set('science', beaker);
    this.iconValue.set('question', question);
    this.dark = false;
    this.accentColor = 'blue';
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
      myIcon: { type: String },
      iconValue: { type: Map },
      iconHeight: { type: String, attribute: 'icon-height', reflect: true },
      iconWidth: { type: String, attribute: 'icon-width', reflect: true },
    };
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
      this.style.setProperty('--icon-height', this.iconHeight);
      this.style.setProperty('--icon-width', this.iconWidth);
    }
  }

  // What does this do? Really?
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
    return html`
      <div id="learning-icon">
        <img
          part="icon"
          id="icon"
          src="${this.iconValue.get(this.type)}"
          alt="learning card ${this.type} icon"
        />
      </div>
    `;
  }
}
