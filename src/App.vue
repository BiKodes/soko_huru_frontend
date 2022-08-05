<template>
   <div
    class="w-full min-h-screen font-sans text-gray-900 bg-gradient-to-br from-transparent to-green-100"
    
  >
    <Navbar/>
    <div>
      <div :class="{'is-loading': getIsLoading }"></div>
    </div>
    <router-view></router-view>
  </div>
  
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    Navbar
  },
  data(){
    return {
      cart: {
        items: []
      }
    }
  },

  methods: {
    ...mapMutations([
      'INITIALIZE_STORE'
    ])
  },

  computed: {
    ...mapGetters([
      'getToken',
      'getIsLoading'
    ])
  },

  beforeCreate(){
    this.INITIALIZE_STORE

    const token = this.getToken

    if(token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
        axios.defaults.headers.common['Authorization'] = ""
    }
  },

  mounted(){
    this.cart = this.$store.state.cart
  }
}
</script>