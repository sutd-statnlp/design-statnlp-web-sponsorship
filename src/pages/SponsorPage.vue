<template>
  <div class="m-fund">
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
          <div class="mdc-card">
            <div class="table-heading px-2 px-1 border-bottom">
              <h1 class="mdc-card__title mdc-card__title--large">Sponsors</h1>
            </div>
            <table class="table table-hoverable table-responsive-md">
              <thead>
                <tr>
                  <th class="text-left">ID</th>
                  <th>Name</th>
                  <th>Total Amount</th>
                  <th>Type</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in sponsors" :key="index">
                  <td class="text-left">{{item.id}}</td>
                  <td>{{item.name}}</td>
                  <td>${{item.totalAmount | currency}}</td>
                  <td>{{item.type}}</td>
                  <td>
                    <a class="col mdc-button" data-mdc-auto-init="MDCRipple" target="_blank" :href="item.website">
                      <i class="mdi mdi-web text-blue"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FundingPage',
  data () {
    return {
      sponsors: [
        {
          id: 271392321,
          name: 'Alibaba',
          totalAmount: 8000,
          type: 'Gold',
          website: 'https://www.alibaba.com/'
        },
        {
          id: 271392321,
          name: 'SGInnovate',
          totalAmount: 6000,
          type: 'Gold',
          website: 'https://www.sginnovate.com/'
        },
        {
          id: 271392321,
          name: 'NSFC',
          totalAmount: 2800,
          type: 'Silver',
          website: 'http://www.nsfc.gov.cn/'
        },
        {
          id: 271392321,
          name: 'MINDEF',
          totalAmount: 2200,
          type: 'Silver',
          website: 'https://www.mindef.gov.sg/'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
