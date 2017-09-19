<template>
  <div class="page-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'page-item'
}
</script>

<style>
.page-item {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.5s ease-in-out;
}
</style>
