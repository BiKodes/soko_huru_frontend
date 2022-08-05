<template>
  <div  class="flex justify-end items-center">
    <h1 class="title">Thank you</h1>

    <p>Your order will be processed within 40 mins</p>
  </div>
</template>

<script>
export default {
    name: 'SuccessView',

    mounted() {
        document.title = 'Success | Food'
    },
}
</script>