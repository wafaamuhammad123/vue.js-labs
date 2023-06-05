<template>
  <div id="app">
    <ParentComponent/>
  </div>
</template>

<script>
import ParentComponent from './components/form/ParentComponent.vue';

export default {
  name: 'App',
  components: {
    ParentComponent
  }
};
</script>
