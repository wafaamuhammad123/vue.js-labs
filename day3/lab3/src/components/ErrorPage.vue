<template>
<div class="mx-auto my-3" >
  <img src="/Oops! 404 Error with a broken robot-pana.png" class="w-50" alt="">
</div>
<back class="btn btn-dark m-1" @click="back()">back</back>
</template>

<script>
export default {
  name: 'HomeApp',
  props: {
  },
  methods:{
    back(){
        this.$router.push('/users')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
