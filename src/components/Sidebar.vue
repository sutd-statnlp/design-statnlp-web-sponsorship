<template>
    <div></div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
    }
  },
  computed: {
    currentPath () {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
  .brand-logo {
    text-decoration: none;
    color: #1898D9;
  }
  .m-sidebar {
    height: 100vh;
  }
</style>
