<template>
  <div>
    <label
      class="control-label"
      for="inputWarning"
      v-if="inputWarnings['has-error'] && !notInteger"
      >text is for bidden</label
    >
    <label class="control-label" for="inputWarning" v-else-if="notInteger"
      >float numbers is forbidden</label
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
import { ITypeWarning } from "@/types";
@Component
export default class AppInput extends Vue {
  @Prop({
    required: true
  })
  value: string;

  initialData = this.value;

  notInteger: boolean = false;

  @Emit()
  input(value: number) {
    return value;
  }

  @Emit()
  warningClass(inputWarning: ITypeWarning) {
    return inputWarning;
  }

  inputWarnings: ITypeWarning = { "has-error": false, "has-success": false };
  @Watch("initialData")
  onValue(newQuantity: string, oldQuantity: string) {
    if (isNaN(Number(newQuantity))) {
      this.inputWarnings["has-error"] = true;
      this.inputWarnings["has-success"] = false;
      this.notInteger = false;
    } else if (Number.isInteger(Number(newQuantity))) {
      this.inputWarnings["has-error"] = false;
      this.inputWarnings["has-success"] = true;
      this.notInteger = false;
      this.input(Number(newQuantity));
    } else {
      this.inputWarnings["has-error"] = true;
      this.inputWarnings["has-success"] = false;
      this.notInteger = true;
    }
    if (newQuantity.length == 0) {
      this.inputWarnings["has-error"] = false;
      this.inputWarnings["has-success"] = false;
    }

    this.warningClass(this.inputWarnings);
  }
}
</script>
