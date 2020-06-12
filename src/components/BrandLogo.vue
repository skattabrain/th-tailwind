<template>
  <span class="font-black" :class="[dark ? 'text-black' : 'text-white']">
    {{ brand }}
  </span>
</template>

<script>
export default {
  name: 'BrandLogo',
  props: {
    brand: {
      default: null,
      type: String
    },
    dark: {
      default: false,
      type: Boolean
    },
  },
};
</script>
