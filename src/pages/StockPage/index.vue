<template>
  <div>
    <div class="row" v-if="!getError">
      <stocks
        v-for="stock in getFullStocks"
        :key="stock.id"
        :stock="stock"
      ></stocks>
    </div>
    <div class="row" v-else>
      <div class="col-sm-12" text-center>
        <div class="panel panel-danger">
          <div class="panel-body">
            <h3><strong>there is no stocks</strong></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Stocks from "./Stocks.vue";
import { Action, Getter } from "vuex-class";
import { IStocks } from "../../types";

const namespace: string = "stocks";
@Component({
  components: {
    Stocks
  }
})
export default class Stock extends Vue {
  @Action("fetchStocks", { namespace }) fetchStocks: any;
  @Getter("getFullStocks", { namespace }) getFullStocks!: IStocks[];
  @Getter("getError", { namespace }) getError!: boolean;

  created() {
    this.fetchStocks();
  }
}
</script>
<style scoped></style>
