import { LitElement, html, css } from 'lit';
import './LrnCard.js';

export class LearningScaffold extends LitElement {
  static get tag() {
    return 'card-scaffold';
  }

  constructor() {
    super();
    this.type = '';
  }

  static get properties() {
    return {
      type: { type: String, reflect: true },
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'science') {
        this.myIcon = 'beaker';
        this.mainheader = 'Unit 1';
        this.subheader = 'Chem Connection';
      }
      if (propName === 'type' && this[propName] === 'objective') {
        this.myIcon = 'lightbulb';
        this.mainheader = 'Unit 1';
        this.subheader = 'Did you know?';
      }
      if (propName === 'type' && this[propName] === 'fact') {
        this.myIcon = 'question';
        this.mainheader = 'Unit 1';
        this.subheader = 'shit idk';
      }
    });
  }

  static get styles() {
    return css`
      lrn-card[type='science']::part(banner) {
        background-color: 'blue';
      }
      lrn-card[type='objective']::part(banner) {
        background-color: 'green';
      }
      lrn-card[type='fact']::part(banner) {
        background-color: 'red';
      }
    `;
  }

  render() {
    return html`
      <div>
        <lrn-card type="${this.type}">
          <div slot="header"></div>
        </lrn-card>
      </div>
    `;
  }
}
