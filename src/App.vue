<template>
  <div id="app" class="page">
    <div class="page-main">
      <Navbar/>
      <div class="my-3 my-md-5">
        <router-view/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  },
  name: 'App'
}
</script>

<style>

</style>
