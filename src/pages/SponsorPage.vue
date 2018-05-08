<template>
  <div class="container">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Sponsors</h3>
        </div>
        <div class="table-responsive">
          <table class="table card-table table-vcenter text-nowrap">
            <thead>
              <tr>
                <th class="w-1">ID</th>
                <th>Name</th>
                <th>Total Amount</th>
                <th class="text-center">Percentage</th>
                <th>Type</th>
                <th class="text-center">Website</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in sponsors" :key="index">
                <td><span class="text-muted">{{item.id}}</span></td>
                <td>{{item.name}}</td>
                <td>
                  ${{item.totalAmount | currency}}
                </td>
                <td class="text-center">
                  <CircleProgress :percent="item.totalAmount/fund.total*100 | limit(2)" :percentValue="item.totalAmount/fund.total"/>
                </td>
                <td>
                  <span class="badge" :class="item.type == 'Gold' ? 'badge-warning' : 'badge-default'">{{item.type}}</span>
                </td>
                <td class="text-center">
                  <a class="icon" target="_blank" :href="item.website">
                    <i class="fe fe-globe"></i>
                  </a>
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
