<template>
  <div id="app" class="body-wrapper">
    <Sidebar/>
    <Navbar/>
    <div class="page-wrapper mdc-toolbar-fixed-adjust">
      <main class="content-wrapper">
        <router-view/>
      </main>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Sidebar,
    Footer
  },
  name: 'App'
}
</script>

<style>

</style>
