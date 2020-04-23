
import ListView from './ListView.vue'
import bus from '../utils/bus.js'

export default function CreateListView(name) {
    return {
        // 재사용할 컴포넌트 옵션
        name,
        created() {
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_LIST', this.$route.name)
              .then(() => {
                console.log('fetched');
                bus.$emit('end:spinner');
              })
              .catch(e => console.log(e));
        },
        render(createElement) {
            return createElement(ListView);
        }

    }
}