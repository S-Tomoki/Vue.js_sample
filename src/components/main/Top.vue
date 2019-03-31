<template>
  <div id="ranking" class="uk-background-muted">
    <br>
    <div class="uk-container uk-container-xsmall">
      <div class="uk-child-width-1@m uk-grid-small uk-grid-match" uk-grid>
        <div v-for="(item, index) in top3" :key="item.name">
          <!-- ランキングTop3 -->
          <RankingTop3
            :item="item"
            :image="'@/assets/ranking' + (index+1) + '.png'"
          ></RankingTop3>
        </div>
        <div v-for="(item, index) in less4" :key="item.name">
          <!-- ランキング4位以下 -->
          <RankingLess4
            :item="item"
            :index="index+4"
          ></RankingLess4>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>
<script>
import axios from 'axios'
import RankingTop3 from '@/components/ranking/RankingTop3.vue'
import RankingLess4 from '@/components/ranking/RankingLess4.vue'

export default {
  data () {
    return {
      items: []
    }
  },
  mounted () {
    axios
      .get('https://api.stackexchange.com/2.2/tags?pagesize=51&order=desc&sort=popular&site=stackoverflow')
      .then(response => (this.items = response.data.items))
  },
  components: {
    RankingTop3,
    RankingLess4
  },
  computed: {
    top3: function () {
      return this.items.slice(0, 3)
    },
    less4: function () {
      return this.items.slice(4, 99)
    }
  }
}
</script>
