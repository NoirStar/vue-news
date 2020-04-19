import { fetchNewsList, fetchAsksList, fetchJobsList, fetchUserInfo, fetchItemsList }  from '../api/index.js'

export default {

    FETCH_NEWS({ commit }) {
        fetchNewsList()
            .then(({ data }) => commit('SET_NEWS',data))
            .catch(e => console.log(e))
    },
    FETCH_ASKS({ commit }) {
        fetchAsksList()
            .then(({ data }) => commit('SET_ASKS',data))
            .catch(e => console.log(e))
    },
    FETCH_JOBS({ commit }) {  // context.commit
        fetchJobsList() // response.data
            .then(( { data }) => commit('SET_JOBS',data))
            .catch(e => console.log(e))
    },
    FETCH_USERS({ commit },userName) {
        fetchUserInfo(userName)
            .then(({ data }) => commit('SET_USERS',data))
            .catch(e => console.log(e))
    },
    FETCH_ITEMS({ commit },id) {
        fetchItemsList(id)
            .then(({ data }) => commit('SET_ITEMS',data))
            .catch(e => console.log(e))
    }
}