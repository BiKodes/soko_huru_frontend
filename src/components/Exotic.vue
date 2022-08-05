<template>
    <div>
        <div class="flex justify-center text-gray-800 py-2">
            <form method="get" action="/search" class="relative mx-auto">
              <input 
                placeholder="Search ..."
                type="search"
                v-model="query"
                @change="searchProducts"
                class="peer cursor-pointer relative z-10 h-12 w-54 rounded-full border bg-transparent pl-12 outline-none focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                stroke-width="2"
             >
                <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
             </svg>
            </form>
        </div>
    </div>

    <main class="p-5 md:px-24">
        <div class="grid gap-4 grid-cols-1 md:grid-cols-3  p-5" >
             <ProductBox 
                v-for="product in products"
                :key="product.id"
                :product="product"/>
        </div>
    </main>
    
</template>

<script>

import ProductBox from './ProductBox.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "Exotic",

    data(){
        return {
            products: [],
            query: ''
        }
    },

    components: {
        ProductBox
    },

    methods: {
        
        ...mapActions([
            'getLatestProducts'
        ]), 
        
        async searchProducts(){
            console.log(this.query)
            this.products = await this.getProductByName
        }
    },
    
    computed: {
        ...mapGetters([
            'getProducts',
            'getProductByName'
        ]),

    },

    mounted(){
        this.getLatestProducts()
        this.products = this.getProducts
        document.title = 'Foods | Tamu Dishes'
        
        let uri = window.location.search.substring(1)
        let params = new URLSearchParams(uri)
        if (params.get('query')){
            this.query = params.get('query')
            this.searchProducts()
        }
        
    },
      
}
</script>
