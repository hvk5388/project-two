import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import './LearningIcon.js';

// const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
// const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
// const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningCardBanner extends SimpleColors {
  static get tag() {
    return 'lrn-card-banner';
  }

  constructor() {
    super();
    this.type = null;
    this.accentColor = 'blue';
    this.dark = false;
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: inline-block;
          /*
          --lrn-card-banner-color1: blue;
          --lrn-card-banner-color2: white;
          --lrn-card-banner-color3: green;
          */
          font-family: 'sans-serif';
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
          justify-content: center;
          align-items: center;
          background-color: transparent;
          color: white;
        }
        #header {
          padding: 10px;
          margin: 10px;
          display: inline-flex;
          flex-direction: column;
          justify-content: right;
          align-items: right;
        }
        #main-header {
          font-size: 200%;
          text-transform: uppercase;
          font-weight: 300;
        }

        #sub-header {
          font-size: 250%;
          text-transform: lowercase;
          font-weight: 500;
        }
        #banner-element {
          display: flex;
          flex-direction: row;
        }
      `,
    ];
  }

  render() {
    return html`
      <div id="banner-element">
        <learning-icon type="${this.type}"></learning-icon>
        <div id="banner">
          <div id="header">
            <slot id="main-header" name="main-header"></slot>
            <slot id="sub-header" name="sub-header"></slot>
          </div>
        </div>
      </div>
    `;
  }
}
