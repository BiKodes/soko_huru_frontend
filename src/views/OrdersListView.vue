<template>
  <main class="p-5">
      <div class="container lg:w-2/3 xl:w-2/3 mx-auto">
        <h1 class="text-3xl font-bold mb-6">My Orders</h1>
        <hr>

        <OrderSummary
          v-for="order in getMyOrdersList"
          :key="order.id"
          v-bind:order="order" 
        />

      </div>
    </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import OrderSummary from  './OrderSummary.vue'

export default {
    name: 'OrdersListView',

    components: {
      OrderSummary
    },

    methods: {
      ...mapActions([
        'getAllOrders'
      ])
    },

    computed: {
        ...mapGetters([
            'getMyOrdersList'
        ])
    },

    mounted() {
        document.title = 'Orders | List'
        this.getAllOrders()
    },
}
</script>