<template>
<router-link class="btn btn-dark m-1" :to="`/users/create`">create</router-link>

<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Gender</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user.id">
      <th scope="row">{{user.id}}</th>
      <td>{{user.first_name}}</td>
      <td>{{user.last_name}}</td>
      <td>{{user.gender}}</td>
      <td>
        <button class="btn btn-danger m-1" @click="deleteById(user.id)">delete</button>
        <router-link class="btn btn-primary m-1" :to="`/users/${user.id}/show`">show</router-link>
        <router-link class="btn btn-success m-1" :to="`/users/${user.id}/edit`">update</router-link>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeApp',
  props: {
  },
  data(){
    return{
      users:[]
    }
  },
  created(){
    this.getAllUsers()
  },
  methods:{
    getAllUsers(){
      axios.get("http://localhost:3000/users")
      .then((res)=>{
        this.users=res.data
      })
    },
    deleteById(id){
      axios.delete(`http://localhost:3000/users/${id}`)
        .then((res)=>{
          this.users=res.data
          this.getAllUsers()
        })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
