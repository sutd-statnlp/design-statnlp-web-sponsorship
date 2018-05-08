<template>
  <div class="mx-auto chart-circle chart-circle-xs">
    <div class="chart-circle-value">{{percent}}%</div>
  </div>
</template>

<script>
export default {
  name: 'CircleProgress',
  props: {
    percentValue: {
      default: 0.8
    },
    percent: {
      default: 80
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    $(this.$el).circleProgress({
      value: this.percentValue,
      thickness: 3,
      fill: {
        color: tabler.colors['blue'] || tabler.colors.blue
      },
      size: 40,
      startAngle: -Math.PI / 4 * 2,
      emptyFill: '#F4F4F4',
      lineCap: 'round'
    })
  }
}
</script>

<style scoped>

</style>
