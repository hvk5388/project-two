import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/app.js';

describe('LearningCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html` <lrn-card type="objective">
      <span slot="header">Project 2: Learning Card</span>
      <span slot="subheader">Test Subheader</span>
      <p>Whatever</p>
      <ul>
        <li>I</li>
        <li>Hope></li>
        <li>This Works</li>
      </ul>
    </lrn-card>`);
  });

  it('renders main header', () => {
    const h1 = element.shadowRoot.querySelector('h1 slot');
    expect(h1).to.exist;
    expect(h1.assignedElements({ flat: true })[0].innerText).to.equal(
      'Project 2: Learning Card'
    );
  });

  it('renders the sub header', () => {
    const h2 = element.shadowRoot.querySelector('h2 slot');
    expect(h2).to.exist;
    expect(h2.assignedElements({ flat: true })[0].innerText).to.equal(
      'Test Subheader'
    );
  });

  it('renders main content', () => {
    const para = element.querySelector('p');
    expect(para).to.exist;
    expect(para.textContent).to.equal('Whatever');

    const list = element.querySelector('ul');
    expect(list).to.exist;
    expect(list.children.length).to.equal(3);
  });

  it('checks updatedProperties', () => {
    element.type = 'science';
    expect(element.type).to.equal('science');
    expect(element.icon).to.equal('beaker');
    element.type = 'objective';
    setTimeout(() => {
      expect(element.type).to.equal('objective');
      expect(element.icon).to.equal('lightbulb');
    }, 100);
    element.type = 'question';
    setTimeout(() => {
      expect(element.type).to.equal('question');
      expect(element.icon).to.equal('question');
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
