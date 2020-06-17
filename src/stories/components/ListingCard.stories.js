import listing from '@/mocks/listing';
import listingCard from '@/components/ListingCard.vue';
import StoryWrapper from '@/components/utils/StoryWrapper.vue';
import { text, number } from '@storybook/addon-knobs';

const templateDecorator = () => ({
  components: { StoryWrapper },
  data: () => ({
    wrapperWidthClasses: 'w-10/12 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 pt-8',
  }),
  template: '<StoryWrapper :wrapper-width-classes="wrapperWidthClasses"><story /></StoryWrapper>',
});


export default {
  component: listingCard,
  decorators: [
    templateDecorator,
  ],
  title: 'Components/Listing Card',
};

export const withImage = () => ({
  components: { listingCard },
  data: () => ({
    ...listing,
  }),
  props: {
    title: {
      default: text('Title', listing.title)
    },
    price: {
      default: number('Price', listing.price)
    },
    miles: {
      default: number('Miles', listing.miles)
    }
  },
  template: '<listing-card :id="id" :url="url" :location="location" :stock-number="stockNumber" :title="title" :price="price" :miles="miles" :dealer="dealer" :description="description" :image-url="image" />',
});

export const withoutImage = () => ({
  components: { listingCard },
  data: () => ({
    ...listing,
    image: null,
  }),
  template: '<listing-card :id="id" :url="url" :location="location" :stock-number="stockNumber" :title="title" :price="price" :miles="miles" :dealer="dealer" :description="description" :image-url="image" />',
});
