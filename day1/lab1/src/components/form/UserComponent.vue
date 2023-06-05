<template>
  <div id="user">
    <h2>User Component</h2>
    <div v-if="userData">
      <p id="data">Here is your data: {{ userData.name }}</p>
      <button id="btnn" @click="deleteUser">Delete User</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userData: Object
  },
  methods: {
    deleteUser() {
      this.$emit('delete-user');
    }
  }
};
</script>
