<template>
  <div id="app" >
    <!-- ナビゲーション -->
    <HeaderItem></HeaderItem>
    <!-- ランキング -->
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderItem from './components/header/HeaderItem.vue'

export default {
  components: {
    HeaderItem
  }
}
</script>
