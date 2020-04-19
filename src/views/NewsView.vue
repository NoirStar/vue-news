<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" v-bind:key=item.id class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{item.points}}
        </div>
        <!-- 기타 정보 영역 -->
        <a v-bind:href="item.url">{{ item.title }}</a>
        <small>
          {{ item.time_ago }} by 
          <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  created() {
    this.$store.dispatch('FETCH_NEWS'); 
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: baseline;
  border-bottom: 1px solid #eee;
}


</style>