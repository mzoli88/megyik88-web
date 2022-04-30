<template>
  <div class="Box">
    <div v-if="title" class="BoxHeader">{{ title }}</div>
    <div class="BoxCt">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>