import LayoutNavbar from '@/components/LayoutNavbar.vue';
import navigation from '@/mocks/navigation';

const brand = 'ONE';

const templateDecorator = () => ({
  template: '<div class="p-3"><story /></div>',
});


export default {
  component: LayoutNavbar,
  decorators: [
    templateDecorator,
  ],
  title: 'Components/Navigation',
};

export const withBrand = () => ({
  components: { LayoutNavbar },
  data: () => ({
    brand
  }),
  template: '<layout-navbar :brand="brand" />'
});

export const withBrandLinks = () => ({
  components: { LayoutNavbar },
  data: () => ({
    brand,
    leftNav: navigation.primary.left,
    rightNav: navigation.primary.right
  }),
  template: '<layout-navbar :brand="brand" :left-nav="leftNav" :right-nav="rightNav" />'
});

export const withLinks = () => ({
  components: { LayoutNavbar },
  data: () => ({
    leftNav: navigation.primary.left,
    rightNav: navigation.primary.right
  }),
  template: '<layout-navbar :primary="false" :left-nav="leftNav" :right-nav="rightNav" />'
});

export const oneExample = () => ({
  components: { LayoutNavbar },
  data: () => ({
    brand,
    primary: navigation.primary,
    secondary: navigation.secondary,
  }),
  template: `
<div>
  <layout-navbar :brand="brand" :left-nav="primary.left" :right-nav="primary.right" />
  <layout-navbar :primary="false" :left-nav="secondary.left" :right-nav="secondary.right" />
</div>
`
});
