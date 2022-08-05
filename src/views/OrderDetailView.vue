<template>
  
    <main class="p-5">
      <div class="container lg:w-2/3 xl:w-2/3 mx-auto">
        <h1 class="text-3xl font-bold mb-6">Order #{{ Order.id }} Details</h1>

        <div class="bg-white p-3 rounded-md shadow-md">
          <div>
            <table class="table-sm">
              <tbody
                v-for="order in getAllOrders"
                :key="order.id"
              >

                <tr>
                  <td class="font-bold">Order #</td>
                  <td>{{ order.id }}</td>
                </tr>
                <tr>
                  <td class="font-bold">Product Quantity</td>
                  <td>{{ order.product.quantity }}</td>
                </tr>
                <tr>
                  <td class="font-bold">Order Quantity</td>
                  <td>{{ order.quantity }}</td>
                </tr>
                <tr>
                  <td class="font-bold">Order Date</td>
                  <td>{{ order.datetime() }}</td>
                </tr>
                <tr>
                  <td class="font-bold">Status</td>
                  <td>
                    <span 
                      class="bg-emerald-500 text-white p-1 rounded"
                      v-if="order.status=paid"
                    >
                      Paid
                    </span>
                  
                    <span 
                      class="bg-emerald-500 text-white p-1 rounded"
                      v-else-if="order.status=processing"
                    >
                      Processing
                    </span>

                    <span 
                      class="bg-emerald-500 text-white p-1 rounded"
                      v-else-if="order.status=cancelled"
                    >
                      Cancelled
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="font-bold">SubTotal</td>
                  <td>
                    {{ order.Total }}
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <hr class="my-5" />

          <div>
            <div class="flex gap-6">
              <div class="w-16 h-16 flex items-center border border-gray-300">
                <img src="/src/img/1_1.jpg" alt="" />
              </div>
              <div class="flex-1 flex flex-col justify-between pb-3">
                <h3 class="text-ellipsis mb-4">
                  {{ order.product.description }}
                </h3>
              </div>
              <div class="flex flex-col justify-between items-end pb-3 w-32">
                <div class="text-lg mb-4">Ksh. 17.99</div>
              </div>
            </div>
            
            <hr class="my-2" />

          </div>

          <div class="border-t border-gray-300 pt-4">
            <button type="submit" class="btn-primary flex justify-center items-center w-full py-3 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </main>
</template>

<script>

export default {
    
    name: 'OrderDetail',

}

</script>