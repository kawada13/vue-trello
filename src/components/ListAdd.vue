<template>
  <form :class="classList" @submit.prevent="addList">
    <input 
      type="text"
      v-model="title"
      class="text-input"
      placeholder="Add new List"
      @focusin="startEditing"
      @focusout="finishEditing"
      >
      <button type="submit" class="add-button" v-if="isEditing || titleExist">
        Add
      </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      isEditing: false,
    }
  },
  methods: {
    addList() {
      this.$store.dispatch('addlist', {title: this.title})
      this.title = ''
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
      const classList = ['addlist']
      if (this.isEditing) {
        classList.push('active')
      }

      if (this.titleExist) {
        classList.push('addable')
      }
      return classList
    },

    titleExist() {
      return this.title.length > 0
    }
},
}
</script>