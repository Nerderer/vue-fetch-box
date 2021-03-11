<template>
  <article class="rounded shadow-md bg-white overflow-hidden h-80 flex flex-col relative max-w-3xl">
    <h2
      v-if="title && title.length"
      class="px-4 py-2 text-lg font-bold border-b"
    >
      {{ title }}
    </h2>
    <div class="flex-1">
      <slot />
    </div>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
