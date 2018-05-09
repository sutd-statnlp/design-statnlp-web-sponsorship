<template>
  <div class="container">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Funding Transactions</h3>
        </div>
        <div class="table-responsive">
          <table id="tbl-funding" class="table card-table table-vcenter text-nowrap">
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
                  <a class="icon" @click="showPurpose(item.purpose)" data-toggle="modal" data-target="#mPurposeDialog">
                    <i class="fe fe-eye"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <PurposeDialog :purpose="chosenPurpose"/>
  </div>
</template>

<script>
import CircleProgress from '@/components/CircleProgress'
import PurposeDialog from '@/components/PurposeDialog'

export default {
  components: {
    CircleProgress,
    PurposeDialog
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
      ],
      chosenPurpose: ''
    }
  },
  methods: {
    showPurpose (purpose) {
      this.chosenPurpose = purpose
    }
  },
  mounted () {
    let table = $('#tbl-funding').DataTable({
      info: false,
      paging: false,
      searching: true,
      dom: 't'
    })
    $('#input-search').keyup(function () {
      table.search($(this).val()).draw()
    })
  }
}
</script>

<style scoped>

</style>
