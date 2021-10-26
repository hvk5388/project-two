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
    this.icon = beaker;
    this.type = 'science';
    // this.iconScale = 'inherit';
    // this.icon_value.set('math', lightbulb);
    // this.icon_value.set('science', beaker);
    // this.icon_value.set('question', question);
    // this.style.backgroundColor = 'yellow';
    // this.dark = false;
    // this.accentColor = 'green';
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
      if (propName === 'type' && this[propName] === 'science') {
        this.icon = beaker;
        this.accentColor = 'green';
      }
      if (propName === 'type' && this[propName] === 'objective') {
        this.icon = lightbulb;
      }
      if (propName === 'type' && this[propName] === 'question') {
        this.icon = question;
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
    return html`
      <div id="banner">
        <img src="${this.icon}" alt="" style="height: 100px; width: 100px" />
      </div>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return {
      canScale: false,
      canPosition: false,
      canEditSource: true,
      contentEditable: true,
      gizmo: {
        title: 'Learning Card',
        description: 'An element that you have to replace / fix / improve',
        icon: 'credit-card',
        color: 'blue',
        groups: ['Content', 'Presentation', 'Education'],
      },
      settings: {
        configure: [
          {
            property: 'type',
            title: 'Type',
            description: 'Identifies the card',
            inputMethod: 'select',
            options: {
              science: 'Science',
              math: 'Math',
            },
          },
        ],
        advanced: [],
      },
      demoSchema: [
        {
          tag: LearningIcon.tag,
          properties: {
            type: 'science',
          },
          content:
            "<p slot='header'>This tag renders in the header</p><ul><li>This renders</li><li>Below the tag</li></ul>",
        },
      ],
    };
  }
}
window.customElements.define(LearningIcon.tag, LearningIcon);
