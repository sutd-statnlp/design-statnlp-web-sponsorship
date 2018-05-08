<template>
  <div class="container">
    <div class="row row-cards">
      <div class="col-6 col-sm-4 col-lg-2">
        <div class="card">
          <div class="card-body p-3 text-center">
            <div class="text-right text-blue">
              {{fundUsagePercentage | limit(4)}}%
            </div>
            <div class="h1 m-0">${{fund.used | currency}}</div>
            <div class="mb-4">Fund Usage</div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-4 col-lg-2">
        <div class="card">
          <div class="card-body p-3 text-center">
            <div class="text-right text-blue">
              100%
            </div>
            <div class="h1 m-0">18</div>
            <div class="mb-4">Total Transactions</div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-4 col-lg-2">
        <div class="card">
          <div class="card-body p-3 text-center">
            <div class="text-right text-blue">
              {{4/18*100 | limit(4)}}%
            </div>
            <div class="h1 m-0">4</div>
            <div class="mb-4">Today Transactions</div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-4 col-lg-2">
        <div class="card">
          <div class="card-body p-3 text-center">
            <div class="text-right text-blue">
              {{8/28*100 | limit(4)}}%
            </div>
            <div class="h1 m-0">8</div>
            <div class="mb-4">Silver Sponsors</div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-4 col-lg-2">
        <div class="card">
          <div class="card-body p-3 text-center">
            <div class="text-right text-blue">
              {{4/28*100 | limit(4)}}%
            </div>
            <div class="h1 m-0">4</div>
            <div class="mb-4">Bronze Sponsors</div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-4 col-lg-2">
        <div class="card">
          <div class="card-body p-3 text-center">
            <div class="text-right text-blue">
              {{2/28*100 | limit(4)}}%
            </div>
            <div class="h1 m-0">2</div>
            <div class="mb-4">New Sponsors</div>
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <div class="row">
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body text-center">
                <div class="h5">Total Fund</div>
                <div class="display-4 font-weight-bold mb-4">${{fund.total | currency}}</div>
                <div class="progress progress-sm">
                  <div class="progress-bar bg-blue" style="width: 100%"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body text-center">
                <div class="h5">Available Fund</div>
                <div class="display-4 font-weight-bold mb-4">${{availableFund | currency}}</div>
                <div class="progress progress-sm">
                  <div class="progress-bar bg-green" :style="'width: '+ (100-fundUsagePercentage) + '%'"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body text-center">
                <div class="h5">Gold Sponsors</div>
                <div class="display-4 font-weight-bold mb-4">16</div>
                <div class="progress progress-sm">
                  <div class="progress-bar bg-green" :style="'width: '+ 16/28*100 + '%'"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="card-body text-center">
                <div class="h5">Total Sponsors</div>
                <div class="display-4 font-weight-bold mb-4">28</div>
                <div class="progress progress-sm">
                  <div class="progress-bar bg-blue" style="width: 100%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      bar: null,
      fund: {
        total: 10800,
        used: 4482
      }
    }
  },
  methods: {
  },
  mounted () {
  },
  computed: {
    availableFund () {
      return this.fund.total - this.fund.used
    },
    fundUsagePercentage () {
      return this.fund.used / this.fund.total * 100
    }
  }
}
</script>

<style scoped>

</style>
