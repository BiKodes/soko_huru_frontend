<template>
   <main class="p-5">
      <div class="container lg:w-2/3 xl:w-2/3 mx-auto">
        <h1 class="text-3xl font-bold mb-6">Your Cart Items</h1>

        <div class="bg-white p-4 rounded-lg shadow">
          <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full" v-if="cartTotalLength">
                        <thead class="bg-white border-b" >
                          <tr>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Product
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Price
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Quantity
                            </th>
                            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Total
                            </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>

                          <CartItem
                            v-for="item, index in getCartItems"
                            :key="index"
                            :initialItem="item"
                             v-on:removeFromCart="removeFromCart"/>

                        </tbody>
                      </table>

                      <p v-else>You don't have any product in your cart...</p>
            
                    </div>

                    <hr>
                    <div class="border-t border-gray-300 pt-4">
                      <div class="flex justify-between">
                        <span class="font-semibold">Subtotal</span>
                        <span class="text-xl">Ksh{{ this.cartTotalPrice.toFixed(2) }}</span>
                      </div>
                      <p class="text-gray-500 mb-6">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <hr>

                      <button
                        class="flex justify-center items-center h-13 px-7 mt-4 font-medium text-white bg-green rounded-xl hover:shadow-primary transition-shadow duration-300 whitespace-nowrap"
                      >
                        <router-link to="/cart/checkout" >
                          Proceed to Checkout
                        </router-link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
            
      </div>
     
    </main>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Cart",

  components: {
    CartItem
  },

  data(){
    return {
      cart: {
        items: []
      }
    }
  },

  methods: {

    ...mapActions([
      'removeFromCart'
    ]),

    userAuth(){
      $store.state.isAuthenticated
    }

  },

  computed: {
    ...mapGetters([
      'cartTotalPrice',
      'getCartItems'
    ]),

    cartTotalLength(){
      return this.getCartItems.reduce((acc, curVal) => {
        return acc += curVal.quantity
      }, 0)
    },

    

  },

  mounted(){
    this.cart = this.$store.state.cart

    document.title = 'Shopping | Tamu Dishes'
  },
  
}
</script>
