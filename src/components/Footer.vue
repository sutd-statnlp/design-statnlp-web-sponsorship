<template>
    <div>
      <div class="mdc-layout-grid">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 d-flex justify-content-end">
            <span class="text-muted text-center">Copyright © 2018
              <a class="text-green" href="https://www.statnlp.org/" target="_blank">STATNLP</a>. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  },
  mounted () {
    let urls = [
      './static/js/misc.js',
      './static/js/material.js',
      './static/js/dashboard.js'
    ]
    urls.forEach(url => {
      let script = document.createElement('script')
      script.setAttribute('src', url)
      document.body.appendChild(script)
    })
  }
}
</script>

<style scoped>

</style>
