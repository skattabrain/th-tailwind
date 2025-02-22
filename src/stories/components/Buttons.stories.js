import { text, select } from '@storybook/addon-knobs';
import oneButton from '@/components/Button.vue';

const VARIATIONS = {
  'btn--primary': 'btn--primary',
  'btn--default': 'btn--default'
};

const APPLY_INDEX_VARIATIONS = {
  'btn-altnerative--primary': 'btn-altnerative--primary',
};

const COMPONENT_VARIATIONS = {
  'primary': 'primary',
  'default': 'default'
};

const templateDecorator = () => ({
  template: '<div class="p-3"><story /></div>',
});


export default {
  component: oneButton,
  decorators: [
    templateDecorator,
  ],
  title: 'Buttons',
};

export const UsingPluginStyle = () => ({
  props: {
    text: {
      default: text('Button Text', 'Click me you fool!')
    },
    variation: {
      default: select('Variaton', VARIATIONS, 'btn--primary')
    }
  },
  template: `<button type="button" class="btn" :class="[variation]">{{ text }}</button>`
});

export const UsingApplyInIndexCSS = () => ({
  props: {
    text: {
      default: text('Button Text', 'Click me you fool!')
    },
    variation: {
      default: select('Variaton', APPLY_INDEX_VARIATIONS, 'btn-altnerative--primary')
    }
  },
  template: `<button type="button" class="btn-altnerative" :class="[variation]">{{ text }}</button>`
});

export const ComponentStyle = () => ({
  components: { oneButton },
  props: {
    text: {
      default: text('Button Text', 'Click me you fool!')
    },
    variation: {
      default: select('Variaton', COMPONENT_VARIATIONS, 'primary')
    }
  },
  template: '<one-button :type="variation">{{ text }}</one-button>'
});

export const AllThree = () => ({
  components: { oneButton },
  props: {
    text: {
      default: text('Button Text', 'Click me you fool!')
    }
  },
  template: `
<div>
  <button type="button" class="btn btn--primary">{{ text }}</button>
  <button type="button" class="btn-altnerative btn-altnerative--primary">{{ text }}</button>
  <one-button type="primary">{{ text }}</one-button>
</div>
`
});
