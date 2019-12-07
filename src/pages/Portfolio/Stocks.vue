<template>
  <div class="col-xs-12 col-sm-6 col-md-4 equal">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">Name: {{ bayedStock.name }}</h3>
        <small
          >(price:{{ bayedStock.price }} | Quantity:
          {{ bayedStock.quantity }})</small
        >
      </div>

      <div class="panel-body">
        <div class="pull-left">
          <div class="form-group has-info" :class="warningClass">
            <app-input
              v-model="quantity"
              @warning-class="warningClass = $event"
              :mode="{ mode: 'sell', oldQuantity: bayedStock.quantity }"
            ></app-input>
          </div>
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success btn-lg"
            @click="sellOrders"
            :disabled="warningClass['has-error'] || quantity === 0"
          >
            sell
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";

import AppInput from "@/components/layout/AppInput.vue";
import { IBayedStocks, ITypeWarning, IOrder } from "@/types";
import actions from "../../store/stocks/actions";

const namespace = "profile";

@Component({
  components: {
    AppInput
  }
})
export default class Stocks extends Vue {
  @Prop({ required: true })
  bayedStock!: IBayedStocks;

  quantity: number = 0;
  warningClass: ITypeWarning = { "has-error": false, "has-success": false };

  @Action("sellStocks", { namespace }) sellStocks: any;

  sellOrders() {
    const order: IOrder = {
      stockId: this.bayedStock.id,
      quantity: this.quantity,
      stockPrice: this.bayedStock.price
    };
    this.sellStocks(order);
    this.quantity = 0;
  }
}
</script>
