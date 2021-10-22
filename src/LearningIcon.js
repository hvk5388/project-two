import { css, html } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningIcon extends SimpleColors {
  static get tag() {
    return 'learning-icon';
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
        #banner {
          display: flex;
          flex-direction: row;
        }
      `,
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
      lrnIcon: { type: String, attribute: 'lrn-icon' },
      iconScale: { type: String, attribute: 'icon-scale', reflect: true },
      bgColor: { type: String, attribute: 'bg-color', reflect: true },
    };
  }

  constructor() {
    super();
    this.type = 'math';
    this.iconScale = 'inherit';
    this.icon_value.set('math', lightbulb);
    this.icon_value.set('science', beaker);
    this.icon_value.set('question', question);
    this.style.backgroundColor = 'yellow';
    this.dark = false;
    this.accentColor = 'green';
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'science') {
        this.myIcon = 'beaker';
      }
      this.style.setProperty('--icon-scale', this.iconScale);
      this.style.backgroundColor = 'purple';
    });
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
      this.style.setProperty('--icon-scale', this.iconScale);
      this.style.backgroundColor = 'blue';
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div id="banner">
        <img part="icon" src="${question}" alt="" />
      </div>
    `;
  }
}
