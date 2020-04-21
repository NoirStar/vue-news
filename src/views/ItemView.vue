<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile :info="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time"> {{ 'Posted ' + fetchedItem.time_ago }} </template>
      </user-profile>
    </section>
    <section>
      <!-- 상세 정보 영역 -->
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content">
      </div>
      <!-- 질문 댓글 -->
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex' 
import UserProfile from '../components/UserProfile.vue'
export default {
  computed: {
    ...mapGetters(['fetchedItem'])
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEMS',id);
  },
  components: {
    UserProfile,
  }
}
</script>

<style scoped>

.user-container {
  padding: 0.5rem;
  display: flex;
  align-items: center;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 7px;
}
</style>