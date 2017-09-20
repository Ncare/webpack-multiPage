<template>
  <div class="layout">
    <Menu mode="horizontal" theme="light" active-name="1" @on-select="menuClick">
      <div class="layout-logo"></div>
      <div class="layout-nav">
        <MenuItem name="1"> 首页
        </MenuItem>
        <MenuItem name="2"> 指南
        </MenuItem>
        <MenuItem name="3"> 下载
        </MenuItem>
        <MenuItem name="4"> 关于
        </MenuItem>
      </div>
    </Menu>
  </div>
</template>

<script>
export default {
}  
</script>

<style>
.layout {
  height: 100vh;
  background: #f5f7f9;
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}


.layout-nav {
  float: right;
  width: 350px;
}
</style>