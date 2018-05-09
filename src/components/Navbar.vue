<template>
  <div>
    <div class="header py-4">
      <div class="container">
        <div class="d-flex">
          <a class="header-brand" href="/">
            STATNLP SPONSORSHIP
          </a>
          <div class="d-flex order-lg-2 ml-auto">
            <div class="dropdown">
              <a href="#" class="nav-link pr-0 leading-none" data-toggle="dropdown">
                <span class="avatar" style="background-image: url(./static/images/avatar-kaka.jpg)"></span>
                <span class="ml-2 d-none d-lg-block">
                  <span class="text-default">Young Kaka</span>
                  <small class="text-muted d-block mt-1">Developer</small>
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <a class="dropdown-item" href="#">
                  <i class="dropdown-icon fe fe-log-out"></i> Sign out
                </a>
              </div>
            </div>
          </div>
          <a href="#" class="header-toggler d-lg-none ml-3 ml-lg-0" data-toggle="collapse" data-target="#headerMenuCollapse">
            <span class="header-toggler-icon"></span>
          </a>
        </div>
      </div>
    </div>
    <div class="header collapse d-lg-flex p-0" id="headerMenuCollapse">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3 ml-auto">
            <form class="input-icon my-3 my-lg-0" v-on:submit.prevent="submitSearch">
              <input id="input-search" type="search" class="form-control header-search" placeholder="Search" tabindex="1" :disabled="currentPath == '/'">
              <div class="input-icon-addon">
                <i class="fe fe-search"></i>
              </div>
            </form>
          </div>
          <div class="col-lg order-lg-first">
            <ul class="nav nav-tabs border-0 flex-column flex-lg-row">
              <li class="nav-item">
                <router-link to="/" class="nav-link" :class="currentPath == '/' ? 'active' : ''"><i class="fe fe-activity"></i> Overview</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/funding" class="nav-link" :class="currentPath == '/funding' ? 'active' : ''"><i class="fe fe-dollar-sign"></i> Funding</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/sponsors" class="nav-link" :class="currentPath == '/sponsors' ? 'active' : ''"><i class="fe fe-users"></i> Sponsors</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
    currentPath () {
      return this.$route.path
    }
  },
  methods: {
    submitSearch () {

    }
  }
}
</script>

<style scoped>

</style>
