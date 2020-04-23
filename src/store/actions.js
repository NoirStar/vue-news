import { fetchUserInfo, fetchItemsList, fetchList }  from '../api/index.js'
import { isContext } from 'vm'

export default {

    FETCH_USERS({ commit },userName) {
        return fetchUserInfo(userName)
            .then(({ data }) => commit('SET_USERS',data))
            .catch(e => console.log(e))
    },
    FETCH_ITEMS({ commit },id) {
        return fetchItemsList(id)
            .then(({ data }) => commit('SET_ITEMS',data))
            .catch(e => console.log(e))
    },
    FETCH_LIST({commit}, pageName ) {
        return fetchList(pageName)
            .then(({ data }) => {
                commit('SET_LIST',data)
            } )
            .catch(e => console.log(e))
    },
    async FETCH_LIST({commit}, pageName ) {
        // promise를 반환하는 함수 앞에 await를 붙인다.
        const response = await fetchList(pageName);
        commit('SET_LIST',response.data);
        
    },
}