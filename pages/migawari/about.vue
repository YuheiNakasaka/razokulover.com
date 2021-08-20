<template>
  <section class="container">
    <div class="section">
      <div class="icon">
        <img src="~/assets/migawari_app_icon.png" alt="main icon"/>
      </div>

      <h1>Migawari ~しつこいセールスや勧誘を男の声で撃退~</h1>

      <p>
        Migawariはしつこい訪問販売や勧誘に困っている一人暮らしの方向けに男性のボイスを提供するアプリです。
      </p>

      <p>
      「しつこいセールスを強く追い払えない」

      「女性だとナメてかかってくる」

      「出前の配達員に女性の一人暮らしであることを悟られたく無い」

      等の場合に使うと有効です。


      使い方は簡単。アプリを開きインターホンに近づけ、相手の返答に合ったボイスを選択し再生するだけです。


      ボイスのリクエストがある場合は[設定] > [ボイスリクエスト]からご連絡ください。
      </p>

      <p>
      ■注意

      ・このボイスを使っても勧誘を100%追い払える訳ではありません

      ・このアプリを使ってトラブルが発生しても一切責任は追えません
      </p>

      <div class="dl-icons">
        <div class="dl-icon">
          <a href="https://apps.apple.com/bg/app/id1546572807" target="_blank"><img src="~/assets/apple_dl_icon.svg" alt="main icon" class="apple"/></a>
        </div>
        <div class="dl-icon">
          <a href="https://play.google.com/store/apps/details?id=com.razokulover.sales_migawari&amp;hl=ja" target="_blank"><img src="~/assets/google-play-badge.png" alt="main icon" class="android"/></a>
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
        title: 'Migawari ~しつこいセールスや勧誘を男の声で撃退~',
        description: 'Migawariはしつこい訪問販売や勧誘に困っている一人暮らしの方向けに男性のボイスを提供するアプリです。',
        type: 'website',
        url: 'https://razokulover.com/migawari/about',
        image: 'https://github.com/YuheiNakasaka/razokulover.com/raw/master/assets/migawari_app_icon.png',
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
