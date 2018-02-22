<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link :to="{ name: 'hello' }">Goto Hello</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'this is home page!'
    }
  },
  created(){
        this.$axios.get('/api/test').then(response=>{
            console.log('接口测试结果：',JSON.stringify(response.data));
        });

  }
}
</script>
