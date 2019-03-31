<template>
  <div id="Details" class="uk-background-muted">
    <div class="uk-container uk-container-xsmall">
      <div v-for="(item) in items" :key="item.title">
        <a :href="item.url">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      items: []
    }
  },
  mounted () {
    axios
      .get('https://qiita.com/api/v2/items', {
        // クエリパラメータを指定する
        params: {
          page: 1,
          per_page: 10,
          // thisがないとNG
          query: this.$route.params.tag
        }
      })
      .then(response => (this.items = response.data))
  }
}
</script>
