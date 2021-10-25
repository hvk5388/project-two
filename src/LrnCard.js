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
        this.subheader = 'Learning Objectives';
      }
      if (propName === 'type' && this[propName] === 'fact') {
        this.myIcon = 'question';
        this.mainheader = 'Unit 1';
        this.subheader = 'Did you know?';
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
          box-shadow: 4px 4px 7px 0px rgba(128, 0, 0, 1);
          margin: 30px 0px;
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
          </summary>
          <div id="drawerContents">
            <ul>
              <li>God</li>
              <li>Damn</li>
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
