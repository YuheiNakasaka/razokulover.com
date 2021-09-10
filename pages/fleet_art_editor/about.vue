<template>
  <section class="container">
    <div class="section">
      <div class="icon">
        <img src="~/assets/migawari_app_icon.png" alt="main icon"/>
      </div>

      <h1>Fleet Art Editor</h1>

      <p>Fleet Art Editor is an application for creating FleetArt using emojis and texts.</p>

      <p>In addition to the features of the original version of the editing editor, Fleet Art Editor has a history feature.</p>

      <p>This allows you to save your editing history for the past few projects.</p>

      <p>It is also possible to recreate from the saved history.</p>

      <p>The created fleet art can be saved directly to the camera roll. Of course, you can also share it to other SNS.</p>

      <p>If you tweet with the tag <a href="https://twitter.com/search?q=%23fleetart&amp;src=typed_query&amp;f=live" target="_blank">#fleetart</a>, you can share your fleet art with the rest of the world.</p>

      <div class="dl-icons">
        <div class="dl-icon">
          <a href="https://apps.apple.com/bg/app/id1584350360" target="_blank"><img src="~/assets/apple_dl_icon.svg" alt="main icon" class="apple"/></a>
        </div>
        <div class="dl-icon">
          <a href="https://play.google.com/store/apps/details?id=com.razokulover.fleet_art_editor&amp;hl=ja" target="_blank"><img src="~/assets/google-play-badge.png" alt="main icon" class="android"/></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      meta: {
        title: 'Fleet Art Editor',
        description: '- FleetArt with emoji and text',
        type: 'website',
        url: 'https://razokulover.com/fleet_art_editor/about',
        image: 'https://github.com/YuheiNakasaka/razokulover.com/raw/master/assets/fleet_art_editor_icon.png',
      },
    }
  },
  head () {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
      ],
    }
  },
  mounted() {
    const ua = window.navigator.userAgent.toLowerCase();
    if(ua.indexOf("iphone") !== -1){
      document.querySelector('.dl-icon .android').style["display"] = "none";
    }
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .section {
    padding: 10px;
    .icon {
      text-align: center;
      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }
    }
    .dl-icons {
      display: flex;
      justify-content: center;
      margin-top: 40px;
      .dl-icon {
        display: inline-block;
        img {
          width: 100px;
          &.apple {
            margin: 8px;
          }
          &.android {
            width: 140px;
          }
        }
      }
    }
    h1, p {
      padding: 20px 0 0 0;
    }
  }
}
</style>
