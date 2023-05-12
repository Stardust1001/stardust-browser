<script>
export default {
  name: 'mobile-x-col',
  inheritAttrs: false,
  computed: {
    attrs () {
      const { text, slot, ...others } = this.$attrs
      return others
    }
  }
}
</script>

<template>
  <van-col v-bind="attrs" class="mobile-x-col">
    <slot />
  </van-col>
</template>
