<template>
  <div class="flex bg-grey-800 px-1 font-normal"
    :class="[primary ? 'one-primary-nav border-b border-grey-700' : 'one-secondary-nav']">
      <a v-if="brand" href="#"
        class="inline-block no-underline hover:no-underline focus:outline-none px-3"
        :class="[primary ? 'py-5' : 'py-2']">
        <brand-logo :brand="brand" />
      </a>
      <ul v-if="leftNav" class="flex">
        <li v-for="item in leftNav"
          :key="item.label"
          class="mr-2">
          <a class="inline-block px-3 hover:no-underline hover:text-grey-50 focus:outline-none"
            :class="[primary ? 'py-5' : 'py-2', item.active ? 'text-white' : 'text-grey-500']"
            :href="item.url">
            {{ item.label }}
          </a>
        </li>
      </ul>

      <ul v-if="rightNav"  class="flex ml-auto">
        <li v-for="item in rightNav"
          :key="item.label"
          class="mr-2">
          <a class="inline-block text-grey-500 px-3 hover:no-underline hover:text-grey-50 focus:outline-none"
            :class="[primary ? 'py-5' : 'py-2', item.active ? 'text-white' : 'text-grey-500']"
            :href="item.url">
            {{ item.label }}
          </a>
        </li>
      </ul>
  </div>
</template>

<script>
import BrandLogo from '@/components/BrandLogo.vue';

export default {
  components: {
    BrandLogo
  },
  props: {
    brand: {
      default: null
    },
    leftNav: {
      default: null,
      type: Array
    },
    rightNav: {
      default: null,
      type: Array
    },
    primary: {
      default: true,
      type: Boolean
    }
  }
}
</script>
