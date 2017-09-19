<template>
  <div class="fullpage">
    <button>
      <Icon type="chevron-up"></Icon>
    </button>
    <div class="fullpage-item">
      <slot></slot>
    </div>
    <button>
      <Icon type="chevron-down"></Icon>
    </button>
    <div class="fullpage-dots">

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.fullpage {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  
}
</style>


