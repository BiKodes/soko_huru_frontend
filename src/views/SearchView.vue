<template>
  <div class="flex flex-wrap items-center text-black ">
    <div>
        <h1 class="text-xl ">Search Results</h1>
        <h2 class="text-lg" v-if="products.length !== 0">Results for "{{ products = this.searchItem() }}"</h2>
        <h2 v-else-if="products.length == 0">
            <router-link to="/">
                Go back home
            </router-link>
        </h2>
    </div>
    </div>

    <div class="">
        <ProductBox
        v-for="product in getProducts"
        :key="product.id"
        :product="product"/>
    </div>
    
</template>

<script>
import ProductBox from '../components/ProductBox.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Search',

    components: {
        ProductBox
    },

    data(){
        return {
            products: []
        }
    },

    methods: {
        ...mapActions([
            'searchItem',
        ])
    },

    computed: {
        ...mapGetters([
            'getProducts'
        ])
    },

    mounted(){
        document.title = 'Search'
        this.searchItem()
    }

}
</script>

<style>

</style>