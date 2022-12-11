<template>
  <v-switch
    v-model="$vuetify.theme.dark"
    :class="$vuetify.theme.dark ? 'moon' : 'sun'"
    inset
    hide-details
    dark
  />
</template>

<style lang="scss">
.moon {
  .v-input--switch__thumb {
    background: radial-gradient(circle at 10% 40%, transparent 8px, #eee 9px);
  }
}
.sun {
  .v-input--switch__thumb {
    background: rgb(255, 248, 146);
  }
}
</style>
