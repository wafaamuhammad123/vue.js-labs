<template>
<div class="card mx-auto my-3" style="width: 30rem;">
  <div class="card-header">
    User
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{{state.user.first_name}}</li>
    <li class="list-group-item">{{state.user.last_name}}</li>
    <li class="list-group-item">{{state.user.gender}}</li>
  </ul>
</div>
<back class="btn btn-dark m-1" @click="back()">back</back>
<router-link class="btn btn-success m-1" :to="`/users/${state.user.id}/edit`">update</router-link>
<button class="btn btn-danger m-1" @click="deleteById(state.user.id)">delete</button>

</template>

<script>
import axios from 'axios'
import { reactive} from 'vue'
import { useRouter,useRoute } from 'vue-router'
export default {
  name: 'HomeApp',
  props: {
  },
  setup(){
    let id=useRoute().params.id;
    let state=reactive({user:{}});
    let router=useRouter()
    function getUserById(id){
      axios.get(`http://localhost:3000/users/${id}`)
      .then((res)=>{
        state.user=res.data
      })
    }
    getUserById(id)
    function back(){
      router.push({ path: '/users'})
    }
    function deleteById(id){
    axios.delete(`http://localhost:3000/users/${id}`).then(()=>{
      back()
    })
    }

    return{
      getUserById,
      back,
      deleteById,
      state
    }
  },
  // data(){
  //   return{
  //     user:{}
  //   }
  // },
  // created(){
  //   let id=this.$route.params.id
  //   this.getUserById(id)
  // },
  // methods:{
    // getUserById(id){
    //   axios.get(`http://localhost:3000/users/${id}`)
    //   .then((res)=>{
    //     this.user=res.data
    //   })
    // },
    // deleteById(id){
    //   axios.delete(`http://localhost:3000/users/${id}`)
    //     .then((res)=>{
    //       this.users=res.data
    //       this.back()
    //     })
    // },
  //   back(){
  //       this.$router.push('/users')
  //   }
  // }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
