<template>

    <main class="p-5">
      <div class="container lg:w-2/3 xl:w-2/3 mx-auto">
        <h1 class="text-3xl font-bold mb-6">Your Watchlist</h1>

        <div
          v-for="product in getWatchingItems"
          :key="product.id"  
          class="bg-white p-4 rounded-lg shadow"
        >
          <div>
            
            <div class="flex flex-col sm:flex-row items-center gap-4">
              <img 
                :src="product.get_thumbnail"
                class="w-36" alt="" />
              <div class="flex flex-col justify-between">
                <div class="flex justify-between mb-3">
                  <h3> 
                    {{ product.description }}
                  </h3>
                  <span class="text-lg font-semibold">
                    Ksh.{{ product.price }}
                  </span>
                </div>
                <div class="flex justify-end items-center">
                  <a
                    href="#"
                    @click.prevent="removeFromWatchList(product)"
                    class="text-purple-600 hover:text-purple-500"
                    >Remove</a
                  >
                </div>
              </div>
            </div>
            
            <hr class="my-5" />
          </div>
        </div>
       
      </div>
    </main>
  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "WatchListView",

    props: {
        product: Object
    },

    methods: {

      ...mapActions([
        'addToWatchList',
        'removeFromWatchList'
      ]),

    },

    computed: {
      ...mapGetters([
        'getWatchingItems'
      ])
    }


}
</script>