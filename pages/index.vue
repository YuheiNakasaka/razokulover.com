<template>
  <no-ssr>
    <section class="container">
      <div>
        <Icon />
        <h1 class="title">
          razokulover
        </h1>
        <nav>
          <ul class="links">
            <li><a href="/profile">Profile</a></li>
            <li><a href="https://twitter.com/razokulover" target="_blank" rel="noopener">Twitter</a></li>
            <li><a href="https://www.facebook.com/YuheiNakasaka" target="_blank" rel="noopener">Facebook</a></li>
            <li><a href="https://razokulover.hateblo.jp/" target="_blank" rel="noopener">Blog</a></li>
            <li><a href="https://github.com/YuheiNakasaka" target="_blank" rel="noopener">GitHub</a></li>
          </ul>
        </nav>
      </div>
    </section>
  </no-ssr>
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
  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 3em;
    color: #35495e;
    letter-spacing: 1px;
  }
  .links {
    padding: 15px 0 0 0;
    list-style: none;
    li {
      margin-top: 10px;
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
