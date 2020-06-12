import LayoutApp from '@/components/LayoutApp.vue';
import navigation from '@/mocks/navigation';

export default {
  component: LayoutApp,
  title: 'Layout',
};

export const app = () => ({
  components: { LayoutApp },
  data: () => ({
    brand: 'ONE',
    heading: 'Dashboard',
    primaryNav: navigation.primary,
    secondaryNav: navigation.secondary,
  }),
  template: '<layout-app :brand="brand" :heading="heading" :primary-nav="primaryNav" :secondary-nav="secondaryNav" />'
});
