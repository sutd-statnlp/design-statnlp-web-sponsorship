<template>
    <div class="m-footer">
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-12 mt-3 mt-lg-0 text-center">
              Copyright © 2018 <a href="http://www.statnlp.org">STATNLP</a>. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
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
      './static/js/core.js'
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
