<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/"
          ><a class="navbar-brand">Stock Trader</a></router-link
        >
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" tag="li" active-class="active">
            <a>Portfolio</a>
          </router-link>
          <router-link to="/stock" tag="li" active-class="active">
            <a>Stock</a>
          </router-link>
        </ul>
        <strong class="navbar-text navbar-right"
          >funds:{{ funds | currency }}
        </strong>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="endDay">end day</a></li>
          <li
            class="dropdown"
            :class="{ open: isOpened }"
            @click="isOpened = !isOpened"
          >
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Save/Load <span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="loadData">Load</a></li>
              <li><a href="#" @click="saveData">Save</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";
export default Vue.extend({
  data: () => ({
    isOpened: false
  }),
  computed: {
    funds() {
      return this.$store.getters["profile/getFunds"];
    }
  },
  methods: {
    endDay() {
      return this.$store.dispatch("stocks/randomizeStocks");
    },
    saveData() {
      const data = {
        orders: this.$store.getters["profile/getOrders"],
        funds: this.$store.getters["profile/getFunds"]
      };
      axios
        .put("http://localhost:3000/data", data)
        .then(res => {
          console.log(res);
        })
        .catch(e => console.log(e));
    },
    loadData() {
      this.$store.dispatch("loadStocks");
    }
  }
});
</script>
