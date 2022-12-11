<template>
  <v-flex class="text-center">
    <div class="text-h4 grey--text text--darken-2">{{ text }}</div>
    <div class="text-h3">
      {{ value }}
    </div>
  </v-flex>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DisplayTile",
  props: {
    text: {
      type: String,
    },
    value: {
      type: String,
    },
  },
});
</script>
