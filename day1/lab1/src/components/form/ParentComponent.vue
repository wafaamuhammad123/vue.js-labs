<template>
<div id="main">
  <div id="parent">
    <h1 id="par">Parent Component</h1>
    <div id="sel">
    <label for="role">Select Role:</label>
    <select  id="role" v-model="selectedRole">
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
    </div>

    <form @submit.prevent="submitForm">
      <label id="nam" for="name">Enter your data:</label>
      <input type="text" id="name" v-model="name" required>

    <button id="btn" type="submit">Submit</button>
    </form>
       </div> </div>
<div id="child">
    <user-component v-if="selectedRole === 'user'" :userData="userData" @delete-user="deleteUser"></user-component>
    <admin-component v-if="selectedRole === 'admin'" :adminData="adminData" @delete-user="deleteUser"></admin-component>
 </div>
</template>

<script>
import '@/assets/style.css'; 
import UserComponent from './UserComponent.vue';
import AdminComponent from './AdminComponent.vue';

export default {
  components: {
    UserComponent,
    AdminComponent
  },
  data() {
    return {
      selectedRole: 'user',
      name: '',
      userData: null,
      adminData: null
    };
  },
  methods: {
    submitForm() {
      if (this.selectedRole === 'user') {
        this.userData = { name: this.name };
        this.adminData = null;
      } else if (this.selectedRole === 'admin') {
        this.adminData = { name: this.name };
        this.userData = null;
      }

      this.name = '';
    },
    deleteUser() {
      if (this.selectedRole === 'user') {
        this.userData = null;
      } else if (this.selectedRole === 'admin') {
        this.adminData = null;
        
      }
    }
  }
};
</script>
