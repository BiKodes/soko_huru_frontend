<template>
    
    <main class="p-5">
        <div class="grid gap-8 grig-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5" >
            <div>
                <h2 class="flex items-center">{{ getCategories.name }}</h2>
            </div>

        <ProductBox 
            v-for="product in getCategories.products"
            :key="product.id"
            :product="product"/>

      </div>
    </main>

</template>

<script>
import ProductBox from './ProductBox.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "Category",

    components: {
        ProductBox
    },

    computed:{
        ...mapGetters(['getCategories'])
    },
    
    methods: {
        ...mapActions(['fetchCategory'])
    },

    mounted(){
        this.fetchCategory(this.$route.params.category_slug)
    },

    watch: {
        $route(to){
            console.log("watcher")
            if (to.name === 'Category'){
                this.fetchCategory(this.$route.params.category_slug)
            }
        }
    }


}
</script>

