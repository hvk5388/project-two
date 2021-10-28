import { html } from 'lit-html';
import '../src/app.js';

export default {
  title: 'Project two',
  component: 'lrn-card',
  argTypes: {
    type: { control: 'text' },
  },
};

function Template({ type = "math", slot }) {
  return html`
    <lrn-card type="${type}">
    ${slot}
    </lrn-card>
  `;
}

export const Card = Template.bind({});

export const ScienceCard = Template.bind({});
ScienceCard.args = {
  type: 'science',
  slot: html`<p>slotted content that should render</p>`
};
