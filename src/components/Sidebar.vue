<template>
    <aside class="mdc-persistent-drawer mdc-persistent-drawer--open m-sidebar">
      <nav class="mdc-persistent-drawer__drawer">
        <div class="mdc-persistent-drawer__toolbar-spacer">
          <a href="/" class="brand-logo">
            <strong>STATNLP SPONSORSHIP</strong>
          </a>
        </div>
        <div class="mdc-list-group">
          <nav class="mdc-list mdc-drawer-menu">
            <div class="mdc-list-item mdc-drawer-item">
              <router-link class="mdc-drawer-link active" to="/">
                <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">desktop_mac</i>
                Summary
              </router-link>
            </div>
            <div class="mdc-list-item mdc-drawer-item">
              <router-link class="mdc-drawer-link" to="funding">
                <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">attach_money</i>
                Funding
              </router-link>
            </div>
            <div class="mdc-list-item mdc-drawer-item">
              <router-link class="mdc-drawer-link" to="sponsors">
                <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">group</i>
                Sponsors
              </router-link>
            </div>
          </nav>
        </div>
      </nav>
    </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
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
