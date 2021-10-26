// dependencies / things imported
import { LitElement, html, css } from 'lit';
import './LearningCardBanner.js';
import { IntersectionObserverMixin } from '@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js';

/*
TODO: 
Try really hard not to put my fist through this screen 
Figure out why icons not being slotted into card banner 
Once Icons added to the cards edit body to have less whitespace 
Add Links/Button to "additional resources" this could be another card BUTTTTT
I would like it to be an icon with an "I" that you can click and be taken to another site relevant to
the info on the card 
*/

// this is the base path to the assets calculated at run time
// this ensures that assets are shipped correctly when building the demo
// on github pages, or when people reuse assets outside your elements in production
// because this won't change we can leverage as an internal variable without being
// declared in properties. This let's us ship the icons while referencing them correctly

const beaker = new URL('../assets/beaker.svg', import.meta.url).href;
const lightbulb = new URL('../assets/lighbulb.svg', import.meta.url).href;
const question = new URL('../assets/question.svg', import.meta.url).href;

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added

export class LearningCard extends IntersectionObserverMixin(LitElement) {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'learning-card';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  // Use this to get icons
  constructor() {
    super();
    this.myIcon = null;
    this.type = 'math';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      // reflect allows state changes to the element's property to be leveraged in CSS selectors
      type: { type: String, reflect: true },
      // attribute helps us bind the JS spec for variables names to the HTML spec
      // <learning-card my-icon="whatever" will set this.myIcon to "whatever"
      myIcon: { type: String, attribute: 'my-icon' },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'type' && this[propName] === 'objective') {
        this.icon = 'lightbulb';
        this.subheading = 'Learning Objectives';
      }
      if (propName === 'type' && this[propName] === 'science') {
        this.icon = 'beaker';
        this.subheading = 'Chem Connection';
      }
      if (propName === 'type' && this[propName] === 'question') {
        this.icon = 'question';
        this.subheading = 'Did You Know?';
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

  // CSS - specific to Lit
  // CSS MEDIA QUERIES!!!
  // Pixel based, development?!
  // Render all tags and stlye img in styles???
  static get styles() {
    return css`
      :host {
        display: block;
      }
      /* this is how you match something on the tag itself like <learning-card type="math"> and then style the img inside */
      :host([type='math']) img {
        background-color: purple;
      }
      :host([type='science']) img {
        background-color: yellow;
      }
      :host([type='question']) img {
        background-color: pink;
      }
      img {
        display: inline-flex;
        height: var(--learning-card-height, 100px);
        width: var(--learning-card-width, 100px);
        background-color: green;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      ${this.elementVisible
        ? html`
            <lrn-card-banner></lrn-card-banner>
            <h1>Gabagool</h1>
            <div>${this.type}</div>
            <div>
              <learning-header> Test the Header </learning-header>

              <div>
                <div
                  class="slot-wrapper"
                  data-label="Header"
                  data-layout-slotname="header"
                >
                  <slot name="header">
                    <img part="icon" src="${beaker}" alt="" />
                    <learning-header>This is the Header</learning-header>
                    <learning-sub-header
                      >This is the sub header</learning-sub-header
                    >
                  </slot>
                </div>
                <div
                  class="slot-wrapper"
                  data-label="Content"
                  data-layout-slotname="content"
                >
                  <slot name="content"></slot>
                  <slot></slot>
                  <h1>Project 2: Card</h1>
                  <div>
                    <div
                      class="slot-wrapper"
                      data-label="Header"
                      data-layout-slotname="header"
                    >
                      <slot name="header"></slot>
                    </div>
                    <img part="micon" src="${beaker}" alt="" />
                    <img part="icon" src="${lightbulb}" alt="" />
                    <img part="icon" src="${question}" alt="" />
                    <div
                      class="slot-wrapper"
                      data-label="Content"
                      data-layout-slotname="content"
                    >
                      <slot name="content"></slot>
                      <slot></slot>
                      <h1>Project 2: Figure out the fucking lightbulb</h1>
                      <div>
                        <div
                          class="slot-wrapper"
                          data-label="Header"
                          data-layout-slotname="header"
                        >
                          <slot name="header"></slot>
                        </div>
                        <img part="icon" src="${lightbulb}" alt="" />
                        <img part="icon" src="${lightbulb}" alt="" />
                        <img part="icon" src="${lightbulb}" alt="" />
                        <div
                          class="slot-wrapper"
                          data-label="Content"
                          data-layout-slotname="content"
                        >
                          <slot name="content"></slot>
                          <slot></slot>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `
        : ``};
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return {
      canScale: false,
      canPosition: false,
      canEditSource: true,
      contentEditable: true,
      gizmo: {
        title: 'Learning Card',
        description: 'An element that you have to replace / fix / improve',
        icon: 'credit-card',
        color: 'blue',
        groups: ['Content', 'Presentation', 'Education'],
      },
      settings: {
        configure: [
          {
            property: 'type',
            title: 'Type',
            description: 'Identifies the card',
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
          tag: LearningCard.tag,
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
