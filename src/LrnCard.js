import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

// import { LearningScaffold } from './LearningScaffold';
// import { LearningIcon } from './LearningIcon';

/* 
Main Issues/Areas of Concern: 
Clearly most of the rendering of the card is going on here 
Still having trouble dynamically importing icons into the card 
I got it to kind of import icons earlier but not where I wanted them 
Main issue is with dynamic rendering and why I can't get the icons to render in the card
Update: I think my issue with the icons is with div or slot names being wrong or misspelled
Probably just tons of small dumb mistakes in here that need cleaning up 
Want to import three different versions of our button with 3 different styles/links for each card
*/

export class LrnCard extends SimpleColors {
  static get tag() {
    return 'lrn-card';
  }

  constructor() {
    super();
    this.type = 'objective';
    this.accentColor = 'blue';
    this.dark = false;
    this.header = 'header';
    this.subheader = 'subheader';
    this.listElemOne = 'test one';
    this.listElemTwo = 'test two';
    this.listElemThree = 'test three';
    this.backColor = 'purple';
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
      header: { type: String, reflect: true },
      subheader: { type: String },
      listElemOne: { type: String },
      listElemTwo: { type: String },
      listElemThree: { type: String },
      backColor: { type: String },
    };
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'science') {
        this.mainheader = 'Unit 2';
        this.subheader = 'Chem Connection';
        this.listElemOne = 'What makes an element an Isotope?';
        this.listElemTwo = 'Quarks and Gluons make up what?';
        this.listElemThree =
          'What was the first element created after the big bang?';
        this.backColor = '#418449';
      }
      if (propName === 'type' && this[propName] === 'objective') {
        this.mainheader = 'Unit 1';
        this.subheader = 'Learning Objectives';
        this.listElemOne =
          'Describe the subatomic particles that make up an atom.';
        this.listElemTwo = 'Explain how these particles work together.';
        this.listElemThree = 'Why are these particles so important?';
        this.backColor = '#d07f3b';
      }
      if (propName === 'type' && this[propName] === 'fact') {
        this.mainheader = 'Unit 3';
        this.subheader = 'Did You Know?';
        this.listElemOne =
          'Walter White used High School Chemistry Equipment to cook meth?';
        this.listElemTwo = 'Walts meth was so good like 98% purity.';
        this.listElemThree =
          'Anyways you should watch breaking bad its a great show.';
        this.backColor = '#376b9c';
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

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          background-color: 'white';
          height: inherit;
          width: inherit;
        }

        :host([type='math']) img {
          background-color: 'blue';
        }

        img {
          display: inline-flex;
          height: var(--learning-card-height, 100px);
          width: var(--learning-card-width, 100px);
          background-color: 'green';
        }

        summary {
          list-style-position: inside;
          list-style-image: url('../assets/beaker.svg');
          display: flex;
        }

        #drawerContents {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #cardFrame {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
          margin: 30px 0px;
        }
        learning-card-banner {
          padding: 10x;
          width: 100%;
        }
        learning-card-banner div {
          font-family: Helvetica;
          text-transform: uppercase;
          color: white;
          padding-left: 54px;
        }
        learning-card-banner div:nth-child(1) {
          font-size: 24px;
          font-weight: 100;
          font-family: sans-serif;
        }
        learning-card-banner div:nth-child(2) {
          font-size: 28px;
          font-weight: 400;
        }
        ul {
          padding: 0 80px 20px 80px;
        }
        li {
          font-size: 14px;
          color: #6d6c6b;
        }
      `,
    ];
  }

  render() {
    return html`
      <div id="cardFrame">
        <details>
          <summary part="banner">
            <div
              class="slot-wrapper"
              data-label="header"
              data-layout-slotname="header"
            >
              <!-- div slot ="main header" doesn't change anything when I delete it -->
              <lrn-card-banner type="${this.type}">
                <div slot="main header">
                  <slot name="mainheader">${this.subheader}</slot>
                </div>
                <!-- update: subheader shows text in the icon -->
                <div slot="sub-header">
                  <slot name="subheader">${this.subheader}</slot>
                </div>
              </lrn-card-banner>
            </div>
            <learning-card-banner style="background-color:${this.backColor};">
              <div slot="header">${this.mainheader}</div>
            </learning-card-banner>
          </summary>
          <div id="drawerContents">
            <ul>
              <li>${this.listElemOne}</li>
              <li>${this.listElemTwo}</li>
              <li>${this.listElemThree}</li>
            </ul>
          </div>
        </details>
      </div>
    `;
  }

  static get haxProperties() {
    return {
      canScale: false,
      canPosition: false,
      canEditSource: false,
      contentEditable: false,
      gizmo: {
        title: 'Learning Card',
        description: 'An element that you have to replace / fix / improve',
        icon: 'credit-card',
        color: 'blue',
        groups: ['content', 'Presentation', 'Education'],
      },
      settings: {
        configure: [
          {
            property: 'type',
            title: 'Type',
            description: 'Identifies the Card',
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
          tag: LrnCard.tag,
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
