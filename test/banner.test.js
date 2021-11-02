import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';

describe('LearningCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<learning-card-banner
    type="science"
  >
  <p>TESTING HEADER</p>
  </learning-card-banner>`);
  });
  it('renders the header element', () => {
    const header = element.shadowRoot.querySelector('slot');
    expect(header).to.exist;
    // expect(header.innerText).to.equal('Unit 1');
    expect(header.assignedElements({ flat: true })[0].innerText).to.equal(
      'TESTING HEADER'
    );
  });

  it('passes the a11y audit', async () => {
    element.type = 'science';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
    element.type = 'objective';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
    element.type = 'fact';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
  });
});