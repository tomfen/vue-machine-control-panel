<template>
  <v-app>
    <v-app-bar
      clipped-left
      color="primary"
      style="background: linear-gradient(315deg, rgb(0 0 0 / 25%), transparent)"
      app
      dark
      :hide-on-scroll="$vuetify.breakpoint.xsOnly"
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click="drawer = true"
      />
      <v-app-bar-title>Task</v-app-bar-title>
      <v-spacer />
      <ThemeSwitch />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
      :permanent="$vuetify.breakpoint.mdAndUp"
      :mini-variant="$vuetify.breakpoint.mdOnly"
      :expand-on-hover="$vuetify.breakpoint.mdOnly"
    >
      <v-list>
        <v-list-item
          v-for="({ icon, text, to }, i) in menuItems"
          :key="i"
          :to="{ name: to }"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import ThemeSwitch from "./components/ThemeSwitch.vue";
import VueI18n from "vue-i18n";

interface MenuItem {
  text: VueI18n.TranslateResult;
  icon: string;
  to: string;
}

export default Vue.extend({
  name: "MainView",
  components: { ThemeSwitch },
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    menuItems(): Array<MenuItem> {
      return [
        {
          text: this.$t("Dashboard"),
          icon: "mdi-view-dashboard",
          to: "dashboard",
        },
        {
          text: this.$t("Settings"),
          icon: "mdi-cog",
          to: "settings",
        },
      ];
    },
  },
});
</script>

<style lang="scss">
.v-toolbar__content .v-app-bar-title__content {
  min-width: fit-content;
}
</style>
