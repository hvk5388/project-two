import { css, html } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors';

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
      if (propName === 'type' && this[propName] === 'objective') {
        this.myIcon = 'lightbulb';
      }
      if (propName === 'type' && this[propName] === 'fact') {
        this.myIcon = 'question';
      }
    });
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnnectedCallback() {
    super.disconnnectedCallback();
  }

  constructor() {
    super();
    this.type = 'math';
    this.icon_value = new Map();
    this.icon_value.set('math', lightbulb);
    this.icon_value.set('science', beaker);
    this.icon_value.set('question', question);
    this.accentColor = 'red';
    this.dark = false;
    this.myIcon = null;
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
      myIcon: { type: String, attribute: 'my-icon' },
      icon_value: { type: Map },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: inline-block;
          --lrn-card-banner-color1: red;
          --lrn-card-banner-color2: white;
          --lrn-card-banner-color3: green;
          height: var(--icon-scale, inherit);
          width: var(--icon-scale, inherit);
          position: absolute;
        }
        image {
          display: inline-flex;
          height: var(--lrn-card-height, 150px);
          width: var(--lrn-card-width, 150px);
          background-color: transparent;
        }
        #banner1 {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: transparent;
          color: white;
        }
        #headers {
          padding: 5px;
          margin: 5px;
          display: inline-flex;
          flex-direction: column;
          justify-content: left;
          align-items: left;
        }
        #main-header {
          font-size: 200%;
          text-transform: uppercase;
          font-weight: 300;
        }
        #sub-header {
          font-size: 250%;
        }
      `,
    ];
  }

  render() {
    if (this.myIcon === 'lightbulb') {
      return html`
        <div id="bannerElement">
          <img part="icon" src="${lightbulb}" alt="" />
        </div>
      `;
    }
    if (this.myIcon === 'beaker') {
      return html`
        <div id="bannerElement">
          <img part="icon" src="${beaker}" alt="" />
        </div>
      `;
    }
    if (this.myIcon === 'question') {
      return html`
        <div id="bannerElement">
          <img parg="icon" src="${question}" alt="" />
        </div>
      `;
    }
    return null;
  }
}
