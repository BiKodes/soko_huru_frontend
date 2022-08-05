<template>
        <div
          class="border border-1 border-gray-200  rounded-3xl hover:border-green-600 transition-colors bg-gray-100"
        >
          <div class="block overflow-hidden">
            <img
              :src="mainImage"
              alt=""
              class="cursor-pointer rounded-3xl hover:rotate-180 transition-transform h-72 w-full object-cover"
            />
            <hr>
            
            <div v-for="image in images" :key="image.id">
               <img 
                :src="image.get_thumbnail" 
                alt="" 
                @click="changeMainImage(image.image)">
            </div>
          </div>
  
          <div class="text-md px-6 pt-4 pb-2">
            <span class="inline-block md:px-3 py-1 pl-16 text-gray-700 mr-2 mb-2">{{ product.name }}</span>
            <router-link :to="product.get_absolute_url">
              <span class="inline-block bg-gray-300 rounded-full px-3 mr-2 py-1 text-gray-700 mb-2">
                View Details
              </span>
            </router-link>
            <span class="inline-block rounded-full px-3 py-1 text-black mb-2">
              Ksh. {{ product.price }}
            </span>
          </div>
          <div class="flex justify-between py-3 px-4">
            <button
              class="w-10 h-10 rounded-full border border-1 border-white-600 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white active:bg-purple-800 transition-colors"
              @click="addToWatchList"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            <button class="text-white bg-green-600 py-2 px-4 shadow-md hover:bg-purple-700 active:bg-purple-800 transition-colors rounded-full" 
              @click="Cart(product)">
              Add to Cart
            </button>
          </div>
        </div>

    <div
      class="fixed flex justify-between items-center left-1/2 top-16 -translate-x-1/2 z-40 shadow-xl bg-green-600 text-white py-3 px-4 rounded"
      x-show="notification.show"
      style="display: none"
    >
      <span x-text="notification.message"></span>
      <button
        class="w-6 h-6 ml-4 flex justify-center items-center rounded-full transition-colors hover:bg-black/20"
        @click="notification.show = false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

  
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'ProductBox',

    props: {
        product: Object
    },

    data(){
      return {
        cartItems: [],
        notification: {
            show: false,
            message: null
        },
        timeout: null,
        mainImage: '{{ product.get_thumbnail }}',
        images: [
            {{ imagesstring|safe }}
          ]
          
      }
    },
  
    methods: {

      ...mapActions([
        'addToCart',
        'addToWatchList'
        ]),

      changeMainImage(image){
        this.mainImage = image;
      },

      Cart(item) {
          
          item.quantity = 1;

          this.addToCart(item)
          this.showNotification(`The Item was successfully added into your cart`)

      },

      showNotification(message) {
          this.notification.show = true;
          this.notification.message = message;
          alert(this.notification.message)
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
              this.notification.show = false;
          }, 3000)
      },

    },

}
</script>