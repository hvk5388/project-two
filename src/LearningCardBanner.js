import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

// const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
// const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
// const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningCardBanner extends SimpleColors {
  static get tag() {
    return 'lrn-card-banner';
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'science') {
        this.lrnIcon = 'beaker';
      }
      if (propName === 'type' && this[propName] === 'objective') {
        this.lrnIcon = 'lightbulb';
      }
      if (propName === 'type' && this[propName] === 'fact') {
        this.lrnIcon = 'question';
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

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  constructor() {
    super();
    this.accentColor = 'blue';
    this.dark = false;
  }

  static get Properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
      lrnIcon: { type: String, attribute: 'lrn-Icon' },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: inline-block;
          --lrn-card-banner-color1: purple;
          --lrn-card-banner-color2: white;
          --lrn-card-banner-color3: green;
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
        <lrn-card-icon
          icon="${this.lrnIcon}"
          type="${this.lrnIcon}"
        ></lrn-card-icon>
        <div id="banner">
          <div id="header">
            <slot id="header" name="header"></slot>
            <slot id="sub-header"></slot>
          </div>
        </div>
      </div>
  </div>
  <script type = "module">
      import './src/app.js';
  </script>
    `;
  }
}
