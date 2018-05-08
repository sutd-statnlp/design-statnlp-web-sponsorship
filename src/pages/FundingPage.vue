<template>
  <div class="m-fund">
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12">
          <div class="mdc-card table-responsive">
            <div class="table-heading px-2 px-1 border-bottom">
              <h1 class="mdc-card__title mdc-card__title--large">Funding</h1>
            </div>
            <table class="table table-hoverable">
              <thead>
                <tr>
                  <th class="text-left">ID</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Sponsor</th>
                  <th>Used</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in funds" :key="index">
                  <td class="text-left">{{item.id}}</td>
                  <td>{{item.description}}</td>
                  <td>{{item.date}}</td>
                  <td>${{item.amount | currency}}</td>
                  <td>{{item.sponsor}}</td>
                  <td>{{item.used ? 'yes' : 'no'}}</td>
                  <td>
                    <router-link :to="'/funding/' + item.id" class="col mdc-button" data-mdc-auto-init="MDCRipple">
                      <i class="mdi mdi-eye text-blue"></i>
                    </router-link>
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
      funds: [
        {
          id: 271392321,
          description: 'Good support for StatNLP',
          date: '10 April 2018',
          amount: 2000,
          sponsor: 'NSFC',
          used: true,
          purpose: 'Support for Multimodal Deep Hybrid Representations for Language Generation from Non-textual Data'
        },
        {
          id: 923212713,
          description: 'Good support for StatNLP',
          date: '10 April 2018',
          amount: 4000,
          sponsor: 'Alibaba',
          used: false,
          purpose: 'Support for Automatic Intelligent Semantic Processing'
        },
        {
          id: 127192323,
          description: 'Good support for StatNLP',
          date: '10 April 2018',
          amount: 4000,
          sponsor: 'SGInnovate',
          purpose: 'Support for Scalable Models for Deep Semantic Information Processing'
        },
        {
          id: 719231223,
          description: 'Good support for StatNLP',
          date: '10 April 2018',
          amount: 4000,
          sponsor: 'SGInnovate',
          purpose: 'Support for Scalable Models for Deep Semantic Information Processing'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
