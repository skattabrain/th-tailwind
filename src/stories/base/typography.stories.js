import { text } from '@storybook/addon-knobs';

const headingText = 'Lorem ipsum dolor sit amet';
const paragraphText = 'This is a paragraph. Curae hendrerit efficitur feugiat suspendisse ligula interdum a sapien pulvinar dictum litora ipsum lacinia congue platea ornare finibus tortor mauris. Morbi nisi fames commodo ut curae nullam rutrum sodales laoreet lacus cubilia dignissim conubia vivamus convallis molestie finibus nascetur feugiat eu justo eleifend rhoncus ante netus aenean mauris erat gravida primis quis est nisl in orci hac senectus quisque natoque.';

const templateDecorator = () => ({
  template: '<div class="p-3"><story /></div>',
});


export default {
  decorators: [
    templateDecorator,
  ],
  title: 'Base Styles',
};

export const Typography = () => ({
  props: {
    heading: {
      default: text('Heading Text', headingText)
    },
    paragraphText: {
      default: text('Paragraph Text', paragraphText)
    }
  },
  template: `
<div>
  <h1>{{ heading }} &ndash; H1</h1>
  <h2>{{ heading }} &ndash; H2</h2>
  <h3>{{ heading }} &ndash; H3</h3>
  <h4>{{ heading }} &ndash; H4</h4>
  <h5>{{ heading }} &ndash; H5</h5>
  <h6>{{ heading }} &ndash; H6</h6>
  <p>{{ paragraphText }}</p>
</div>
`
});
