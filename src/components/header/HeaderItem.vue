<template>
  <div id="head">
    <nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
      <div class="uk-navbar-center">
        <ul class="uk-navbar-nav">
          <li><a href="#">概要</a></li>
          <li>
            <a href="#">ランキング</a>
            <div class="uk-navbar-dropdown">
              <ul class="uk-nav uk-navbar-dropdown-nav">
                <li><router-link to="/">すべて</router-link></li>
                <li><a href="#">月間</a></li>
                <li><a href="#">年間</a></li>
              </ul>
            </div>
          </li>
          <li><router-link to="/form">お問い合わせ</router-link></li>
          <li><a href="#">ブログ</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<style>
.uk-navbar-nav {
  text-align: center;
}
</style>
