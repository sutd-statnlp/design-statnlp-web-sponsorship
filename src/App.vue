<template>
  <div id="app" class="body-wrapper">
    <Sidebar/>
    <Navbar/>
    <div class="page-wrapper mdc-toolbar-fixed-adjust">
      <main class="content-wrapper drawer-minimized">
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
@media (max-width:575.98px) {
  .table-responsive-sm {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar
  }
  .table-responsive-sm>.table-bordered {
    border: 0
  }
}

@media (max-width:767.98px) {
  .table-responsive-md {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar
  }
  .table-responsive-md>.table-bordered {
    border: 0
  }
}

@media (max-width:991.98px) {
  .table-responsive-lg {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar
  }
  .table-responsive-lg>.table-bordered {
    border: 0
  }
}

@media (max-width:1199.98px) {
  .table-responsive-xl {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar
  }
  .table-responsive-xl>.table-bordered {
    border: 0
  }
}

</style>
