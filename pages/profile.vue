<template>
  <section class="container">
    <div>
      <Icon />
      <div class="introduction">
        <section>
          <h2>名前</h2>
          <p>
            中坂雄平(YuheiNakasaka)<br />
            HN: razokulover
          </p>
        </section>

        <section>
          <h2>住居</h2>
          <p>
            東京都
          </p>
        </section>

        <section>
          <h2>趣味</h2>
          <ul class="hobby">
            <li>webで何かを作る</li>
            <li>詰将棋を解く</li>
            <li>声優ラジオを聴く</li>
            <li>ハロプロ</li>
            <li>読書</li>
            <li>美術鑑賞</li>
            <li>インターネットの出会いと性に関する調査</li>
          </ul>
        </section>

        <section>
          <h2>職業</h2>
          <p>WEBエンジニア</p>
        </section>

        <section>
          <h2>説明</h2>
          <p>仕事ではRuby,Javascriptを主に使ったWebアプリケーションのフロント/サーバを作ったり。インフラはクラウドベースでAWSが主。GCPも少し。 クローラ、検索サーバ、広告サーバ、画像変換サーバ、ログ収集システムなどwebサービスでよく用いられるシステムは一通り構築経験あり。Electronを使ったデスクトップアプリ作成。ReactNativeを使ったモバイルアプリ開発。
          Imagemagick、FFmpeg、gifsicle等を用いた基本的な画像処理の知識アリ。Railsなオールドサイトをアーキテクチャから構築し直したりも得意。静的コンテンツへのCloudFrontやkeyCDN導入から認証が必要なサイトをFastlyで配信するなどの経験も有るのでCDN活用もそれなりに出来る。どちらかというと細かいライブラリやミドルウェアを作ったりするよりはアプリ等のサービスを作る方が技術がわからん人からもFeedBackを得られやすいので好き。最近は変更に耐えうるコードの設計とか複数人で効率よく開発する仕組みとか実装より少し抽象的なレイヤーに興味が移りつつある。</p>
          <p>プライベートでは<a href="http://nlab.itmedia.co.jp/nl/articles/1401/27/news095.html" target="_blank" rel="noopener">Google Adwordsで彼女を募集したり</a>、パパ活について本人たちにインタビューしたり、インターネットの出会い系文化に関する調査や記事執筆を独自で行なったりしている。</p>
          <p>読書が趣味で年間100冊くらいは読むが技術書以外の書籍も多いので興味は散らばりがち。悪意のある人が苦手。</p>
        </section>

        <section>
          <h2>スキル(星5)</h2>
          <ul>
            <li>Ruby ★★★★</li>
            <li>Rails ★★★★</li>
            <li>Javascript ★★★</li>
            <li>ReactNative ★★</li>
            <li>Electron ★★</li>
            <li>AWS ★★★</li>
            <li>GCP ★</li>
            <li>Go ★★</li>
            <li>Python ★</li>
          </ul>
        </section>

        <section>
          <h2>スキル補足</h2>
          <ul class="skill">
            <li>webは大体Ruby&amp;Railsで片付ける</li>
            <li>サーバーはAWS</li>
            <li>アプリはReactNative + ES6(+flow)</li>
            <li>フロントはJavascript+Vue.js</li>
            <li>機械学習系のタスクをやりたい時とAWS Lambdaを書く時はPython</li>
            <li>バイナリいじるときとかRubyに飽きた時とかはGo</li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import Icon from '~/components/Icon';

export default {
  components: {Icon}
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  .introduction {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    width: 85%;
    text-align: left;
    margin: 0 auto;
    section {
      margin-top: 20px;
      h2 {
        font-weight: 300;
        font-size: 2em;
        color: #35495e;
        letter-spacing: 1px;
      }
      p {
        font-size: 1em;
      }
      ul {
        padding: 0;
        list-style: none;
        &.skill, &.hobby {
          list-style-type: disc;
          padding-left: 20px;
        }
      }
    }
  }
}
</style>
