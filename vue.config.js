const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true,
      enableBridge: false,
    },
    pwa: {
      name: "Task",
      themeColor: "#119",
      msTileColor: "#000000",
      appleMobileWebAppCapable: "yes",
      appleMobileWebAppStatusBarStyle: "black",

      // configure the workbox plugin
      workboxPluginMode: "InjectManifest",
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: "dev/sw.js",
        // ...other Workbox options...
      },
    },
  },
});
