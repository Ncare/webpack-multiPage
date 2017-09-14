<template>
  <div class="login">
    <Card  dis-hover>
      <p slot="title">
      登陆
      </p>
      <Form :model="formItem" :label-width="60">
        <FormItem label="用户名">
          <Input v-model="formItem.username" placeholder="输入用户名"></Input>
        </FormItem>
        <FormItem label="密码">
          <Input v-model="formItem.password" placeholder="输入密码"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="login">登陆</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formItem: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log(this.formItem)
      location.href = 'home.html'
    }
  }
}
</script>

<style>
.login {
  background: #ccc;
  width: 350px;
  position: absolute;
  left: 50%;
  top: 150px;
  transform: translateX(-50%);
}
</style>