<template>
  <div>
    <v-layout :column="!valuesOnRight">
      <v-flex>
        <main-graph />
      </v-flex>
      <v-flex shrink :ml-4="valuesOnRight">
        <v-layout :column="valuesVertical" :align-center="!valuesVertical">
          <display-tile
            :value="formatTemperature(currentTemperature)"
            :text="$t('Temperature')"
          />
          <v-divider class="ma-3" :vertical="!valuesVertical" />
          <display-tile
            :value="currentPressure.toFixed(2) + ' bar'"
            :text="$t('Pressure')"
          />
          <v-divider class="ma-3" :vertical="!valuesVertical" />
          <display-tile
            :value="isPumpOn ? $t('pump_on') : $t('pump_off')"
            :text="$t('Pump')"
          />
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import MainGraph from "@/components/MainGraph.vue";
import DisplayTile from "@/components/DisplayTile.vue";

export default Vue.extend({
  name: "DashboardView",
  components: {
    MainGraph,
    DisplayTile,
  },
  computed: {
    ...mapGetters({
      currentTemperature: "currentTemperature",
      currentPressure: "currentPressure",
      isPumpOn: "isPumpOn",
      formatTemperature: "formatTemperature",
    }),
    valuesOnRight(): boolean {
      return this.$vuetify.breakpoint.lgAndUp;
    },
    valuesVertical(): boolean {
      return this.valuesOnRight || this.$vuetify.breakpoint.xs;
    },
  },
});
</script>
