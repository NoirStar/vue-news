<template>
  <div>
    <p v-for="item in fetchedAsk" v-bind:key=item.id>
      <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
      <small> {{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      // 'fetchedAsk': fetchedAsk
      'fetchedAsk'
    ])
    // ...mapState({
    //   asks: state => state.asks
    // })
  },
  created() {
    //dispatch 로 action 호출
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>

<style>

</style>