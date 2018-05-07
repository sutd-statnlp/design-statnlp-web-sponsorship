<template>
    <header class="mdc-toolbar mdc-elevation--z4 mdc-toolbar--fixed">
      <div class="mdc-toolbar__row">
        <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
          <a href="#" class="menu-toggler material-icons mdc-toolbar__menu-icon">menu</a>
          <span class="mdc-toolbar__input">
            <div class="mdc-text-field">
              <input type="text" class="mdc-text-field__input" id="css-only-text-field-box" placeholder="Search">
            </div>
          </span>
        </section>
        <section class="mdc-toolbar__section mdc-toolbar__section--align-end" role="toolbar">
          <div class="mdc-menu-anchor mr-1">
            <a href="#" class="mdc-toolbar__icon toggle mdc-ripple-surface" data-toggle="dropdown" toggle-dropdown="logout-menu" data-mdc-auto-init="MDCRipple">
              <i class="material-icons">person</i>
            </a>
            <div class="mdc-simple-menu mdc-simple-menu--right" tabindex="-1" id="logout-menu">
              <ul class="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
                <li class="mdc-list-item" role="menuitem" tabindex="0">
                  <i class="material-icons mdc-theme--primary mr-1">power_settings_new</i>
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </header>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
