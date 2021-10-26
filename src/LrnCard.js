import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors/simple-colors.js';

export class LrnCard extends SimpleColors {
  static get tag() {
    return 'lrn-card';
  }

  constructor() {
    super();
    this.myIcon = null;
    this.type = '';
    this.accentColor = 'blue';
    this.dark = false;
    this.header = 'Header';
    this.subheader = 'subheader';
    this.listElemOne = 'test one';
    this.listElemTwo = 'test two';
    this.listElemThree = 'test three';
    this.backColor = 'purple';

    if (this.getAttribute('icon') != null) {
      const lrnTag = document.createElement('beaker');
      lrnTag.innerHTML = this.getAttribute('icon');
      this.appendChild(lrnTag);
      setTimeout(() => {
        import('./LearningIcon.js');
      }, 0);
    }
  }

  static get properties() {
    return {
      type: { type: String, reflect: true },
      myIcon: { type: String, attribute: 'my-icon' },
      header: { type: String },
      subheader: { type: String },
      listElemOne: { type: String },
      listElemTwo: { type: String },
      listElemThree: { type: String },
      backColor: { type: String },
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'science') {
        this.myIcon = 'beaker';
        this.mainheader = 'Unit 1';
        this.subheader = 'Chem Connection';
        this.listElemOne =
          'Describe the subatomic particles that make up an atom.';
        this.listElemTwo =
          'Describe the subatomic particles that make up an atom.';
        this.listElemThree =
          'Describe the subatomic particles that make up an atom.';
        this.backColor = '#418449';
      }
      if (propName === 'type' && this[propName] === 'objective') {
        this.myIcon = 'lightbulb';
        this.mainheader = 'Unit 1';
        this.subheader = 'Learning Objectives';
        this.listElemOne =
          'Describe the subatomic particles that make up an atom.';
        this.listElemTwo =
          'Describe the subatomic particles that make up an atom.';
        this.listElemThree =
          'Describe the subatomic particles that make up an atom.';
        this.backColor = '#d07f3b';
      }
      if (propName === 'type' && this[propName] === 'fact') {
        this.myIcon = 'question';
        this.mainheader = 'Unit 1';
        this.subheader = 'Did You Know?';
        this.listElemOne =
          'Describe the subatomic particles that make up an atom.';
        this.listElemTwo =
          'Describe the subatomic particles that make up an atom.';
        this.listElemThree =
          'Describe the subatomic particles that make up an atom.';
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
          --learning-objective-color1: ornage-5;
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
          list-style-image: url('../assets/arrow-right.svg');
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
          padding: 10px;
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
              <!-- <slot name = "header"></slot> -->
              <lrn-card-banner my-icon="${this.myIcon}" type="${this.type}">
                <div slot="main header">
                  <slot name="mainheader">${this.subheader}</slot>
                </div>
                <div slot="sub-header">
                  <slot name="subheader">${this.subheader}</slot>
                </div>
              </lrn-card-banner>
            </div>
            <learning-card-banner style="background-color:${this.backColor};">
              <div slot="header">${this.mainheader}</div>
              <div slot="sub-header">${this.subheader}</div>
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
      <script type="module">
        import './src/app.js';
      </script>
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
