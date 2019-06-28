<template>
  <div id="app">
    <my-head></my-head>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHead from "@/components/head.vue"
  import MyFooter from "@/components/footer.vue"

  export default {
    components:{
      MyHead,
      MyFooter
    }
  }
</script>

<style lang="less">
  html,body{
    width: 100%;
    margin: 0;
    background-color: #f9fafc;
    a{
      color:#333;
    }
  }
</style>
