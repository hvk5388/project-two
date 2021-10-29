import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';
import './LearningCardBanner.js';
import './LearningIcon.js';
import './LearningScaffold.js';

export class LrnCard extends SimpleColors {
  static get tag() {
    return 'lrn-card';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  // Use this to get icons
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
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
      header: { type: String, reflect: true },
      subheader: { type: String },
      accentColor: { type: String },
      listElemOne: { type: String },
      listElemTwo: { type: String },
      listElemThree: { type: String },
      // attribute helps us bind the JS spec for variables names to the HTML spec
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
        this.accentColor = 'green';
      }
      if (propName === 'type' && this[propName] === 'objective') {
        this.mainheader = 'Unit 1';
        this.subheader = 'Learning Objectives';
        this.listElemOne =
          'Describe the subatomic particles that make up an atom.';
        this.listElemTwo = 'Explain how these particles work together.';
        this.listElemThree = 'Why are these particles so important?';
        this.accentColor = 'orange';
      }
      if (propName === 'type' && this[propName] === 'fact') {
        this.mainheader = 'Unit 3';
        this.subheader = 'Did You Know?';
        this.listElemOne =
          'Walter White used High School Chemistry Equipment to cook meth?';
        this.listElemTwo = 'Walts meth was so good like 98% purity.';
        this.listElemThree =
          'Anyways you should watch breaking bad its a great show.';
        this.accentColor = 'blue';
      }
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
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

        :host([type='objective']) img {
          background-color: var(--simple-colors-default-theme-accent-1);
        }

        :host([type='science']) {
          background-color: var(--simple-colors-default-theme-accent-5);
        }

        :host([type='fact']) {
          background-color: var(--simple-colors-default-theme-accent-3);
        }

        img {
          display: inline-flex;
          height: var(--lrn-card-height, 100px);
          width: var(--lrn-card-width, 100px);
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
        .buttonContainer {
          display: flex;
          flex-direction: row;
          align-items: end;
          justify-items: flex;
          width: 100%;
          padding-bottom: 10px;
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
              <lrn-card-banner
                type="${this.type}"
                style="background-color:${this.accentColor};"
              >
                <slot name="header">${this.mainheader}</slot>
                <slot name="sub-header">${this.subheader}</slot>
              </lrn-card-banner>
            </div>
            <learning-card-banner
              type="${this.type}"
              style="background-color:${this.accentColor};"
            >
              <slot name="header">${this.mainheader}</slot>
              <slot name="sub-header">${this.subheader}</slot>
            </learning-card-banner>
          </summary>
          <div id="drawerContents">
            <slot> </slot>
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
