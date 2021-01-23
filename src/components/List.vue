<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <p class="list-counter">total: {{ totalCardInList }}</p>
      <div class="deletelist" @click="removeList">×</div>
    </div>
    <draggable group="cards" :list="cards" @end="$emit('change')">
      <card v-for="(item, index) in cards"
            :body="item.body"
            :key="item.id"
            :cardIndex="index"
            :listIndex="listIndex"
      />
      <card-add :listIndex="listIndex" />
    </draggable>
  </div>
</template>

<script>
import CardAdd from './CardAdd'
import Card from './Card'
import draggable from 'vuedraggable'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    },
    cards: {
      type: Array,
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
    Card,
    CardAdd,
    draggable
  },
  computed: {
    totalCardInList() {
      return this.cards.length
    }
  },
}
</script>