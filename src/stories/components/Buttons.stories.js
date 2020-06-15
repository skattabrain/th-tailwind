import { text, select } from '@storybook/addon-knobs';

const VARIATIONS = {
  none: '',
  'btn-secondary': 'btn-secondary',
  'btn-primary': 'btn-primary'
};

const APPLY_INDEX_VARIATIONS = {
  none: '',
  'btn-altnerative-secondary': 'btn-altnerative-secondary',
  'btn-altnerative-primary': 'btn-altnerative-primary',
};

const templateDecorator = () => ({
  template: '<div class="p-3"><story /></div>',
});


export default {
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
      default: select('Variaton', VARIATIONS, 'btn-primary')
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
      default: select('Variaton', APPLY_INDEX_VARIATIONS, 'btn-altnerative-primary')
    }
  },
  template: `<button type="button" class="btn-altnerative" :class="[variation]">{{ text }}</button>`
});
