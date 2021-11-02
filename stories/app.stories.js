import { html } from 'lit-html';
import '../src/app.js';

export default {
  title: 'Project two',
  component: 'lrn-card',
  argTypes: {
    type: { 
      control: 'text' ,
      options: ['science', 'objective', 'fact']
    },
  },
};

function Template({ type = "math", headSlot, subSlot, slot }) {
  return html`
    <lrn-card type="${type}">
      <div slot="header">${headSlot}</div>
      <div slot="subheader">${subSlot}</div>
      ${slot}
    </lrn-card>
  `;
}

export const ScienceCard = Template.bind({});
ScienceCard.args = {
  type: 'science',
  headSlot: html`<span>Unit 1</span>`,
  subSlot: html`<span>Chem Connection</span>`,
  slot: html`
    <ul>
      <li>Chemistry is a great way to explore science.</li>
      <li>Here you can add lots of chemistry fatcs</li>
    </ul>
    <cta-button icon="save"></cta-button>`
}

export const ObjectiveCard = Template.bind({});
ObjectiveCard.args = {
  type: 'objective',
  headSlot: html`<span>Unit 1</span>`,
  subSlot: html`<span>Learning Objectives</span>`,
  slot: html`
    <ul>
      <li>Objective One: Learn xyz</li>
      <li>Objective Two: Learn abc</li>
    </ul>
    <cta-button icon="save"></cta-button>`
}

export const FactCard = Template.bind({});
FactCard.args = {
  type: 'fact',
  headSlot: html`<span>Unit 1</span>`,
  subSlot: html`<span>Did You Know?</span>`,
  slot: html`
    <p>Penn State is a wonderful university</p>
    <cta-button icon="save"></cta-button>`
}
