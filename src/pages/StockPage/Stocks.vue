<template>
  <div class="col-xs-12 col-sm-6 col-md-4 equal">
    <div class="panel panel-success">
      <div class="panel-heading">
        Name: {{ stock.name }}
        <small>(price:{{ stock.price }})</small>
      </div>

      <div class="panel-body">
        <div class="pull-left">
          <div class="form-group has-info" :class="warningClass">
            <app-input
              v-model="quantity"
              @warning-class="warningClass = $event"
            ></app-input>
          </div>
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success btn-lg"
            @click="orderStock"
            :disabled="warningClass['has-error']"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { IStocks, ITypeWarning, IOrder } from "@/types";
import AppInput from "@/components/layout/AppInput.vue";

const namespace = "profile";

@Component({
  components: {
    AppInput
  }
})
export default class Stocks extends Vue {
  @Prop({ required: true })
  stock!: IStocks;
  quantity: number = 0;
  warningClass: ITypeWarning = { "has-error": false, "has-success": false };

  @Action("buyStocks", { namespace }) buyStocks: any;

  orderStock() {
    const order: IOrder = {
      stockId: this.stock.id,
      quantity: this.quantity,
      stockPrice: this.stock.price
    };
    this.buyStocks(order);
  }
}
</script>
