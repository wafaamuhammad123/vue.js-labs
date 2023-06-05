<template>
  <div id="user">
    <h2>Admin Component</h2>
    <div v-if="adminData">
      <p id="data">Here is your data: {{ adminData.name }}</p>
      <button id="btnn" @click="deleteAdmin">Delete Admin</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    adminData: Object
  },
  methods: {
    deleteAdmin() {
      this.$emit('delete-user');
    }
  }
};
</script>
