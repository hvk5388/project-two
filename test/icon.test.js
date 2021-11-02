import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';

describe('LearningCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(
      html`<learning-icon type="science"></learning-icon>`
    );
  });

  it('renders icon header', () => {
    const icon = element.shadowRoot.querySelector('img');
    expect(icon).to.exist;
    // console.log(icon);
    expect(icon.src).to.contain('beaker');
  });

  // it('renders the sub header', () => {
  //   const h2 = element.shadowRoot.querySelector('h2 slot');
  //   expect(h2).to.exist;
  //   expect(h2.assignedElements({ flat: true })[0].innerText).to.equal(
  //     'Test Subheader'
  //   );
  // });

  // it('renders main content', () => {
  //   const para = element.querySelector('p');
  //   expect(para).to.exist;
  //   expect(para.textContent).to.equal('Whatever');

  //   const list = element.querySelector('ul');
  //   expect(list).to.exist;
  //   expect(list.children.length).to.equal(3);
  // });

  it('checks updatedProperties', () => {
    element.type = 'science';
    expect(element.type).to.equal('science');
    element.type = 'objective';
    setTimeout(() => {
      expect(element.type).to.equal('objective');
    }, 100);
    element.type = 'question';
    setTimeout(() => {
      expect(element.type).to.equal('question');
    }, 100);
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
    element.type = 'question';
    setTimeout(() => {
      expect(element).shadowDom.to.be.accessible();
    }, 100);
  });
});
