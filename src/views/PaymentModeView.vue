<template>
   <div>
    <table class="flex flex-wrap lg:block w-full px-36 md:px-60  text-base">
      <thead>
        <tr>
          <th class="w-1/5 bg-gray-200 text-center border border-gray-400 font-normal px-4 py-6 sticky top-0">
            <div class="uppercase tracking-wide font-bold text-gray-700">Total Amount To Pay</div>
            <div class="mt-3">
              <span class="text-lg">Ksh</span>
              <span class="font-bold text-4xl ml-1">
                {{ this.cartTotalPrice.toFixed(2) }}
              </span>
            </div>
            <div class="mt-3">
              <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white inline-block rounded w-4/5 px-4 py-3">
                Pay Via Mpesa 
              </a>
            </div>
          </th>
        </tr>
      </thead>
      
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "PaymentModeView",

    mounted() {
        document.title = 'Mpesa | Payment'
    },

    computed: {
      ...mapGetters(['cartTotalPrice'])
    },
    
}
</script>

<style>

</style>