<template>
  <form :class="classList" @submit.prevent="addCardToList">
    <input v-model="body"
           type="text"
           class="text-input"
           placeholder="Add new card"
           @focusin="startEditing"
           @focusout="finishEditing"
    />
    <button type="submit" class="add-button" v-if="isEditing || bodyExist">
      Add
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      body: '',
      isEditing: false
    }
  },
  props: {
    listIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    addCardToList() {
      this.$store.dispatch('addCardToList', {body: this.body, listIndex: this.listIndex})
      this.body = ''
    },
    startEditing() {
      this.isEditing = true
    },
    finishEditing() {
      this.isEditing = false
    }
  },
  computed: {
    classList() {
      const classList = ['addcard']
      if(this.isEditing) {
        classList.push('active')
      }
      if(this.bodyExist) {
        classList.push('addable')
      }
      return classList
    },
    bodyExist() {
      return this.body.length > 0
    }
  },
}
</script>