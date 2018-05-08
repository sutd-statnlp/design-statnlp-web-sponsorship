<template>
  <div class="m-funding-detail">
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
          <div class="mdc-card">
            <div class="mdc-layout-grid__inner">
              <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-10">
                <div class="mdc-layout-grid__inner">
                  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2 text-right">
                      <p>ID</p>
                      <p>Date</p>
                      <p>Amount</p>
                      <p>Sponsor</p>
                      <p>Used</p>
                      <p>Desciption</p>
                      <p>Purpose</p>
                  </div>
                  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 text-left">
                      <h5>
                        <p>{{fund.id}}</p>
                        <p>{{fund.date}}</p>
                        <p>S${{fund.amount | currency}}</p>
                        <p>{{fund.sponsor}}</p>
                        <p>{{fund.used ? 'Yes' : 'No'}}</p>
                        <p>{{fund.description}}</p>
                        <p>{{fund.purpose}}</p>
                      </h5>
                  </div>
                </div>
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

</style>
