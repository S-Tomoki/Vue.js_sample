<template>
  <div class="uk-card uk-card-default">
    <div class="uk-grid-small uk-flex-middle" uk-grid>
      <div class="uk-width-expand">
        <h3 class="uk-card-title uk-margin-remove-bottom">
          <span class="uk-label">{{ index }}</span>
          <br>
          {{ item.name }}
        </h3>
        <p class="uk-text-meta uk-margin-remove-top">{{ item.count }}</p>
      </div>
    </div>
    <router-link :to="{ name: 'Tag', params: { tag: item.name }}"></router-link>
  </div>
</template>
<script>
export default {
  props: {
    item: Object,
    index: 0
  }
}
</script>
<style>
.uk-card {
    position: relative;
    z-index: 1; /* 必要であればリンク要素の重なりのベース順序指定 */
}
.uk-card a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-indent:-999px;
    z-index: 2; /* 必要であればリンク要素の重なりのベース順序指定 */
}
.uk-card:hover {
    filter:alpha(opacity=70);/* IE 6,7*/
    -ms-filter: "alpha(opacity=70)";/* IE 8,9 */
    -moz-opacity:0.7;/* FF , Netscape */
    -khtml-opacity: 0.7;/* Safari 1.x */
    opacity:0.7;
    zoom:1;/*IE*/
}
</style>
