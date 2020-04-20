<template>
  <div>

    <ul class="asks-list">
      <li v-for="item in fetchedAsk" v-bind:key=item.id class="post">

        <!-- 리스트 아이템안에  -->
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="ask-title">
            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
          </p>
          <small class="link-text"> {{ item.time_ago }} by {{ item.user }}</small>
        </div>     
      </li>
    </ul>
    
    <!-- <p v-for="item in fetchedAsk" v-bind:key=item.id>
      <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
      <small> {{ item.time_ago }} by {{ item.user }}</small>
    </p> -->
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

<style scoped>
.asks-list {
  margin: 0;
  padding: 0;
}

.post {
  display: flex;
  list-style: none;
  align-items: baseline;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #42b883
}

.ask-title {
  margin: 0;
}

.link-text {
  color: #828282
}
</style>