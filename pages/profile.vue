<template>
  <section class="container">
    <div>
      <Icon />
      <div class="introduction">
        <section>
          <h2>名前</h2>
          <p>
            中坂雄平(YuheiNakasaka)
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
            <li>web/mobileで何かを作る</li>
            <li>読書</li>
            <li>ラジオ</li>
            <li>ハロプロ</li>
          </ul>
        </section>

        <section>
          <h2>職業</h2>
          <p>Software Developer</p>
        </section>

        <section>
          <h2>説明</h2>
          <p>仕事ではRuby,Javascriptを主に使ったWebアプリケーションのフロント/サーバを作ったり。インフラはクラウドベースでAWSが主。GCPも少し。 クローラ、検索サーバ、広告サーバ、画像変換サーバ、ログ収集システムなどwebサービスでよく用いられるシステムは一通り構築経験あり。Electronを使ったデスクトップアプリ作成。ReactNativeを使ったモバイルアプリ開発。
          Imagemagick、FFmpeg、gifsicle等を用いた基本的な画像処理の知識アリ。Railsなオールドサイトをアーキテクチャから構築し直したりも得意。静的コンテンツへのCloudFrontやkeyCDN導入から認証が必要なサイトをFastlyで配信するなどの経験も有るのでCDN活用もそれなりに出来る。どちらかというと細かいライブラリやミドルウェアを作ったりするよりはアプリ等のサービスを作る方が技術がわからん人からもFeedBackを得られやすいので好き。最近はFlutter,Firebaseでのモバイルアプリ開発がメインなのでバックエンドを触ることが少なくなってきた。</p>
        </section>

        <section>
          <h2>スキル(星5)</h2>
          <ul>
            <li>Ruby ★★★★</li>
            <li>Rails ★★★★</li>
            <li>Go ★★</li>
            <li>Python ★★</li>
            <li>Javascript ★★★</li>
            <li>TypeScript ★★</li>
            <li>ReactNative ★</li>
            <li>Flutter ★★★★</li>
            <li>Electron ★</li>
            <li>AWS ★★★</li>
            <li>GCP ★</li>
            <li>Firebase ★★★</li>
          </ul>
          <p>2021/03更新</p>
        </section>

        <section>
          <h2>スキル補足</h2>
          <ul class="skill">
            <li>webは大体Ruby&amp;Railsで片付ける</li>
            <li>サーバーはAWS</li>
            <li>アプリはFlutter+Firebase</li>
            <li>フロントはJavascript/TypeScript+Vue.js</li>
            <li>機械学習系のタスクをやりたい時とAWS Lambdaを書く時はPython</li>
            <li>バイナリいじるときとかRubyに飽きた時とかはGo</li>
          </ul>
        </section>

        <section>
          <h2>運営サイト/制作物</h2>
          <ul class="works">
            <li>
              <div class="work">
                <h3><a href="https://gifmagazine.net/" target="_blank">GIFMAGAZINE</a></h3>
                <p>メディア掲載: <a href="https://jp.techcrunch.com/2019/01/30/gifmagazine-fundraising/">TechCrunch</a></p>
              </div>
            </li>
            <li>
              <div class="work">
                <h3><a href="https://gifmagazine.net/converters/teigashitsu" target="_blank">低画質画像メーカー</a></h3>
                <p>メディア掲載: <a href="https://gigazine.net/news/20170311-teigashitsu-gazou-maker/">GIGAZINE</a></p>
              </div>
            </li>
            <li>
              <div class="work">
                <h3>すしざんまいカメラ</h3>
                <p>メディア掲載: <a href="https://nlab.itmedia.co.jp/nl/articles/1909/06/news118.html">ねとらぼ</a></p>
              </div>
            </li>
            <li>
              <div class="work">
                <h3><a href="https://yuheinakasaka.github.io/marriage-ability-calc/" target="_blank">結婚偏差値診断</a></h3>
                <p>Twitterトレンド１位獲得: <a href="https://twitter.com/hashtag/%E7%B5%90%E5%A9%9A%E5%81%8F%E5%B7%AE%E5%80%A4%E8%A8%BA%E6%96%AD?src=hash">みんなの反応</a></p>
              </div>
            </li>
            <li>
              <div class="work">
                <h3><a href="https://yuheinakasaka.github.io/hello-project-one/" target="_blank">ハロプロワン</a></h3>
                <p>ハロプロの全メンバーのやっているブログやSNSをまとめたサイト</p>
              </div>
            </li>
            <li>
              <div class="work">
                <h3><a href="https://yuheinakasaka.github.io/yukanya-front/" target="_blank">Juice=Juice顔診断</a></h3>
                <p>DeepLearningを使ってJuice=Juiceの誰に似ているかを診断できるサイト</p>
              </div>
            </li>
            <li>
              <div class="work">
                <h3><a href="https://razokulover.hateblo.jp/entry/2017/08/21/130000" target="_blank">RNHBFav</a></h3>
                <p>はてなブックマークのお気に入りフィードを使いやすくしたアプリ</p>
              </div>
            </li>
            <li>
              <div class="work">
                <h3><a href="https://wonderful-kepler-5018a5.netlify.com/#/" target="_blank">ポジティブおみくじ</a></h3>
                <p>大吉しか出ないおみくじ</p>
              </div>
            </li>
            <li>
              <div class="work">
                <h3><a href="https://razokulover.hateblo.jp/entry/2018/05/14/170206" target="_blank">mspeakerdeck</a></h3>
                <p>昔モバイルでみづらかったspeakerdeckをみやすくするためのサービス</p>
              </div>
            </li>
            <li>
              <div class="work">
                <h3><a href="https://github.com/YuheiNakasaka/radiorec" target="_blank">radiorec</a></h3>
                <p>ラジオ録音サーバー。A&Gとradikoだけ対応している。</p>
              </div>
            </li>
            <li>
              <div class="work">
                <h3><a href="https://github.com/YuheiNakasaka/sayhuuzoku" target="_blank">sayhuuzoku</a></h3>
                <p>風俗店っぽい名前を生成するライブラリ</p>
              </div>
            </li>
            <li>
              <div class="work">
                <h3><a href="https://github.com/YuheiNakasaka/vue-twitter-client" target="_blank">vue-twitter-client</a></h3>
                <p>Vue+Electronで作ったTwitterクライアントサンプル</p>
              </div>
            </li>
            <li>
              <div class="work">
                <h3><a href="https://github.com/YuheiNakasaka/franz-scrapbox" target="_blank">franz-scrapbox</a></h3>
                <p>FranzのScrapbox用のプラグイン</p>
              </div>
            </li>
            <li>
              <div class="work">
                <h3><a href="https://github.com/YuheiNakasaka/flutter_live_photos" target="_blank">flutter_live_photos</a></h3>
                <p>mp4からLivePhotosを作成するFlutter用のライブラリ。iOS限定。</p>
              </div>
            </li>
            <li>
              <div class="work">
                <h3><a href="https://github.com/YuheiNakasaka/flutter_ig_story" target="_blank">ig_story</a></h3>
                <p>ストーリーのUIを実現するFlutter用のライブラリ</p>
              </div>
            </li>
            <li>
              <div class="work">
                <h3><a href="https://github.com/YuheiNakasaka/ag_viewer" target="_blank">AgViewer</a></h3>
                <p>A&Gの視聴アプリ</p>
              </div>
            </li>
            <li>
              <div class="work">
                <h3><a href="https://razokulover.com/migawari/about/" target="_blank">Migawari ~しつこいセールスや勧誘を男の声で撃退~</a></h3>
                <p>Migawariはしつこい訪問販売や勧誘に困っている一人暮らしの方向けに男性のボイスを提供するアプリです。

</p>
              </div>
            </li>
            <li>
              <div class="work">
                <h3><a href="https://razokulover.com/fleet_art_editor/about/" target="_blank">Fleet Art Editor</a></h3>
                <p>Fleet Art Editor is an application for creating FleetArt using emojis and texts.</p>
              </div>
            </li>
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
        &.skill, &.hobby, &.works {
          list-style-type: disc;
          padding-left: 20px;
        }
        .work {
          p {
            font-size: 10pt;
          }
        }
      }
    }
  }
}
</style>
