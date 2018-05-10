<template>
  <div class="m-home">
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-12-mobile">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6">
            <div class="mdc-card py-3 pl-2 d-flex flex-row align-item-center">
              <div class="mdc--tile mdc--tile-primary rounded">
                <i class="mdi mdi-account-settings text-white icon-md"></i>
              </div>
              <div class="text-wrapper pl-1">
                <h3 class="mdc-typography--display1 font-weight-bold mb-1">28</h3>
                <p class="font-weight-normal mb-0 mt-0">Total Sponsors</p>
              </div>
            </div>
          </div>
          <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6">
            <div class="mdc-card py-3 pl-2 d-flex flex-row align-item-center">
              <div class="mdc--tile mdc--tile-primary rounded">
                <i class="mdi mdi-currency-usd text-white icon-md"></i>
              </div>
              <div class="text-wrapper pl-1">
                <h3 class="mdc-typography--display1 font-weight-bold mb-1">${{fund.total | currency}}</h3>
                <p class="font-weight-normal mb-0 mt-0">Total Fund</p>
              </div>
            </div>
          </div>
          <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6">
            <div class="mdc-card py-3 pl-2 d-flex flex-row align-item-center">
              <div class="mdc--tile mdc--tile-primary rounded">
                <i class="mdi mdi-account-star text-white icon-md"></i>
              </div>
              <div class="text-wrapper pl-1">
                <h3 class="mdc-typography--display1 font-weight-bold mb-1">18</h3>
                <p class="font-weight-normal mb-0 mt-0">Gold Sponsors</p>
              </div>
            </div>
          </div>
          <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6">
            <div class="mdc-card py-3 pl-2 d-flex flex-row align-item-center">
              <div class="mdc--tile mdc--tile-primary rounded">
                <i class="mdi mdi-check-circle text-white icon-md"></i>
              </div>
              <div class="text-wrapper pl-1">
                <h3 class="mdc-typography--display1 font-weight-bold mb-1">${{availableFund | currency}}</h3>
                <p class="font-weight-normal mb-0 mt-0">Available Fund</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-12-mobile">
        <div class="mdc-card d-flex flex-column">
          <div class="mdc-layout-grid__inner flex-grow-1">
            <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-3"></div>
            <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6 d-flex align-item-center flex-column">
              <h2 class="mdc-card__title mdc-card__title--large text-center mt-2 mb-2">Fund Usage</h2>
              <div id="currentBalanceCircle" class="w-100"></div>
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
    showFundUsage (value) {
      if (this.bar) {
        this.bar.animate(value)
      }
    },
    createProgressBar () {
      let bar = new ProgressBar.Circle(currentBalanceCircle, {
        color: '#000',
        strokeWidth: 12,
        trailWidth: 12,
        trailColor: '#eee',
        easing: 'easeInOut',
        lineCap: 'round',
        duration: 1400,
        from: {
          color: '#23AFC2',
          width: 12
        },
        to: {
          color: '#23AFC2',
          width: 12
        },
        step: function (state, circle) {
          circle.path.setAttribute('stroke', state.color)
          circle.path.setAttribute('stroke-width', state.width)

          var value = Math.round(circle.value() * 100)
          if (value === 0) {
            circle.setText('')
          } else {
            circle.setText(value + '%')
          }
        }
      })
      bar.text.style.fontSize = '1.5rem'
      this.bar = bar
    }
  },
  mounted () {
    this.createProgressBar()

    let percent = this.fundUsagePercentage
    this.showFundUsage(percent)
  },
  computed: {
    availableFund () {
      return this.fund.total - this.fund.used
    },
    fundUsagePercentage () {
      return this.fund.used / this.fund.total
    }
  }
}
</script>

<style scoped>

</style>
