<template>
  <div>
    <div class="title">{{ $t("Settings") }}</div>

    <v-radio-group
      :label="$t('temperature unit')"
      :value="temperatureUnit"
      @change="setTemperatureUnit"
    >
      <v-radio :label="$t('Celcius')" value="C" />
      <v-radio :label="$t('Fahrenheit')" value="F" />
    </v-radio-group>

    <v-select
      v-model="$i18n.locale"
      :label="$t('language')"
      :items="['en', 'pl']"
      style="max-width: 300px"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";

export default Vue.extend({
  name: "DashboardView",
  computed: {
    ...mapState(["temperatureUnit"]),
  },
  methods: {
    ...mapMutations(["setTemperatureUnit"]),
  },
});
</script>
