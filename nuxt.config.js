module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "razokulover",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "razokulover page" },
      { hid: "og:site_name", property: "og:site_name", content: "razokulover" },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "https://razokulover.com" },
      { hid: "og:title", property: "og:title", content: "razokulover" },
      {
        hid: "og:description",
        property: "og:description",
        content: "razokulover page"
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://github.com/YuheiNakasaka/razokulover.com/raw/master/assets/razokulover-icon.png"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  modules: ["@nuxtjs/pwa"],
  workbox: {
    dev: true
  },
  mode: "universal"
};
