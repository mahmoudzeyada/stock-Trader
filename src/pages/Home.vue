<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Trade or View your Portfolio</h1>
      <h6>You may Save & Load your Data</h6>
      <h6>Click on 'End Day' to begin a New Day!</h6>
      <hr />
      <p>Your Funds: {{ funds | currency }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    funds() {
      return this.$store.getters["profile/getFunds"];
    }
  }
});
</script>
