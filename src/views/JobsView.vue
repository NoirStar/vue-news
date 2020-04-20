<template>
  <div>
    <ul class="jobs-list">
      <li class="post" v-for="item in this.$store.state.jobs" v-bind:key="item.id">
        <a :href="item.url"> {{ item.title }}</a>
      </li>
    </ul>
    <!-- <p v-for="item in this.$store.state.jobs" v-bind:key="item.id">
      <a :href="item.url"> {{ item.title }}</a>
      <small>  {{ item.time_ago }} by {{ item.domain }}</small>
    </p> -->
  </div>
</template>

<script>

export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style scoped>

.jobs-list {
  margin: 0;
  padding: 0;
}

.post {
  display: flex;
}

</style>