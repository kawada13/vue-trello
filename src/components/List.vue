<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
    <card-add :listIndex="listIndex" />
  </div>
</template>

<script>
import CardAdd from './CardAdd'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeList() {
      if(confirm('このリストを削除しますか？本当に')) {
        this.$store.dispatch('removelist', {listIndex: this.listIndex})
      }
    },
  },
  components: {
    CardAdd
  }
}
</script>