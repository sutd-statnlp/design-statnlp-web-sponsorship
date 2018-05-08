<template>
  <div class="m-funding-detail">
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
          <div class="mdc-card">
            <div class="mdc-layout-grid__inner">
              <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-10 m-div-purpose">
                <h4>{{fund.purpose}}</h4>
              </div>
              <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-2">
                <section class="purchase__card_section d-flex align-item-center">
                  <router-link to="/funding"  class="mdc-button mdc-button--raised mdc-button--dense" data-mdc-auto-init="MDCRipple">
                    Back
                  </router-link>
                </section>
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
  name: 'FundingDetailPage',
  data () {
    return {
      fund: {
        id: 271392321,
        description: 'Good support for StatNLP',
        date: '10 April 2018',
        amount: 2000,
        sponsor: 'NSFC',
        used: true,
        purpose: 'Support for Multimodal Deep Hybrid Representations for Language Generation from Non-textual Data'
      }
    }
  },
  created () {
    this.fund.id = this.$route.params.id
  }
}
</script>

<style scoped>
  .m-div-purpose {
    padding-top: 40px;
    padding-left: 40px;
  }
</style>
