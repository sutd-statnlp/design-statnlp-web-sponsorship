<template>
  <div class="modal fade" id="mPurposeDialog" tabindex="-1" role="dialog" aria-labelledby="mPurposeDialogLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="mPurposeDialogLabel">Usage Purpose</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          {{purpose}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PurposeDialog',
  props: {
    purpose: {
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
