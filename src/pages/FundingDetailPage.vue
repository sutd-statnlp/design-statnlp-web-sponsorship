<template>
  <div class="m-funding-detail">

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
