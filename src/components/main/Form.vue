<template>
  <div id="info_form" class="uk-background-muted">
    <form @submit.prevent >
      <fieldset class="uk-fieldset uk-container uk-container-xsmall">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error.id">{{ error }}</li>
          </ul>
        </p>
        <div class="uk-margin">
          <input v-model="name" placeholder="名前" class="uk-input">
        </div>
        <div class="uk-margin">
          <input v-model="tel" placeholder="電話番号" class="uk-input">
        </div>
        <div class="uk-margin">
          <input v-model="zipcode" placeholder="郵便番号" class="uk-input">
        </div>
        <div class="uk-margin">
          <input v-model="address" placeholder="住所" class="uk-input">
        </div>
        <div class="uk-margin">
          <input v-model="email" placeholder="メール" class="uk-input">
        </div>
        <div class="uk-margin">
          <label for="info_single"> 独身? </label>
          <input type="checkbox" id="info_single" v-model="singled" class="uk-checkbox">
        </div>
        <label id="info_hobby_label">趣味</label>
        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
          <div id='info_hobby'>
            <label for="info_hobby_read">読書</label>
            <input type="checkbox" id="info_hobby_read" value="1" v-model="your_hobbies" class="uk-checkbox">
            <label for="info_hobby_play">遊ぶ</label>
            <input type="checkbox" id="info_hobby_play" value="2" v-model="your_hobbies" class="uk-checkbox">
            <label for="info_hobby_sex">SEX</label>
            <input type="checkbox" id="info_hobby_sex" value="3" v-model="your_hobbies" class="uk-checkbox">
          </div>
        </div>
        <label id="info_sex_label">性別</label>
        <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
          <div id='info_sex'>
            <label for="info_sex_man">男</label>
            <input type="radio" id="info_sex_man" value="1" v-model="sex" class="uk-radio">
            <label for="info_sex_female">女</label>
            <input type="radio" id="info_sex_female" value="2" v-model="sex" class="uk-radio">
            <label for="info_sex_unknow">不明</label>
            <input type="radio" id="info_sex_unknow" value="3" v-model="sex" class="uk-radio">
          </div>
        </div>
        <label id="info_select_prefecture">都道府県</label>
        <div class="uk-margin">
          <div id='info_prefecture'>
            <select v-model="selected" class="uk-select">
              <option v-for="prefecture in prefectures" v-bind:value="prefecture.value" v-bind:key="prefecture.id">
                {{ prefecture.text }}
              </option>
            </select>
          </div>
        </div>
        <div class="uk-margin">
          <label id="info_biko_label">備考</label>
          <button id="info_biko_add" @click="add_biko" class="uk-button uk-button-primary">備考を追加</button>
          <div id='info_biko'>
            <biko
              v-for="(biko, index) in bikos"
              v-bind:key="biko.id"
              v-bind:biko="biko"
              v-on:remove="bikos.splice(index, 1)"
            ></biko>
          </div>
        </div>
        <div class="uk-margin">
          <button id="info_biko_submit" @click="form_post" class="uk-button uk-button-primary">決定</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
import biko from './Form_biko.vue'

export default {
  data () {
    return {
      errors: [],
      name: '',
      tel: '',
      zipcode: '',
      address: '',
      email: '',
      singled: false,
      your_hobbies: [],
      sex: '1',
      selected: '',
      prefectures: [
        { text: '東京', value: '1' },
        { text: '北海道', value: '2' },
        { text: '沖縄', value: '3' }
      ],
      newBiko: '',
      bikos: [
        {
          id: 1,
          text: ''
        }
      ],
      nextBikoId: 2
    }
  },
  components: {
    biko
  },
  // ボタンクリック時に配列に要素を追加
  methods: {
    checkForm: function (e) {
      if (this.name && this.tel) {
        this.errors = []
        return true
      }

      this.errors = []

      if (!this.name) {
        this.errors.push('Name required.')
      }
      if (!this.tel) {
        this.errors.push('Age required.')
      }

      e.preventDefault()
    },
    add_biko: function (event) {
      // メソッド内の `this` は、 Vue インスタンスを参照します
      this.bikos.push({
        id: this.nextBikoId++,
        title: this.newBiko
      })
      this.newBiko = ''
    },
    form_post: function (event) {
      if (!this.checkForm(event)) {
        return
      }
      var params = new URLSearchParams()
      params.append('name', this.name)
      params.append('tel', this.tel)
      params.append('zipcode', this.zipcode)
      params.append('address', this.address)
      params.append('email', this.email)
      params.append('singled', this.singled)
      params.append('your_hobbies', this.your_hobbies)
      params.append('sex', this.sex)
      params.append('selected', this.selected)
      params.append('bikos', this.bikos)
      axios.post('/foo', params)
    }
  }
}
</script>
