<template>
  <div class="container">
    <div class="row">
      <div class="col col-login mx-auto">
        <div class="text-center mb-6">
        </div>
        <form class="card" method="post" v-on:submit.prevent="submitLogin">
          <div class="card-body p-6">
            <div class="card-title">Login to your account</div>
            <div class="form-group">
              <label class="form-label">Email address</label>
              <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label class="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="inputPassword" placeholder="Password">
            </div>
            <div class="form-group">
              <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label">Remember me</span>
              </label>
            </div>
            <div class="form-footer">
              <button type="submit" class="btn btn-primary btn-block">Sign in</button>
              <button type="button" class="btn btn-danger btn-block">Sign in with Google</button>
              <button type="button" class="btn bg-blue-dark text-white btn-block">Sign in with LinkedIn</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'

export default {
  name: 'LoginPage',
  data () {
    return {
    }
  },
  methods: {
    submitLogin () {
      router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
