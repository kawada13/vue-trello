<template>
  <div>
    <header>
      my Trello
    </header>
    <main>
      <p class="info-line">All: {{ totalCardCount }} tasks</p>
      <div class="list-index">
        <draggable class="list-index" :list="lists" @end="movingList">
          <list v-for="(item, index) in lists"
                :key="item.id"
                :title="item.title"
                :cards="item.cards"
                :listIndex="index"
                @change="movingCard"
          />
        </draggable>
        <list-add />
      </div>
    </main>
  </div>
</template>

<script>
import ListAdd from './ListAdd'
import List from './List'
import draggable from 'vuedraggable'

import { mapState } from "vuex"
export default {
  components: {
    ListAdd,
    List,
    draggable,
  },
  computed: {
    ...mapState([
      'lists'
    ]),
    totalCardCount() {
      return this.$store.getters.totalCardCount
    }
  },
  methods: {
    movingCard() {
      this.$store.dispatch('updateList', {lists: this.lists})
    },
    movingList() {
      this.$store.dispatch('updateList', {lists: this.lists})
    },
  },
}
</script>