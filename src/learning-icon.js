import { css, html } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors';

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lightbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

export class LearningIcon extends SimpleColors {
  static get tag() {
    return 'slime-icon';
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: inline-block;
          height: var(--icon-scale, inherit);
          width: var(--icon-scale, inherit);
          position: absolute;
        }
      `,
    ];
  }

  static get properties() {
    return {
      type: { type: String, reflect: true },
      icon_value: { type: Map },
      iconScale: { type: String, attribute: 'icon-scale', reflect: true },
      bgColor: { type: String, attribute: 'bg-color', reflect: true },
    };
  }

  constructor() {
    super();
    this.type = 'math';
    this.iconScale = 'inherit';
    this.icon_value = new Map();
    this.icon_value.set('math', lightbulb);
    this.icon_value.set('science', beaker);
    this.icon_value.set('question', question);
    this.bgColor = 'grey';
    this.style.backgroundColor = 'yellow';
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
      this.style.backgroundColor = 'olue';
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  render() {
    console.log(this.bgColor);
    return html`
      <div id="slime-icon-container">
        <img
          part="icon"
          src="${this.icon_value.get(this.type)}"
          alt="learning card icon"
        />
      </div>
    `;
  }
}
