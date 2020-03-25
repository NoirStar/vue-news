<template>
  <div>
    <p v-for="comment in itemList.comments" v-bind:key="comment.id">{{ comment.content }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    itemList() {
      return this.$store.state.items;
    }
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEMS',id);
  }
}
</script>

<style>

</style>