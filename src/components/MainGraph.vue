<template>
  <apex-chart type="line" :options="options" :series="series"></apex-chart>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

interface Record {
  value: number;
  timestamp: number;
}

export default Vue.extend({
  name: "DashboardView",

  computed: {
    ...mapGetters({
      temperature: "temperature",
      pressure: "pressure",
      temperatureSymbol: "temperatureSymbol",
      convertTemperature: "convertTemperature",
      formatTemperature: "formatTemperature",
    }),
    options() {
      return {
        chart: {
          toolbar: {
            show: this.$vuetify.breakpoint.smAndUp,
            tools: {
              download: false,
            },
          },
          animations: {
            enabled: false,
          },
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: [
          {
            tickAmount: this.$vuetify.breakpoint.smAndUp ? undefined : 5,
            min: 65,
            title: {
              text: this.$vuetify.breakpoint.smAndUp
                ? `${this.$t("Temperature")} [${this.temperatureSymbol}]`
                : undefined,
              style: {
                fontSize: "16px",
              },
            },
            labels: {
              formatter: (value: number) =>
                this.convertTemperature(value).toFixed(2),
            },
          },
          {
            tickAmount: this.$vuetify.breakpoint.smAndUp ? undefined : 5,
            decimalsInFloat: 2,
            min: 1,
            opposite: true,
            title: {
              text: this.$vuetify.breakpoint.smAndUp
                ? `${this.$t("Pressure")} [bar]`
                : undefined,
              style: {
                fontSize: "16px",
              },
            },
          },
        ],
        tooltip: {
          x: {
            format: "yy/MM/dd HH:mm:ss",
          },
          y: [
            {
              formatter: (value: number) => this.formatTemperature(value),
            },
            {
              formatter: (value: number) => value.toFixed(2) + " bar",
            },
          ],
        },
        theme: {
          mode: this.$vuetify.theme.dark ? "dark" : "light",
        },
      };
    },
    series() {
      return [
        {
          name: this.$t("Temperature"),
          data: this.temperature.map((x: Record) => [x.timestamp, x.value]),
        },
        {
          name: this.$t("Pressure"),
          data: this.pressure.map((x: Record) => [x.timestamp, x.value]),
        },
      ];
    },
  },
  mounted() {
    window.dispatchEvent(new Event("resize")); // because apexchart doesn't render properly in flexbox
  },
});
</script>

<style lang="scss">
.apexcharts-canvas .apexcharts-toolbar {
  z-index: unset;
}
</style>
