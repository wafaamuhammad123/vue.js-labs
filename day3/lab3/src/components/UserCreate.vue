<template>
<div class="card mx-auto my-3" style="width: 30rem;">
  <div class="card-header">
    User
  </div>
  <ul class="list-group list-group-flush m-3">
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">first name</label>
      <input v-model="state.user.first_name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="first name">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">last name</label>
      <input v-model="state.user.last_name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="last name">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">gender</label>
      <select v-model="state.user.gender" class="form-select" aria-label="Default select example">
        <option value="Male" :selected="state.user.gender=='Male'" >male</option>
        <option value="Female" :selected="state.user.gender=='Female'">female</option>
      </select> 
    </div>
  </ul>
</div>        
<button v-if="$route.params.id" class="btn btn-success m-1" @click="update()">update</button>
<button v-if="!$route.params.id" class="btn btn-dark m-1" @click="submit()">create</button>


</template>

<script>
import axios from 'axios'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'HomeApp',
  props: {
  },
  setup(){
    let state=reactive({
      user:{
        first_name:'',
        last_name:'',
        gender:''
      }
    })
    let router=useRouter()
    let route=useRoute()
    function update(){
      axios.put(`http://localhost:3000/users/${route.params.id}`,state.user)
      .then((res)=>{
        router.push(`/users/${res.data.id}/show`)
      })
    }
    function submit(){
        axios.post("http://localhost:3000/users",state.user)
        .then((res)=>{
          router.push(`/users/${res.data.id}/show`)
        })
    }
    function getUserById(id){
    axios.get(`http://localhost:3000/users/${id}`)
    .then((res)=>{
      state.user=res.data
    })
    }
    if(route.params.id){
      getUserById(route.params.id)
    }
    return {
      update,
      submit,
      getUserById,
      state
    }
  },
  // created(){
  //   if(this.$route.params.id){
  //     this.getUserById(this.$route.params.id)
  //   }
  // },
  // data(){
  //   return{
  //     user:{
  //       first_name:'',
  //       last_name:'',
  //       gender:''
  //     }
  //   }
  // },
  // methods:{
  //   update(){
  //       axios.put(`http://localhost:3000/users/${this.$route.params.id}`,this.user)
  //       .then((res)=>{
  //         this.$router.push(`/users/${res.data.id}/show`)
  //       })
  //     },
  //     submit(){
  //         axios.post("http://localhost:3000/users",this.user)
  //         .then((res)=>{
  //           this.$router.push(`/users/${res.data.id}/show`)
  //         })
  //       },
  //     getUserById(id){
  //     axios.get(`http://localhost:3000/users/${id}`)
  //     .then((res)=>{
  //       this.user=res.data
  //     })
  //   },
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
