<template>
  <div>
    <div class="row">
      <stocks
        v-for="bayedStock in getOrders"
        :key="bayedStock.id"
        :bayedStock="bayedStock"
      ></stocks>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Stocks from "./Stocks.vue";
import { Action, Getter } from "vuex-class";
import { IBayedStocks } from "../../types";

const namespace: string = "profile";
@Component({
  components: {
    Stocks
  }
})
export default class Stock extends Vue {
  @Getter("getOrders", { namespace }) getOrders: any;
}
</script>
<style scoped></style>
