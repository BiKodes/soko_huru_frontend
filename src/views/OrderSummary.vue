<template>

    <div class="bg-white p-3 rounded-md shadow-md">
        <table class="table table-auto w-full">
            <thead class="border-b-2">
                <tr class="text-left">
                    <th>Order</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th class="w-64">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="order in getMyOrdersList"
                :key="order.id"
                class="border-b"
                >
                <td>
                    <a
                    href="/src/order-details.html"
                    class="text-purple-600 hover:text-purple-500"
                    >
                    # {{ order.id }}
                    </a>
                </td>
                <td> {{ order.created_at }}</td>
                <td>
                    <span 
                        class="bg-emerald-500 text-white p-1 rounded" 
                        v-if="order.status.paid">
                            Paid
                    </span>
                 
                    <span 
                        class="bg-gray-500 text-white p-1 rounded" 
                        v-else-if="order.status.upaid">
                            Unpaid
                    </span>

                    <span 
                        class="bg-orange-300 text-white p-1 rounded" 
                        v-else-if="order.status.processing">
                            Processing
                    </span>

                    <span 
                        class="bg-red-500 text-white p-1 rounded"
                        v-else-if="order.status.cancelled">
                            Cancelled
                    </span>
                    
                </td>
                <td>Ksh. {{ order.paid_amount }}</td>
                <td class="flex gap-3">
                    <div>
                    <button
                        class="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 py-1 px-2 flex items-center"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                        </svg>
                        Invoice
                    </button>
                    
                    <div
                    class="fixed flex justify-center items-center left-0 top-0 bottom-0 right-0 z-10 bg-black/80"
                    >
                        <!-- Dialog -->
                        <div
                          
                            class="w-[90%] md:w-1/2 bg-white rounded-lg"
                        >
                            
                            <div
                            class="py-2 px-4 text-lg font-semibold bg-gray-100 rounded-t-lg flex items-center justify-between"
                            >
                            <h2>Export Invoice</h2>
                            <button>
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
                                    d="M6 18L18 6M6 6l12 12"
                                />
                                </svg>
                            </button>
                            </div>
                            
                            <div class="p-4">
                                Export to Pdf
                            </div>
                            <div class="p-4">
                                Export to Excel
                            </div>
                            
                            <div
                            class="py-2 px-4 text-lg flex justify-end font-semibold bg-gray-100 rounded-b-lg"
                            >
                            <button
                                class="inline-flex items-center py-1 px-3 bg-gray-300 hover:bg-opacity-95 text-gray-800 rounded-md shadow"
                            >
                                Close
                            </button>
                            </div>
                        </div>
                    </div>
                
                    </div>
                    <button class="btn-primary py-1 px-2 flex items-center">
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
                    Pay
                    </button>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'OrderSummary',
    
    methods: {

        getItemTotal(item) {
            return item.quantity * item.product.price
        },
        orderTotalLength(order) {
            return order.items.reduce((acc, curVal) => {
                return acc += curVal.quantity
            }, 0)
        },
    },

    computed: {
        ...mapGetters([
            'getMyOrdersList'
        ])
    }


}
</script>