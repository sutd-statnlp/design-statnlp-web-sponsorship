<template>
  <div class="container">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Funding Transactions</h3>
        </div>
        <div class="table-responsive">
          <table class="table card-table table-vcenter text-nowrap">
            <thead>
              <tr>
                <th class="w-1">ID</th>
                <th>Description</th>
                <th>Date</th>
                <th>Amount</th>
                <th class="text-center">Percentage</th>
                <th>Usage</th>
                <th>Sponsor</th>
                <th class="text-center">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in funds" :key="index">
                <td><span class="text-muted">{{item.id}}</span></td>
                <td>{{item.description}}</td>
                <td>
                  {{item.date}}
                </td>
                <td>
                  ${{item.amount | currency}}
                </td>
                <td class="text-center">
                  <CircleProgress :percent="item.amount/fund.total*100 | limit(2)" :percentValue="item.amount/fund.total"/>
                </td>
                <td>
                  <span v-if="item.used">
                    <span class="status-icon bg-secondary"></span> Used
                  </span>
                  <span v-if="!item.used">
                    <span class="status-icon bg-success"></span> Available
                  </span>
                </td>
                <td>
                  {{item.sponsor}}
                </td>
                <td class="text-center">
                  <router-link class="icon" :to="'/funding/' + item.id">
                    <i class="fe fe-eye"></i>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CircleProgress from '@/components/CircleProgress'

export default {
  components: {
    CircleProgress
  },
  name: 'FundingPage',
  data () {
    return {
      fund: {
        total: 10800,
        used: 4482
      },
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
