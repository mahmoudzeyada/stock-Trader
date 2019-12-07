<template>
  <div>
    <label
      class="control-label"
      for="inputWarning"
      v-if="
        inputWarnings['has-error'] &&
          !notRightNum &&
          !notBuyableNum &&
          !notSellableNum
      "
      >text is for bidden</label
    >
    <label class="control-label" for="inputWarning" v-else-if="notRightNum"
      >logical number is required</label
    >
    <label class="control-label" for="inputWarning" v-else-if="notBuyableNum"
      >you do not have enough funds</label
    >
    <label class="control-label" for="inputWarning" v-else-if="notSellableNum"
      >you do not have enough stocks</label
    >
    <label class="control-label" for="inputWarning" v-else
      >enter the quantity</label
    >
    <input class="form-control" placeholder="Quantity" v-model="initialData" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch, Emit } from "vue-property-decorator";
import { ITypeWarning, IModePayload } from "@/types";
import { Getter } from "vuex-class";

const namespace = "profile";

@Component
export default class AppInput extends Vue {
  @Prop({
    required: true
  })
  value: string | number;

  @Prop({
    required: false
  })
  mode: IModePayload;

  @Getter("getFunds", { namespace }) getFunds: number;

  initialData = this.value;

  notRightNum: boolean = false;

  notBuyableNum: boolean = false;
  notSellableNum: boolean = false;
  @Emit()
  input(value: number) {
    return value;
  }

  @Emit()
  warningClass(inputWarning: ITypeWarning) {
    return inputWarning;
  }

  @Watch("value")
  onValue(newValue: number, oldQuantity: number) {
    this.initialData = newValue;
  }

  inputWarnings: ITypeWarning = { "has-error": false, "has-success": false };
  @Watch("initialData")
  onInitialData(newQuantity: string, oldQuantity: string) {
    const res = this.checkInput(newQuantity);
    if (res) {
      this.input(parseInt(newQuantity));
    }
  }

  checkBuyingStocks(quantity: number, stockPrice: number): boolean {
    const fund = this.getFunds;
    if (fund === 0) {
      return false;
    } else if (fund < quantity * stockPrice) {
      return false;
    }
    return true;
  }

  checkSellingStocks(oldQuantity: number, newQuantity: number): boolean {
    console.log(newQuantity, oldQuantity);
    if (newQuantity > oldQuantity) {
      return false;
    }
    return true;
  }

  checkInput(newQuantity: string): boolean {
    this.inputWarnings["has-error"] = false;
    this.inputWarnings["has-success"] = false;
    this.notRightNum = false;
    this.notBuyableNum = false;
    this.notSellableNum = false;
    const num = Number(newQuantity);

    if (isNaN(num)) {
      this.inputWarnings["has-error"] = true;
    } else if (!Number.isInteger(num) || num <= 0) {
      this.inputWarnings["has-error"] = true;
      this.notRightNum = true;
    } else if (this.mode.mode == "buy") {
      const res = this.checkBuyingStocks(num, this.mode.stockPrice as number);
      this.notBuyableNum = this.inputWarnings["has-error"] = !res;
      this.inputWarnings["has-success"] = res;
      this.warningClass(this.inputWarnings);
      return res;
    } else if (this.mode.mode == "sell") {
      const res = this.checkSellingStocks(this.mode.oldQuantity as number, num);
      this.notSellableNum = this.inputWarnings["has-error"] = !res;
      this.inputWarnings["has-success"] = res;
      this.warningClass(this.inputWarnings);
      return res;
    }
    this.warningClass(this.inputWarnings);
    return false;
  }
}
</script>
