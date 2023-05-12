<script>
export default {
  name: 'pc-x-col',
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
  <el-col v-bind="attrs" class="pc-x-col">
    <slot />
  </el-col>
</template>
