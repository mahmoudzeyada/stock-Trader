<template>
  <div class="container">
    <app-header></app-header>
    <div class="col-xs-12">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import AppHeader from "@/components/layout/AppHeader.vue";

@Component({
  components: { AppHeader }
})
export default class App extends Vue {}
</script>

<style>
body {
  padding: 30px;
}
</style>
