<template>
  <div class="info_form_biko uk-margin">
    <textarea v-model="biko.text" placeholder="add multiple lines" class="uk-select"></textarea>
    <button v-on:click="$emit('remove')">削除</button>
  </div>
</template>

<script>
export default {
  props: {
    'biko': Object
  }
}
</script>
